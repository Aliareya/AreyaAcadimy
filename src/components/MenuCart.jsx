import React from "react";
import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";

function MenuCart({menu}) {
  const location = useLocation().pathname;
  return (
    <li 
      className={`${location === menu.path ? "ml-1 bg-slate-200" :""} text-base font-semibold list-none cursor-pointer flex gap-2 rounded-md hover:bg-gray-200 px-2 py-2.5`}>
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
