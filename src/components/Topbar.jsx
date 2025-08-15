import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useUser } from "../contex/UserContext";
import { useAPI } from "../contex/ApiContext";

function Topbar({ setShowSidebar }) {
  const { user } = useUser();
  const { imageurl } = useAPI();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlesidebar = () => {
    setShowSidebar(true);
  };

  const date = new Date();
  const today = date.toDateString();

  return (
    <div className="w-full h-16 sticky top-0 z-20 px-4 bg-slate-200 border-b border-gray-400 flex items-center justify-between ">
      <div className="flex items-center gap-4">
        <button
          className="hidden md:block sm:block text-gray-700 text-2xl"
          onClick={handlesidebar}
        >
          <Icon icon="material-symbols:menu" />
        </button>

        <h1 className="text-lg font-semibold hidden md:block sm:hidden">
          Areya Acadimy
        </h1>
        <h1 className="md:hidden sm:hidden text-gray-600 font-medium">
          {today}
        </h1>
      </div>

      {/* Right - Notification + User Info */}
      <div className="flex items-center gap-1">
        {/* Notification icon */}
        <button className="relative text-gray-600 hover:text-black text-2xl mr-4">
          <Icon icon="mdi:bell-outline" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Username */}
        <span className="text-gray-700 font-medium">{user?.username}</span>

        {/* User avatar */}
        {user?.image && windowWidth > 700 ? (
          <div
            className="w-9 h-9 bg-no-repeat bg-center bg-cover rounded-full"
            style={{ backgroundImage: `url(${imageurl}${user?.image})` }}
          ></div>
        ) : (
          <div className="text-black w-7 h-7 border bg-white border-green-700 rounded-full text-sm text-center flex items-center justify-center font-bold">
            <h1>{user?.logo}</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Topbar;
