import React, { useState } from "react";
import our_banner from "/imags/blogBanner.jpg";
import { Link } from "react-router-dom";
import { LuCalendarDays, LuUserRoundPen } from "react-icons/lu";
import { FaInstagram, FaLinkedin, FaFacebook, FaXTwitter } from "react-icons/fa6";



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

const BlogDetail = () => {
    return (
        <>
            {/* header */}
            <div className="p-14 h-56 flex flex-col justify-center items-center font-bold text-black my-7"
                style={{
                    backgroundImage: `url(${our_banner})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
                    Treat Your Makeup Like Jewelry <br />For The Face
                </h1>
                {/* <p className=" text-sm text-center md:text-lg text-gray-600">
                    Insights into Ayurvedic medicine, holistic well‑being, and a balanced lifestyle.
                </p> */}
            </div>

            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="md:col-span-2 pl-2">
                    {/* Blog Header */}
                    <div className="flex justify-between">
                        <div className="flex items-center gap-1 text-sm text-gray-500 mb-6 mt-1">
                            <LuUserRoundPen className="ml-2" /><span>Author</span>
                            <LuCalendarDays className="ml-2" /><span className="">July 20, 2024</span>
                        </div>
                        <div className="flex space-x-2 text-lg">
                            <a href="#" className="p-1 mb-6 rounded-full text-gray-500 hover:bg-black hover:text-white transition-all duration-300 "><FaInstagram /></a>
                            <a href="#" className="p-1 mb-6 rounded-full text-gray-500 hover:bg-black hover:text-white transition-all duration-300 "><FaFacebook /></a>
                            <a href="#" className="p-1 mb-6 rounded-full text-gray-500 hover:bg-black hover:text-white transition-all duration-300 "><FaLinkedin /></a>
                            <a href="#" className="p-1 mb-6 rounded-full text-gray-500 hover:bg-black hover:text-white transition-all duration-300 "><FaXTwitter /></a>
                        </div>
                    </div>

                    {/* Cover Image */}
                    <img
                        src="https://picsum.photos/400/250?random=1"
                        alt="Blog Cover"
                        className="w-full rounded-xl mb-6 h-[301px]" />

                    {/* Blog Content */}
                    <div className="prose prose-lg max-w-none text-gray-700">
                        <h2 className="text-xl text-black font-semibold" >Lipsum dolor</h2>
                        <p className="pt-1">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                            sint. Velit officia consequat duis enim mollit…
                        </p>
                        <p className="pt-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
                            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
                            quis sem at nibh elementum imperdiet.
                        </p>
                        <p className="pt-1">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima saepe dolores quo nisi neque nesciunt, iure sequi voluptas sapiente aliquid! Debitis incidunt ea ad maiores.
                        </p>
                        <h2 className="text-xl text-black font-semibold pt-2" >Lipsum dolor</h2>

                        <p className="pt-2">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima saepe dolores quo nisi neque nesciunt, iure sequi voluptas sapiente aliquid! Debitis incidunt ea ad maiores.
                        </p>
                        <p className="pt-1">
                            Lorem ipsum, dolor sit amet consecteturur adipisicing elit. Minima saepe dolores quo nisi neque nesciunt,   adipisicing elit. Minima saepe dolores quo nisi neque nesciunt, iure sequi voluptas sapiente aliquid! Debitis incidunt ea ad maiores.
                        </p>
                        <h2 className="text-xl text-black font-semibold pt-2" >Lipsum dolor</h2>

                        <p className="pt-1">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima saepe dolores quo nisi neque nesciunt, iure sequi voluptas sapiente aliquid! Debitis incidunt ea ad maiores.
                        </p>
                        <p className="pt-1">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima saepe dolores quo olor sit amet consectetur adipisicing elit. Minima saepe dolores nisi neque nesciunt, iure sequi voluptas sapiente aliquid! Debitis incidunt ea ad maiores.
                        </p>
                        <p className="pt-1">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima saepe dolores quo nisi neque nesciunt, iure sequi vodolores quo nisi neque nesciunt, iure sequi vo dolores quo nisi neque nesciunt, iure sequi voluptas sapiente aliquid! Debitis incidunt ea ad maiores.
                        </p>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-1 space-y-8 pl-10">
                    {/* About Author */}
                    <div className="border-l border-green-500">
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
                    </div>

                    {/* Recent Posts */}
                    <Link to="/blogdetail">
                        <div className="border-l border-green-500 p-4">
                            <h2 className=" text-xl mb-4">Recent Posts</h2>
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
                                            <h3 className="text-sm font-medium line-clamp-2">
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
                        <h2 className="text-xl mb-4">Popular Tags</h2>
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

                {/* Blog Section */}
                {/* <main className="lg:col-span-3"> */}
                {/* Categories */}
                {/* <div className="flex flex-wrap gap-4 mb-6">
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
          </div> */}

                {/* Blog Grid */}
                {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="border rounded-lg overflow-hidden hover:shadow-lg transition"
              >
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
                    <Link to="/blogdetail"> Read More →</Link>
                  </button>
                </div>
              </div>
            ))}
          </div> 
        </main>*/}



            </div></>

    );
};

export default BlogDetail;






















// import React from "react";
// import our_banner from "/imags/blogBanner.jpg";

// export default function BlogDetailPage() {
//     return (
//         <>

//             {/* header */}
//             <div className="p-14 h-56 flex flex-col justify-center items-center font-bold text-black my-7"
//                 style={{
//                     backgroundImage: `url(${our_banner})`,
//                     backgroundPosition: "center",
//                     backgroundSize: "cover",
//                 }}>
//                 <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//                     Blog & Articles
//                 </h1>
//                 <p className=" text-sm text-center md:text-lg text-gray-600">
//                     Insights into Ayurvedic medicine, holistic well‑being, and a balanced lifestyle.
//                 </p>
//             </div>

//             <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
//                 {/* Left Side (Blog Content) */}
// <div className="md:col-span-2">
//     {/* Blog Header */}
//     <h1 className="text-4xl font-bold mb-4">
//         Treat your makeup like jewelry for the face
//     </h1>
//     <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
//         <span>Admin</span>
//         <span>July 20, 2024</span>
//     </div>

//     {/* Cover Image */}
//     <img
//         src="https://picsum.photos/400/250?random=1"
//         alt="Blog Cover"
//         className="w-full rounded-xl mb-6"
//     />

//     {/* Blog Content */}
//     <div className="prose prose-lg max-w-none text-gray-700">
//         <p>
//             Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
//             sint. Velit officia consequat duis enim velit mollit…
//         </p>
//         <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
//             odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
//             quis sem at nibh elementum imperdiet.
//         </p>
//         <h2>Subheading</h2>
//         <p>
//             Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue
//             semper porta. Mauris massa.
//         </p>
//     </div>
// </div>

//                 {/* Right Side (Sidebar) */}
//                 <div className="space-y-8">
//                     {/* About Author */}
//                     <div className="bg-white p-6 shadow rounded-xl">
//                         <h3 className="text-lg font-semibold mb-4">About Author</h3>
//                         <img
//                             src="https://via.placeholder.com/300x300"
//                             alt="Author"
//                             className="rounded-lg mb-4"
//                         />
//                         <p className="text-gray-600 text-sm">
//                             There are many variations of passages of Lorem Ipsum available, but
//                             the majority have suffered alteration in some form.
//                         </p>
//                     </div>

//                     {/* Recent Posts */}
//                     <div className="bg-white p-6 shadow rounded-xl">
//                         <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
//                         <ul className="space-y-4">
//                             {[
//                                 "Treat your makeup like jewelry for the face",
//                                 "Glowing skin is a result of proper skincare",
//                                 "5 Steps to Mastering the Bold Red Lip",
//                                 "I believe that all women are pretty without makeup",
//                             ].map((title, index) => (
//                                 <li key={index} className="flex gap-4">
//                                     <img
//                                         src="https://via.placeholder.com/80x80"
//                                         alt="Recent"
//                                         className="w-16 h-16 rounded-lg"
//                                     />
//                                     <div>
//                                         <p className="text-sm text-gray-500">July 20, 2024</p>
//                                         <p className="text-gray-700 text-sm font-medium hover:text-blue-600 cursor-pointer">
//                                             {title}
//                                         </p>
//                                     </div>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Popular Tags */}
//                     <div className="bg-white p-6 shadow rounded-xl">
//                         <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
//                         <div className="flex flex-wrap gap-2">
//                             {[
//                                 "Design",
//                                 "Development",
//                                 "UI/UX",
//                                 "Technology",
//                                 "Fashion",
//                                 "Quality",
//                                 "Trends",
//                             ].map((tag, index) => (
//                                 <span
//                                     key={index}
//                                     className="px-3 py-1 text-sm bg-gray-100 rounded-md cursor-pointer hover:bg-blue-100"
//                                 >
//                                     {tag}
//                                 </span>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Extra Image/Ad */}
//                     <div className="rounded-xl overflow-hidden">
//                         <img
//                             src="https://via.placeholder.com/400x400"
//                             alt="Ad/Extra"
//                             className="w-full h-auto"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
