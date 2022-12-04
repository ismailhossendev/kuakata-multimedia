import React, { useEffect } from 'react';
import VideoCard from './VideoCard';

const RecentVideo = () => {
    const [videos, setSliders] = React.useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/videos?limit=3')
            .then(res => res.json())
            .then(data => {
                setSliders(data)
            })
    }, [])
    return (
        <>
            <h1 className=' text-3xl font-semibold font-serif uppercase'>Recent Videos</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    videos.map((video) => <VideoCard video={video} key={video._id} />)
                }
            </div>
        </>
    );
};

export default RecentVideo;