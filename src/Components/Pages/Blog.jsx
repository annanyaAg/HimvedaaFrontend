import React, { useState } from "react";
import our_banner from "/imags/blogBanner.jpg";
import { Link } from "react-router-dom";

// Dummy Blog Data
const blogs = [
  {
    id: 1,
    title: "Treat Your Makeup Like Jewelry For The Face",
    date: "July 30, 2024",
    author: "Admin",
    img: "https://picsum.photos/400/250?random=1",
    excerpt:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...",
  },
  {
    id: 2,
    title: "Glowing Skin Is A Result Of Proper Skincare",
    date: "July 30, 2024",
    author: "Admin",
    img: "https://picsum.photos/400/250?random=2",
    excerpt:
      "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud...",
  },
  {
    id: 3,
    title: "5 Steps To Mastering The Bold Red Lip",
    date: "July 30, 2024",
    author: "Admin",
    img: "https://picsum.photos/400/250?random=3",
    excerpt: "Learn how to apply bold lipstick perfectly with these easy steps...",
  },
  {
    id: 4,
    title: "I Believe That All Women Are Pretty Without Makeup",
    date: "July 30, 2024",
    author: "Admin",
    img: "https://picsum.photos/400/250?random=4",
    excerpt: "True beauty comes from within – makeup only enhances your confidence...",
  },
];

const categories = ["All", "Company News", "Featured", "Guide", "Recipe", "Uncategorized"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <>
      {/* header */}
      <div className="p-14 h-56 flex flex-col justify-center items-center font-bold text-black my-7"
        style={{
          backgroundImage: `url(${our_banner})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Blog & Articles
        </h1>
        <p className=" text-sm text-center md:text-lg text-gray-600">
          Insights into Ayurvedic medicine, holistic well‑being, and a balanced lifestyle.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">


        {/* Blog Section */}
        <main className="lg:col-span-3">
          {/* Categories */}
          <div className="flex flex-wrap gap-4 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm font-medium ${activeCategory === cat
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-600 hover:text-green-600"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <Link to="/blogdetail"> 
              <div key={blog.id} className="border h-full rounded-lg overflow-hidden hover:shadow-lg transition">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-xs text-green-600 font-medium mb-1">
                    {blog.author} • {blog.date}
                  </p>
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <button className="text-green-600 font-semibold hover:underline">
                    Read More →
                  </button>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </main>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-8">
          {/* About Author */}
          {/* <div className="border-r border-green-500 ">
            <h2 className="text-xl ml-5 mb-5 ">About Author</h2>
            <div className="px-4 pb-4">
              <img
                src="https://i.pravatar.cc/300"
                alt="Author"
                className="rounded-lg mb-4"
              />
              <p className="text-sm text-gray-600">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div> */}

          {/* Recent Posts */}
          <Link to="/blogdetail"> 
          <div className="border-l border-green-500 p-4">
            <h2 className="text-lg mb-4">Recent Posts</h2>
            <ul className="space-y-3">
              {blogs.slice(0, 4).map((post) => (
                <li key={post.id} className="flex gap-3 items-center">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="text-xs text-gray-500">{post.date}</p>
                    <h3 className="text-sm font-semibold line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Link>

          {/* Tags */}
          <div className="border-l border-green-500 pl-4 p-2">
            <h2 className="text-lg mb-4">Popular Tags</h2>
            <div className="flex flex-wrap gap-2">
              {["Design", "Electronics", "Gadgets", "Promotion", "Style", "Quality"].map(
                (tag, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 border rounded cursor-pointer hover:bg-green-100"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </aside>

      </div></>

  );
};

export default Blog;





// ..............
// import React from 'react';
// import blogBanner from "/imags/blogBanner.jpg";

// const blogPosts = [
//   {
//     id: 1,
//     title: "Struggling With Weight? Discover the Ayurvedic Way to True Balance",
//     summary:
//       "Obesity isn’t the enemy—imbalance is. Ayurveda invites us to look deeper into harmony with body and mind.",
//     image: "/imags/blog-weight.jpg",
//     link: "/blogs/weight-balance",
//   },
//   {
//     id: 2,
//     title: "How Ayurvedic Wisdom Makes You Exercise Better",
//     summary:
//       "Delve into how Ayurveda redefines physical activity by prioritizing relaxation, breath, and body alignment.",
//     image: "/imags/blog-exercise.jpg",
//     link: "/blogs/ayurvedic-exercise",
//   },
//   {
//     id: 3,
//     title: "Constipation in Ayurveda",
//     summary:
//       "How to achieve natural bowel regularity using Ayurvedic principles—no laxatives, just balance.",
//     image: "/imags/blog-constipation.jpg",
//     link: "/blogs/constipation-ayurveda",
//   }
//   // Add more posts as needed
// ];

// const BlogPage = () => (
//   <div className=" pb-10 bg-gray-50 px-4">
//     {/* <header className="mb-12 text-center">
//       <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//          Blog & Articles
//       </h1>
//       <p className="text-lg text-gray-600">
//         Insights into Ayurvedic medicine, holistic well‑being, and a balanced lifestyle.
//       </p>
//     </header> */}

//     <div
//       className="p-14 flex flex-col justify-center items-center font-bold text-black my-10"
//       style={{
//         backgroundImage: `url(${blogBanner})`,
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//       }}
//     >
//       <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//          Blog
//       </h1>
//       <p className="text-lg text-gray-600">
//         Insights into Ayurvedic medicine, holistic well‑being, and a balanced lifestyle.
//       </p>
//     </div>

//     <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//       {blogPosts.map((post) => (
//         <div
//           key={post.id}
//           className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
//         >
//           <img
//             src={post.image}
//             alt={post.title}
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-2">
//               {post.title}
//             </h2>
//             <p className="text-gray-600 mb-4">{post.summary}</p>
//             <a
//               href={post.link}
//               className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
//             >
//               Read More
//             </a>
//           </div>
//         </div>
//       ))}
//     </section>
//   </div>
// );

// export default BlogPage;