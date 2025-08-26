import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";

const LeftSidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const categories = [
    { label: "Foundation ", items: ["GlowRoot Base", "FlawlessHerb", "MatteMrit"]},
    { label: "Face", items: ["Sundarya Glow", "Kumkumadi Radiance", "AyuLeaf Cream"] },
    { label: "Body", items: ["AyuBody Bliss", "Turmerich", "ChandanSilk"] },
    { label: "Hair Care", items: ["Keshamrit", "BhringaRoot", "Fish"] },
    { label: "Herbal Products", items: ["TulsiTouch", "HaldiHeal", "AmlaRoot Therapy"] },
    { label: "Our Combos", items: ["10% Off", "20% Off", "50% Off","Sundarya means beauty for glowing, clear skin","Sharira means body; soothing and nourishing"] },
  ];

  return (
    <div className="w-full md:w-[60%] h-fit bg-white p-4 rounded-lg shadow-md border border-gray-200">
      {/* Category Filters ▼*/}
      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.label} className="border-b border-gray-300 pb-2">
            <button
              onClick={() => toggleDropdown(category.label)}
              className="flex justify-between items-center w-full text-base font-semibold text-gray-800 py-2 hover:text-green-700 transition"
            >
              {category.label}
              <span
                className={`transform transition-transform duration-300 ${
                  openDropdown === category.label ? "rotate-180" : ""
                }`}
              >
              <LuChevronDown />
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openDropdown === category.label
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 pt-2 space-y-2">
                {category.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:text-green-700"
                  >
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span className="hover:underline">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Price Filter */}
      <div className="mt-6">
        <h3 className="text-lg font-bold text-red-700 mb-3">Filter by Price</h3>
        <div className="flex items-center gap-4">
          <input
            type="range"
            min="0"
            max="500"
            defaultValue="220"
            className="w-full accent-green-600"
          />
          <span className="text-sm font-semibold text-black">₹220</span>
        </div>
        <button className="mt-4 w-full py-2 bg-red-900 text-white rounded hover:bg-red-950 transition">
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;
