// import Header from "../Sections/Header";
import banner1 from "../../assets/images/banner1.png";
import praice from "../../assets/images/praice.png";
import protct from "../../assets/images/protct.png";
import imgProdct1 from "../../assets/images/img-prodct1.png";
import imgProdct2 from "../../assets/images/img-prodct2.png";
import h5_bg2 from "../../assets/images/h5_bg2.jpg";
import late1 from "../../assets/images/late1.png";
import late2 from "../../assets/images/late2.png";
import late3 from "../../assets/images/late3.png";
import late4 from "../../assets/images/late4.png";
import about1 from "../../assets/images/about1.png";
import about2 from "../../assets/images/about2.png";
import ft1_bg_1 from "../../assets/images/ft1_bg 1.png";
// import FooterIMG from "../../assets/images/FooterIMG.jpg";
import FooterIMG from "/imags/footerImgg.jpg";
import about3 from "../../assets/images/about3.png";
// import finallogo from "../../assets/final logo.png.png";
// import logo from "../../assets/final logo.png";
import pest from "../../assets/images/pest.png";
import testimonialsImage from "../../assets/images/testimonials.png";
import { FaShoppingCart } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";
import { FaFileArrowUp } from "react-icons/fa6";
// import Footer from "../Sections/Footer";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { LuHeart, LuShare2 } from "react-icons/lu";


const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Customer",
    text: "Himvedaa’s products have transformed my lifestyle. I feel more balanced and energized every day.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Verma",
    role: "Yoga Instructor",
    text: "I recommend Himvedaa to my students. Their Ayurvedic approach is authentic and effective.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Mehta",
    role: "Nutritionist",
    text: "I love how natural and pure the products are. Ayurveda has never been this easy to adopt.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Home = () => {
  const FirstSectionCards = [1, 2, 3];
  // const [firstSectionCards, setFirstSectionCards] = useState();

  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 30,
    minutes: 30,
    seconds: 30,
  });

  // Countdown logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  //for testimonials
  // const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % testimonials.length);
  //   }, 5000); // changes every 5s
  //   return () => clearInterval(timer);
  // }, []);

  // for testimonials
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide(); // cleanup
  }, [current]);

  const startAutoSlide = () => {
    stopAutoSlide(); // prevent multiple intervals
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };


  return (
    <>

      {/* first Section */}
      <div
        className="h-[80vh] md:h-[105vh] bg-cover bg-center text-white flex justify-center items-center"
        style={{ backgroundImage: `url(${banner1})` }}
      >
        <div className="flex flex-col justify-center items-center gap-6 border border-white/30 px-6 md:px-[160px] py-[60px] backdrop-blur-xs bg-white/10 rounded-bl-[120px] rounded-tr-[120px] text-center">
          {/* Headings */}
          <h1 className="text-4xl md:text-5xl font-bold font-serif leading-snug">
            Ecocert Certified <br />
            Organic & Natural
          </h1>

          {/* SubHeading */}
          <p className="text-base md:text-lg font-semibold">
            Environment friendly & sustainable
          </p>

          {/* Buttons */}
          <div className="flex gap-6">
            <button className="bg-green-600 text-white px-6 py-2 skew-x-[-12deg] hover:opacity-90">
              <span className="inline-block skew-x-[12deg]">View all</span>
            </button>
            <button className="bg-[#702a21f4] text-white px-6 py-2 skew-x-[-12deg] hover:opacity-90">
              <span className="inline-block skew-x-[12deg]">Shop Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* Second div new launch  */}
      <div className="flex flex-wrap justify-center items-center gap-6 p-[30px] bg-white">
        {/* <!-- Left Section --> */}
        <div className="w-full md:w-[200px] text-center flex flex-col justify-center items-center">
          <h2 className="text-lg font-bold text-red-900">New Launch</h2>
          <p className="text-sm mt-2 mb-4 text-gray-700">
            Explore our latest launch, a carefully made collection of herbal
            treasures designed as per requests made by you to Nanaji.
          </p>
          <button className="bg-green-600 cursor-pointer text-white font-normal px-6 py-[6px] skew-x-[-12deg] hover:opacity-90 text-[15px]">
            <span className="inline-block skew-x-[12deg]">View all</span>
          </button>
        </div>

        {/* <!-- Product Card 1 --> */}
        <div className="overflow-hidden w-[70%] bg-white py-10">
          <div
            className="flex w-max animate-slide gap-4"
            style={{
              animation: "scrollX 20s linear infinite",
            }}
          >
            {FirstSectionCards.concat(FirstSectionCards).map((cards, index) => (
              <div
                key={index}
                className="w-[315px] border border-gray-300 rounded-lg  shadow hover:shadow-lg relative flex-shrink-0"
              >
                <span className="absolute top-2.5 left-2.5 bg-green-700 text-white text-xs px-2 py-1 rounded">
                  Save ₹100.00
                </span>

                <div className="flex justify-end p-2 ">
                  <div className="rounded-full p-2 border-gray-300 border ">
                    <LuHeart className=" " />
                  </div>
                  <div className="rounded-full p-2 ml-2 border-gray-300 border ">
                    <LuShare2 className="" />
                  </div>
                </div>

                <div className="p-4 flex flex-col items-center text-center">
                  <img
                    src={protct}
                    alt="product"
                    className="h-70 mb-2 object-contain"
                  />
                  <h3 className="font-medium text-sm">
                    Rice Water for Hair and Skin
                  </h3>
                  <p className="text-xs text-gray-600 mt-1 mb-2">
                    The power of grain for your hair health gain.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm mb-3">
                    <span className="line-through text-gray-400">₹499.00</span>
                    <span className="font-semibold text-black">₹399.00</span>
                    {/* <span className="text-green-700 text-xs font-bold">
                      20% OFF
                    </span> */}
                  </div>
                  {/* <button className="bg-red-900 text-white w-full py-1 cursor-pointer rounded hover:bg-red-950 text-sm">
                    Add To Cart
                  </button> */}
                  <button className="w-full cursor-pointer flex items-center justify-center py-1.5 bg-red-900 text-white rounded hover:bg-red-950 text-sm">
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

      {/* second Section Deal of the END */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-full p-6 sm:p-10 md:p-20 bg-[#cce9d5]">
        {/* Left section */}
        <div className="w-full lg:w-[40%] flex justify-center items-center mb-8 lg:mb-0 ">
          <img className="w-full h-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            src={praice}
            alt="image" />
        </div>

        {/* Right section */}
        <div className="w-full bg-white p-2 sm:w-full lg:w-1/2 flex justify-center items-center ">
          <div className="w-full  max-w-2xl bg-white border-4 border-[#6a7a5d]  shadow-md p-6 sm:p-8 md:p-15 flex flex-col items-center gap-6">
            {/* Titles */}
            <h4 className="text-base sm:text-lg font-medium text-gray-600 text-center">
              Nature & Organic Shampoo
            </h4>
            <h1
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center"
              style={{ color: "#7b342d", fontFamily: "Open Sans" }}
            >
              DEALS OF THE DAY
            </h1>

            {/* Price */}
            <div className="flex justify-center items-center gap-4">

              <span className="line-through text-gray-500 text-lg pt-5">$99.99</span>
              <span className="text-5xl sm:text-5xl font-semibold text-green-600">
                $95.99
              </span>
            </div>

            {/* Description */}
            <div className="text-center px-2 sm:px-4">
              <p className="text-gray-700 mb-1 text-base sm:text-lg font-medium text-center">Fresh Organic Shampoo</p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit placeat a doloremque?
              </p>
            </div>

            {/* Timer */}
            <div className="flex gap-1 flex-wrap justify-center items-center">
              {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, idx) => {
                const value = Object.values(timeLeft)[idx];
                return (
                  <div key={label} className="border border-gray-400 flex flex-col items-center px-8 py-5 shadow-xl hover:shadow-2xl rounded-md">
                    <p className="font-bold text-xl sm:text-2xl text-gray-800">{String(value).padStart(2, '0')}</p>
                    <p className="text-sm text-gray-600">{label}</p>
                  </div>
                );
              })}
            </div>

            {/* Button */}
            <button className="px-6 py-2 mt-3 bg-green-600 text-white skew-x-[-12deg] font-semibold hover:bg-green-700 hover:scale-105 transition">
              <Link to="/cart"> <span className="inline-block skew-x-[12deg]">Shop Now</span></Link>
            </button>
          </div>
        </div>
      </div>

      {/* third section */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-10 py-14 ">
        <h2 className="text-center font-bold mb-10 text-3xl text-[#7b342d]">
          Our Product
        </h2>

        <div className="w-full flex flex-wrap justify-center gap-6">
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="border border-gray-300 rounded-lg shadow overflow-hidden flex flex-col relative px-[14px] pb-[14px]"
            >
              <span className="absolute top-2.5 left-2.5 bg-green-600 text-white text-xs px-2 py-1 rounded">
                Save ₹100.00
              </span>

              <div className="flex justify-end pt-1.5 ">
                <div className="rounded-full p-2 border-gray-300 border ">
                  <LuHeart className=" " />
                </div>
                <div className="rounded-full p-2 ml-2 border-gray-300 border ">
                  <LuShare2 className="" />
                </div>
              </div>

              <img src={protct} alt="Product" className="w-60 " />

              <div className="p-4 text-center">
                <h3 className="text-sm font-semibold text-gray-800">
                  Rice Water for Hair and Skin
                </h3>
                <p className="text-xs text-gray-500 my-2">
                  The power of grain for your hair health gain.
                </p>

                <div className="flex justify-center items-center gap-2">
                  <span className="text-sm text-gray-400 line-through">
                    ₹499.00
                  </span>
                  <span className="text-green-600 font-bold">₹399.00</span>
                  {/* <span className="text-white bg-green-600 text-xs px-2 py-0.5 rounded">
                    20% OFF
                  </span> */}
                </div>
              </div>

              <button className="w-full  cursor-pointer flex items-center justify-center py-1.5 bg-red-900 text-white rounded hover:bg-red-950 text-sm">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007 17h12m-5 4a1 1 0 100-2 1 1 0 000 2zm-6 0a1 1 0 100-2 1 1 0 000 2z" />
                </svg>
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* fifth section Two images  */}
      <div className="flex flex-col lg:flex-row justify-center bg-center bg-cover items-center px-4 sm:px-10 lg:px-[100px] py-3 pb-6 gap-6 w-full">
        <div className="relative w-full">
          <img
            src={imgProdct1}
            alt="Product"
            className="w-full h-auto object-cover"
          />
          <h1
            className="absolute top-4 left-4 text-5xl font-bold z-10 text-green-600"
            style={{ fontFamily: "Open Sans" }}
          >
            50% Sale <br />
            <span
              className="text-red-950 text-2xl"
              style={{ fontFamily: "Open Sans" }}
            >
              Winter Products
            </span>
          </h1>
          <br />
        </div>

        <div className="relative w-full ">
          <img
            src={imgProdct2}
            alt="Product"
            className="w-full h-auto object-cover"
          />
          <h1 className="absolute top-4 left-4 text-5xl font-bold z-10 text-green-600">
            25% Sale <br />
            <span className="text-red-950 text-2xl">Summer Products </span>
          </h1>
          <br />
        </div>
      </div>

      {/* Best seller */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-10  ">
        <h2 className="text-center font-bold mb-10 text-3xl text-[#7b342d]">
          Best Seller
        </h2>

        <div className="w-full flex flex-wrap justify-center gap-10">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="border border-gray-300 rounded-lg shadow-sm overflow-hidden flex flex-col relative px-[14px] pb-[14px]"
            >
              <span className="absolute top-2.5 left-2.5   bg-green-600 text-white text-xs px-2 py-1 rounded">
                Save ₹100.00
              </span>

              <div className="flex justify-end pt-1.5 ">
                <div className="rounded-full p-2 border-gray-300 border ">
                  <LuHeart className=" " />
                </div>
                <div className="rounded-full p-2 ml-2 border-gray-300 border ">
                  <LuShare2 className="" />
                </div>
              </div>

              <img src={protct} alt="Product" className="w-60 " />

              <div className="p-4 text-center">
                <h3 className="text-sm font-semibold text-gray-800">
                  Rice Water for Hair and Skin
                </h3>
                <p className="text-xs text-gray-500 my-2">
                  The power of grain for your hair health gain.
                </p>

                <div className="flex justify-center items-center gap-2">
                  <span className="text-sm text-gray-400 line-through">
                    ₹499.00
                  </span>
                  <span className="text-green-600 font-bold">₹399.00</span>
                </div>
              </div>

              <button className="w-full  cursor-pointer flex items-center justify-center py-1.5 bg-red-900 text-white rounded hover:bg-red-950 text-sm">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007 17h12m-5 4a1 1 0 100-2 1 1 0 000 2zm-6 0a1 1 0 100-2 1 1 0 000 2z" />
                </svg>
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>


      {/* sixth section High-Quality Teas & Botanicals */}
      <div
        className="w-full h-full py-20 sm:py-28 md:py-36 mt-16 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${h5_bg2})` }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between md:px-10  gap-8">
          {/* Left: Product Images (You can add content here) */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            {/* Add your image or component here */}
          </div>

          {/* Right: Text Content */}
          <div className="w-full text-center md:w-1/2 md:text-left md:ml-20 lg:pl-14 ">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#4a2511] mb-4"
              style={{ fontFamily: "Open Sans" }}>
              High-Quality Teas & Botanicals
            </h2>
            <p className="text-sm sm:text-base text-[#5c5c5c] mb-6 px-2 md:px-0">
              Save 25% sitewide on beautifully packaged gift sets, tea
              collections, and exquisite accessories Moms adore.
            </p>
            <button className="bg-green-600 hover:bg-green-700 skew-x-[-12deg] text-white px-6 py-2 transition-all duration-300">
              <span className="inline-block skew-x-[12deg]">View all</span>
            </button>
          </div>
        </div>
      </div>

      {/* seventh section Latest News & Recipes */}
      <div className="py-16 pt-10 px-4 md:px-8 bg-white text-center">
        <h2
          className="text-2xl md:text-3xl font-bold text-[#7b342d] mb-10"
          style={{ fontFamily: "Open Sans" }}
        >
          Latest News & Recipes
        </h2>

        <div className="px-4 sm:px-8 md:px-16 lg:px-[160px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={late1} alt="Tea 1" className="w-full h-52 object-cover" />
            <div className="p-4">
              <h3 className="text-sm font-semibold text-[#4a2511] mb-2">
                Chamomile: Herbal Tea of the Month
              </h3>
              <a href="/blog" className="text-green-600 text-sm hover:underline">
                Read More &gt;
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={late2} alt="Tea 2" className="w-full h-52 object-cover" />
            <div className="p-4">
              <h3 className="text-sm font-semibold text-[#4a2511] mb-2">
                Chamomile: Herbal Tea of the Month
              </h3>
              <a href="#" className="text-green-600 text-sm hover:underline">
                Read More &gt;
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={late3} alt="Tea 3" className="w-full h-52 object-cover" />
            <div className="p-4">
              <h3 className="text-sm font-semibold text-[#4a2511] mb-2">
                Chamomile: Herbal Tea of the Month
              </h3>
              <a href="#" className="text-green-600 text-sm hover:underline">
                Read More &gt;
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={late4} alt="Tea 4" className="w-full h-52 object-cover" />
            <div className="p-4">
              <h3 className="text-sm font-semibold text-[#4a2511] mb-2">
                Chamomile: Herbal Tea of the Month
              </h3>
              <a href="#" className="text-green-600 text-sm hover:underline">
                Read More &gt;
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* eighth section The Ultimate Tea Experience */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full py-[60px] px-4 md:px-0 bg-amber-100">
        {/* Left Image Column - Hidden on small screens */}
        <div className="hidden md:flex flex-col w-[30%] justify-center items-center">
          <img src={about1} alt="" />
          <img src={about3} alt="" />
        </div>

        {/* Center Content */}
        <div className="flex flex-col w-full md:w-[40%] justify-center items-center gap-6">
          <h1
            className="font-bold  text-3xl md:text-4xl text-[#7b342d] text-center "
            style={{ fontFamily: "Open Sans" }}
          >
            The Ultimate Tea Experience
          </h1>

          <p className="text-center text-sm md:text-base px-2 md:px-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolor
            animi quaerat, et, minima excepturi dolore quam deleniti officiis
            recusandae non vel eligendi harum officia ipsa deserunt fugit. Id
            quibusdam possimus optio deleniti aperiam labore consequatur neque
            voluptate, recusandae explicabo dolorum officia asperiores in
            quisquam qui odit, cumque minus repellendus voluptatum magni sunt
            nihil? Facilis, obcaecati.
          </p>

          <button className="pl-4 pr-4 pt-2 pb-2 skew-x-[-12deg] bg-green-600 text-white hover:bg-green-700">
            <span className="inline-block skew-x-[12deg]">Learn More</span>
          </button>
        </div>

        {/* Right Image Column - Hidden on small screens */}
        <div className="hidden md:flex flex-col w-[30%] justify-center items-center">
          <img src={about2} alt="" />
          <img src={about1} alt="" />
        </div>
      </div>

      {/* ninth section Want To Stay Healthy Drint Matcha Best Flavour Of Out Tea */}
      <div
        className="flex flex-col md:flex-row py-[50px] px-4 md:px-[100px] w-full items-center justify-center gap-10"
        style={{ backgroundImage: `url(${ft1_bg_1})` }}
      >
        {/* Left section */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 text-center md:text-left">
          <h1
            className="font-bold text-3xl md:text-4xl"
            style={{ color: "#7b342d", fontFamily: "Open Sans" }}
          >
            Want To Stay Healthy Drink Matcha – Best Flavour Of Our Tea
          </h1>
          <p style={{ fontFamily: "Open Sans" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            deleniti similique facilis officiis quaerat modi quibusdam,
            consequuntur doloribus voluptatum.
          </p>
          <button className="pl-4 pr-4 pt-2 pb-2 skew-x-[-12deg] bg-green-600 text-white hover:bg-green-700 w-fit mx-auto md:mx-0">
            <span className="inline-block skew-x-[12deg]">Learn More</span>
          </button>
        </div>

        {/* Right section - YouTube video */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full aspect-video max-w-[560px]">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/xLRU0pX1zsg?si=pjuzMSFlI56dPlAz"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* tenth section Tea Is One Of the Most Popular Drinks In the World*/}
      <div className="flex flex-col md:flex-row py-[50px] px-4 md:px-[100px] w-full items-center justify-center gap-10">
        {/* Left section - Image */}
        <div className="flex justify-center items-center w-full md:w-1/2">
          <img src={pest} alt="Tea Illustration" className="w-full max-w-md object-contain" />
        </div>

        {/* Right section - Text */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 text-center md:text-left">
          <h1
            className="font-bold text-3xl md:text-4xl "
            style={{ color: "#7b342d", fontFamily: "Open Sans" }}
          >
            Tea Is One Of the Most Popular Drinks In the World
          </h1>
          <p style={{ fontFamily: "Open Sans" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            deleniti similique facilis officiis quaerat modi quibusdam,
            consequuntur doloribus voluptatum.
          </p>
          <button className="pl-4 pr-4 pt-2 pb-2 skew-x-[-12deg] bg-green-600 text-white hover:bg-green-700 w-fit mx-auto md:mx-0">
            <span className="inline-block skew-x-[12deg]"><Link to="/cart" >Shop Now</Link></span>
          </button>
        </div>
      </div>

      {/* eleventh section Testimonials */}

      <section
        className="py-20 px-6 md:px-16 lg:px-32"
        style={{
          backgroundImage: `url(${testimonialsImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-center font-bold mb-2 text-3xl md:text-4xl text-green-600">
            Testimonials
          </h2>
          <p className="text-green-50 mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ea
            <br />
            Lorem ipsum dolor sit amet consectetur
          </p>

          {/* ✅ Slider Container with hover pause */}
          <div
            className="relative overflow-hidden"
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
          >
            <div
              className="flex transition-transform ease-in-out duration-700"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t, index) => (
                <div key={index} className="w-full flex-shrink-0 px-6 md:px-12">
                  <div className="bg-transparent rounded-xl shadow-lg p-8 md:p-12 max-w-3xl mx-auto">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-36 h-36 mx-auto rounded-full object-cover mb-4 border-4 border-green-200"
                    />
                    <p className="text-lg italic text-white">"{t.text}"</p>
                    <h1 className="text-2xl font-bold mb-6">⭐⭐⭐⭐⭐</h1>
                    <h4 className="text-xl font-semibold text-white">{t.name}</h4>
                    <p className="text-white">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${current === index ? "bg-green-600" : "bg-gray-300"
                    }`}
                  onClick={() => setCurrent(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* <section className=" py-20 px-6 md:px-16 lg:px-32" style={{ backgroundImage: `url(${testimonialsImage})`, backgroundPosition: "center", backgroundSize: "cover" }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-center font-bold mb-2 text-3xl md:text-4xl text-green-600">Testimonials </h2>
          <p className="text-green-50 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ea  <br />Lorem ipsum dolor sit amet consectetur </p> */}

      {/* Slider Container */}
      {/* <div className="relative overflow-hidden">
            <div
              className="flex transition-transform ease-in-out duration-700"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-6 md:px-12"
                >
                  <div className="bg-transparent rounded-xl shadow-lg p-8 md:p-12 max-w-3xl mx-auto">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-36 h-36 mx-auto rounded-full object-cover mb-4 border-4 border-green-200"
                    />
                    <p className="text-lg italic text-white ">
                      "{t.text}"
                    </p>
                    <h1 className="text-2xl font-bold mb-6">⭐⭐⭐⭐⭐</h1>
                    <h4 className="text-xl font-semibold text-white">
                      {t.name}
                    </h4>
                    <p className="text-white">{t.role}</p>
                  </div>
                </div>
              ))}

            </div> */}

      {/* Dots Navigation */}
      {/* <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${current === index ? "bg-green-600" : "bg-gray-300"
                    }`}
                  onClick={() => setCurrent(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* twelfth section icons*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-6 pt-[60px] pb-[60px]">
        {/* Card 1 */}
        <div className="cursor-pointer flex flex-col justify-center items-center gap-2 box-border 
      shadow-sm hover:shadow-green-400 border border-transparent 
      hover:border-gray-500 bg-gradient-to-br from-white to-green-100 
      rounded-2xl pt-10 pb-10 md:pt-20 md:pb-20 transition duration-300 transform ">
          <FaShoppingCart className="text-4xl text-green-700" />
          <p className="text-lg font-semibold text-gray-700 text-center">Free Shipping</p>
        </div>

        {/* Card 2 */}
        <div
          className="cursor-pointer flex flex-col justify-center items-center gap-2 box-border 
      shadow-sm hover:shadow-green-400 border border-transparent 
      hover:border-gray-500 bg-gradient-to-br from-white to-green-100 
      rounded-2xl pt-10 pb-10 md:pt-20 md:pb-20 transition duration-300 transform "
        >
          <FaFileArrowUp className="text-4xl text-blue-700" />
          <p className="text-lg text-center font-semibold text-gray-700" >Hand Packed</p>
        </div>

        {/* Card 3 */}
        <div
          className="cursor-pointer flex flex-col justify-center items-center gap-2 box-border 
      shadow-sm hover:shadow-green-400 border border-transparent 
      hover:border-gray-500 bg-gradient-to-br from-white to-green-100 
      rounded-2xl pt-10 pb-10 md:pt-20 md:pb-20 transition duration-300 transform "
        >
          <MdSecurity className="text-4xl text-red-600" />
          <p className="text-lg font-semibold text-gray-700 text-center">Secured Payment</p>
        </div>

        {/* Card 4 */}

        <div
          className="cursor-pointer flex flex-col justify-center items-center gap-2 box-border 
      shadow-sm hover:shadow-green-400 border border-transparent 
      hover:border-gray-500 bg-gradient-to-br from-white to-green-100 
      rounded-2xl pt-10 pb-10 md:pt-20 md:pb-20 transition duration-300 transform "
        >
          <FaCheckCircle className="text-4xl text-green-400" />

          <p className="text-lg font-semibold text-gray-700 text-center"> Quality Guarantee </p>
        </div>

        {/* Card 5 */}
        <div
          className="cursor-pointer flex flex-col justify-center items-center gap-2 box-border 
      shadow-sm hover:shadow-green-400 border border-transparent 
      hover:border-gray-500 bg-gradient-to-br from-white to-green-100 
      rounded-2xl pt-10 pb-10 md:pt-20 md:pb-20 transition duration-300 transform "
        >
          <RiCustomerServiceFill className="text-4xl text-blue-700" />

          <p className="text-lg font-semibold text-gray-700 text-center"> Customer Services </p>
        </div>

      </div>

      <div
        className="relative flex justify-center items-center h-[284px] text-center font-bold text-xl  border-none"
        style={{ fontFamily: "Open Sans" }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${FooterIMG})` }} ></div>

        {/* Black gradient overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div> */}

        {/* Text content */}
        <div className="relative px-6 md:px-[100px] lg:px-[200px] z-10">
          <h2>
            “Your well-being is not defined by speed or success, but by aligning
            your body, mind, and spirit with nature’s wisdom and embracing the
            balance that Ayurveda offers in life.”
          </h2>
        </div>
      </div>
    </>
  );
};

export default Home;
