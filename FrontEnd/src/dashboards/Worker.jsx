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
        <div className="flex flex-col bg-slate-500 shadow-2xl p-2 ">
          <div className="overflow-x-auto bg-slate-400">
            <table className="min-w-full text-left ">
              <thead className="border-b border-black ">
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
                {addData.map((li, i) => (
                  <tr key={i} className="border-b border-black">
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
      )}
    </>
  );
}

export default Worker;
