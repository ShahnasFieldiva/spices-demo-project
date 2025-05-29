import React, { useState } from 'react';

const Chemical = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can send this to your backend here
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-sm bg-white">
      <h2 className="text-xl font-semibold mb-6 text-center">Chemical Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-5 ">
          <label htmlFor="name" className="mb-1 font-medium text-start w-[8rem]">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-gray-400 rounded px-3 py-2 w-full" 
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex gap-5">
          <label htmlFor="description" className="mb-1 font-medium ">
            Description:
          </label>
          <input
            type="text"
            id="description"
            name="description"
            className="border border-gray-400 rounded px-3 py-2 w-full"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Chemical;
