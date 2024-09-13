import { useEffect, useState } from "react";
import axios from "axios";
// import Sidebar from "./SideBar";
export default function Manager() {
  const [data, setData] = useState({
    name: "",
    age: "",
    dob: "",
    gender: "Male",
    fatherName: "",
    motherName: "",
    mobile: "",
    address: "",
    email: "",
    location: "",
  });

  const [addData, setAddData] = useState([]);
  const createApi = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/user/createUser",
        {
          name: data.name,
          age: data.age,
          dob: data.dob,
          gender: data.gender,
          fatherName: data.fatherName,
          motherName: data.motherName,
          mobile: data.mobile,
          address: data.address,
          email: data.email,
          location: data.location,
        },
        {
          withCredentials: true,
        }
      );
      console.log("createApi:", response);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/user/getAllUsers",
        { withCredentials: true }
      );
      console.log("createApi:", response.data.message);
      setAddData(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/user/deleteUser/${id}`,
        { withCredentials: true }
      );

      console.log("deleteApi:", response.data);
      fetchData();
    } catch (error) {
      console.error(
        "Error deleting user:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleDelete = (id) => {
    deleteData(id);
  };
  const handleCreate = (e) => {
    e.preventDefault();
    createApi();
    clearForm();
  };
  const clearForm = () => {
    setData({
      name: "",
      age: "",
      dob: "",
      gender: "Male",
      fatherName: "",
      motherName: "",
      mobile: "",
      address: "",
      email: "",
      location: "",
    });
  };
  return (
    <div>
        <div className="flex flex-col md:w-full bg-[#D2E0FB]">
        <div className=" flex flex-col items-center py-8  ">
          <div className="w-full max-w-md space-y-4 p-5 rounded-md  bg-white shadow-2xl">
            <h1 className="text-2xl font-bold mb-6 text-center">
              Employee Form
            </h1>
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
              <label htmlFor="gender" className="block text-gray-600">
                Gender
              </label>
              <select
                id="gender"
                value={data.gender}
                onChange={(e) => setData({ ...data, gender: e.target.value })}
                className="mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
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
                onChange={(e) =>
                  setData({ ...data, fatherName: e.target.value })
                }
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
                onChange={(e) =>
                  setData({ ...data, motherName: e.target.value })
                }
              />
            </div>

            <div>
              <label htmlFor="mobile" className="block text-gray-700">
                Mobile
              </label>
              <input
                id="mobile"
                type="number"
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
              onClick={handleCreate}
            >
              Submit
            </button>
          </div>
        </div>
        {addData.length > 0 && (
          <div className="flex  w-full md:p-6 p-2  overflow-auto shadow-2xl">
          <div className="overflow-x-auto w-full no-scrollbar">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead className="bg-slate-800 text-white font-bold">
                <tr>
                  <th className="px-2 md:px-6 py-3">Name</th>
                  <th className="px-2 md:px-6 py-3">Age</th>
                  <th className="px-2 md:px-6 py-3">Date of Birth</th>
                  <th className="px-2 md:px-6 py-3">Gender</th>
                  <th className="px-2 md:px-6 py-3">Father Name</th>
                  <th className="px-2 md:px-6 py-3">Mother Name</th>
                  <th className="px-2 md:px-6 py-3">Mobile</th>
                  <th className="px-2 md:px-6 py-3">Address</th>
                  <th className="px-2 md:px-6 py-3">Email</th>
                  <th className="px-2 md:px-6 py-3">Location</th>
                    <th className="px-2 md:px-6 py-3 ">Action</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  {addData.map((li, i) => (
                    <tr
                      key={i}
                      className="border-t border-slate-300 hover:bg-slate-200 transition-all"
                    >
                      <td className="px-2 md:px-6 py-3 ">{li.name}</td>
                      <td className="px-2 md:px-6 py-3 ">{li.age}</td>
                      <td className="px-2 md:px-6 py-3 ">{li.dob}</td>
                      <td className="px-2 md:px-6 py-3 ">{li.gender}</td>
                      <td className="px-2 md:px-6 py-3 ">{li.fatherName}</td>
                      <td className="px-2 md:px-6 py-3 ">{li.motherName}</td>
                      <td className="px-2 md:px-6 py-3 ">{li.mobile}</td>
                      <td className="px-2 md:px-6 py-3 ">{li.address}</td>
                      <td className="px-2 md:px-6 py-3 ">{li.email}</td>
                      <td className="px-2 md:px-6 py-3 ">{li.location}</td>
                      <td className="px-2 md:px-6 py-3 ">
                        <button
                          onClick={() => handleDelete(li.id)}
                          className=" bg-red-500 hover:bg-red-600 text-white rounded-md p-2 transition-all"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
