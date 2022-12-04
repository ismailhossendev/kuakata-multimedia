import React from 'react';
import VideoCard from './VideoCard';

const RecentVideo = () => {
    return (
        <>
            <h1 className='text-center text-3xl font-semibold font-serif'>Recent Videos</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    [...Array(3)].map((_, i) => <VideoCard />)
                }
            </div>
        </>
    );
};

export default RecentVideo;