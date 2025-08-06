import React, { useState, useRef, useEffect } from 'react';
import { MoreVertical } from 'lucide-react';
import {
  ClipboardList,
  Users,
  BookOpen,
  ClipboardCheck,
} from 'lucide-react';


const Attendance = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [filtersApplied, setFiltersApplied] = useState(false);
  const menuRef = useRef(null);

  const teachers = ['Mr. Smith', 'Ms. Johnson', 'Dr. Brown'];
  const subjects = ['Math', 'Science', 'History'];

  const students = [
    { id: 'STU001', name: 'John Doe', email: 'john.doe@email.com', course: 'Computer Science', year: '2nd Year', status: 'Present' },
    { id: 'STU002', name: 'Jane Smith', email: 'jane.smith@email.com', course: 'Mathematics', year: '3rd Year', status: 'Absent' },
    { id: 'STU003', name: 'Mike Johnson', email: 'mike.johnson@email.com', course: 'Physics', year: '1st Year', status: 'Present' },
    { id: 'STU004', name: 'Sarah Wilson', email: 'sarah.wilson@email.com', course: 'Chemistry', year: '4th Year', status: 'Present' },
    { id: 'STU005', name: 'David Brown', email: 'david.brown@email.com', course: 'Biology', year: '2nd Year', status: 'Absent' },
  ];

  const applyFilters = () => {
    setFiltersApplied(true);
  };

  const filteredStudents = students.filter((student) => {
    if (!filtersApplied) return true;
    const teacherMatch = selectedTeacher ? student.teacher === selectedTeacher : true;
    const subjectMatch = selectedSubject ? student.subject === selectedSubject : true;
    const dateMatch = selectedDate ? student.date === selectedDate : true;
    return teacherMatch && subjectMatch && dateMatch;
  }).filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleMenu = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  const closeMenu = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setSelectedIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeMenu);
    return () => document.removeEventListener('mousedown', closeMenu);
  }, []);

  return (
    <div className="w-full p-4">
      <h1 className="text-2xl font-bold">Attendance</h1>
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 mt-10">
        <StatCard title="Total Students" value="1,234" subtitle="+12% from last month" icon={<Users />} />
        <StatCard title="Teachers" value="87" subtitle="+3% from last month" icon={<BookOpen />} />
        <StatCard title="Attendance Rate" value="94.2%" subtitle="+2.1% from last month" icon={<ClipboardCheck />} />
        <StatCard title="Active Courses" value="45" subtitle="+5% from last month" icon={<ClipboardList />} />
      </div>
      <div className="flex flex-col xl:flex-row justify-between items-center gap-4 mt-5 mb-6">
        <div className="flex flex-wrap items-center gap-3">
          <select
            className="sm:w-full border px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            value={selectedTeacher}
            onChange={(e) => setSelectedTeacher(e.target.value)}
          >
            <option value="">Select Teacher</option>
            {teachers.map((teacher, idx) => (
              <option key={idx} value={teacher}>{teacher}</option>
            ))}
          </select>

          <select
            className="sm:w-full border px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="">Select Subject</option>
            {subjects.map((subject, idx) => (
              <option key={idx} value={subject}>{subject}</option>
            ))}
          </select>

          <label className="hidden sm:block  text-sm font-semibold text-gray-700 mt-2">Select Date</label>
          <input
            type="date"
            className="border sm:w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />


          <button
            onClick={applyFilters}
            className="bg-blue-600 sm:w-full sm:mt-3 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
          >
            Filter
          </button>

          <input
            type="text"
            placeholder="Search students..."
            className="border sm:w-full rounded-md px-3 py-2 w-72 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white shadow rounded-lg">
        {filteredStudents.map((student, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-4 py-3 border-b hover:bg-gray-50 relative"
          >
            <div>
              <h2 className="font-medium text-lg">{student.name}</h2>
              <p className="text-sm text-gray-500">{student.email}</p>
              <p className="text-sm text-gray-400">{student.course} | {student.year}</p>
            </div>

            <div className="flex items-center gap-4">
              <span className={`text-sm px-3 py-1 rounded-full ${student.status === 'Present' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                {student.status}
              </span>

              <div className="relative" ref={menuRef}>
                <button onClick={() => toggleMenu(index)}>
                  <MoreVertical size={20} />
                </button>
                {selectedIndex === index && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-0 border text-sm">
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Mark Present</button>
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Mark Absent</button>
                    <button className="block w-full text-left px-4 py-2 hover:bg-red-100 text-red-600">Remove</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


function StatCard({ title, value, subtitle, icon }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow flex items-center space-x-4">
      <div className="p-2 bg-blue-100 text-blue-700 rounded-full">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{value}</h3>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-xs text-green-500">{subtitle}</p>
      </div>
    </div>
  );
}

export default Attendance;