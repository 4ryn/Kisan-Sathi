import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";


const AboutUs = () => {
  return (
    <div className="min-h-screen bg-green-50 py-12 px-6 lg:px-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-900 mb-4">About Kisan Sathi</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Empowering Farmers with Smart Solutions for a Sustainable Future
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="/farm0.jpg" alt="Farming" className="rounded-2xl shadow-lg w-full h-auto" />

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Card className="bg-white shadow-xl rounded-2xl">
            <CardContent className="p-6 text-gray-800 text-justify text-base leading-relaxed">
              Agriculture is the backbone of food security. Yet, farmers face challenges
              like unpredictable weather, inefficient resource allocation, and lack of
              timely agricultural information. Kisan Sathi bridges this gap by integrating
              modern technology into traditional farming practices.
              <br /><br />
              From disease detection and crop suggestion to real-time data from sensors,
              Kisan Sathi supports smarter decisions. Our tools analyze plant health,
              soil fertility, and provide effective fertilization and irrigation
              techniques. The platform is intuitive, multilingual, and affordable,
              ensuring inclusivity for all farmers.
              <br /><br />
              We emphasize sustainability through features like environmental footprint
              analysis and promotion of green farming methods. Our mission is to equip
              farmers to reduce risks, conserve resources, and adopt environmentally
              friendly practices.
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
