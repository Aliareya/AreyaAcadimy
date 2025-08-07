import React, { useState } from "react";

function AddStudent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    nationalId: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Student Data:", formData);
    // Submit logic here
  };

  return (
    <div className="w-full lg:px-4 md:px-5 sm:px-2 h-auto pt-5 pb-10">
      <div className="w-full xl:px-12 px-0">
        <h2 className="text-3xl font-bold mb-4">Student Registration</h2>
        <p className="text-gray-500">Register a new student to the academy</p>
      </div>
      <div className="p-6 sm:p-3 max-w-[60rem] mx-auto border-gray-200 border rounded-lg shadow-md mt-8">
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-3">
          <div className="flex sm:flex-col gap-4">
            <div className="w-1/2 sm:w-full">
              <label className="block mb-1 font-medium">First Name *</label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            <div className="w-1/2 sm:w-full">
              <label className="block mb-1 font-medium">Last Name *</label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
          </div>

          <div className="flex sm:flex-col gap-4">
            <div className="w-1/2 sm:w-full">
              <label className="block mb-1 font-medium">
                One Guardian Name *
              </label>
              <input
                name="fathername"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div className="w-1/2 sm:w-full">
              <label className="block mb-1 font-medium">Date of Birth *</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
          </div>

          <div className="sm:pt-3">
            <label className="block mb-1 font-medium">Gender *</label>
            <div className="flex gap-6">
              {["Male", "Female", "Other"].map((g) => (
                <label key={g} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    onChange={handleChange}
                    checked={formData.gender === g}
                    required
                  />
                  {g}
                </label>
              ))}
            </div>
          </div>

          <div className="sm:pt-3">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="flex sm:flex-col gap-4 sm:pt-3">
            <div className="w-1/2  sm:w-full">
              <label className="block mb-1 font-medium">Guardian Phone *</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div className="w-1/2 sm:w-full">
              <label className="block mb-1 font-medium">
                Your Phone Number
              </label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>

          <div className="grid sm:pt-3 grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-1 font-medium">
                Region / District *
              </label>
              <input
                type="text"
                name="region"
                value={formData.region}
                onChange={handleChange}
                placeholder="e.g. District 3"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Home Number *</label>
              <input
                type="text"
                name="homeNumber"
                value={formData.homeNumber}
                onChange={handleChange}
                placeholder="e.g. House #27"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 sm:mt-3 sm:w-full py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;
