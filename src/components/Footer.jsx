import React from "react";
import { Element } from "react-scroll";

const Footer = () => {
  return (
    <Element name="contactSection">
      <footer className="bg-[#2f4632] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          {/* Top Row: Copyright + Links */}

          {/* Divider */}
          <div className="border-t border-green-700" />

          {/* Map + Contact Form */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Map */}
            <div className="w-full md:w-1/2 h-80 rounded-xl overflow-hidden shadow-lg border border-green-700">
              <iframe
                title="VIT Bhopal University"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14718.929350938146!2d76.847101!3d23.077385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c427603e6b049%3A0xf4494c4891bb4813!2sVIT%20Bhopal%20University!5e0!3m2!1sen!2sin!4v1641637741234!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Form */}
            {/* Contact Form */}
            <div className="w-full md:w-1/2 bg-[#2e4634] p-6 rounded-xl shadow-lg space-y-4">
              <h3 className="text-xl font-semibold text-[#ffffff]">
                Contact Us
              </h3>
              {/* <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 rounded bg-[#34543c] text-[#ffffff] placeholder-[#c0eac0] focus:outline-none focus:ring-2 focus:ring-white-900"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded bg-[#34543c] text-[#ffffff] placeholder-[#c0eac0] focus:outline-none focus:ring-2 focus:ring-white-900"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 rounded bg-[#34543c] text-[#ffffff] placeholder-[#c0eac0] focus:outline-none focus:ring-2 focus:ring-white-900"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full px-4 py-2 rounded bg-[#34543c] text-[#ffffff] placeholder-[#c0eac0] focus:outline-none focus:ring-2 focus:ring-white-900"
                />
                <button
                  type="submit"
                  className="w-full bg-[#00c853] hover:bg-[#00e676] transition text-white font-semibold py-2 rounded shadow-md"
                >
                  Submit
                </button>
              </form> */}
              <form
                action="https://formspree.io/f/xnnpwvrw"
                method="POST"
                className="space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full px-4 py-2 rounded bg-[#34543c] text-[#ffffff] placeholder-[#c0eac0] focus:outline-none focus:ring-2 focus:ring-white-900"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-2 rounded bg-[#34543c] text-[#ffffff] placeholder-[#c0eac0] focus:outline-none focus:ring-2 focus:ring-white-900"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 rounded bg-[#34543c] text-[#ffffff] placeholder-[#c0eac0] focus:outline-none focus:ring-2 focus:ring-white-900"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="w-full px-4 py-2 rounded bg-[#34543c] text-[#ffffff] placeholder-[#c0eac0] focus:outline-none focus:ring-2 focus:ring-white-900"
                />
                <button
                  type="submit"
                  className="w-full bg-[#00c853] hover:bg-[#00e676] transition text-white font-semibold py-2 rounded shadow-md"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Kisan Sathi. All rights
              reserved.
            </p>
            <div className="mt-3 md:mt-0 space-x-4">
              <a href="#" className="hover:text-green-300 transition">
                Privacy
              </a>
              <a href="#" className="hover:text-green-300 transition">
                Terms
              </a>
              <a href="#" className="hover:text-green-300 transition">
                Contact
              </a>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="text-center pt-6 border-t border-green-700">
            <p class="text-center text-green-100 mt-8 text-sm">
              🌾 Did you know? Madhya Pradesh is the largest producer of pulses
              in India, contributing over 30% to the country’s total pulse
              production — empowering thousands of local farmers!
            </p>

            <p class="text-center text-white mt-2 text-sm font-medium">
              Made by team EPICS077
            </p>
          </div>
        </div>
      </footer>
    </Element>
  );
};

export default Footer;
