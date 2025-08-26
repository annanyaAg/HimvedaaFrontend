import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import ContactUnder from "/imags/contactUnder.png"

export default function ContactPage() {
  return (
    <div className="w-full pt-5">
      <div style={{ backgroundImage: "linear-gradient(rgb(0 0 0 / 66%)), url('/imags/bgTest.jpg')" }}
        className="relative h-56 bg-cover bg-center flex items-center justify-center "
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">Contact</h1>
          <p className="text-sm mt-2">
            Home <span className="text-green-400">/</span> Contact
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-green-800">Himvedaa</h2>
            <p className="text-gray-600">Get in Touch</p>
            <img className="mx-auto h-10 mt-3" src={ContactUnder} />
          </div>

          <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-md p-6">
            {/* Contact Form */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Leave A Message Here</h3>
              <p className="text-sm text-gray-500 mb-6">
                Feel free to drop us a line below
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                />
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                ></textarea>
                <button className="bg-green-700 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600 transition">
                  Send
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-green-800 text-white rounded-xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <MapPin className="mr-3" />
                  <p>150 King Street <br /> Khartoum - Sudan</p>
                </div>
                <div className="flex items-center mb-4">
                  <Mail className="mr-3" />
                  <p>
                    company@name.com <br /> name@company.com
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  <Phone className="mr-3" />
                  <p>+971 256343256 <br /> +971 256343256</p>
                </div>
              </div>

              {/* Socials */}
              <div className="flex space-x-4 mt-6">
                <a href="#" className="hover:text-gray-300">
                  <Facebook />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <Twitter />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <Instagram />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-80">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27038.021877707582!2d76.25202631027801!3d32.102967832926716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b458198590ddf%3A0xad8e3ff3dfe5b1fe!2sKangra%2C%20Himachal%20Pradesh%20176001!5e0!3m2!1sen!2sin!4v1755771375951!5m2!1sen!2sin" 
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          title="Google Map">        
        </iframe>

        {/* allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"> */}
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.1877391677937!2d-1.256019684237663!3d51.754816979676655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c1629e8c8e0f%3A0xdeb7e9b0e4e1b4f9!2sUniversity%20of%20Oxford!5e0!3m2!1sen!2suk!4v1684500000000!5m2!1sen!2suk"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe> */}
      </div>
    </div>
  );
}