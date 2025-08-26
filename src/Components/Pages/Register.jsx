import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/ChatGPT Image Jul 18, 2025, 12_21_52 PM.png";
import Logo from "../../assets/final logo.png";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  const Apicalling = async (e) => {
    e.preventDefault();
    try {
      // const result = await axios.post("http://localhost:7676/register", {
      const result = await axios.post("https://himveda-be-38v4.vercel.app/register", {
        name,
        email,
        password,
        phoneNumber,
      });
      setData(result); // store only the response data
      console.log("here is your result sir:", result);
      if (result?.data?.success) {
        alert("User Registration Successfully")
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert(
        // "Login failed: " + (error.response?.data?.message || "Unknown error")
        "Login failed: " + (error.response?.data?.message || "Unknown error")

        
      );
    }
  };

  return (
    <>
      <div className="h-[100vh] bg-white w-[100vw] flex flex-col md:flex-row justify-evenly items-start ">
        {/* Left Section */}
        <div className="w-full md:w-[50vw] h-[100vh] flex flex-col justify-center items-start px-10 md:pl-[160px] gap-7">
          {/* Logo */}
          <div className="mt-[-40px]">
            <img src={Logo} alt="Company logo" className="h-[120px]" />
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-4xl">Sign up</h1>
            <p className="text-gray-500">Sign Up to Continue</p>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="text"
                placeholder="Full Name"
                className="border-1 text-gray-500 rounded-xl p-2 flex-1"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="border-1 text-gray-500 rounded-xl p-2"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Strong Password"
              className="border-1 text-gray-500 rounded-xl p-2"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="border-1 text-gray-500 rounded-xl p-2"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />

            {/* Remember me */}
            <div className="flex justify-between items-center p-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p className="text-[12px]">Remember</p>
              </div>
            </div>

            <button
              className="p-2 w-full bg-green-600 text-white font-bold rounded-2xl"
              onClick={(e) => {
                Apicalling(e);
              }}
            >
              Sign up
            </button>

            <hr className="text-gray-400" />

            {/* Google Sign In and Link */}
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="flex justify-center items-center gap-2">
                <FcGoogle /> Sign in with Google
              </div>
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-green-500">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Image Section - Hidden on small screens */}
        <div className="hidden md:block w-[50vw] h-[100vh] p-[34px]">
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover rounded-4xl"
          />
        </div>
      </div>
    </>
  );
};

export default Register;
