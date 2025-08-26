import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 px-6 py-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-x-9 gap-y-10 justify-items-center border-b border-gray-700 pb-10">
        
        {/* Logo + About */}
        <div className="pl-6 flex flex-col items-center text-center space-y-4 md:items-start md:text-left">
          <img
            src="/imags/whiteLogo.png" // replace with your logo
            alt="Himvedaa Logo"
            className="h-14"
          />
          <p className="text-sm leading-relaxed max-w-xs">
            Graphy empowers teams to transform raw data into clear, compelling visuals —
            making insights easier to share, understand, and act on.
          </p>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="p-1 rounded-full bg-black  hover:bg-white hover:text-black transition-all duration-300 shadow-sm"><FaInstagram /></a>
            <a href="#" className="p-1 rounded-full bg-black  hover:bg-white  hover:text-black transition-all duration-300 shadow-sm"><FaFacebook /></a>
            <a href="#" className="p-1 rounded-full bg-black  hover:bg-white hover:text-black transition-all duration-300 shadow-sm"><FaLinkedin /></a>
            <a href="#" className="p-1 rounded-full bg-black  hover:bg-white hover:text-black transition-all duration-300 shadow-sm"><FaXTwitter /></a>
          </div>
        </div>

        {/* Product */}
        <div className="text-center md:text-left ">
          {/* <h3 className="text-white font-semibold mb-4">Product</h3> */}
          <h3 className="text-white font-semibold mb-4">My Account</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-green-600 text-sm">My Account</a></li>
            <li><a href="#" className="hover:text-green-600 text-sm">Wishlist</a></li>
            <li><a href="#" className="hover:text-green-600 text-sm">Order History</a></li>
            <li><a href="/blog" className="hover:text-green-600 text-sm">Newsletter</a></li>
            
          </ul>
        </div>

        {/* Resources */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-semibold mb-4">Product</h3>
          <ul className="space-y-1">
            {/* <li><a href="#" className="hover:text-green-600 text-sm">Foundation</a></li> */}
            <li><a href="#" className="hover:text-green-600 text-sm">Face Products</a></li>
            <li><a href="#" className="hover:text-green-600 text-sm">Body Care</a></li>
            <li><a href="#" className="hover:text-green-600 text-sm">Hair Care</a></li>
            <li><a href="#" className="hover:text-green-600 text-sm">Herbal Products</a></li>
            <li><a href="#" className="hover:text-green-600 text-sm">Our Combos</a></li>
            {/* <li><a href="#" className="hover:text-green-600 text-sm">Documentation</a></li>
            <li><a href="#" className="hover:text-green-600 text-sm">Tutorials</a></li>
            <li><a href="#" className="hover:text-green-600 text-sm">Blog</a></li>
            <li><a href="#" className="hover:text-green-600 text-sm">Support</a></li> */}
          </ul>
        </div>

        {/* Company */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-1">
            <li><Link to="/about" className="hover:text-green-600 text-sm">About</Link></li>
            <li><Link to="/contact" className="hover:text-green-600 text-sm">Contact</Link></li>
            <li><Link to="/blog" className="hover:text-green-600 text-sm">Blog</Link></li>
            <li><Link to="/" className="hover:text-green-600 text-sm">Support</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-400 text-center md:text-left">
        <p>© 2025 Himvedaa. All rights reserved.</p>
        <div className="flex space-x-6 mt-2 md:mt-0">
          <a href="#" className="hover:text-green-600">Privacy Policy</a>
          <a href="#" className="hover:text-green-600">Terms of Service</a>
          <a href="#" className="hover:text-green-600">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;









// sample 1


// import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
// import whiteLogo from "../../assets/whiteLogo.png";
// import { FaXTwitter } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import { Contact } from "lucide-react";

// const Footer2 = () => {

//   return (
//     <footer className="border-t text-white bg-black border-none">
//       <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

//           {/* Left section with logo and text */}
//           <div className="md:col-span-1">
//             <div className="flex items-center gap-2 mb-4">
//               <div>
//                <img className="h-[60px]" src={whiteLogo} alt="" />
//               </div>
              
//             </div>
//             <p className="text-sm leading-relaxed">
//               Graphy empowers teams to transform raw data into clear, compelling
//               visuals — making insights easier to share, understand, and act on.
//             </p>
//             <div className="flex gap-4 mt-5">
//               {[FaInstagram, FaLinkedin, FaFacebook, FaXTwitter].map((Icon, idx) => (
//                 <a
//                   key={idx}
//                   href="#"
//                   className="p-2 rounded-full bg-black  hover:bg-white hover:text-black transition-all duration-300 shadow-sm"
//                 >
//                   <Icon size={18} />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Footer navigation */}
//           <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 text-sm">
//             <div>
//               <h4 className="font-semibold mb-3 text-white text-xl ">Product</h4>
//               <ul className="space-y-2">
//                 {["Foundation", "Face", "Body", "hair Care","Herbal Products","Our Combos"].map((item) => (
//                   <li key={item}>
//                     <a
//                       href="#"
//                       className="hover:text-blue-600 transition-colors duration-200 hover:underline hover:decoration-1"
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-3 text-xl text-white">Resources</h4>
//               <ul className="space-y-2">
//                 {["Documentation", "Tutorials", "Blog", "Support"].map((item) => (
//                   <li key={item}>
//                     <a
//                       href="#"
//                       className="hover:text-blue-600 transition-colors duration-200 hover:underline hover:decoration-1"
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold mb-2 text-xl text-white">Company</h4>
//                 <ul className="space-y-2">
//                 <li className="mt-3">
//                   <a className="hover:text-blue-600 transition-colors duration-200 hover:underline hover:decoration-1" href="/about">About</a>
//                 </li>
//                 <li>
//                   <a className="hover:text-blue-600 transition-colors duration-200 hover:underline hover:decoration-1" href="/contact">Contact</a>
//                 </li>
//                 <li>
//                   <a className="hover:text-blue-600 transition-colors duration-200 hover:underline hover:decoration-1" href="/">Carrers</a>
//                 </li>
              
//                 <li>
//                   <a className="hover:text-blue-600 transition-colors duration-200 hover:underline hover:decoration-1" href="/">Partners</a>
//                 </li>
//                 </ul>

//               {/* <ul className="space-y-2">
//                 {["About","Contact", "Careers", "Partners"].map((item) => (
//                   <li key={item}>
//                     <a
//                       href="#"
//                       className="hover:text-blue-600 transition-colors duration-200 hover:underline hover:decoration-1"
//                     >
//                       {item}
//                     </a>
                    
//                   </li>
//                 ))}
//               </ul> */}
//             </div>
//           </div>
//         </div>

//         {/* Footer bottom */}
//         <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-2">
//           <span>© 2025 Graphy. All rights reserved.</span>
//           <div className="flex gap-4">
//             {["Privacy Policy", "Terms of Service", "Cookies Settings"].map((link) => (
//               <a
//                 key={link}
//                 href="#"
//                 className="hover:text-blue-600 transition-colors duration-200 hover:underline hover:decoration-1"
//               >
//                 {link}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer2;
