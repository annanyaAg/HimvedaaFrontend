import { useState } from "react";
import { FaStar, FaTruck } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import first from "../../assets/products/1st.jpg";
import second from "../../assets/products/2nd.jpg";
import third from "../../assets/products/3rd.jpg";
import forth from "../../assets/products/4th.webp";
import NATURAL_PILES_CARE_HERBS from "../../assets/products/NATURAL_PILES_CARE_HERBS.webp";

const thumbnails = [first, second, third, forth, NATURAL_PILES_CARE_HERBS];

const recommended = [
  { id: 1, name: "Herbal Mouthwash", price: 12.99, img: first },
  { id: 2, name: "Organic Toothpaste", price: 8.49, img: second },
  { id: 3, name: "Whitening Powder", price: 15.0, img: third },
  { id: 4, name: "Fresh Mint Powder", price: 9.5, img: forth },
  { id: 5, name: "Natural Piles Care", price: 20.0, img: NATURAL_PILES_CARE_HERBS },
];

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState("8 fl oz");
  const [quantity, setQuantity] = useState(1);
  const [deliveryOption, setDeliveryOption] = useState("one-time");
  const [mainImage, setMainImage] = useState(thumbnails[0]);
  const [activeTab, setActiveTab] = useState("description");

  const sizes = ["8 fl oz", "Travel | 2 fl oz", "Single Use", "24 fl oz"];

  // Recommended products slider settings
  const recommendedSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3, // default desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280, // below 1280px (lg screens)
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024, // below 1024px (tablets)
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640, // below 640px (mobile)
        settings: { slidesToShow: 2 },
      },
    ],
  };
  return (
    <div className="flex flex-col gap-10 max-w-7xl mx-auto p-4 sm:p-6">
      {/* Product Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-1/2">
          {/* Thumbnails */}
          <div className="flex lg:flex-col flex-row gap-2 overflow-x-auto lg:overflow-visible max-h-[400px]">
            {thumbnails.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Thumbnail ${i + 1}`}
                onClick={() => setMainImage(src)}
                className={`w-14 h-14 object-cover border rounded cursor-pointer shrink-0 ${
                  mainImage === src ? "ring-2 ring-green-500" : ""
                }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex justify-center w-full">
            <img
              src={mainImage}
              alt="Product"
              className="w-full max-w-[400px] h-auto object-contain rounded"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2">
          {/* Ratings */}
          <div className="flex items-center gap-1 text-yellow-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-black ml-2 text-sm">425 Reviews</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1">
            MINT DAILY SWISH™
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mb-2">
            1100+ sold in the last 30 days
          </p>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            Cool and refreshing pulling oil for clean, healthy teeth and gums.
          </p>

          {/* Sizes */}
          <div className="mb-4">
            <p className="font-semibold mb-2">Sizes:</p>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`border px-3 py-1 rounded text-sm ${
                    selectedSize === size
                      ? "bg-green-600 text-white font-medium"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Delivery Options */}
          <div className="border rounded-lg overflow-hidden mb-4 text-sm">
            <div
              className={`flex justify-between items-center p-3 cursor-pointer ${
                deliveryOption === "one-time"
                  ? "bg-yellow-100 font-semibold"
                  : ""
              }`}
              onClick={() => setDeliveryOption("one-time")}
            >
              <span>DELIVER ONE TIME ONLY</span>
              <span>$18.99</span>
            </div>
            <div
              className={`flex justify-between items-center p-3 cursor-pointer ${
                deliveryOption === "subscribe"
                  ? "bg-yellow-100 font-semibold"
                  : ""
              }`}
              onClick={() => setDeliveryOption("subscribe")}
            >
              <span>SUBSCRIBE & SAVE 15%</span>
              <span className="text-red-500">$16.14</span>
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
            <div className="flex border rounded items-center overflow-hidden w-full sm:w-auto">
              <button
                className="px-4 py-2 text-lg font-bold"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                −
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                className="px-4 py-2 text-lg font-bold"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full w-full sm:w-auto text-center">
              ADD TO CART – $
              {(deliveryOption === "subscribe" ? 16.14 : 18.99).toFixed(2)}
            </button>
          </div>

          {/* Shipping Notice */}
          <div className="flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded text-xs sm:text-sm font-medium">
            <span className="font-semibold">10 hours</span> left for same day
            shipping!
            <FaTruck />
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-10">
        <div className="flex gap-4 sm:gap-6 border-b overflow-x-auto">
          {["description", "shipping", "reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-sm sm:text-base md:text-lg font-medium capitalize ${
                activeTab === tab
                  ? "border-b-2 border-green-600 text-green-600"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-6 text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
          {activeTab === "description" && (
            <p>
              <span className="font-bold text-lg sm:text-xl">Ingredients</span>
              <br />
              Lorem ipsum dolor sit amet consectetur...
            </p>
          )}
          {activeTab === "shipping" && (
            <p>
              <span className="font-bold text-lg sm:text-xl">Returns Policy</span>
              <br />
              Within 30 days of delivery...
            </p>
          )}
          {activeTab === "reviews" && (
            <div>
              <p className="font-semibold">Customer Reviews</p>
              <p>⭐ 4.8/5 based on 425 reviews</p>
            </div>
          )}
        </div>
      </div>

     {/* Recommended Products Carousel */}
      <div className="mt-7 md:mt-12 p-2">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-center md:text-left">
          Recommended Products
        </h3>

        <Slider {...recommendedSettings}>
          {recommended.map((item) => (
            <div
              key={item.id}
              className="p-3 sm:p-4 rounded-lg shadow hover:shadow-lg transition mx-1 sm:mx-2 cursor-pointer"
              onClick={() => setMainImage(item.img)}
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-32 sm:h-40 md:h-48 object-contain rounded"
              />
              <h4 className="mt-2 sm:mt-3 font-semibold text-sm sm:text-base md:text-lg text-center">
                {item.name}
              </h4>
              <p className="text-green-600 font-bold text-sm sm:text-base text-center">
                ${item.price}
              </p>
              <button className="mt-2 sm:mt-3 w-full bg-green-600 hover:bg-green-700 text-white py-1.5 sm:py-2 text-sm sm:text-base rounded-lg transition">
                View Product
              </button>
            </div>
          ))}
        </Slider>
      </div>


    </div>
  );
};

export default ProductDetail;

























// Sample1

// import { useState } from "react";
// import { FaStar, FaTruck } from "react-icons/fa";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import first from "../../assets/products/1st.jpg";
// import second from "../../assets/products/2nd.jpg";
// import third from "../../assets/products/3rd.jpg";
// import forth from "../../assets/products/4th.webp";
// import NATURAL_PILES_CARE_HERBS from "../../assets/products/NATURAL_PILES_CARE_HERBS.webp";
 
// const thumbnails = [first, second, third, forth, NATURAL_PILES_CARE_HERBS];
 
// const recommended = [
//   { id: 1, name: "Herbal Mouthwash", price: 12.99, img: first },
//   { id: 2, name: "Organic Toothpaste", price: 8.49, img: second },
//   { id: 3, name: "Whitening Powder", price: 15.0, img: third },
//   { id: 4, name: "Fresh Mint Oil", price: 9.5, img: forth },
//   { id: 5, name: "Natural Piles Care", price: 20.0, img: NATURAL_PILES_CARE_HERBS },
// ];
 
// const productDetail = () => {
//   const [selectedSize, setSelectedSize] = useState("8 fl oz");
//   const [quantity, setQuantity] = useState(1);
//   const [deliveryOption, setDeliveryOption] = useState("one-time");
//   const [mainImage, setMainImage] = useState(thumbnails[0]);
//   const [activeTab, setActiveTab] = useState("description");
 
//   const sizes = ["8 fl oz", "Travel | 2 fl oz", "Single Use", "24 fl oz"];
 
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2500,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 3 } },
//       { breakpoint: 640, settings: { slidesToShow: 2 } },
//     ],
//   };
 
//   return (
//     <div className="flex flex-col gap-10 max-w-7xl mx-auto p-4 sm:p-6">
//       {/* Product Section */}
//       <div className="flex flex-col lg:flex-row gap-10">
//         {/* Left Section */}
//         <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-1/2">
//           {/* Thumbnails */}
//           <div className="flex lg:flex-col flex-row gap-2 overflow-x-auto lg:overflow-visible max-h-[400px]">
//             {thumbnails.map((src, i) => (
//               <img
//                 key={i}
//                 src={src}
//                 alt={`Thumbnail ${i + 1}`}
//                 onClick={() => setMainImage(src)}
//                 className={`w-14 h-14 object-cover border rounded cursor-pointer shrink-0 ${mainImage === src ? "ring-2 ring-green-500" : ""
//                   }`}
//               />
//             ))}
//           </div>
 
//           {/* Main Image */}
//           <div className="flex justify-center w-full">
//             <img
//               src={mainImage}
//               alt="Product"
//               className="w-full max-w-[400px] h-auto object-contain rounded"
//             />
//           </div>
//         </div>
 
//         {/* Right Section */}
//         <div className="w-full lg:w-1/2">
//           {/* Ratings */}
//           <div className="flex items-center gap-1 text-yellow-500 mb-2">
//             {[...Array(5)].map((_, i) => (
//               <FaStar key={i} />
//             ))}
//             <span className="text-black ml-2 text-sm">425 Reviews</span>
//           </div>
 
//           <h1 className="text-2xl sm:text-3xl font-bold mb-1">
//             MINT DAILY SWISH™
//           </h1>
//           <p className="text-sm text-gray-500 mb-2">
//             1100+ sold in the last 30 days
//           </p>
//           <p className="text-gray-700 mb-4 text-sm">
//             Cool and refreshing pulling oil for clean, healthy teeth and gums.
//           </p>
 
//           {/* Sizes */}
//           <div className="mb-4">
//             <p className="font-semibold mb-2">Sizes:</p>
//             <div className="flex flex-wrap gap-2">
//               {sizes.map((size) => (
//                 <button
//                   key={size}
//                   className={`border px-3 py-1 rounded text-sm ${selectedSize === size
//                     ? "bg-green-600 text-white font-medium"
//                     : "hover:bg-gray-100"
//                     }`}
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>
 
//           {/* Delivery Options */}
//           <div className="border rounded-lg overflow-hidden mb-4 text-sm">
//             <div
//               className={`flex justify-between items-center p-3 cursor-pointer ${deliveryOption === "one-time"
//                 ? "bg-yellow-100 font-semibold"
//                 : ""
//                 }`}
//               onClick={() => setDeliveryOption("one-time")}
//             >
//               <span>DELIVER ONE TIME ONLY</span>
//               <span>$18.99</span>
//             </div>
//             <div
//               className={`flex justify-between items-center p-3 cursor-pointer ${deliveryOption === "subscribe"
//                 ? "bg-yellow-100 font-semibold"
//                 : ""
//                 }`}
//               onClick={() => setDeliveryOption("subscribe")}
//             >
//               <span>SUBSCRIBE & SAVE 15%</span>
//               <span className="text-red-500">$16.14</span>
//             </div>
//           </div>
 
//           {/* Quantity and Add to Cart */}
//           <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
//             <div className="flex border rounded items-center overflow-hidden">
//               <button
//                 className="px-4 py-2 text-lg font-bold"
//                 onClick={() => setQuantity((q) => Math.max(1, q - 1))}
//               >
//                 −
//               </button>
//               <span className="px-4 py-2">{quantity}</span>
//               <button
//                 className="px-4 py-2 text-lg font-bold"
//                 onClick={() => setQuantity((q) => q + 1)}
//               >
//                 +
//               </button>
//             </div>
 
//             <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full w-full sm:w-auto text-center">
//               ADD TO CART – $
//               {(deliveryOption === "subscribe" ? 16.14 : 18.99).toFixed(2)}
//             </button>
//           </div>
 
//           {/* Shipping Notice */}
//           <div className="flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded text-sm font-medium">
//             <span className="font-semibold">10 hours</span> left for same day
//             shipping!
//             <FaTruck />
//           </div>
//         </div>
//       </div>
 
//       {/* Tabs Section */}
//       <div className="mt-10">
//         <div className="flex gap-6 border-b">
//           {["description", "shipping", "reviews"].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`pb-2 text-[18px] font-medium capitalize ${activeTab === tab
//                 ? "border-b-2 border-green-600 text-green-600"
//                 : "text-gray-500 hover:text-black"
//                 }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
 
//         <div className="mt-8 text-sm text-gray-700">
//           {activeTab === "description" && (
//             <p className="">
//               <span className="font-bold text-xl">Ingredients</span><br />
 
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, aliquid? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt atque aperiam, tempora officiis ipsam quis modi iste aut consectetur excepturi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et animi praesentium quae deleniti necessitatibus non repudiandae nesciunt aspernatur architecto aperiam modi, fuga veniam atque, rem at hic. Maxime, suscipit omnis.<br /><br />
 
//               <span className="font-bold text-xl">Lorem ipsum dolor </span><br />
 
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quidem sint, mollitia harum architecto officiis consequuntur perferendis, distinctio, corrupti debitis quisquam adipisci dolores reiciendis hic sunt aspernatur excepturi provident! Optio!<br /><br />
 
//               <span className="font-bold text-xl">Lorem ipsum dolor </span><br />
 
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta qui quia obcaecati, officiis magnam, laborum magni nostrum architecto, dolorem a est sapiente sed quasi repellendus quis corrupti at necessitatibus ab! Harum at beatae iste unde! <br /><br />
 
//               <span className="font-bold text-xl">Lorem ipsum dolor </span><br />
 
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio harum alias earum quasi! Sit quisquam sed provident, ipsam molestiae voluptate illo fuga. Voluptatem quisquam molestiae corporis rem earum deserunt tempora fugiat quo!</p>
//           )}
//           {activeTab === "shipping" && (
//             <p><span className="font-bold text-xl">Returns Policy</span><br></br>
 
//               <span>Within 30 days of delivery, you can return the majority of new, unopened products for a complete refund. If the return is due to a mistake on our part (you received a damaged or inaccurate item, etc.), we will additionally cover the cost of return postage.</span><br/><br/>
 
//               <span>When you give your box to the return shipper, you should anticipate receiving your refund in four weeks, although in many circumstances, you will get your money back sooner. This time frame covers the following: the time it takes us to process your return once we receive it from the shipper (3 to 5 business days), the time it takes your bank to process our refund request (5 to 10 business days), and the transit time for us to get your return from the shipper (5 to 10 business days).</span><br/><br/>
 
//               <span>To return an item, just sign in to your account, select the 'Complete Orders' link from the My Account menu, see the order, and then click the Return Item(s) button. Upon receipt and processing of the returned goods, we will send you an email to confirm your reimbursement.</span><br/><br/>
 
//               <span className="font-bold text-xl">Shipping</span><br></br>
 
//               <span>Almost every location in the globe is reachable by us for shipping. Be advised that certain items are subject to limitations and that shipments to foreign locations are not permitted for certain products.</span><br/><br/>
 
//               <span>Based on your selected shipping method and the availability of your products, we will estimate shipping and delivery times for you when you place an order. You may get shipment date estimates on the shipping quotes page, depending on the shipping company you select.</span><br/><br/>
 
//               <span> Furthermore, a lot of the products we sell have weight-based shipping charges. On its detail page, you may get the weight of any such object. We shall round up all weights to the nearest whole pound in accordance with the shipping providers' rules.</span>
//             </p>
//           )}
//           {activeTab === "reviews" && (
//             <div>
//               <p className="font-semibold">Customer Reviews</p>
//               <p>⭐ 4.8/5 based on 425 reviews</p>
//             </div>
//           )}
//         </div>
//       </div>
 
//       {/* Recommended Products Carousel */}
//       <div className="mt-7 md:mt-12 p-2">
//         <h3 className="text-xl font-bold mb-4">Recommended Products</h3>
//         <Slider {...settings}>
//           {recommended.map((item) => (
//             <div
//               key={item.id}
//               className="p-4 rounded-lg shadow hover:shadow-lg transition mx-2"
//               onClick={() => setMainImage(item.img)}
//             >
//               <img
//                 src={item.img}
//                 alt={item.name}
//                 className="w-full h-40 object-contain rounded"
//               />
//               <h4 className="mt-3 font-semibold">{item.name}</h4>
//               <p className="text-green-600 font-bold">${item.price}</p>
//               <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg">
//                 View Product
//               </button>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };
 
// export default productDetail;