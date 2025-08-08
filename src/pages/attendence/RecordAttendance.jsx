import React, { useState } from "react";

const date = new Date();
const time = date.toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});
const sampleStudents = [
  { id: 1, firstName: "John", lastName: "Doe", Course: "Physics", time: time },
  { id: 2, firstName: "Ali", lastName: "Reza", Course: "Physics", time: time },
  {
    id: 3,
    firstName: "Sara",
    lastName: "Ahmadi",
    Course: "Physics",
    time: time,
  },
];

function RecordAttendance() {
  const [attendanceData, setAttendanceData] = useState({});
  const [selectedStudent, setSelectedStudent] = useState(false);

  const handleOpenPupop = () =>{
    setSelectedStudent(true)
  }

  const handleClosePupop = () =>{
    setSelectedStudent(false)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Mark Student Attendance
      </h1>

      <div className="space-y-4">
        {sampleStudents.map((student) => (
          <li
            key={student.id}
            className={`rounded-xl border px-4 py-3 flex items-start justify-between ${
              student.status === "inactive" ? "bg-blue-50" : "bg-white"
            }`}
          >
            <div className="flex gap-4 items-start">
              <div className="sm:hidden w-10 h-10 rounded-full bg-gray-200 text-center flex items-center justify-center font-medium">
                {student.firstName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="">
                <h3 className="font-semibold">
                  {student.firstName} ({student.lastName})
                </h3>
                <div className=" flex items-center gap-4">
                  <p className="text-sm text-black">
                    <span className="text-blue-900 font-bold text-base pr-1">Subject: {" "}</span> {student?.Course || undefined}
                  </p>
                  <p className="text-sm text-black">
                    <span className="text-blue-900 font-bold text-base pr-1">ID: {" "}</span> {student?.id || undefined}
                  </p>
                  <p className="text-sm text-black">
                    <span className="text-blue-900 font-bold text-base pr-1">Time: {" "}</span> {student?.time || undefined}
                  </p>
                </div>
              </div>
            </div>
            <button
              className="text-gray-400 hover:text-black"
              onClick={() => handleOpenPupop(student)}
            >
              •••
            </button>
          </li>
        ))}
      </div>
      {/* Popup */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 relative">
            <button
              onClick={handleClosePupop}
              className="absolute top-2 right-2 text-gray-400 hover:text-black"
            >
              ✕
            </button>
            <h3 className="text-lg font-bold pb-2">{selectedStudent.name || undefined}</h3>
            <p className="text-sm text-white cursor-pointer bg-green-800 px-5 py-2 rounded-md mb-3">Present</p>
            <p className="text-sm text-white cursor-pointer bg-yellow-800 px-5 py-2 rounded-md mb-3">Absent</p>
            <p className="text-sm text-black cursor-pointer bg-gray-300 px-5 py-2 rounded-md mb-3">Late</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecordAttendance;
