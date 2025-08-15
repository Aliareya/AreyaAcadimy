import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../contex/UserContext";

function MenuCart({menu , setShowSidebar}) {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const {user} = useUser();
  const access = menu.roleAccess.filter((items)=>items === user.role);

  const handlenavigate = (path) =>{
    navigate(path)
    setShowSidebar(false)
  }

  return (
    <li onClick={()=>handlenavigate(menu.path)} 
      className={`${location === menu.path ? "ml-1 bg-slate-200" :""}
       {}
       text-base font-semibold list-none cursor-pointer flex gap-2 rounded-md hover:bg-gray-200 xl:py-1.5 px-2 py-2.5`}>
      <Icon
        icon={menu.icon}
        width="22"
        height="22"
        style={{ color: " #000" }}
      />
      <span className="md:text-sm">{menu.title}</span>
    </li>
  );
}

export default MenuCart;
