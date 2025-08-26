import { FaLeaf, FaDollarSign, FaSpa, FaCheckCircle, FaMugHot } from "react-icons/fa";
import { Link } from "react-router-dom";
import Aboutbg from "/imags/aboutbg1.jpg"
import OurTeam from "/imags/ourTeam.jpg";
 
const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    image: "/imags/member.jpg",
  },
  {
    name: "Jane Smith",
    role: "Head of Marketing",
    image: "/imags/member2.jpg",
  },
  {
    name: "Michael Brown",
    role: "Lead Developer",
    image: "/imags/member3.jpg",
  },
];
 
const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="p-20 flex flex-col justify-center items-center font-bold text-black my-7 "
        style={{
          backgroundImage: ` url(${Aboutbg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}> 
        <h1 className="text-4xl md:text-5xl font-bold text-green-50 mb-4">
          About Us
        </h1>
      </div>
 
 
      {/* Our Story */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 mb-6">
              We started our journey with a passion for bringing positive change.
              Our mission is to deliver exceptional services and products that
              empower our clients. With years of expertise and dedication, we
              have grown into a trusted name in the industry.
            </p>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              To provide innovative solutions that meet our customers' needs,
              while maintaining sustainability and excellence in every project.
            </p>
          </div>
          <div>
            <img
              src={OurTeam}
              alt="Our Team"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
 
      {/* Our Best Qualities */}
      <div className="max-w-6xl mx-auto px-6 py-10 text-center ">
        <h2 className="text-3xl font-bold mb-8">Our Best Qualities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          <div className="flex items-start gap-3">
            <FaLeaf className="text-green-600 text-2xl" />
            <div>
              <h3 className="font-semibold">Pure Herbs</h3>
              <p className="text-sm text-gray-600">We carefully select authentic Ayurvedic herbs for holistic well-being.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaDollarSign className="text-green-600 text-2xl" />
            <div>
              <h3 className="font-semibold">Affordable Wellness</h3>
              <p className="text-sm text-gray-600">Bringing premium Ayurvedic care at prices that everyone can access.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaSpa className="text-green-600 text-2xl" />
            <div>
              <h3 className="font-semibold">Holistic Healing</h3>
              <p className="text-sm text-gray-600">Blending traditional wisdom with modern wellness for balanced living.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaCheckCircle className="text-green-600 text-2xl" />
            <div>
              <h3 className="font-semibold">Trusted Quality</h3>
              <p className="text-sm text-gray-600">We ensure authenticity and purity in every product you receive.</p>
            </div>
          </div>
        </div>
      </div>
 
      {/* Our Products Section */}
      <div className="bg-gray-50 py-10 pb-13">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Herbal Range</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: "Herbal Teas", icon: <FaMugHot /> },
              { name: "Natural Oils", icon: <FaLeaf /> },
              { name: "Wellness Powders", icon: <FaMugHot /> },
              { name: "Skin & Body Care", icon: <FaSpa /> },
              { name: "Detox Blends", icon: <FaLeaf /> },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow hover:shadow-md transition"
              >
                <div className="text-green-600 text-4xl mb-3">{item.icon}</div>
                <p className="font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
 
      {/* Bottom Banner */}
      <div className="bg-green-700 text-white py-20 px-6 text-center">
        <h2 className="text-2xl font-semibold">Join Us : Experience True Balance with Ayurveda</h2>
        <p className="mt-3 max-w-3xl mx-auto text-gray-200">
          At Himvedaa, we believe in natural healing and holistic care. Our mission is to bring ancient Ayurvedic
          wisdom into modern lifestyles—helping you live healthier, happier, and more balanced.
        </p>
        <button className="mt-6 px-6 py-2 bg-white text-green-700 font-semibold rounded shadow hover:bg-gray-100 transition">
          <Link to="/shop">Explore Products</Link>
        </button>
      </div>
 
 
 
 
      {/* Team Section */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition p-6"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
 
    </div>
  );
};
 
export default About;