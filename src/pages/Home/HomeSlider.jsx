import React from 'react';
import { useEffect } from 'react';
import Slider from 'react-slick';

const HomeSlider = () => {
    const [sliders, setSliders] = React.useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/sliders')
            .then(res => res.json())
            .then(data => {
                setSliders(data)
            })
    }, [])

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

                {
                    sliders.map(slider => {
                        return <div>
                            <img className='w-full lg:h-[500px] h-[200px] object-cover rounded-md' src={slider.image} alt="" />
                        </div>
                    })
                }
            </Slider>
        </div>
    );
};

export default HomeSlider;