import { Link } from "react-router-dom";
import img from "../../assets/forgot_password.png";
import Logo from "../../assets/final logo.png";
import { FcGoogle } from "react-icons/fc";

const Forgot_Password = () => {
  return (
    <>
      <div className="h-[100vh] bg-white w-[100vw] flex justify-evenly items-start ">
        {/* Left hand side  */}
        <div className="w-[50vw] h-[100vh] flex flex-col justify-center items-start pl-[160px] gap-7 mt-[-34px] ">
          {/* logo */}
          <div className="mt-[-40px]">
            <img src={Logo} alt="Company logo" className="h-[120px] " />
          </div>
          <br />

          {/* Heading Or Text */}
          <div className=" flex flex-col gap-1">
            <h1 className="font-bold text-4xl">Forgot Password?</h1>
            <p className="text-gray-500">
              Don't worry,it happned to the best of us.
            </p>
          </div>

          {/* input Fields */}
          <div className="flex flex-col gap-4 w-[30vw]">
            <input
              type="text"
              placeholder="Enter Your Registered Email"
              className="border-1 text-gray-500 rounded-xl p-2"
            />
            {/* <br /> */}
            {/* Sign In button */}
            <button className="p-2 w-full bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 cursor-pointer">
              {" "}
              Send Reset Istruction
            </button>

            <div className="flex justify-center items-center w-full">
              <Link to="/login" className="text-green-500 hover:decoration-1 hover:underline cursor-pointer">
                {" "}
                Back to Sign in
              </Link>
            </div>
          </div>
        </div>

        {/* Right hand side  */}
        <div className="w-[50vw] h-[100vh] p-[34px]  ">
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

export default Forgot_Password;
