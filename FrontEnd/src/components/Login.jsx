import { Link, useNavigate } from "react-router-dom";
import Validation from "../utils/Validation";
import axios from "axios";

function LoginForm() {
  const {
    setEmail,
    setPassword,
    emailError,
    passwordError,
    handleEmail,
    handlePassword,
    setEmailError,
    setPasswordError,
    email,
    password,
  } = Validation();

  const navigate = useNavigate();

  const loginApi = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        { email, password },
        {
          withCredentials: true,
        }
      );
      console.log("loginapi:", response);
      if (response.status === 200) {
        navigate("/manager");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    const isEmailValid = handleEmail();
    const isPasswordValid = handlePassword();
    if (isEmailValid && isPasswordValid) {
      loginApi(); // Call the login API function
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
        onSubmit={submitForm}
      >
        <fieldset className="space-y-5">
          <h1 className="text-2xl font-bold text-gray-700 text-center">
            Sign In
          </h1>
          <div>
            <label className="block text-gray-700 font-bold">Email</label>
            <input
              type="email"
              autoComplete="off"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
              onBlur={handleEmail}
              className="mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {emailError && <p className="text-red-600 italic">{emailError}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-bold">Password</label>
            <input
              type="password"
              autoComplete="off"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
              onBlur={handlePassword}
              className="mt-1 block w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {passwordError && (
              <p className="text-red-600 italic">{passwordError}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Not registered?
              <Link to="/register" className="ml-1 text-indigo-600">
                Create an account
              </Link>
            </p>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default LoginForm;
