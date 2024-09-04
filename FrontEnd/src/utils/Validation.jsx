import { useState } from "react";

function Validation() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const handleEmail = () => {
    const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };
  const handleUserName = () => {
    if (userName.length < 4) {
      setUserNameError("Username is required");
      return false;
    } else {
      setUserNameError("");
      return true;
    }
  };
  const handlePassword = () => {
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters ");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };
  return {
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
  };
}

export default Validation;
