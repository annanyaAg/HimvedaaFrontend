import { Route, Routes, Router, useLocation } from "react-router-dom"
import Login from "./Components/Pages/Login"
import Register from "./Components/Pages/Register"
import Forgot_Password from "./Components/Pages/Forgot_Password"
import Home from "./Components/Pages/Home"
import Shop from "./Components/Pages/Shop"
import Sales from "./Components/Pages/Sales"
import Blog from "./Components/Pages/Blog"
import Header from "./Components/Sections/Header"
import Footer from "./Components/Sections/Footer"
import Header2 from "./Components/Sections/Header2"
import ProductDetail from "./Components/Pages/ProductDetail"
import Footer2 from "./Components/Sections/Footer2"
import Contact from "./Components/Pages/Contact"
import About from "./Components/Pages/About"
import Cart from "./Components/Pages/Cart"
import Wishlist from "./Components/Pages/Wishlist"
import BlogDetail from "./Components/Pages/BlogDetail"

import ScrollToTop from "./ScrollToTop"

function App() {
  const location = useLocation();

  // Define routes where Header should be hidden
  const hideHeaderRoutes = ["/login", "/register", "/forgotPassword"];

  return (
    <>
      {/* Show Header only if current path is NOT in hideHeaderRoutes */}
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}


        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/shop" element={<Shop />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path="/productdetail" element={<ProductDetail/>} />
          <Route path="/blogdetail" element={<BlogDetail/>} />
          <Route path="/forgotPassword" element={<Forgot_Password />} />
          {/* <Route path="/admin" element={<AdminPanel/>} /> */}
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer2 />

      
    </>
  );
}

export default App
