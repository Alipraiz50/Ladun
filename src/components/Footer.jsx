import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
const Footer = () => {
  return (
    <div className='lg:px-24 px-4 text-white'>
         <div className='flex flex-col md:flex-row flex-wrap justify-between items-start gap-12'>
            <div className='space-y-4 lg:w-1/3'>
            <a href='/' className='text-white text-3xl font-bold'><span className='text-orange'>L</span>adun</a>
            <p className='text-gray-200'>Welcome to Ladun Agency Where Creativity Meets Innovation!</p>
            <div className='flex gap-5 text-white'>
                <a href="/" className='block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300'><FaLinkedinIn className='w-5 h-5'/></a>
                <a href="/" className='block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300'><FaInstagram className='w-5 h-5'/></a>
                <a href="/" className='block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300'><FaTwitter className='w-5 h-5'/></a>
                <a href="/" className='block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300'><FaFacebookF className='w-5 h-5'/></a>
            </div>
          </div>
          {/* services */}
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold'>Services</h3>
            <div className='space-y-3 text-gray-300 '>
                <a href="/" className='block'>UI/UX Design</a>
                <a href="/" className='block'>Web Development</a>
                <a href="/" className='block'>Digital Marketing</a>
                <a href="/" className='block'>Technology</a>
            </div>
          </div>
          <div className='space-y-4'>
          <h3 className='text-xl font-semibold'>Contact Us</h3>
          <div className='space-y-3 text-gray-300'>
            <p>08125233459</p>
            <p>Ladun01@gmail.com</p>
            <p>Plot 15, <br />Apo resttlement Zone A, <br />Abuja,Nigeria</p>
          </div>
          </div>
          {/* subscribe */}
          <div className='space-y-4 lg:w-96'>
          <h3 className='text-xl font-semibold'>Subscribe</h3>
          <div className='space-y-3 text-gray-300'>
            <div className='relative w-full'>
                <input type="email" placeholder='example@gmail.com' className='newsletter_input'/>
                <button className='newsletter_btn'>
                    <span>Send</span>
                </button>
            </div>
            <p>Subscribe now for daily updates delivered straight to your inbox.</p>
          </div>
          </div>

        </div>
        <div className='h-12'></div>
        <hr className='border-gray-300'/>
        <div className='h-8'></div>
         <div className='flex flex-col sm:flex-row justify-between pb-7'>
            <p className='font-semibold'>Copyright © 2025 Ali Praise</p>
            <p className='font-semibold'>Terms of Use | Privacy Policy</p>
        </div>
    </div>
  );
};

export default Footer;