import { createContext , useContext , useState } from "react";
// crete context
const StaticContext = createContext();

//static data
const Menu = [
  {title : "Dashboard" , icon:"charm:chart-bar" , path:"/"},
  {title : "Students" , icon:"lucide:users" , path:"/student"},
  {title : "Teachers" , icon:"mdi:user-outline" , path:"/teacher"},
  {title : "Attendance" , icon:"uil:notes" , path:"/attendance"},
  {title : "Enrollment" , icon:"fluent-mdl2:open-enrollment" , path:"/enrollment"},
  {title : "Add student" , icon:"cuida:user-add-outline" , path:"/addstudent"},
  {title : "Record Attendance" , icon:"cuida:user-add-outline" , path:"/recordAttendance"},
  {title : "User Roles" , icon:"oui:app-users-roles" , path:"/roles"},
  {title : "Profile" , icon:"ix:user-profile-filled" , path:"/profile"},
  {title : "Settings" , icon:"lets-icons:setting-line" , path:"/settings"},
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