import React, {useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "../../contex/UserContext";
import { useAPI } from "../../contex/ApiContext";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const { user, acdimytoken ,FectUser } = useUser();
  console.log(user)
  const { apiUrl , imageurl } = useAPI();


  const [isEdit, setIsEdit] = useState(false);
 
  const {register,handleSubmit,formState: { errors, isDirty }} = useForm({
    defaultValues: {
      name: user?.name ,
      bio: user?.bio 
    }
  });

  const handleEditUser = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("bio", data.bio);
    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }
  
    try {
      const response = await axios.post(
        `${apiUrl}/users/EditProfile.php`,formData,{
          headers: {
            'Authorization': `Bearer ${acdimytoken}`,
          },
        }
      );
      FectUser();
      toast.success(response.data.message);
    } catch (error) {
      console.log("error:" , error)
      toast.error("Failed to update profile");
    }

  }

  useEffect(()=>{
    if(!acdimytoken){
      navigate("/login");
    }
  },[])



  return (
    <div className="min-h-screen bg-gray-100 p-8 sm:p-3">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">My Profile</h2>

      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-6">
        {/* View Profile */}
        <div className="bg-white h-fit p-6 sm:px-4 rounded-xl shadow-md relative">
          <h3 className="text-xl font-semibold mb-4">👤 View Profile</h3>

          <div className="flex relative items-center mb-6">
            {user?.image ? (
              <div className="w-24 h-24  rounded-full bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(${imageurl}${user.image})`}} >
              </div>
            ):(
            <div className=" w-14 h-14 rounded-full text-2xl bg-gray-200 text-center flex items-center justify-center font-medium">
                  {user?.logo}
                </div>

            )}

            <div className="ml-4">
              <h4 className="text-lg font-bold">{user?.full_name}</h4>
              <div className="flex gap-2 mt-1">
                <span className="bg-gray-200 text-sm text-gray-800 px-2 py-1 rounded-full">
                  {user?.role}
                </span>
              </div>
            </div>

            <button
              onClick={() => {setIsEdit((prev) => !prev);}}
              className="absolute -top-12 right-1 cursor-pointer hover:bg-slate-300 bg-slate-200 rounded-md px-3 py-1"
            >
              {isEdit ? "Cancel Edit" : "Edit"}
            </button>
          </div>

          <div className="space-y-4 text-sm">
            <p>
              <strong>Email:</strong> {user?.email}
            </p>
            <p>
              <strong>Username:</strong> {user?.username}
            </p>
            <div className="py-2 px-2 rounded-md bg-gray-200">
              <strong>Bio:</strong> {user?.bio}
            </div>
            <div className="text-gray-500 mt-4">
              📅 Joined {new Date(user?.created_at).toLocaleDateString()}
            </div>
          </div>
        </div>

        {/* Edit Profile */}
        <form
          onSubmit={handleSubmit(handleEditUser)}
          className={`${
            !isEdit ? "bg-slate-100 pointer-events-none opacity-60" : "bg-white"
          } p-6 sm:px-3 rounded-xl shadow-md`}
        >
          <h3 className="text-xl font-semibold mb-4">✏️ Edit Profile</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                {...register("name", { required: "Name is required" })}
                className={`mt-1 w-full px-3 py-2 border rounded-md ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                disabled={!isEdit}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="name" className="block font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                type="file"
                accept="image/*"
                {...register("image")}
                className={`mt-1 w-full px-3 py-2 border rounded-md ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                disabled={!isEdit}
              />
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="bio" className="block font-medium text-gray-700">
                Bio
              </label>
              <textarea
                id="bio"
                {...register("bio", {
                  maxLength: { value: 300, message: "Bio max length is 300" }
                })}
                className={`mt-1 w-full px-3 py-2 border rounded-md ${
                  errors.bio ? "border-red-500" : "border-gray-300"
                }`}
                disabled={!isEdit}
                rows={4}
              />
              {errors.bio && (
                <p className="text-red-500 text-xs mt-1">{errors.bio.message}</p>
              )}
            </div>
          </div>

          {isEdit && (
            <button
              type="submit"
              disabled={!isDirty}
              className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
            >
              Save Profile
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
