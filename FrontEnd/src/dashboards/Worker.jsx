import { useEffect, useState } from "react";
import axios from "axios";

function Worker() {
  const [addData, setAddData] = useState([]);

  useEffect(() => {
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

    fetchData();
  }, []);

  return (
    <>
      {addData.length > 0 && (
        <div className="flex flex-row min-h-screen bg-[#D2E0FB]">
          <div className="flex flex-col w-full items-center justify-center  overflow-auto shadow-2xl">
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Worker;
