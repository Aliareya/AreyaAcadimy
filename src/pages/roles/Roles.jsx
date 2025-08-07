import React, { useState } from "react";
import { Icon } from "@iconify/react";

const initialUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@academy.edu",
    role: "Admin",
    department: "Administration",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@academy.edu",
    role: "Teacher",
    department: "Science",
  },
  {
    id: 3,
    name: "Mike Wilson",
    email: "mike.wilson@academy.edu",
    role: "Student",
    department: "Grade 10",
  },
];

const roleColors = {
  Admin: "bg-red-500 text-white",
  Teacher: "bg-blue-600 text-white",
  Student: "bg-blue-500 text-white",
};

const roles = ["Admin", "Teacher", "Student"];

function Roles() {
  const [selectedStudent , setselectedStudent] = useState(false);
  const handleChangeRole = () => {
    setselectedStudent(!selectedStudent)
  }
  const [users, setUsers] = useState(initialUsers);
 

  return (
    <div className="p-4 sm:p-3">
      <h1 className="text-2xl font-bold">User Roles & Permissions</h1>
      <p className="text-gray-600 mb-6">Manage user access and permissions</p>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button className="px-4 py-2 rounded-md text-sm font-medium bg-blue-600 text-white">
          Users
        </button>
        <button className="px-4 py-2 rounded-md text-sm font-medium bg-gray-100 text-gray-900 hover:bg-gray-200">
          Roles
        </button>
        <button className="px-4 py-2 rounded-md text-sm font-medium bg-gray-100 text-gray-900 hover:bg-gray-200">
          Permissions
        </button>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-col gap-4 mb-6">
        <input
          type="text"
          placeholder="Search users..."
          className="flex-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select className="px-4 py-2 border rounded-md shadow-sm">
          <option>All Roles</option>
          {roles.map((role) => (
            <option key={role}>{role}</option>
          ))}
        </select>
      </div>

      {/* User List */}
      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex sm:flex-row items-start sm:items-center justify-between bg-white border rounded-lg px-4 py-4 shadow-sm"
          >
            <div className="flex justify-center items-center gap-3">
              <div className="sm:hidden w-10 h-10 rounded-full bg-gray-200 text-center flex items-center justify-center font-medium">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <h2 className="text-lg font-semibold">{user.name}</h2>
                <p className="text-sm text-gray-500">{user.email}</p>
                <p className="text-sm text-gray-400 mt-1">{user.department}</p>
              </div>
            </div>

            <div className="flex  sm:flex-col items-start sm:items-center gap-2 mt-3 sm:mt-0">
              <span
                className={`text-sm font-medium px-3 py-1 rounded-full ${
                  roleColors[user.role]
                }`}
              >
                {user.role}
              </span>
              <span onClick={handleChangeRole} className="w-fit flex px-3 justify-center items-center cursor-pointer hover:bg-slate-300 py-1 gap-2 rounded-lg  bg-gray-200">
                <span>Edit</span>
                <Icon
                  icon="mingcute:edit-line"
                  width="20"
                  height="20"
                  style={{ color: "#000" }}
                />
              </span>
            </div>
          </div>
        ))}
      </div>
      {selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 relative">
            <button
              // onClick={handleClosePopup}
              className="absolute top-2 right-2 text-gray-400 hover:text-black"
            >
              ✕
            </button>
            <h3 className="text-lg font-bold pb-2">Name</h3>
            <p className="text-sm text-gray-600 mb-1">Email: </p>
            <p className="text-sm text-gray-600 mb-1">Course: </p>
            <p className="text-sm text-gray-600 mb-4">Year: </p>
            <div className="flex gap-2">
              <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded-xl">Edit</button>
              <button className="bg-red-500 text-white text-sm px-3 py-1 rounded-xl">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Roles;
