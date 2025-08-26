import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/ChatGPT Image Jul 18, 2025, 12_21_52 PM.png";
import Logo from "../../assets/final logo.png";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const Apicalling = async (e) => {
    e.preventDefault();

    try {
      // const result = await axios.post("http://localhost:7676/login", {
      const result = await axios.post("https://himveda-be-38v4.vercel.app/login", {
        email,
        password,
      });
      

      setData(result?.data); // store only the response data
      console.log("Frontend Api call Data", result?.data?.user);
      if(data?.success === true ){
        navigate("/")
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert(
        "Login failed: " + (error.response?.data?.message || "Unknown error")
      );
    }
  };

  return (
    <>
      <div className="md:h-[100vh] w-full flex flex-col sm:flex-row bg-white my-10 md:my-0 ">
        {/* Left Side */}
        <div className="w-full sm:w-1/2 h-full flex flex-col justify-center items-start px-10 sm:px-20 gap-7">
          {/* Logo */}
          <img src={Logo} alt="Company logo" className="h-[100px] mb-4" />

          {/* Welcome Text */}
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-2xl">Hello,</h3>
            <h1 className="font-bold text-4xl">Welcome Back</h1>
            <p className="text-gray-500">
              Hey welcome back to your special place
            </p>
          </div>

          {/* Inputs */}
          <div className="flex flex-col gap-3 w-full">
            <input
              type="text"
              placeholder="Enter Your Email here"
              className="border border-gray-300 text-gray-600 rounded-xl p-2"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="border border-gray-300 text-gray-600 rounded-xl p-2"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <div className="flex justify-between items-center px-1 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember
              </label>
              <Link
                to="/forgotPassword"
                className="text-green-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              className="p-2 w-full bg-green-600 text-white font-bold rounded-xl"
              onClick={(e) => {
                Apicalling(e);
              }}
            >
              Sign In
            </button>

            <div className="flex items-center gap-4 w-full text-gray-400 my-2">
              <hr className="flex-grow border-t" />
              <span className="text-sm">or</span>
              <hr className="flex-grow border-t" />
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
              <div className="flex items-center gap-2 cursor-pointer">
                <FcGoogle className="text-xl" /> Sign in with Google
              </div>
              <p className="text-sm">
                Don't have an account?{" "}
                <Link to="/register" className="text-green-500 font-medium">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Image (Hidden on small screens) */}
        <div className="hidden sm:block sm:w-1/2 h-full">
          <img
            src={img}
            alt="Background"
            className="w-full h-full object-cover "
          />
        </div>
      </div>
    </>
  );
};

export default Login;
