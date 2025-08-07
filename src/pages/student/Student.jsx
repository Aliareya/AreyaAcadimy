import React, { useState } from 'react';
import { Users, UserPlus } from 'lucide-react';

const students = [
  {
    id: 'STU001',
    name: 'John Doe',
    email: 'john.doe@email.com',
    course: 'Computer Science',
    year: '2nd Year',
    status: 'active',
  },
  {
    id: 'STU002',
    name: 'Jane Smith',
    email: 'jane.smith@email.com',
    course: 'Mathematics',
    year: '3rd Year',
    status: 'active',
  },
  {
    id: 'STU003',
    name: 'Mike Johnson',
    email: 'mike.johnson@email.com',
    course: 'Physics',
    year: '1st Year',
    status: 'inactive',
  },
  {
    id: 'STU004',
    name: 'Sarah Wilson',
    email: 'sarah.wilson@email.com',
    course: 'Chemistry',
    year: '4th Year',
    status: 'active',
  },
  {
    id: 'STU005',
    name: 'David Brown',
    email: 'david.brown@email.com',
    course: 'Biology',
    year: '2nd Year',
    status: 'active',
  },
];

export default function Student() {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleMoreClick = (student) => {
    setSelectedStudent(student);
  };

  const handleClosePopup = () => {
    setSelectedStudent(null);
  };

  return (
    <div className={` ${selectedStudent ? "" : "space-y-6"} p-4 sm:p-3`}>
      {/* Header */}
      <div className="flex justify-between sm:items-start sm:flex-col sm:gap-5 items-center mb-3">
        <div>
          <h1 className="text-2xl font-bold">Students</h1>
          <p className="text-sm text-gray-600">Manage student profiles and information</p>
        </div>
        <button className="bg-blue-600 sm:w-full sm:justify-center text-white px-4 py-2 rounded-xl flex items-center gap-2">
          <UserPlus size={16} /> Add Student
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
        <StatCard title="Total Students" value="1,234" subtitle="+12% from last month" />
        <StatCard title="Active Students" value="1,180" subtitle="95.6% of total" />
        <StatCard title="New This Month" value="45" subtitle="+8% from last month" />
        <StatCard title="Graduated" value="234" subtitle="This academic year" />
      </div>

      {/* Search and List */}
      <div className="bg-white rounded-2xl shadow p-4 sm:p-2">
        <h2 className="text-lg font-semibold mb-4">Student Directory</h2>
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search students..."
            className="w-full sm:w-96 border px-3 py-2 rounded-xl text-sm"
          />
          <button className="ml-2 text-sm px-3 py-2 border rounded-xl hover:bg-gray-100">Filter</button>
        </div>

        <ul className="space-y-2">
          {students.map((student) => (
            <li
              key={student.id}
              className={`rounded-xl border px-4 py-3 flex items-start justify-between ${
                student.status === 'inactive' ? 'bg-blue-50' : 'bg-white'
              }`}
            >
              <div className="flex gap-4 items-start">
                <div className="sm:hidden w-10 h-10 rounded-full bg-gray-200 text-center flex items-center justify-center font-medium">
                  {student.name
                    .split(' ')
                    .map(n => n[0])
                    .join('')}
                </div>
                <div>
                  <h3 className="font-semibold">
                    {student.name}{' '}
                    <span className={`text-xs ml-2 px-2 py-0.5 rounded-full ${
                      student.status === 'active'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-300 text-gray-600'
                    }`}>
                      {student.status}
                    </span>
                  </h3>
                  <p className="text-sm text-gray-600">{student.email}</p>
                  <p className="text-xs text-gray-500">
                    ID: {student.id} &nbsp;&nbsp; Course: {student.course} &nbsp;&nbsp; Year: {student.year}
                  </p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-black" onClick={() => handleMoreClick(student)}>•••</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Popup */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 relative">
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-gray-400 hover:text-black"
            >
              ✕
            </button>
            <h3 className="text-lg font-bold pb-2">{selectedStudent.name}</h3>
            <p className="text-sm text-gray-600 mb-1">Email: {selectedStudent.email}</p>
            <p className="text-sm text-gray-600 mb-1">Course: {selectedStudent.course}</p>
            <p className="text-sm text-gray-600 mb-4">Year: {selectedStudent.year}</p>
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

function StatCard({ title, value, subtitle }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow">
      <h3 className="text-lg font-semibold">{value}</h3>
      <p className="text-sm text-gray-600">{title}</p>
      <p className="text-xs text-green-500">{subtitle}</p>
    </div>
  );
}