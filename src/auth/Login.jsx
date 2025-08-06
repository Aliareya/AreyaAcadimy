import React from 'react';
import { useForm } from 'react-hook-form';
import bg from "../assets/images/Dbg.jpg"

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const email = watch("email");
  // console.log('Signup data:', email);

  const onSubmit = (data) => {
  };

  return (
    <div style={{backgroundImage : `url(${bg})`}} className="bg-center bg-cover min-h-screen flex items-center pr-20 sm:justify-center  lg:pr-10 md:pr-0 sm:pr-0 md:justify-center justify-end bg-slate-100 sm:px-0 px-4">
      <div className="max-w-sm w-full backdrop-brightness-110 sm:backdrop-brightness-150 p-8 lg:p-5  rounded-xl sm:p-3 shadow-xl lg:my-5 md:my-7 sm:my-5 sm:mx-1">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Login to Your Account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block sm:font-semibold sm:text-base  text-sm font-medium text-gray-700">Email / Username {errors.email && <span className="text-sm text-red-500 mt-1">({errors.email.message})</span>}</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              className="w-full text-[#355460] placeholder:text-[#608c9e] bg-[#a6d9ef] border-none outline-none mt-1 px-4 py-2 border rounded-md "
              placeholder="you@example.com"
            />
            
          </div>

          <div className='pb-4'>
            <label className="block text-sm sm:font-semibold sm:text-base  font-medium text-gray-700">Password {errors.password && <span className="text-sm text-red-500 mt-1">({errors.password.message})</span>}</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
              className="w-full text-[#355460] placeholder:text-[#608c9e] bg-[#a6d9ef] mt-1 px-4 py-2 border-none outline-none rounded-md "
              placeholder="••••••••"
            />
            
          </div>

          <button
            type="submit"
            className="w-full  bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm sm:font-semibold sm:text-base  text-center text-gray-500">
          I don`t have any account?{" "}
          <a href="#" className="text-blue-600 hover:underline">Signup</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
