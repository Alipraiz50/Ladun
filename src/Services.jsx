import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import services1 from '../src/assets/service_1.jpg';
import services2 from '../src/assets/service_2.png';
import services3 from '../src/assets/service_3.png';
import services4 from '../src/assets/service_4.jpg';


const Services = () => {
  return (
    <div className='text-white lg:px-24 px-4'>
        <div className='h-36'></div>
        {/* service section */}
        <div className='lg:flex lg:justify-between items-start' id='services'>
            {/* content */}
            <div className='lg:w-1/3 space-y-5'>
                <h4 className='text-gray-200 font-semibold text-2xl'>How May We Assist You ?</h4>
                <h2 className='text-5xl font-bold mb-5 leading-snug'><span className='text-orange'>T</span>he solutions we provide with</h2>
                <a href="" className="inline-flex items-center gap-2 font-semibold hover:text-orange transition-all duration-300 ease-in">
              <span>View All Available Services</span>
              <BsArrowRight />
            </a>
            </div>

            {/* services */}
            <div className='lg:w-2/3 my-8'>
                <div className='flex flex-wrap'>
                <div className='lg:w-1/4 hidden lg:block'></div>
                <div className='service-card'>
                    <a href="" className='rounded-2xl block relative'>
                        <img src={services1} alt="" className='rounded-2xl'/>
                        <div className='absolute bg-black left-0 top-0 opacity-50 h-full w-full rounded-2xl'></div>
                        <div className='absolute top-1/3 left-4 right-0'>
                            <span className='w-3 h-3 block rounded-full bg-orange mb-2'></span>
                            <h2 className='text-1xl font-bold text-white'>
                                UI/UX Design
                            </h2>
                        </div>
                    </a>
                </div>

                <div className='lg:w-1/4 hidden lg:block'></div>
                <div className='service-card'>
                    <a href="" className='rounded-2xl block relative'>
                        <img src={services2} alt="" className='rounded-2xl'/>
                        <div className='absolute bg-black left-0 top-0 opacity-50 h-full w-full rounded-2xl'></div>
                        <div className='absolute top-1/3 left-4 right-0'>
                            <span className='w-3 h-3 block rounded-full bg-orange mb-2'></span>
                            <h2 className='text-1xl font-bold text-white'>
                                Mern Stack Development
                            </h2>
                        </div>
                    </a>
                </div>

                
                <div className='service-card'>
                    <a href="" className='rounded-2xl block relative'>
                        <img src={services3} alt="" className='rounded-2xl'/>
                        <div className='absolute bg-black left-0 top-0 opacity-50 h-full w-full rounded-2xl'></div>
                        <div className='absolute top-1/3 left-4 right-0'>
                            <span className='w-3 h-3 block rounded-full bg-orange mb-2'></span>
                            <h2 className='text-1xl font-bold text-white'>
                                Digital Marketing
                            </h2>
                        </div>
                    </a>
                </div>

                <div className='lg:w-1/4 hidden lg:block'></div>
                <div className='service-card'>
                    <a href="" className='rounded-2xl block relative'>
                        <img src={services4} alt="" className='rounded-2xl'/>
                        <div className='absolute bg-black left-0 top-0 opacity-50 h-full w-full rounded-2xl'></div>
                        <div className='absolute top-1/3 left-4 right-0'>
                            <span className='w-3 h-3 block rounded-full bg-orange mb-2'></span>
                            <h2 className='text-1xl font-bold text-white'>
                                Technology
                            </h2>
                        </div>
                    </a>
                </div>

              </div>
            </div>
        </div>

        <div className='h-36'></div>
    </div>
  );
};

export default Services;