import whiteLogo from "../../assets/whiteLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* footer section 14th section */}
      <div className="flex flex-col justify-center items-center p-[40px] bg-blue-200">
        <img className="h-[120px]" src={whiteLogo} alt="" />
        <hr className="border-t-2 border-gray-400 my-4 w-[96%]" />

        {/* Footer Links */}
        <div className="bg-green-100 w-[95%] p-4 sm:p-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-800 text-sm">
            {/* About */}
            <div>
              <h3 className="font-bold text-xl mb-2">About</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    » Company
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    » FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    » Quality
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    » Gift Cards
                  </a>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">
                    » Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Shop */}
            <div>
              <h3 className="font-bold text-xl mb-2">Shop</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    » Loose Leaf Tea
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    » Green Teas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    » Packaged Teas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    » Teaware
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    » Tea Gifts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    » Iced Tea
                  </a>
                </li>
              </ul>
            </div>

            {/* Help Center */}
            <div>
              <h3 className="font-bold text-xl mb-2">Help Center</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    » Delivery Information
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    » Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    » Returns & Refunds
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    » Privacy Notice
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    » Shopping
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    » FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Get in Touch */}
            <div>
              <h3 className="font-bold text-xl mb-2">Get in Touch</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">📍</span>
                  <span>123 Street, New York, USA</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📞</span>
                  <span>+012 345 67890</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✉️</span>
                  <span>info@example.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-t-2 border-gray-400 my-4 w-[96%]" />

        <div className="flex justify-center items-center font-bold text-center px-4">
          <h1>Your Site Name All Rights Reserved. Designed</h1>
        </div>
      </div>
    </>
  );
};
export default Footer;
