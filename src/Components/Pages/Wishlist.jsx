import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import WishlistBackgroud from "/imags/wishlistBackgroud.jpg";

const initialWishlist = [
  {
    id: 1,
    name: "Herbal Skin Care",
    img: "/imags/products/1st.jpg",
    price: 1043,
    originalPrice: 1799,
    discount: "42% OFF",
  },
  {
    id: 2,
    name: "Herbal welness",
    img: "/imags/products/2nd.jpg",
    price: 1099,
    originalPrice: 8499,
    discount: "Rs. 7400 OFF",
  },
  {
    id: 3,
    name: "GOBOULT Drift Max 2.01'' HD Display",
    img: "/imags/products/3rd.jpg",
    price: 1399,
    originalPrice: 7999,
    discount: "Rs. 6600 OFF",
  },
];

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(initialWishlist);

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const moveToBag = (id) => {
    alert("Added to cart!"); // Replace with cart logic
    removeFromWishlist(id);
  };

  return (
    <div className="mb-48">
      {/* Header */} 
      <div
        className="p-14 h-56 flex flex-col justify-center items-center font-boldmy-7"
        style={{
          backgroundImage: `url(${WishlistBackgroud})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          My Wishlist
        </h1>
        <p className="text-sm sm:text-lg text-gray-200">Home / Wishlist</p>
      </div>

      {/* Empty State */}
      {wishlist.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 mb-4">Your wishlist is empty</p>
          <a
            href="/shop"
            className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700"
          >
            Continue Shopping
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 sm:p-6 pb-20">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="relative border rounded-lg overflow-hidden shadow-sm bg-white"
            >
              {/* Remove Button */}
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-gray-100"
              >
                <FaTimes className="text-gray-600" />
              </button>

              {/* Product Image */}
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 sm:h-56 object-cover p-2"
              />

              {/* Product Info */}
              <div className="p-4 border-t">
                <h2 className="text-sm font-medium line-clamp-2 mb-2">
                  {item.name}
                </h2>

                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-lg font-bold text-gray-800">
                    Rs.{item.price}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    Rs.{item.originalPrice}
                  </span>
                  <span className="text-sm text-red-500 font-medium">
                    ({item.discount})
                  </span>
                </div>

                {/* Move to Bag Button */}
                <button
                  onClick={() => moveToBag(item.id)}
                  className="w-full border rounded text-center text-sm font-semibold text-green-600 hover:bg-green-700 hover:text-white py-2 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;