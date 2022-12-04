import React from 'react';

const VideoCard = ({ video }) => {
    return (
        <iframe className='w-full rounded' height="280" src={`https://www.youtube.com/embed/${video.id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

        </iframe>
    );
};

export default VideoCard;