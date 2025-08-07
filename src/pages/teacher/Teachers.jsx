import React from "react";

const teachers = [
  {
    name: "Dr. Sarah",
    subject: "Mathematics",
    status: "Active",
    email: "sarah.johnson@academy.edu",
    phone: "+1 (555) 123-4567",
    department: "Science Department",
    students: 125,
    experience: "8 years",
  },
  {
    name: "Prof. Michael ",
    subject: "Physics",
    status: "Active",
    email: "michael.chen@academy.edu",
    phone: "+1 (555) 234-5678",
    department: "Science Department",
    students: 98,
    experience: "12 years",
  },
  {
    name: "Rodriguez",
    subject: "English Literature",
    status: "Leave",
    email: "emily.rodriguez@academy.edu",
    phone: "+1 (555) 345-6789",
    department: "Humanities Department",
    students: 76,
    experience: "5 years",
  },
  {
    name: "Emily Rodriguez",
    subject: "English Literature",
    status: "Leave",
    email: "emily.rodriguez@academy.edu",
    phone: "+1 (555) 345-6789",
    department: "Humanities Department",
    students: 76,
    experience: "5 years",
  },
];

const statusBadge = {
  Active: "bg-blue-600 text-white",
  "Leave": "bg-blue-100 text-blue-700",
};

function Teachers() {
  return (
    <div className="p-4 bp-10 sm:p-4">
      <div className="flex  sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Teachers</h1>
          <p className="text-gray-600">Manage academy teaching staff</p>
        </div>
        <button className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition">
          + Add Teacher
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search teachers..."
          className="flex-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select className="px-4 py-2 border rounded-md shadow-sm">
          <option>All Status</option>
          <option>Active</option>
          <option>On Leave</option>
        </select>
      </div>

      <div className="grid gap-6 grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
        {teachers.map((teacher, idx) => (
          <div
            key={idx}
            className="border rounded-xl shadow-sm p-4 bg-white space-y-2"
          >
            <div className="flex justify-between sm:justify-start sm:gap-3 md:justify-start md:gap-3 items-start">
              <div className=" w-10 h-10 rounded-full bg-gray-200 text-center flex items-center justify-center font-medium">
                {teacher.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <h2 className="text-lg  lg:text-sm font-semibold">{teacher.name}</h2>
                <p className="text-gray-500">{teacher.subject}</p>
              </div>
              <span
                className={`md:ml-10  sm:ml-32  px-2 py-1 text-sm rounded-full ${statusBadge[teacher.status]}`}
              >
                {teacher.status}
              </span>
            </div>

            <div className="space-y-1 text-gray-700 text-sm">
              <div>
                📧 <a href={`mailto:${teacher.email}`}>{teacher.email}</a>
              </div>
              <div>📞 {teacher.phone}</div>
              <div>🏫 {teacher.department}</div>
              <div>👩‍🎓 {teacher.students} Students</div>
            </div>

            <p className="text-sm text-gray-500">
              Experience: {teacher.experience}
            </p>

            <div className="flex gap-2">
              <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md text-sm">
                ✏️ Edit
              </button>
              <button className="px-3 py-1 bg-red-100 hover:bg-red-200 rounded-md text-sm text-red-600">
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teachers;
