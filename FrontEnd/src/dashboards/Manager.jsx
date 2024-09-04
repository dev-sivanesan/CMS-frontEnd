import { useState } from "react";

export default function Manager() {
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
  // useEffect(() => {
  //   fetchAllClaims();
  // }, []);

  // const fetchAllClaims = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:3001/claim/`);
  //     setClaims(response.data.claims);
  //   } catch (error) {
  //     console.error("Error fetching claims:", error);
  //     setErrorMessage("Error fetching claims. Please try again later.");
  //   }
  // };
  const addFormData = () => {
    console.log(data);
  };

  const arr = [
    {
      name: "Raj",
      age: "20",
      dob: "08/06/2004",
      gender: "Male",
      fatherName: "Mani",
      motherName: "Meena",
      mobile: "9786768570",
      address: "694,midlle street ambal.",
      email: "raj@gmail.com",
      location: "Thanjavur",
    },
    {
      name: "Abinesh",
      age: "22",
      dob: "08/12/2003",
      gender: "Male",
      fatherName: "Anbazhagan",
      motherName: "Selvarani",
      mobile: "7339434829",
      address: "North street Thondarampattu",
      email: "abi802003@gmail.com",
      location: "Trichy",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center py-8 bg-cyan-300 ">
        <h1 className="text-2xl font-bold mb-6 text-center">Employee Form</h1>
        <div className="w-full max-w-md space-y-4 p-5 rounded-md  bg-white shadow-2xl">
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
            onClick={addFormData}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="flex flex-col bg-slate-500 shadow-2xl p-2 w-1/2">
        <div className="overflow-x-auto  bg-slate-400">
          <table className="min-w-full  text-left ">
            <thead className="border-b  border-black ">
              <tr className="bg-gray-200">
                <th className="px-4 py-2 ">Name</th>
                <th className="px-4 py-2 ">Age</th>
                <th className="px-4 py-2 ">Date of Birth</th>
                <th className="px-4 py-2 ">Gender</th>
                <th className="px-4 py-2 ">Father Name</th>
                <th className="px-4 py-2 ">Mother Name</th>
                <th className="px-4 py-2 ">Mobile</th>
                <th className="px-4 py-2 ">Address</th>
                <th className="px-4 py-2 ">Email</th>
                <th className="px-4 py-2 ">Location</th>
              </tr>
            </thead>
            <tbody>
              {arr.map((li, i) => (
                <tr key={i} className="border-b  border-black">
                  <td className="px-4 py-2 ">{li.name}</td>
                  <td className="px-4 py-2 ">{li.age}</td>
                  <td className="px-4 py-2 ">{li.dob}</td>
                  <td className="px-4 py-2 ">{li.gender}</td>
                  <td className="px-4 py-2 ">{li.fatherName}</td>
                  <td className="px-4 py-2 ">{li.motherName}</td>
                  <td className="px-4 py-2 ">{li.mobile}</td>
                  <td className="px-4 py-2 ">{li.address}</td>
                  <td className="px-4 py-2 ">{li.email}</td>
                  <td className="px-4 py-2 ">{li.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
