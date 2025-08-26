import our_banner from "../../assets/images/our-banner.png";
import our1 from "../../assets/images/our1.png";
import LeftSidebar from "../Sections/LeftSidebar";
import { useNavigate } from "react-router-dom";
// import { FaHeart, FaShareAlt } from "react-icons/fa";
import { LuHeart, LuShare2 } from "react-icons/lu";

const Shop = () => {
  const cards = [1, 2, 3, 4, 5, 6];

  const navigate = useNavigate();

  return (
    <div className="pb-28">

      {/* first section */}
      <div className="p-14 mt-7 h-56 flex flex-col justify-center items-center font-bold text-white"
        style={{
          backgroundImage: `url(${our_banner})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-4xl font-bold mb-4">Shop</h1>
        <h1 className="text-lg md:text-xl">Home/Shop</h1>
      </div>

      {/* Shop nav */}
      <div className="w-full border border-gray-200 pb-1 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-4 text-gray-500 text-sm">

          {/* categories */}
          <p className="mb-2 md:mb-0 tracking-wide font-semibold text-xl text-black">Categories</p>

          {/* Left: results count */}
          <p className="mb-2 md:mb-0 tracking-wide">
            Showing <span className="font-medium text-gray-700">1–18</span> of{" "}
            <span className="font-medium text-gray-700">35</span> results
          </p>

          {/* Right: filters */}
          <div className="flex space-x-6 pt-1">
            {/* Sort Dropdown */}
            <div className="flex items-center space-x-1 outline-none">
              <span className="uppercase tracking-wide">Sort by</span>
              <select className=" bg-white border border-gray-300  text-gray-700 text-sm font-semibold px-2 py-1 rounded focus:outline-none">
                <option>Default</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className="w-full pt-3 flex flex-col md:flex-row">
        {/* left section */}
        <div className="w-full md:w-[50%] border-l flex justify-center pt-4">
          <LeftSidebar />
        </div>

        {/* right section */}
        <div className="w-full md:w-[80%] flex flex-wrap justify-center gap-4 p-4">
          {cards.map((item, index) => (
            <div onClick={() => navigate("/productdetail")}
              key={index}
              className="w-[100%] sm:w-[50%] md:w-[45%] lg:w-[30%] bg-white border hover:cursor-pointer border-gray-200 rounded-lg shadow p-4">

              {/* wishlist & share icon */}
              <div className="flex justify-end ">
                <div className="rounded-full p-2 border-gray-300 border ">
                  <LuHeart className=" " />
                </div>
                <div className="rounded-full p-2 ml-2 border-gray-300 border ">
                  <LuShare2 className="" />
                </div>
              </div>

              {/* Product Image */}
              <img className="rounded-t-lg w-full h-48 object-contain"
                src={our1}
                alt="Diabetic Care Juice" />

              {/* Product Info */}
              <div className="pt-4" >
                <h5 className="text-sm font-semibold text-gray-800 leading-tight">
                  Pure 100% Herbal Baby Oil - Nourishing, Non-sticky Baby
                  Massage Oil (100 ml)
                </h5>

                {/* Price Section */}
                <div className="mt-2 flex items-center space-x-2">
                  <span className="text-green-600 font-bold text-lg">₹555</span>
                  <span className="text-gray-400 line-through text-sm">
                    ₹666
                  </span>
                  <span className="text-red-600 text-sm font-semibold">
                    150% Off
                  </span>
                </div>

                {/* Ratings */}
                {/* <div className="mt-2 flex items-center text-yellow-500 text-sm">
                  <span>★★★★★</span>
                  <span className="text-gray-600 ml-2">(265 ratings)</span>
                </div> */}

                {/* wishlist button */}
                {/* <div className="relative cursor-pointer justify-center flex border gap-x-4 rounded p-1.5 mt-3 border-black hover:bg-red-600 hover:text-white hover:border-none">
                  <FaHeart className="hover:text-white mt-1 " />
                  <button>Add to Wishlist</button>
                </div> */}

                {/* Add to Cart Button */}
                {/* <button className="mt-4 w-full flex items-center justify-center px-4 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007 17h12m-5 4a1 1 0 100-2 1 1 0 000 2zm-6 0a1 1 0 100-2 1 1 0 000 2z" />
                  </svg>
                  Add to cart
                </button> */}
                <button className="w-full  cursor-pointer flex items-center justify-center py-1.5 bg-red-900 text-white rounded hover:bg-red-950 text-sm">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007 17h12m-5 4a1 1 0 100-2 1 1 0 000 2zm-6 0a1 1 0 100-2 1 1 0 000 2z" />
                  </svg>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Shop;
