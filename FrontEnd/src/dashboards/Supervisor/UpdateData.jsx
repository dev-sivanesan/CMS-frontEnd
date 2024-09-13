import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateData() {
  const navigate = useNavigate();
  const { id } = useParams();
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
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/user/getUser/${id}`,
          { withCredentials: true }
        );
        console.log("getdata:", response.data.Message);
        setData(response.data.Message);
      } catch (error) {
        console.log(error);
      }
    };

    if (id) {
      fetchUserData();
    }
  }, [id]);

  const UpdateData = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/user/updateUser/${id}`,
        data,
        { withCredentials: true }
      );
      console.log("User updated:", response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const addFormData = (e) => {
    e.preventDefault();
    UpdateData();
    navigate("/supervisor");
  };

  return (
    <div className="flex flex-col bg-[#D2E0FB] items-center py-8 ">
      <div className="w-full max-w-md space-y-4 p-5 rounded-md bg-white shadow-2xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Employee Form</h1>
        <div>
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            name="name"
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
            name="age"
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
            name="dob"
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
            name="gender"
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
            name="fatherName"
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
            name="motherName"
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
            name="mobile"
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
            name="address"
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
            name="email"
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
            name="location"
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
