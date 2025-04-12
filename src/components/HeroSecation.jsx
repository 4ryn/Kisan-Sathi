import React from 'react'

import { Typewriter } from 'react-simple-typewriter';


const HeroSecation = () => {
  return (
    <div
    className="w-full h-[70vh] flex flex-col justify-center items-center text-white text-center px-4 bg-cover bg-center relative"
    style={{
      backgroundImage: `url("/Hero.png")`, 
    }}
      >
          {/* <div>
              <img src="/Hero.png" alt=""/>
          </div> */}

    {/* <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div> */}

    {/* Content */}
    <div className="z-10">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Smart Agro</h1>
      <h2 className="text-xl md:text-2xl font-light">
        We{' '}
        <span className="text-yellow-400 font-semibold">
          <Typewriter
            words={['Grow Innovation.', 'Connect Farmers.', 'Empower Agriculture.']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h2>
    </div>
  </div>
  )
}

export default HeroSecation