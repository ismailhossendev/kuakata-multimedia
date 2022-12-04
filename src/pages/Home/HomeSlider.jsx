import React from 'react';
import Slider from 'react-slick';

const HomeSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img className='w-full lg:h-[500px] h-[200px] object-cover rounded-md' src="https://kuakatamultimedia.com/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-09-at-1.31.59-PM.jpeg" alt="" />
                </div>
                <div>
                    <img className='w-full lg:h-[500px] h-[200px] object-cover rounded-md' src="https://kuakatamultimedia.com/wp-content/uploads/2022/01/IMG20211226130118-scaled.jpg" alt="" />
                </div>
                <div>
                    <img className='w-full lg:h-[500px] h-[200px] object-cover rounded-md' src="https://kuakatamultimedia.com/wp-content/uploads/2022/01/WhatsApp-Image-2022-01-14-at-2.48.01-PM.jpeg" alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default HomeSlider;