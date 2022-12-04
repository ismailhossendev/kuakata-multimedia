import React from 'react';
import HomeSlider from './HomeSlider';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecentVideo from './RecentVideo';
import UpcomingContent from './UpcomingContent';
import Teams from '../../ShareComponents/Teams';
import Developer from '../../ShareComponents/Developer';
import HomeBlog from './HomeBlog';

const Home = () => {
    return (
        <div className='container mx-auto space-y-10 px-2 '>
            <HomeSlider />
            <RecentVideo />
            <UpcomingContent />
            <Teams />
            {/* <Developer /> */}
            <HomeBlog />
        </div>
    );
};

export default Home;