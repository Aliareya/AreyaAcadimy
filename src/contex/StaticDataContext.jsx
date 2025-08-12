import { createContext , useContext , useState } from "react";
// crete context
const StaticContext = createContext();

//static data
const Menu = [
  {title : "Dashboard" , icon:"charm:chart-bar" , path:"/" , roleAccess:["admin" , "teacher" , "student"]},
  {title : "Students" , icon:"lucide:users" , path:"/student" ,roleAccess:["admin" , "teacher" , "student"]},
  {title : "Teachers" , icon:"mdi:user-outline" , path:"/teacher" ,roleAccess:["admin" , "teacher" , "student"]},
  {title : "Attendance" , icon:"uil:notes" , path:"/attendance" , roleAccess:["admin"]},
  {title : "Enrollment" , icon:"fluent-mdl2:open-enrollment" , path:"/enrollment" ,roleAccess:["admin"]},
  {title : "Record Attendance" , icon:"cuida:user-add-outline" , path:"/recordAttendance" ,roleAccess:["teacher"]},
  {title : "User Roles" , icon:"oui:app-users-roles" , path:"/roles" ,roleAccess:["admin"]},
  {title : "Add User" , icon:"lets-icons:setting-line" , path:"/addusers", roleAccess:["admin"]},
  {title : "Add Teacher" , icon:"lets-icons:setting-line" , path:"/addteacher" ,roleAccess:["admin"] },
  {title : "Add student" , icon:"cuida:user-add-outline" , path:"/addstudent", roleAccess:["admin"]},
  {title : "Profile" , icon:"ix:user-profile-filled" , path:"/profile",roleAccess:["admin" , "teacher" , "student"]},
  {title : "Settings" , icon:"lets-icons:setting-line" , path:"/settings" ,roleAccess:["admin"]},
]



export const StaticDataProvider = ({children}) => {
  return (
    <StaticContext.Provider value={{Menu}}>
      {children}
    </StaticContext.Provider>
  )
}

export const useStaticData = () =>{
  return useContext(StaticContext);
}