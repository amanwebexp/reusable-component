"use client";
import CardComponent from "@/components/UiComponents/CardComponent";
import React from "react";
import AllUsers from "../../users/page";
import TabsDemo from "@/components/UiComponents/TabsComponent";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { TableCode } from "@/components/DataTable/Table";
import CommonLayout from "@/components/CommanLayout";

/**
 * TableComponent page.
 * Renders a card with a responsive table preview, code example, and component call.
 */

const TableComponent = () => {
  const [copied, setCopied] = useState(false);
  const [codeCopi, setCodeCopy] = useState(false);
  const [checkboxCodeInstall, setCheckboxCodeInstall] = useState(false);

  // Command to install table and pagination components
  const commandInstall = `npx shadcn@latest add table
npx shadcn@latest add pagination`;

 // Example component call for TableList
  const componentCallCode = `   <TableList
  data={list}
  columns={UserColumn(handleDeleteUser,handleEditUser)}
  length={limit}
  totalRecord={totalRecord}
  page={page}
  setPage={setPage}
/>`;


  /**
   * Handles copying the Table component code to clipboard.
   */
  const handleCopy = async () => {
    await navigator.clipboard.writeText(TableCode);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  /**
   * Handles copying the example Table component call to clipboard.
   */
  const handleComponentCode = async () => {
    await navigator.clipboard.writeText(componentCallCode);
    setCodeCopy(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCodeCopy(false), 2000);
  };

    /**
   * Handles copying the install commands to clipboard.
   */
  const handleCommandCode = async () => {
    await navigator.clipboard.writeText(commandInstall);
    setCheckboxCodeInstall(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCheckboxCodeInstall(false), 2000);
  };

  // Tabs configuration (preview, code, component call)
  const tableTabs = [
    {
      triggerTitle: "Preview",
      value: "preview",
      content: <AllUsers />,
    },
    {
      triggerTitle: "Code",
      value: "code",
      content: (
        <>
          <div className="relative">
            <Button
              onClick={handleCopy}
              className="absolute right-2 top-2 z-10"
              variant="outline"
              size="sm"
            >
              {copied ? "Copied!" : "Copy"}
            </Button>
            <SyntaxHighlighter language="javascript">
              {TableCode}
            </SyntaxHighlighter>
          </div>
        </>
      ),
    },
    {
      triggerTitle: "Component Call",
      value: "componentCall",
      content: (
        <>
          <div className="relative">
            <Button
              onClick={handleComponentCode}
              className="absolute right-2 top-2 z-10"
              variant="outline"
              size="sm"
            >
              {codeCopi ? "Copied!" : "Copy"}
            </Button>
            <SyntaxHighlighter language="javascript">
              {componentCallCode}
            </SyntaxHighlighter>
          </div>
        </>
      ),
    },
  ];

  // Card component content with description, tabs, and extra (command section)
  const cardTableContent = {
    description: "A responsive table component.",
    content: (
      <>
        <TabsDemo item={tableTabs} />
      </>
    ),
    extra: (
      <>
        <>
          Command
          <div className="relative items-center">
            <Button
              onClick={handleCommandCode}
              className="absolute right-2 top-3 z-10"
              variant="outline"
              size="sm"
            >
              {checkboxCodeInstall ? "Copied!" : "Copy"}
            </Button>
            <SyntaxHighlighter language="javascript">
              {commandInstall}
            </SyntaxHighlighter>
          </div>
        </>
      </>
    ),
  };
  return (
    <>
      <CommonLayout pageTitle={"Table With Pagignation"} />
      <CardComponent item={cardTableContent} />
    </>
  );
};

export default TableComponent;
