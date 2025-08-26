import { Link } from "react-router-dom";
import { useState } from "react";
import { FaShoppingBag, FaUserAlt, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/final logo.png"; // adjust path as needed

const Header2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center p-4 lg:px-10">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Company Logo" className="h-16" />
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-3xl text-red-900 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-lg font-medium">
          <Link
            to="/"
            className="text-red-900 hover:text-green-600 hover:underline"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-red-900 hover:text-green-600 hover:underline"
          >
            Shop
          </Link>
          <Link
            to="/sales"
            className="text-red-900 hover:text-green-600 hover:underline"
          >
            Sales
          </Link>
          <Link
            to="/blog"
            className="text-red-900 hover:text-green-600 hover:underline"
          >
            Blog
          </Link>
          {/* <Link
            to="/ingredient"
            className="text-red-900 hover:text-green-600 hover:underline"
          >
            Ingredients
          </Link> */}

          {/* Cart & Login */}
          <div className="flex items-center gap-6 ml-6">
            <div className="flex items-center gap-2 cursor-pointer hover:text-green-700">
              <FaShoppingBag className="text-2xl" />
              <span>Cart</span>
            </div>
            {/* <div className="flex items-center gap-2 cursor-pointer hover:text-green-700">
              <FaUserAlt className="text-2xl" />
              <Link to="/login">Login</Link>
            </div> */}
            
          </div>
        </nav>
      </div>

      {/* Mobile Menu (Dropdown or Slide-in) */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-6 bg-white p-6 shadow-md text-lg font-semibold text-red-900 animate-slideDown">
          <Link onClick={() => setMenuOpen(false)} to="/">
            Home
          </Link>
          <Link onClick={() => setMenuOpen(false)} to="/shop">
            Shop
          </Link>
          <Link onClick={() => setMenuOpen(false)} to="/sales">
            Sales
          </Link>
          <Link onClick={() => setMenuOpen(false)} to="/blog">
            Blog
          </Link>
          <Link onClick={() => setMenuOpen(false)} to="/ingredient">
            Ingredients
          </Link>

          {/* Cart & Login in mobile too */}
          <div className="flex items-center gap-2 hover:text-green-700">
            <FaShoppingBag className="text-xl" />
            <span>Cart</span>
          </div>
          <div className="flex items-center gap-2 hover:text-green-700">
            <FaUserAlt className="text-xl" />
            <Link onClick={() => setMenuOpen(false)} to="/login">
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header2;
