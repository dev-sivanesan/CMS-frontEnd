import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Validation from "../utils/Validation";
import axios from "axios";
function Register() {
  const {
    setUserName,
    setEmail,
    setPassword,
    emailError,
    passwordError,
    userNameError,
    handleEmail,
    handleUserName,
    handlePassword,
    setEmailError,
    setPasswordError,
    setUserNameError,
    email,
    password,
    userName,
  } = Validation();
  const [role, setRole] = useState("");
  const registerApi = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        { email, password ,userName,role},
        {
          withCredentials: true,
        }
      );
      console.log("loginapi:", response);
      // if (response.status === 200) {
      //   navigate("/manager");
      // }
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = handleEmail();
    const isPasswordValid = handlePassword();
    if (isEmailValid && isPasswordValid && handleUserName) {
      registerApi();
      navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <fieldset className="space-y-6">
          <h2 className="text-2xl text-center font-bold text-gray-700">
            Sign Up
          </h2>
          <div>
            <label className="block text-gray-600">Username</label>
            <input
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
                setUserNameError("");
              }}
              onBlur={handleUserName}
              placeholder="Username"
              type="text"
              required
              autoComplete="off"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {userNameError && (
              <p className="text-red-600 italic">{userNameError}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-600">Email</label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
              onBlur={handleEmail}
              type="email"
              required
              placeholder="Email"
              autoComplete="off"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {emailError && <p className="text-red-600 italic">{emailError}</p>}
          </div>
          <div>
            <label className="block text-gray-600">Password</label>
            <input
              value={password}
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
              onBlur={handlePassword}
              placeholder="Password"
              required
              autoComplete="off"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {passwordError && (
              <p className="text-red-600 italic">{passwordError}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-600">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="Manager">Manager</option>
              <option value="Supervisor">Supervisor</option>
              <option value="Worker">Worker</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Register;
