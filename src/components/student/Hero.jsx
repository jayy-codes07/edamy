import React from 'react'
import { assets } from '../../assets/assets'
import "./../../App.css";
import SearchBar from './SearchBar'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
 


  
  return (
    <>
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 bg-gradient-to-b from-blue-50 via-cyan-50 to-white'>
        <h1 className=' md:text-[48px]  text-[28px] text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto ' >Empower your future with the courses designed to <span className='text-blue-600'> fit your choice.</span>
        <img className='md:block  absolute -bottom-7 right-0' src={assets.sketch} alt="sketch"  /></h1>
        
    </div>
    <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>We bring together world-class instructors, interactive content, and a supportive community to help you achieve your personal and professional goals.</p>
    <p className='md:hidden text-gray-500 max-w-sm mx-auto'>We bring together world-class instructors to help you achieve your professional goals.</p>
    <SearchBar />
    </>
  )
}

export default Hero