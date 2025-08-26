import React from 'react';
import praice from "../../assets/images/praice.png";
import salesBanner from "/imags/salesBanner.jpg"
import salesCard from "/imags/protct2.png"
import { useState, useEffect } from 'react';

// const productsOnSale = [
//   {
//     id: 1,
//     name: "Natural Baby Oil",
//     image: "/imags/protct3.png",
//     oldPrice: 1999,
//     newPrice: 999,
//   },
//   {
//     id: 2,
//     name: "Organic Hair Oil",
//     image: "/imags/protct4.png",
//     oldPrice: 499,
//     newPrice: 299,
//   },
//   {
//     id: 3,
//     name: "Natural Face Cream",
//     image: "/imags/protct3.png",
//     oldPrice: 1499,
//     newPrice: 799,
//   },
//   {
//     id: 4,
//     name: "Natural Face Wash",
//     image: "/imags/protct2.png",
//     oldPrice: 299,
//     newPrice: 149,
//   },
// ];

const SalesPage = () => {

  const FirstSectionCards = [1, 2, 3];

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

  return (
    <>

      <div className=''>
        <header className="text-center bg-gradient-to-r p-14 mt-7 h-56 text-white" style={{
          backgroundImage: `url(${salesBanner})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 ">
            Flash Sale — Up to 50% OFF!
          </h1>
          <p className="text-lg md:text-xl">Explore our exclusive wellness products</p>
        </header>
      </div>

      {/* Deal... */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-full  p-6 sm:p-10 md:p-20  bg-amber-100">
        {/* Left section */}
        <div className="w-full lg:w-[40%] flex justify-center items-center mb-8 lg:mb-0 ">
          <img
            className="w-full h-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            src={praice}
            alt="image"
          />
        </div>

        {/* Right section */}
        <div className="w-full bg-white p-2 sm:w-full lg:w-1/2 flex justify-center items-center ">
          <div className="w-full  max-w-2xl bg-amber-50 border-4 border-pink-200  shadow-md p-6 sm:p-8 md:p-15 flex flex-col items-center gap-6">
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
              <span className="text-5xl sm:text-5xl text-green-600">
                $95.99
              </span>
              <span className="line-through text-gray-500 text-lg">$99.99</span>
            </div>

            {/* Description */}
            <div className="text-center px-2 sm:px-4">
              <p className="text-gray-700 mb-1">Fresh Organic Shampoo</p>
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
              <span className="inline-block skew-x-[12deg]">Shop Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sales Card....... */}
      <div className="flex flex-wrap justify-center items-center gap-6 p-[30px] bg-white">
        <h2 className="text-center font-bold pt-2 text-3xl text-[#7b342d]">
          Our Latest Deals
        </h2>
        <div className="overflow-hidden w-[85%] bg-white py-9">
          <div
            className="flex w-max animate-slide gap-4"
            style={{
              animation: "scrollX 20s linear infinite",
            }}
          >
            {FirstSectionCards.concat(FirstSectionCards).map((cards, index) => (
              <div
                key={index}
                className="w-[315px] border border-gray-400 rounded shadow hover:shadow-lg relative flex-shrink-0"
              >
                <span className="absolute top-2 left-2 bg-green-700 text-white text-xs px-2 py-1 rounded">
                  Save ₹100.00
                </span>
                <div className="p-4 flex flex-col items-center text-center">
                  <img
                    src={salesCard}
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
                    <span className="text-green-700 text-xs font-bold">
                      20% OFF
                    </span>
                  </div>
                  <button className="bg-red-900 text-white w-full py-1 cursor-pointer rounded hover:bg-red-950 text-sm">
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
};

export default SalesPage;
