import React from 'react';
import { FaBell } from 'react-icons/fa';

const UpcomingContent = () => {
    return (
        <section>
            <div className="">
                <h1 className='text-4xl font-semibold font-bn text-rose-700 border-b border-gray-400 mb-1 lg:w-1/2'> আসিতেছে... </h1>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-[200px] lg:h-[400px] overflow-hidden lg:order-last">
                        <img alt="Party" src="https://i.ibb.co/KqXPZdy/Jaubon.jpg" className="h-[200px] lg:h-[400px] rounded-lg w-full object-cover" />
                    </div>
                    <div className="lg:py-5">
                        <h2 className="text-3xl font-bold sm:text-4xl">Grow your audience</h2>
                        <p className="mt-4 text-gray-600 max-h-[250px] ">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
                            atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
                            veniam tempora deserunt? Molestiae eius quidem quam repellat.
                            t consectetur adipisicing elit. Aut qui hic
                            atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
                            veniam tempora deserunt? Molestiae eius quidem quam repellat.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
                            atque tenetur quis eius quos ea neque sunt, accu
                        </p>
                        <a href="https://www.youtube.com/@KuakataMultimedia" target={'_blank'} className="mt-8 inline-flex items-center rounded border border-indigo-600 bg-rose-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500" rel="noreferrer">
                            <span className="text-sm font-medium"> Get Started </span>
                            <FaBell className="ml-2" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingContent;