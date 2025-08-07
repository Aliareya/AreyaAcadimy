import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { Route, Routes } from "react-router-dom";

//import pages
import Home from "./pages/home/Home";
import Student from "./pages/student/Student";
import Teachers from "./pages/teacher/Teachers";
import Attendance from "./pages/attendence/Attendance";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Roles from "./pages/roles/Roles";
import AddStudent from "./pages/addstudent/AddStudent";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  // Toggle handler
  const onToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  if (location.pathname === "/signup" || location.pathname === "/login") {
    if (location.pathname === "/signup") {
      return <Signup />;
    } else if (location.pathname === "/login") {
      return <Login />;
    }
  }

  return (
    <div className="w-full flex ">
      {showSidebar && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden"
          onClick={onToggleSidebar}
        >
          <div
            className="h-full border-r border-gray-400 bg-white
              w-3/4 sm:w-[60%] md:w-1/3
              transform -translate-x-full
              animate-slide-in-left
              transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar onToggleSidebar={onToggleSidebar} setShowSidebar={setShowSidebar} />
          </div>
        </div>
      )}

      <div className="w-1/6 lg:w-1/5 min-h-screen md:hidden sm:hidden border-r border-gray-300 bg-slate-100">
        <div className="w-1/6 lg:w-1/5 fixed">
          <Sidebar onToggleSidebar={onToggleSidebar} setShowSidebar={setShowSidebar} />
        </div>
      </div>
      <div className="w-5/6 lg:w-4/5 md:w-full sm:w-full ">
        <div className="w-full h-16 bg-slate-300 sticky z-40 top-0">
          <Topbar setShowSidebar={setShowSidebar} />
        </div>
        <div className="w-full h-fit bg-slate-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/student" element={<Student />} />
            <Route path="/teacher" element={<Teachers />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/addstudent" element={<AddStudent />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
