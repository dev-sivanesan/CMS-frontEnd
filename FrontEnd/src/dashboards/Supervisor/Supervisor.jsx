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
    <div className="w-full flex h-screen">
      <div className="w-52 bg-black"></div>
      <div className="  p-7  flex flex-col justify-center no-scrollbar bg-slate-600  md:overflow-x-hidden overflow-x-auto shadow-2xl">
        <table className=" text-left bg-white rounded-xl ">
          <thead className="bg-slate-300  text-slate-500  font-serif">
            <tr >
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
          <tbody className="font-mono text-slate-400">
            {arr.map((li, i) => (
              <tr key={i}>
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
                    className="bg-red-400 rounded-md p-2 font-medium"
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
  );
}

export default Supervisor;
