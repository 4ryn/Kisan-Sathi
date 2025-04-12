// import React from 'react';

// const options = [
//   // {
//   //   title: 'Predict Yield',
//   //   image: '/Yield.png',
//   //   path: 'http://localhost:8503'
//   // },
//   {
//     title: 'Water Management',
//     image: '/Water.png',
//     path: 'http://localhost:8505'
//   },
//   {
//     title: 'Rainfall Prediction',
//     image: '/Rainfall.png',
//     path:'http://localhost:8504',
//   },
//   {
//     title: 'Fertilizer Recommendation',
//     image: '/Fertilizer.png',
//     path: 'http://localhost:8502'
//   },
//   {
//     title: 'Crop Recommendation',
//     image: '/Crop.png',
//     path: 'http://localhost:8501'
//   },
// ];

// const Model = () => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-[#2f4632] min-h-screen">
//       {options.map((option, idx) => (
//         <div
//           key={idx}
//           className={`rounded-2xl overflow-hidden shadow-lg group transition-transform duration-300 ${
//             option.path ? 'cursor-pointer' : 'cursor-not-allowed opacity-70'
//           }`}
//           onClick={() => {
//             if (option.path) {
//               window.location.href = option.path;
//             }
//           }}
//         >
//           <div className="relative h-60 overflow-hidden">
//             <img
//               src={option.image}
//               alt={option.title}
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//             />
//           </div>
//           <div className="bg-white py-4 px-2 text-center">
//             <h2 className="text-lg font-semibold text-gray-800">{option.title}</h2>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Model;


import React from 'react';

const tools = [
  {
    title: 'Crop Recommendation',
    image: '/Crop.png',
    path: 'http://localhost:8501',
  },
  {
    title: 'Water Management',
    image: '/wm.jpg',
    path: 'http://localhost:8505',
  },
  {
    title: 'Rainfall Prediction',
    image: '/rain_India.jpg',
    path: 'http://localhost:8504',
  },
  {
    title: 'Fertilizer Recommendation',
    image: '/fr.jpg',
    path: 'http://localhost:8502',
  },
];

const Model = () => {
  return (
    <div className="min-h-screen bg-[#2f4632] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-14 text-center tracking-wide">
          Smart Farming Tools
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.path}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-60 w-full overflow-hidden rounded-t-3xl">
                <img
                  src={tool.image}
                  alt={tool.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="py-5 px-6 text-center">
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                  {tool.title}
                </h2>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Model;
