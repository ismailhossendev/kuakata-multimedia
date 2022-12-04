import React from 'react';
import BlogCard from '../../ShareComponents/BlogCard';

const HomeBlog = () => {
    return (
        <div>
            <h1 className='text-3xl font-semibold font-serif mb-2 uppercase'>Recent Blog</h1>
            <div className="grid lg:grid-cols-2 gap-4">
                {
                    [...Array(4)].map(card => <BlogCard />)
                }
            </div>
        </div>
    );
};

export default HomeBlog;