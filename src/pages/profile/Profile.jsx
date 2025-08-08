import React, { useRef, useState } from "react";
import ali from "../../assets/images/ali.webp";
import { Pencil } from "lucide-react"; // optional: lucide-react icon

export default function Profile() {
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(ali);

  const [formData, setFormData] = useState({
    firstName: "Alireza",
    lastName: "Ebrahimi",
    email: "alireza@academy.edu",
    phone: "+93 700 123 456",
    address: "Herat University, Herat, Afghanistan",
    bio: "Passionate educator and developer with 2+ years of experience in WordPress, React, and database systems.",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 sm:p-3">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Profile</h2>

      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-6">
        {/* 👁️ View Profile (Left Side) */}
        <div className="bg-white h-fit p-6 sm:px-4 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">👤 View Profile</h3>

          <div className="flex items-center mb-6">
            {/* 👇 Editable Profile Image */}
            <div
              className="relative group cursor-pointer"
              onClick={() => fileInputRef.current.click()}
            >
              <img
                src={profileImage}
                alt="User Avatar"
                className="w-20 h-20 rounded-full object-cover border"
              />
              {/* Hover icon */}
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <Pencil size={20} className="text-white" />
              </div>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
              />
            </div>

            <div className="ml-4">
              <h4 className="text-lg font-bold">
                {formData.firstName} {formData.lastName}
              </h4>
              <div className="flex gap-2 mt-1">
                <span className="bg-gray-200 text-sm text-gray-800 px-2 py-1 rounded-full">Teacher</span>
                <span className="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-full">Computer Science</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-sm">
            <div><strong>Email:</strong> {formData.email}</div>
            <div><strong>Phone:</strong> {formData.phone}</div>
            <div><strong>Address:</strong> {formData.address}</div>
            <div className="py-2 px-2 rounded-md bg-gray-200"><strong>Bio:</strong> {formData.bio}</div>
            <div className="text-gray-500 mt-4">📅 Joined March 17, 2025</div>
          </div>
        </div>

        {/* ✏️ Edit Profile (Right Side) */}
        <div className="bg-white p-6 sm:px-3 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">✏️ Edit Profile</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700">First Name</label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Last Name</label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Phone</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block font-medium text-gray-700">Address</label>
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block font-medium text-gray-700">Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className="mt-1 w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>

          <button
            onClick={() => alert("Profile Saved (example only)")}
            className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
}
