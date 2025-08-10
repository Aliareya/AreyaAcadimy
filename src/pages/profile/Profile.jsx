import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Pencil } from "lucide-react";
import { useUser } from "../../contex/UserContext";
import { useAPI } from "../../contex/ApiContext";
import { toast } from "react-toastify";
import axios from "axios";

export default function Profile() {
  const { user, setUser  } = useUser();
  const { imageurl, apiUrl ,token } = useAPI();

  const fileInputRef = useRef(null);
  const [isEdit, setIsEdit] = useState(false);
  const [profileImage, setProfileImage] = useState(
    user?.imgUrl ? `${imageurl}${user.imgUrl}` : null
  );
  const [imageFile, setImageFile] = useState(null); 
  // React Hook Form setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty }
  } = useForm({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      bio: user?.bio || ""
    }
  });

  // Sync form with user data on mount or user changes
  useEffect(() => {
    reset({
      name: user?.name || "",
      email: user?.email || "",
      bio: user?.bio || ""
    });
    setProfileImage(user?.imgUrl ? `${imageurl}${user.imgUrl}` : null);
    setImageFile(null);
  }, [user, imageurl, reset]);

  /** Handle image upload preview */
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image file.");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      toast.error("Image size should be under 2MB.");
      return;
    }

    setProfileImage(URL.createObjectURL(file));
    setImageFile(file);
  };

  /** Save profile changes */
  const onSubmit = async (data) => {
    if (data.bio.length > 300) {
      toast.error("Bio cannot exceed 300 characters.");
      return;
    }

    const isNameChanged = data.name !== user?.name;
    const isBioChanged = data.bio !== (user?.bio || "");
    const isImageChanged = imageFile !== null;

    if (!isNameChanged && !isBioChanged && !isImageChanged) {
      toast.info("No changes to update.");
      return;
    }

    const uploadData = new FormData();
    uploadData.append("name", data.name);
    uploadData.append("bio", data.bio);
    if (isImageChanged) uploadData.append("image", imageFile);

    try {
      const response = await axios.post(`${apiUrl}/users/EditProfile.php`, uploadData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization" : `Bearer ${token}`
        }
      });
      console.log("response" , response)

      if (response.data.success) {
        toast.success("Profile updated successfully!");
        setUser((prevUser) => ({
          ...prevUser,
          name: data.name,
          bio: data.bio,
          imgUrl: response.data.imgUrl || prevUser.imgUrl
        }));
        setIsEdit(false);
        setImageFile(null);
        // fetchUser();
      } else {
        toast.error(response.data.message || "Failed to update profile.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while updating profile.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 sm:p-3">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">My Profile</h2>

      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-6">
        {/* View Profile */}
        <div className="bg-white h-fit p-6 sm:px-4 rounded-xl shadow-md relative">
          <h3 className="text-xl font-semibold mb-4">👤 View Profile</h3>

          <div className="flex relative items-center mb-6">
            <div
              className={`relative group ${isEdit ? "cursor-pointer" : ""}`}
              onClick={() => isEdit && fileInputRef.current.click()}
            >
              <img
                src={profileImage || `${imageurl}${user?.imgUrl}`}
                alt="User Avatar"
                className="w-20 h-20 rounded-full object-cover border"
              />
              {isEdit && (
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <Pencil size={20} className="text-white" />
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
              />
            </div>

            <div className="ml-4">
              <h4 className="text-lg font-bold">{user?.name}</h4>
              <div className="flex gap-2 mt-1">
                <span className="bg-gray-200 text-sm text-gray-800 px-2 py-1 rounded-full">
                  Teacher
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                if (isEdit) {
                  reset({
                    name: user?.name || "",
                    email: user?.email || "",
                    bio: user?.bio || ""
                  });
                  setProfileImage(user?.imgUrl ? `${imageurl}${user.imgUrl}` : null);
                  setImageFile(null);
                }
                setIsEdit((prev) => !prev);
              }}
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
              📅 Joined {new Date(user?.create_at).toLocaleDateString()}
            </div>
          </div>
        </div>

        {/* Edit Profile */}
        <form
          onSubmit={handleSubmit(onSubmit)}
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
              <label htmlFor="email" className="block font-medium text-gray-700">
                Email <span className="text-sm text-gray-400">(Not Editable)</span>
              </label>
              <input
                id="email"
                {...register("email")}
                className="mt-1 w-full px-3 py-2 border rounded-md bg-gray-100 cursor-not-allowed"
                disabled
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
              disabled={!isDirty && !imageFile}
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
