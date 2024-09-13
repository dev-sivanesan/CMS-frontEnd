import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Sidebar from "../SideBar";

function Supervisor() {
  const navigate = useNavigate();
  const [addData, setAddData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/user/getAllUsers",
        { withCredentials: true }
      );
      console.log("Fetched Users:", response.data.message);
      setAddData(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (id) => {
    navigate(`/updateData/${id}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-row min-h-screen bg-[#D2E0FB]">
      <div className="flex flex-col w-full items-center justify-center  overflow-auto">
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
                <th className="px-2 md:px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              {addData.map((li, i) => (
                <tr
                  key={i}
                  className="border-t border-slate-300 hover:bg-slate-200 transition-all"
                >
                  <td className="px-2 md:px-6 py-3">{li.name}</td>
                  <td className="px-2 md:px-6 py-3">{li.age}</td>
                  <td className="px-2 md:px-6 py-3">{li.dob}</td>
                  <td className="px-2 md:px-6 py-3">{li.gender}</td>
                  <td className="px-2 md:px-6 py-3">{li.fatherName}</td>
                  <td className="px-2 md:px-6 py-3">{li.motherName}</td>
                  <td className="px-2 md:px-6 py-3">{li.mobile}</td>
                  <td className="px-2 md:px-6 py-3">{li.address}</td>
                  <td className="px-2 md:px-6 py-3">{li.email}</td>
                  <td className="px-2 md:px-6 py-3">{li.location}</td>
                  <td className="px-2 md:px-6 py-3">
                    <button
                      onClick={() => handleUpdate(li.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2 transition-all"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Supervisor;
