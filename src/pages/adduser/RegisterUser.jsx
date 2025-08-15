import React, { useState } from "react";
import { useForm } from "react-hook-form";
import bg from "../../assets/images/Dbg.jpg";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAPI } from "../../contex/ApiContext";
import { useUser } from "../../contex/UserContext";

function RegisterUser() {
  const navigate = useNavigate();
  const {acdimytoken} = useUser();
  const {apiUrl} = useAPI();
  const [loding, setLoding] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // http://localhost/areyaAcadimy/api/auth/register.php
    axios
      .post(`${apiUrl}/auth/register`, data , {
        headers:{
          "Authorization" : `Bearer ${acdimytoken}`
        }
      })
      .then((res) => {
        setLoding(true);
        
        setTimeout(() => {
          toast.success(res.data.message);
          setLoding(false); 
          reset();
        }, 500); 
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });

  };

  return (
    <div
      className="w-fullflex items-center px-10 py-10 sm:justify-center  lg:pr-10 md:pr-0 sm:pr-0 md:justify-center justify-end bg-slate-100 sm:px-0 "
    >
      <div className=" w-full backdrop-brightness-110 sm:backdrop-brightness-150 p-8 lg:p-5  rounded-xl sm:p-3 shadow-xl lg:my-5 md:my-7 sm:my-5 sm:mx-1">
        <h2 className="text-2xl font-bold text-center text-black mb-6">
          Add New User To System
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
              {...register("full_name", { required: "Name is required" })}
              className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-200 border-none outline-none mt-1 px-4 py-2 border rounded-md shadow-sm "
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-base sm:font-semibold sm:text-base font-medium text-gray-700">
              username
              {errors.username && (
                <span className="text-sm text-red-500 mt-1">
                  ({errors.username.message})
                </span>
              )}
            </label>
            <input
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 5,
                  message: "Username must be at least 5 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Username must be at most 20 characters",
                },
              })}
              className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-200 border-none outline-none mt-1 px-4 py-2 border rounded-md shadow-sm "
              placeholder="Your Username"
            />
          </div>

          <div>
            <label className="block sm:font-semibold sm:text-base  text-base font-medium text-gray-700">
              Email Address{" "}
              {errors.email && (
                <span className="text-sm text-red-500 mt-1">
                  ({errors.email.message})
                </span>
              )}
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-200 border-none outline-none mt-1 px-4 py-2 border rounded-md "
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-base sm:font-semibold sm:text-base  font-medium text-gray-700">
              Role{" "}
              
            </label>
            <select className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-200 mt-1 px-4 py-2 border-none outline-none rounded-md "
             name="" id="" {...register("role", {
                required: "Role is required",  
              })}>
              <option value="">Select User Role</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
            
          </div>
          <div>
            <label className="block text-base sm:font-semibold sm:text-base  font-medium text-gray-700">
              Password{" "}
              {errors.password && (
                <span className="text-sm text-red-500 mt-1">
                  ({errors.password.message})
                </span>
              )}
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
              className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-200 mt-1 px-4 py-2 border-none outline-none rounded-md "
              placeholder=""
              autocomplete="new-password"
            />
          </div>

          <div className="pb-5">
            <label className="block  text-base sm:font-semibold sm:text-base  font-medium text-gray-700">
              Confirm Password{" "}
              {errors.confirmPassword && (
                <span className="text-sm text-red-500 ">
                  ({errors.confirmPassword.message})
                </span>
              )}
            </label>
            <input
              type="password"
              {...register("confirmPassword", {
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              className="w-full text-gray-500 placeholder:text-gray-400 bg-gray-200 mt-1 px-4 py-2 border-non outline-none rounded-md "
              placeholder=""
              autocomplete="new-password"
            />
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

export default RegisterUser;
