import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

// import pages
import Home from "./pages/home/Home";
import Student from "./pages/student/Student";
import Teachers from "./pages/teacher/Teachers";
import Attendance from "./pages/attendence/Attendance";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Roles from "./pages/roles/Roles";
import AddStudent from "./pages/addstudent/AddStudent";
import RecordAttendance from "./pages/attendence/RecordAttendance";
import Profile from "./pages/profile/Profile";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();

  // check if current page is login/signup
  const isAuthPage = location.pathname === "/signup" || location.pathname === "/login";

  // Toggle handler
  const onToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="w-full flex">
       <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeButton={false}
            closeOnClick
            rtl={false}
            theme="light"
            toastClassName={() =>
              "relative mt-5 flex bg-[#a6d9ef] p-4 rounded-lg text-gray-600 shadow-xl border border-gray-500"
            }
            bodyClassName={() => "text-sm font-medium "}
          />
      {/* نمایش sidebar فقط اگر در صفحه login/signup نیست */}
      {!isAuthPage && showSidebar && (
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

      {!isAuthPage && (
        <div className="w-1/6 lg:w-1/5 min-h-screen md:hidden sm:hidden border-r border-gray-300 bg-slate-100">
          <div className="w-1/6 lg:w-1/5 fixed">
            <Sidebar onToggleSidebar={onToggleSidebar} setShowSidebar={setShowSidebar} />
          </div>
        </div>
      )}

      <div className={isAuthPage ? "w-full" : "w-5/6 lg:w-4/5 md:w-full sm:w-full"}>
        {!isAuthPage && (
          <div className="w-full h-16 bg-slate-300 sticky z-40 top-0">
            <Topbar setShowSidebar={setShowSidebar} />
          </div>
        )}

        <div className="w-full h-fit bg-slate-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/student" element={<Student />} />
            <Route path="/teacher" element={<Teachers />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addstudent" element={<AddStudent />} />
            <Route path="/recordAttendance" element={<RecordAttendance />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
