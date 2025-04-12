// import './App.css'

// import React from 'react'
// import Navbar from './components/Nabvar'
// import HeroSecation from './components/HeroSecation'
// import Model from './components/Model'
// import Footer from './components/Footer'
// import AboutUs from './components/AboutUs'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// const App = () => {
//   return (

//     <div>
//       <Navbar />
//       <HeroSecation />
//       <Model />
//       <Footer/>
//       <AboutUs />
//

//     </div>
//   )
// }

// export default App

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Nabvar";
import HeroSecation from "./components/HeroSecation";
import Model from "./components/Model";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import OurTeam from "./components/OurTeam";

const Home = () => (
  <>
    {/* <Navbar /> */}
    <HeroSecation />
    <Model />
    {/* <Footer /> */}
  </>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<OurTeam />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
