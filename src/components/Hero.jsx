import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import {Link} from 'react-scroll';

const Hero = () => {
  return (
    <div className="banner cs-style1 " id="home">
      <div className="cs-shape_1"></div>
      <div className="cs-shape_1"></div>
      <div className="cs-shape_1"></div>

      <div className="px-4 lg:px-24">
        <h1 className="md:w-2/3 lg:text-7xl sm:text-6xl text-5xl mb-5 text-white font-bold lg:leading-snug sm:leading-snug leading-snug">
          <span className='text-orange'>C</span>reative <span className='text-orange'>V</span>ision <span className='text-orange'>T</span>oday
        </h1>

        <div className='text-white text-lg flex md:flex-row flex-col-reverse md:items-center items-start justify-between gap-8'>
          <div>
            <a href="" className="inline-flex items-center gap-2 font-semibold hover:text-orange transition-all duration-300 ease-in">
              <span>Quick Quote</span>
              <BsArrowRight />
            </a>
          </div>
          <div className='md:w-1/2'>
            <p className='text-gray-400'>We deliver top-notch solutions for our client, Your success is our mission and together we will achieve greatness.</p>
          </div>
        </div>
      </div>
      <Link to='services' smooth={true} className='cs-down_btn md:mt-19 mt-8'>.</Link>
    </div>
  );
};

export default Hero;