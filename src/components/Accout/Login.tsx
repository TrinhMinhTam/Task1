import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [icon, setIcon] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const navigate = useNavigate();

  const toggleForm = (isLogin: boolean) => {
    setShowLoginForm(isLogin);
    setShowPassword(false);
    setShowForgotPassword(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setIcon(!icon);
  };

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    if (email !== "" && password !== "") {
      console.log("Logging in...");
      navigate("/board");
    } else {
      console.log("Please enter email and password.");
    }
  };

  const handleSignUp = (event: React.FormEvent) => {
    event.preventDefault();
    if (password === confirmPassword && email !== "" && password !== "") {
      console.log("email đăng kí: ", email, " password: ", password);
      setShowLoginForm(true);
    } else {
      console.log("Passwords do not match or fields are empty.");
    }
  };

  const handleForgotPassword = (event: React.FormEvent) => {
    event.preventDefault();
    if (email !== "") {
      console.log("Forgot password request for email:", email);
      console.log("Email sent, please check your inbox.");
      setShowForgotPassword(false);
      setShowLoginForm(true);
    } else {
      console.log("Please enter your email.");
    }
  };

  return (
    <div className=" w-full h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-blue-100 rounded-lg shadow-md shadow-cyan-200 flex overflow-hidden">
        <div className="w-8/12 bg-white  flex flex-col items-start justify-center">
          {/* Left side content */}
          <img
            src="https://insieutoc.vn/wp-content/uploads/2021/03/mau-thiet-ke-logo-dep.jpg"
            alt="Description of the image"
            className="w-full"
          />
        </div>
        <div className="w-5/12 p-8 bg-white rounded-lg flex flex-col items-center justify-center">
          <div className="flex justify-between mb-8">
            {!showForgotPassword && (
              <>
                <div>
                  <button
                    type="button"
                    className={`text-2xl text-gray-500 font-bold ${
                      showLoginForm ? "text-black" : ""
                    }`}
                    onClick={() => toggleForm(true)}
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    className={`text-2xl text-gray-500 font-bold ml-12 ${
                      !showLoginForm ? "text-black" : ""
                    }`}
                    onClick={() => toggleForm(false)}
                  >
                    Sign Up
                  </button>
                </div>
              </>
            )}
            {showForgotPassword && (
              <div className="flex items-center">
                <svg
                  className="h-8 w-8 text-gray-500 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={() => setShowForgotPassword(false)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                  />
                </svg>
                <p className="text-2xl text-black font-bold ml-2">
                  Forgot Password
                </p>
              </div>
            )}
          </div>
          {showForgotPassword ? (
            <form className="space-y-6 w-full" onSubmit={handleForgotPassword}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-500"
                >
                  Enter your email to reset password
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Submit
              </button>
            </form>
          ) : (
            <form
              className="space-y-6 w-full"
              onSubmit={showLoginForm ? handleLogin : handleSignUp}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-500"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                />
              </div>
              {showLoginForm ? (
                <div className="relative">
                  <label
                    htmlFor="passcode"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="passcode"
                    id="passcode"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                  />
                  <svg
                    className=" w-5 absolute inset-y-8 right-6 h-6 text-black cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={togglePasswordVisibility}
                  >
                    {icon ? (
                      <>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </>
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    )}
                  </svg>
                </div>
              ) : (
                <div className="relative">
                  <label
                    htmlFor="passcode"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="passcode"
                    id="passcode"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                  />
                  <label
                    htmlFor="confirm-passcode"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Confirm Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="confirm-passcode"
                    id="confirm-passcode"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                  />
                  <svg
                    className=" w-5 absolute inset-y-8 right-6 h-6 text-black cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={togglePasswordVisibility}
                  >
                    {icon ? (
                      <>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </>
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    )}
                  </svg>
                </div>
              )}
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm text-gray-500 underline"
                  onClick={() => setShowForgotPassword(true)}
                >
                  Forgot Password
                </button>
              </div>
              <div className="flex space-x-4 mb-6">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  {showLoginForm ? "Login" : "Sign Up"}
                </button>
              </div>
              <div className="flex items-center my-4 w-full">
                <div className="flex-grow border-t mt-1 border-gray-300"></div>
                <span className="px-2 text-gray-500">Or</span>
                <div className="flex-grow border-t mt-1 border-gray-300"></div>
              </div>
              <div className="flex justify-center">
                <div className="flex space-x-4">
                  <button className="flex items-center justify-center px-4 py-2 bg-white rounded-full shadow-sm">
                    <img
                      src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-pks9lbdv.png"
                      alt="Google Logo"
                      className="w-6 h-6 mr-3"
                    />
                  </button>
                  <button className="flex items-center justify-center px-4 py-2 rounded-full shadow-sm">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                      alt="Facebook Logo"
                      className="w-6 h-6 mr-3"
                    />
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
