import { useNavigate } from "react-router-dom";

function Supervisor() {
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate("/updateData");
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
      address: "694, middle street ambal",
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
    <div className="flex flex-col bg-slate-500 overflow-auto shadow-2xl p-2">
      <div className="sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="border-b border-black">
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Age</th>
                  <th className="px-4 py-2">Date of Birth</th>
                  <th className="px-4 py-2">Gender</th>
                  <th className="px-4 py-2">Father Name</th>
                  <th className="px-4 py-2">Mother Name</th>
                  <th className="px-4 py-2">Mobile</th>
                  <th className="px-4 py-2">Address</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Location</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {arr.map((li, i) => (
                  <tr key={i} className="border-b border-black">
                    <td className="px-4 py-2">{li.name}</td>
                    <td className="px-4 py-2">{li.age}</td>
                    <td className="px-4 py-2">{li.dob}</td>
                    <td className="px-4 py-2">{li.gender}</td>
                    <td className="px-4 py-2">{li.fatherName}</td>
                    <td className="px-4 py-2">{li.motherName}</td>
                    <td className="px-4 py-2">{li.mobile}</td>
                    <td className="px-4 py-2">{li.address}</td>
                    <td className="px-4 py-2">{li.email}</td>
                    <td className="px-4 py-2">{li.location}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={handleUpdate}
                        className="bg-red-700 rounded-md p-2 font-medium"
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
    </div>
  );
}

export default Supervisor;
