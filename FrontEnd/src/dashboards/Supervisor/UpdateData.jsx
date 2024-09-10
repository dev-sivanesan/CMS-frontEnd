import { useState } from "react";

function UpdateData() {
  const [data, setData] = useState({
    name: "",
    age: "",
    dob: "",
    gender: "",
    fatherName: "",
    motherName: "",
    mobile: "",
    address: "",
    email: "",
    location: "",
  });

  const addFormData = () => {
    console.log("Form data submitted:", data);
  };

  return (
    <div className="flex flex-col items-center py-8 bg-cyan-300">
      <h1 className="text-2xl font-bold mb-6 text-center">Employee Form</h1>
      <div className="w-full max-w-md space-y-4 p-5 rounded-md bg-white shadow-2xl">
        <div>
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={data.name}
            className="mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="age" className="block text-gray-700">
            Age
          </label>
          <input
            id="age"
            type="number"
            value={data.age}
            className="mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setData({ ...data, age: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="dob" className="block text-gray-700">
            Date of Birth
          </label>
          <input
            id="dob"
            type="date"
            value={data.dob}
            className="mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setData({ ...data, dob: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="gender" className="block text-gray-700">
            Gender
          </label>
          <select
            id="gender"
            value={data.gender}
            onChange={(e) => setData({ ...data, gender: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div>
          <label htmlFor="fatherName" className="block text-gray-700">
            Father Name
          </label>
          <input
            id="fatherName"
            type="text"
            value={data.fatherName}
            className="mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setData({ ...data, fatherName: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="motherName" className="block text-gray-700">
            Mother Name
          </label>
          <input
            id="motherName"
            type="text"
            value={data.motherName}
            className="mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setData({ ...data, motherName: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="mobile" className="block text-gray-700">
            Mobile
          </label>
          <input
            id="mobile"
            type="text"
            value={data.mobile}
            className="mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setData({ ...data, mobile: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-gray-700">
            Address
          </label>
          <input
            id="address"
            type="text"
            value={data.address}
            className="mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setData({ ...data, address: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={data.email}
            className="mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-gray-700">
            Location
          </label>
          <input
            id="location"
            type="text"
            value={data.location}
            className="mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setData({ ...data, location: e.target.value })}
          />
        </div>

        <button
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          onClick={addFormData}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default UpdateData;
