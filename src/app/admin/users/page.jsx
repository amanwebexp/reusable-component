"use client";
import { TableList } from "@/components/DataTable/Table";
import React, { useEffect, useState } from "react";
import { UserColumn } from "./userColumn";
import { FormProvider, useForm } from "react-hook-form";
import { SelectInput } from "@/components/share/form/SelectInput";
import { LengthData, order, ShortBy } from "@/components/StaticValue";
import DeleteDialogBox from "@/components/Modal/Delete";
import CommonLayout from "@/components/CommanLayout";
import { useRouter } from "next/navigation";

const AllUsers = () => {
  // === Local State ===
  const [list, setList] = useState([]);
  const [limit, setLimit] = useState(10);
  const [totalRecord, setTotalRecord] = useState([]);
  const [page, setPage] = useState(1);
  // Delete modal state
  const [deleteOpenModal, setDeleteOpenModal] = useState(false);
  const [deleteIndexId, setDeleteIndexId] = useState(null);
  const form = useForm(); // React Hook Form instance
  const shortBY = form.watch("shortBY"); // Watch sortBy field
  const Order = form.watch("order"); // Watch order field (asc/desc)
  const router = useRouter();

  // === Fetch Users API ===
  const fetchUserData = async (
    page = 1,
    currentLimit = limit,
    sortBy = shortBY,
    orderBy = Order || "asc"
  ) => {
    try {
      const skip = (page - 1) * currentLimit; // Pagination offset
      const response = await fetch(
        `https://dummyjson.com/users?limit=${currentLimit}&skip=${skip}&value=Brown&sortBy=${sortBy}&order=${orderBy}`
      );
      const data = await response.json();
      setTotalRecord(data?.total || 0);
      setList(data?.users || []);
    } catch (error) {
      console.error("Failed to fetch users", error);
    }
  };

  // Fetch data when filters (page, limit, sort, order) change
  useEffect(() => {
    fetchUserData(page, limit, shortBY, Order);
  }, [page, limit, shortBY, Order]);

  // Watch for limit dropdown change → reset page & update limit
  useEffect(() => {
    const subscription = form.watch((value) => {
      if (value?.limit) {
        const newLimit = parseInt(value.limit);
        setLimit(newLimit);
        setPage(1);
      }
    });
    return () => subscription.unsubscribe();
  }, [form]);

  // === Delete User API ===
  const onDelete = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/users/${deleteIndexId}`,
        {
          method: "DELETE",
        }
      );
      await response.json();
      fetchUserData(page, limit, shortBY, Order);
      setDeleteOpenModal(false);
    } catch (error) {
      console.error("Failed to fetch users", error);
    }
  };

  // Open delete confirmation modal
  const handleDeleteUser = (row) => {
    setDeleteOpenModal(true);
    setDeleteIndexId(row?.original?.id);
  };

  // Close delete modal
  const deleteHandleModalClose = () => {
    setDeleteOpenModal(false);
  };

  // Redirect to edit page
  const handleEditUser = (row) => {
    router.push(`/admin/users/${row?.original?.id}`);
  };
  return (
    <>
      <div>
        <CommonLayout pageTitle={"User List"} />
        <div className="mb-2">
          <FormProvider {...form}>
            <div className="grid grid-cols-3 gap-4">
              <SelectInput
                form={form}
                name="limit"
                className="h-10 w-28"
                placeholder="Select Limit"
                options={LengthData}
              />
              <SelectInput
                form={form}
                name="shortBY"
                className="h-10 w-28"
                placeholder="Short By"
                options={ShortBy}
              />
              <SelectInput
                form={form}
                name="order"
                className="h-10 w-28"
                placeholder="Order"
                options={order}
              />
            </div>
          </FormProvider>
        </div>
        <TableList
          data={list}
          columns={UserColumn(handleDeleteUser, handleEditUser)}
          length={limit}
          totalRecord={totalRecord}
          page={page}
          setPage={setPage}
        />

        <DeleteDialogBox
          onDelete={onDelete}
          description="Are you certain you want to proceed with this deletion?"
          deleteOpenModal={deleteOpenModal}
          deleteHandleModalClose={deleteHandleModalClose}
        />
      </div>
    </>
  );
};

export default AllUsers;
