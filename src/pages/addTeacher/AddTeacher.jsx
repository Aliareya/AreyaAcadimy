import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAPI } from "../../contex/ApiContext";
import { useUser } from "../../contex/UserContext";

function AddTeacher() {
  const navigate = useNavigate();
  const {apiUrl} = useAPI();
  const {FectUser} = useUser();
  const [loding, setLoding] = useState(false);
  const [selectUser , setSelectUser] = useState([]);

  const {register,handleSubmit,formState: { errors }} = useForm();

  const onSubmit = (data) => {
    console.log(data)
    // axios
    //   .post(`${apiUrl}/auth/register.php`, data)
    //   .then((res) => {
    //     setLoding(true);
        
    //     setTimeout(() => {
    //       toast.success(res.data.response);
    //       setLoding(false); 
    //     }, 500); 
    //   })
    //   .catch((err) => {
    //     toast.error(err.response.data.message);
    //   });

  };



  return (
    <div
      className="w-fullflex items-center px-10 py-10 sm:justify-center  lg:pr-10 md:pr-0 sm:pr-0 md:justify-center justify-end bg-slate-100 sm:px-0 "
    >
      <div className=" w-full backdrop-brightness-110 sm:backdrop-brightness-150 p-8 lg:p-5  rounded-xl sm:p-3 shadow-xl lg:my-5 md:my-7 sm:my-5 sm:mx-1">
        <h2 className="text-2xl font-bold text-center text-black mb-6">
          Add New Teacher To System
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-base sm:font-semibold sm:text-base font-medium text-gray-700">
             Full Name{" "}
              {errors.name && (
                <span className="text-sm text-red-500 mt-1">
                  ({errors.name.message})
                </span>
              )}
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-200 border-none outline-none mt-1 px-4 py-2 border rounded-md shadow-sm "
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-base sm:font-semibold sm:text-base font-medium text-gray-700">
             Phone Number{" "}
              {errors.name && (
                <span className="text-sm text-red-500 mt-1">
                  ({errors.name.message})
                </span>
              )}
            </label>
            <input
              {...register("phone", { required: "Phone is required" })}
              className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-200 border-none outline-none mt-1 px-4 py-2 border rounded-md shadow-sm "
              placeholder="Your phone number..."
            />
          </div>
          <div>
            <label className="block text-base sm:font-semibold sm:text-base font-medium text-gray-700">
             Experince{" "}
              {errors.name && (
                <span className="text-sm text-red-500 mt-1">
                  ({errors.name.message})
                </span>
              )}
            </label>
            <input
              {...register("experince")}
              className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-200 border-none outline-none mt-1 px-4 py-2 border rounded-md shadow-sm "
              placeholder="Your Experince.."
            />
          </div>
          <div>
            <label className="block text-base sm:font-semibold sm:text-base font-medium text-gray-700">
             Salary Amount{" "}
              {errors.name && (
                <span className="text-sm text-red-500 mt-1">
                  ({errors.name.message})
                </span>
              )}
            </label>
            <input
              {...register("salary")}
              className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-200 border-none outline-none mt-1 px-4 py-2 border rounded-md shadow-sm "
              placeholder="insert Salary Amount."
            />
          </div>

          <div>
            <label className="block text-base sm:font-semibold sm:text-base  font-medium text-gray-700">
              Which User{" "}
              {errors.password && (
                <span className="text-sm text-red-500 mt-1">
                  ({errors.password.message})
                </span>
              )}
            </label>
            <select className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-200 mt-1 px-4 py-2 border-none outline-none rounded-md "
             name="" id="" {...register("user_id", {
                required: "Role is required",  
              })}>
                <option value="">Select User Role</option>
                {selectUser.map((user , index)=>{
                  return (
                    <option key={index} value={user.id}>{user.name}</option>
                  )
                })}
            </select>
            
          </div>

          <div className="pb-5">
            <label className="block text-base sm:font-semibold sm:text-base  font-medium text-gray-700">
              Teacher Status{" "}
              {errors.password && (
                <span className="text-sm text-red-500 mt-1">
                  ({errors.password.message})
                </span>
              )}
            </label>
            <select className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-200 mt-1 px-4 py-2 border-none outline-none rounded-md "
             name="" id="" {...register("status", {
                required: "Status is required",  
              })}>
              <option value="">Select Status</option>
              <option value="teaching">Teaching</option>
              <option value="waiting">Waiting</option>
              <option value="leave">Leave</option>
              <option value="resign">Resign</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full mt-10 bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition duration-300"
          >
            {loding ? "Loding..." : "Register User"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTeacher;
