import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  FaUser,
  FaSearch,
  FaHeart,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      window.location.href = `/search?query=${query}`;
    }
  };

  return (
    <>
      {/* 🔍 Full-width Search Overlay */}
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transform transition-transform duration-300 ${
          showSearch ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* Input Field */}
          <form onSubmit={handleSearch} className="flex w-full">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full text-lg px-4 py-2 outline-none border-b border-gray-300"
            />
            <button
              type="submit"
              className="ml-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Search
            </button>
          </form>

          {/* Close Button */}
          <button
            onClick={() => setShowSearch(false)}
            className="ml-4 text-2xl text-gray-600 hover:text-black"
          >
            <FaTimes />
          </button>
        </div>
      </div>

      {/* 🟢 Announcement Bar */}
      <div className="w-full bg-[#702a21f4] h-10 text-white overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee p-2">
          <p>🌿Welcome to HIMVEDA Naturals...!🌿</p>
          <p>🌱 100% Natural & Organic Products </p>
          <p>🚚 Fast Delivery </p>
          <p>🎉 Free shipping on orders above Rs. 999!</p>
          <p>🌿Welcome to HIMVEDA Naturals...!🌿</p>
          <p>🌱 100% Natural & Organic Products</p>
          <p>🚚 Fast Delivery</p>
          <p>🎉 Free shipping on orders above Rs. 999!</p>
        </div>
      </div>

      {/* 🟢 Navbar */}
      <nav className="w-full shadow-sm bg-white px-10 py-3 grid grid-cols-3 items-center mb-1">
        {/* Left - Hamburger (Mobile) */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Left Menu (Desktop Only) */}
        <div className="hidden lg:flex items-center space-x-6 text-[15px]">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <Link to="/about" className="hover:text-green-600">About</Link>
          <Link to="/shop" className="hover:text-green-600">Shop</Link>
          <Link to="/sales" className="hover:text-green-600">Sales</Link>
          <Link to="/blog" className="hover:text-green-600">Blog</Link>
          <Link to="/contact" className="hover:text-green-600">Contact</Link>
        </div>

        {/* Center Logo */}
        <div className="flex justify-center">
          <img src="/logo.png" alt="Logo" className="h-16" />
        </div>

        {/* Right Icons */}
        <div className="flex items-center justify-end space-x-6 text-gray-700">
          <Link
            to="/login"
            className="hidden lg:flex items-center gap-2 font-semibold hover:text-green-600"
          >
            <FaUser /> Login
          </Link>

          {/* Search Button */}
          <FaSearch
            className="cursor-pointer hover:text-green-600 hidden md:block"
            onClick={() => setShowSearch(true)}
          />

          {/* Wishlist */}
          <Link to="/wishlist">
            <FaHeart className="hover:text-green-600" />
          </Link>

          {/* Cart */}
          <a href="/cart">
            <FaShoppingBag className="hover:text-green-600" />
          </a>
        </div>

        {/* Mobile Menu Drawer */}
        {isOpen && (
          <div className="absolute top-14 left-0 w-full bg-white shadow-lg lg:hidden z-50">
            {/* Close Button inside drawer */}
            <div className="flex justify-end px-6 pt-4">
              <button onClick={() => setIsOpen(false)} className="text-2xl">
                <FaTimes />
              </button>
            </div>

            <div className="flex flex-col items-center space-y-4 py-6 font-semibold">
              <a href="/" className="hover:text-green-600">Home</a>
              <a href="/about" className="hover:text-green-600">About</a>
              <a href="/shop" className="hover:text-green-600">Shop</a>
              <a href="/blog" className="hover:text-green-600">Blog</a>
              <a href="/contact" className="hover:text-green-600">Contact</a>

              <form onSubmit={handleSearch} className="flex w-3/4">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search..."
                  className="px-3 py-2 w-full border rounded-l-md outline-none"
                />
                <button
                  type="submit"
                  className="bg-green-600 text-white px-3 py-2 rounded-r-md hover:bg-green-700"
                >
                  Go
                </button>
              </form>

              <a href="/login" className="flex items-center gap-2 hover:text-green-600">
                <FaUser /> Login
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;























// import { Link } from "react-router-dom";
// import React, { useState } from "react";
// import {
//   FaUser,
//   FaSearch,
//   FaHeart,
//   FaShoppingBag,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);
//   const [query, setQuery] = useState("");

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (query.trim() !== "") {
//       window.location.href = `/search?query=${query}`;
//     }
//   };

//   return (
//     <>
//       {/* 🔍 Full-width Search Overlay */}
//       <div
//         className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transform transition-transform duration-300 ${
//           showSearch ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
//         <div className="flex items-center justify-between px-6 py-4">
//           {/* Input Field */}
//           <form onSubmit={handleSearch} className="flex w-full">
//             <input
//               type="text"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               placeholder="Search products..."
//               className="w-full text-lg px-4 py-2 outline-none border-b border-gray-300"
//             />
//             <button
//               type="submit"
//               className="ml-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
//             >
//               Search
//             </button>
//           </form>

//           {/* Close Button */}
//           <button
//             onClick={() => setShowSearch(false)}
//             className="ml-4 text-2xl text-gray-600 hover:text-black"
//           >
//             <FaTimes />
//           </button>
//         </div>
//       </div>

//       {/* 🟢 Announcement Bar */}
//       <div className="w-full bg-[#702a21f4] h-10 text-white overflow-hidden relative">
//         <div className="flex whitespace-nowrap animate-marquee p-2">
//           <p>🌿Welcome to HIMVEDA Naturals...!🌿</p>
//           <p>🌱 100% Natural & Organic Products </p>
//           <p>🚚 Fast Delivery </p>
//           <p>🎉 Free shipping on orders above Rs. 999!</p>
//           <p>🌿Welcome to HIMVEDA Naturals...!🌿</p>
//           <p>🌱 100% Natural & Organic Products</p>
//           <p>🚚 Fast Delivery</p>
//           <p>🎉 Free shipping on orders above Rs. 999!</p>
//         </div>
//       </div>

//       {/* 🟢 Navbar */}
//       <nav className="w-full shadow-sm bg-white px-10 py-3 grid grid-cols-3 items-center mb-1">
//         {/* Left - Hamburger (Mobile) */}
//         <div className="lg:hidden">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
//           </button>
//         </div>

//         {/* Left Menu (Desktop Only) */}
//         <div className="hidden lg:flex items-center space-x-6 text-[15px]">
//           <Link to="/" className="hover:text-green-600">Home</Link>
//           <Link to="/about" className="hover:text-green-600">About</Link>
//           <Link to="/shop" className="hover:text-green-600">Shop</Link>
//           <Link to="/sales" className="hover:text-green-600">Sales</Link>
//           <Link to="/blog" className="hover:text-green-600">Blog</Link>
//           <Link to="/contact" className="hover:text-green-600">Contact</Link>
//         </div>

//         {/* Center Logo */}
//         <div className="flex justify-center">
//           <img src="/logo.png" alt="Logo" className="h-16" />
//         </div>

//         {/* Right Icons */}
//         <div className="flex items-center justify-end space-x-6 text-gray-700">
//           <Link
//             to="/login"
//             className="hidden lg:flex items-center gap-2 font-semibold hover:text-green-600"
//           >
//             <FaUser /> Login
//           </Link>

//           {/* Search Button */}
//           <FaSearch
//             className="cursor-pointer hover:text-green-600"
//             onClick={() => setShowSearch(true)}
//           />

//           {/* Wishlist */}
//           <Link to="/wishlist">
//             <FaHeart className="hover:text-green-600" />
//           </Link>

//           {/* Cart */}
//           <a href="/cart">
//             <FaShoppingBag className="hover:text-green-600" />
//           </a>
//         </div>

//         {/* Mobile Menu Drawer */}
//         {isOpen && (
//           <div className="absolute top-14 left-0 w-full bg-white shadow-lg lg:hidden z-50">
//             <div className="flex flex-col items-center space-y-4 py-6 font-semibold">
//               <a href="/" className="hover:text-green-600">Home</a>
//               <a href="/about" className="hover:text-green-600">About</a>
//               <a href="/shop" className="hover:text-green-600">Shop</a>
//               <a href="/blog" className="hover:text-green-600">Blog</a>
//               <a href="/contact" className="hover:text-green-600">Contact</a>

//               <form onSubmit={handleSearch} className="flex w-3/4">
//                 <input
//                   type="text"
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                   placeholder="Search..."
//                   className="px-3 py-2 w-full border rounded-l-md outline-none"
//                 />
//                 <button
//                   type="submit"
//                   className="bg-green-600 text-white px-3 py-2 rounded-r-md hover:bg-green-700"
//                 >
//                   Go
//                 </button>
//               </form>

//               <a href="/login" className="flex items-center gap-2 hover:text-green-600">
//                 <FaUser /> Login
//               </a>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Header;























// Sample 2
// import { Link } from "react-router-dom";
// import React, { useState } from "react";
// import {
//   FaUser,
//   FaSearch,
//   FaHeart,
//   FaShoppingBag,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);
//   const [query, setQuery] = useState("");

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (query.trim() !== "") {
//       window.location.href = `/search?query=${query}`;
//     }
//   };

//   return (
//     <>
//       {/* Announcement Bar */}
//       <div className="w-full bg-[#702a21f4] h-10 text-white overflow-hidden relative">
//         <div className="flex whitespace-nowrap animate-marquee p-2">
//           <p>🌿Welcome to HIMVEDA Naturals...!🌿</p>
//           <p>🌱 100% Natural & Organic Products </p>
//           <p>🚚 Fast Delivery </p>
//           <p>🎉 Free shipping on orders above Rs. 999!</p>

//           {/* duplicate for smooth loop */}
//           <p>🌿Welcome to HIMVEDA Naturals...!🌿</p>
//           <p>🌱 100% Natural & Organic Products</p>
//           <p>🚚 Fast Delivery</p>
//           <p>🎉 Free shipping on orders above Rs. 999!</p>
//         </div>
//       </div>

//       {/* Navbar */}
//       <nav className="w-full shadow-sm bg-white px-10 py-3 grid grid-cols-3 items-center mb-1">
//         {/* Left - Hamburger for Mobile */}
//         <div className="lg:hidden">
//           <button onClick={() => setIsOpen(true)}>
//             <FaBars size={22} />
//           </button>
//         </div>

//         {/* Left Menu (Desktop Only) */}
//         <div className=" hidden lg:flex items-center space-x-6 text-[15px] ">
//           <Link
//             to="/"
//             className=" hover:text-green-600 hover:underline hover:underline-offset-4"
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className="hover:text-green-600 hover:underline hover:underline-offset-4"
//           >
//             About
//           </Link>
//           <Link
//             to="/shop"
//             className="hover:text-green-600 hover:underline hover:underline-offset-4"
//           >
//             Shop
//           </Link>
//           <Link
//             to="/sales"
//             className="hover:text-green-600 hover:underline hover:underline-offset-4"
//           >
//             Sales
//           </Link>
//           <Link
//             to="/blog"
//             className="hover:text-green-600 hover:underline hover:underline-offset-4"
//           >
//             Blog
//           </Link>
//           <Link
//             to="/contact"
//             className="hover:text-green-600 hover:underline hover:underline-offset-4"
//           >
//             Contact
//           </Link>
//         </div>

//         {/* Center Logo */}
//         <div className="flex justify-center ">
//           <img src="/logo.png" alt="Logo" className="h-16" />
//         </div>

//         {/* Right Side - Icons */}
//         <div className="flex items-center justify-end space-x-6 text-gray-700">
//           <Link
//             to="/login"
//             className="hidden lg:flex items-center gap-2 font-semibold hover:text-green-600 "
//           >
//             <FaUser /> Login
//           </Link>

//           {/* Search */}
//           <div className="relative hidden md:block">
//             <FaSearch
//               className="cursor-pointer hover:text-green-600"
//               onClick={() => setShowSearch(!showSearch)}
//             />
//             {showSearch && (
//               <form
//                 onSubmit={handleSearch}
//                 className="left-20 top-0 bg-white border rounded-md shadow-md flex"
//               >
//                 <input
//                   type="text"
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                   placeholder="Search..."
//                   className=" w-screen outline-none"
//                 />
//                 <button
//                   type="submit"
//                   className="bg-green-600 text-white px-3 py-2 rounded-r-md hover:bg-green-700"
//                 >
//                   Go
//                 </button>
//               </form>
//             )}
//           </div>

//           {/* Wishlist */}
//           <div className="relative cursor-pointer">
//             <Link to="/wishlist">
//               <FaHeart className="hover:text-green-600" />
//             </Link>
//           </div>

//           {/* Cart */}
//           <div className="cursor-pointer">
//             <a href="/cart">
//               <FaShoppingBag className="hover:text-green-600" />
//             </a>
//           </div>
//         </div>

//         {/* Mobile Menu Drawer */}
//         {isOpen && (
//           <div className="absolute top-0 left-0 w-full h-screen bg-white shadow-lg lg:hidden z-50">
//             {/* Cross button inside drawer */}
//             <div className="flex justify-end px-6 pt-6">
//               <button onClick={() => setIsOpen(false)}>
//                 <FaTimes size={28} className="text-gray-700 hover:text-green-600" />
//               </button>
//             </div>

//             {/* Drawer Menu Links */}
//             <div className="flex flex-col items-center space-y-6 py-6 font-semibold">
//               <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-green-600">
//                 Home
//               </Link>
//               <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-green-600">
//                 About
//               </Link>
//               <Link to="/shop" onClick={() => setIsOpen(false)} className="hover:text-green-600">
//                 Shop
//               </Link>
//               <Link to="/sales" onClick={() => setIsOpen(false)} className="hover:text-green-600">
//                 Sales
//               </Link>
//               <Link to="/blog" onClick={() => setIsOpen(false)} className="hover:text-green-600">
//                 Blog
//               </Link>
//               <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-green-600">
//                 Contact
//               </Link>

//               {/* Search in drawer */}
//               <form onSubmit={handleSearch} className="flex w-3/4">
//                 <input
//                   type="text"
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                   placeholder="Search..."
//                   className="px-3 py-2 w-full border rounded-l-md outline-none"
//                 />
//                 <button
//                   type="submit"
//                   className="bg-green-600 text-white px-3 py-2 rounded-r-md hover:bg-green-700"
//                 >
//                   Go
//                 </button>
//               </form>

//               <Link
//                 to="/login"
//                 onClick={() => setIsOpen(false)}
//                 className="flex items-center gap-2 hover:text-green-600"
//               >
//                 <FaUser /> Login
//               </Link>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Header;


















// import { Link } from "react-router-dom";
// import React, { useState } from "react";
// import { FaUser, FaSearch, FaHeart, FaShoppingBag, FaBars, FaTimes, } from "react-icons/fa";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);
//   const [query, setQuery] = useState("");

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (query.trim() !== "") {
//       // Example: Redirect to search page with query
//       window.location.href = `/search?query=${query};`
//     }
//   };

//   return (
//     <>

//       {/* Announcement Bar */}
//       <div className="w-full bg-[#702a21f4] h-10 text-white overflow-hidden relative">
//         <div className="flex whitespace-nowrap animate-marquee p-2">
//           <p>🌿Welcome to HIMVEDA Naturals...!🌿</p>
//           <p>🌱 100% Natural & Organic Products </p>
//           <p>🚚 Fast Delivery </p>
//           <p>🎉 Free shipping on orders above Rs. 999!</p>

//           {/* duplicate for smooth loop */}
//           <p>🌿Welcome to HIMVEDA Naturals...!🌿</p>
//           <p>🌱 100% Natural & Organic Products</p>
//           <p>🚚 Fast Delivery</p>
//           <p>🎉 Free shipping on orders above Rs. 999!</p>
//         </div>
//       </div>


//       <nav className="w-full shadow-sm bg-white px-10 py-3 grid grid-cols-3 items-center mb-1">
//         {/* Left - Hamburger for Mobile */}
//         <div className="lg:hidden">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
//           </button>
//         </div>

//         {/* Left Menu (Desktop Only) */}
//         <div className=" hidden lg:flex items-center space-x-6 text-[15px] ">
//           <Link to="/" className=" hover:text-green-600 hover:underline hover:underline-offset-4">Home</Link>
//           <Link to="/about" className="hover:text-green-600 hover:underline hover:underline-offset-4">About</Link>
//           <Link to="/shop" className="hover:text-green-600 hover:underline hover:underline-offset-4">Shop</Link>
//           <Link to="/sales" className="hover:text-green-600 hover:underline hover:underline-offset-4">Sales</Link>
//           <Link to="/blog" className="hover:text-green-600 hover:underline hover:underline-offset-4">Blog</Link>
//           <Link to="/contact" className="hover:text-green-600 hover:underline hover:underline-offset-4">Contact</Link>
//         </div>

//         {/* Center Logo */}
//         <div className="flex justify-center ">
//           <img src="/logo.png" alt="Logo" className="h-16" />
//         </div>

//         {/* Right Side - Icons */}
//         <div className="flex items-center justify-end space-x-6 text-gray-700">
//           <Link to="/login" className="hidden lg:flex items-center gap-2 font-semibold hover:text-green-600 ">
//             <FaUser /> Login
//           </Link>

//           {/* Search */}
//           <div className="relative">
//             <FaSearch
//               className="cursor-pointer hover:text-green-600"
//               onClick={() => setShowSearch(!showSearch)}
//             />
//             {showSearch && (
//               <form
//                 onSubmit={handleSearch}
//                 className="absolute right-0 top-8 bg-white border rounded-md shadow-md flex"
//               >
//                 <input
//                   type="text"
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                   placeholder="Search..."
//                   className="px-3 py-2 w-48 outline-none"
//                 />
//                 <button
//                   type="submit"
//                   className="bg-green-600 text-white px-3 py-2 rounded-r-md hover:bg-green-700"
//                 >
//                   Go
//                 </button>
//               </form>
//             )}
//           </div>

//           {/* Wishlist with badge */}
//           <div className="relative cursor-pointer">
//             <Link to="/wishlist"><FaHeart className="hover:text-green-600" /></Link>
//           </div>

//           {/* Cart with badge */}
//           <div className="cursor-pointer">
//             <a href="/cart">
//               <FaShoppingBag className="hover:text-green-600" />
//             </a>
//           </div>
//         </div>

//         {/* Mobile Menu Drawer */}
//         {isOpen && (
//           <div className="absolute top-14 left-0 w-full bg-white shadow-lg lg:hidden z-50">
//             <div className="flex flex-col items-center space-y-4 py-6 font-semibold">
//               <a href="/" className="hover:text-green-600">Home</a>
//               <a href="/about" className="hover:text-green-600">About</a>
//               <a href="/shop" className="hover:text-green-600">Shop</a>
//               <a href="/blog" className="hover:text-green-600">Blog</a>
//               <a href="/contact" className="hover:text-green-600">Contact</a>
//               <form onSubmit={handleSearch} className="flex w-3/4">
//                 <input
//                   type="text"
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                   placeholder="Search..."
//                   className="px-3 py-2 w-full border rounded-l-md outline-none"
//                 />
//                 <button
//                   type="submit"
//                   className="bg-green-600 text-white px-3 py-2 rounded-r-md hover:bg-green-700"
//                 >
//                   Go
//                 </button>
//               </form>
//               <a href="/login" className="flex items-center gap-2 hover:text-green-600">
//                 <FaUser /> Login
//               </a>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Header;