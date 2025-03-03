import React from 'react'
import { FaHome, FaUserAlt, FaCommentAlt, FaBars } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-[#4B3621] to-[#6F4E37] text-yellow-500 overflow-hidden">
      {/* DECORATIVE BORDER */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from bg-yellow-400 via-yellow-500 to-yellow-400" />

      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from bg-yellow-400 via-yellow-500 to-yellow-400"/>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* BRANDING SECTION */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Café Royale
            </h1>
            <p className="mt-2 text-base sm:text-lg md:text-xl">
              Brewing inspiration every day.
            </p>
          </div>
          {/*  NAVIGATION BTNS */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              [FaHome, "Home"],
              [FaUserAlt, "About"],
              [FaCommentAlt, "Testimonial"],
              [FaBars, "Menu"],
            ].map(([Icon, label], index) => (
              <a 
              key={index} className='flex flex-col items-center transition-colors duration-300'
              href={`#${label.toLocaleLowerCase()}`}>
                <Icon size={28}/>
                <span className='mt-1 text-sm'>
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* DECORATIVE SEPERATOR */}
        <div className='my-8 relative'>
          <div className='absolute inset-0 flex items-center'>
            <div className='w-full border-t-2 border-dashed border-yellow-500/30'/>
          </div>
          <div className='relative flex justify-center'>
            <span className='bg-[#6F4E37] px-4 text-yellow-400 text-lg sm:text-xl'>
              ☕
            </span>
          </div>
        </div>

        {/* EMAIL */}
        <div className='flex flex-col md:flex-row justify-between items-center mb-12 gap-6'>
          <div className='w-full md:max-w-md'>
            <div className='bg-gradient-to-r from-yellow-400 to-yellow-600 p-0.5 rounded-full'>
              <div className='flex bg-[#6F4E37] rounded-full pl-6 pr-2 py-2'>
                <input type="email" placeholder='Enter your email for brew-tiful updates'
                className='w-full bg-transparent text-white placeholder-gray-300 outline-none'/>
                <button className='ml-2 px-4 sm:px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-dark-coffee font-semibold rounded-full hover:opacity-90 transition-opacity text-white'>
                  Subscribe
                </button>
              </div>
        
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className='text-center space-y-4'>
          <div className='flex justify-center items-center space-x-2'>
            <span className='h-px w-8 bg-yellow-400'/>
            <p className='text-xl sm:text-2xl font-semibold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent'>
              Designed By {" "}
              <span className='cursor-pointer hover:text-purple-300'>
                Hexagon Digital Services
              </span>
            </p>
            <span className='h-px w-8 bg-yellow-400'/>

          </div>
        </div>



      </div>

    </footer>
  )
}

export default Footer
