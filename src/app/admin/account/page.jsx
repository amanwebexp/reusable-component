"use client";

import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const Account = () => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);

  const id = session?.user?.id;

  useEffect(() => {
    if (!id) return;

    const fetchUserData = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/users/${id}`);
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUserData();
  }, [id]);

  if (status === "loading")
    return <p className="p-6 text-gray-400">Loading session...</p>;
  if (!id)
    return <p className="p-6 text-gray-400">No user ID found in session</p>;
  if (!user) return <p className="p-6 text-gray-400">Loading user data...</p>;

  return (
    <div className="min-h-screen  p-8 text-gray-900">
      {/* Personal Info */}
      <section className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Account Information</h2>
        <div className="flex items-center gap-4 mb-4">
          <img
            src={user.image}
            alt={user.firstName}
            className="w-20 h-20 rounded-full border border-gray-300 object-cover"
          />
          <div>
            <p className="text-lg font-medium">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-sm text-gray-500">@{user.username}</p>
            <p className="text-sm text-gray-400">Role: {user.role}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          <Info label="First Name" value={user.firstName} />
          <Info label="Last Name" value={user.lastName} />
          <Info label="Gender" value={user.gender} />
          <Info label="Age" value={user.age} />
          <Info label="Birth Date" value={user.birthDate} />
          <Info label="Blood Group" value={user.bloodGroup} />
          <Info label="Eye Color" value={user.eyeColor} />
          <Info
            label="Hair"
            value={`${user.hair?.color} (${user.hair?.type})`}
          />
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Contact</h2>
        <Info label="Email" value={user.email} />
        <Info label="Phone" value={user.phone} />
      </section>

      {/* Address */}
      <section className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Address</h2>
        <p className="text-gray-700">
          {user.address?.address}, {user.address?.city}, {user.address?.state} (
          {user.address?.stateCode}) {user.address?.postalCode},{" "}
          {user.address?.country}
        </p>
      </section>

   
    </div>
  );
};

// Small reusable info component
const Info = ({ label, value }) => (
  <div>
    <p className="text-sm text-gray-500">{label}</p>
    <p className="border border-gray-200 rounded p-2 bg-gray-50 text-sm font-medium break-words">
      {value || "—"}
    </p>
  </div>
);

export default Account;
