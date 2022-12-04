import React from 'react';
import TeamCard from './TeamCard';

const Teams = () => {
    return (
        <section className="">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10" >
                <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl uppercase">Our team</h1>
                <p className="max-w-2xl text-center ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
                {/* director */}
                <TeamCard />
                <div className="flex flex-row flex-wrap-reverse justify-center" >
                    {
                        [...Array(4)].map((_, i) => <TeamCard key={i} />)
                    }
                </div>
            </div>
            <button className='btn btn-secondary mx-auto block'>SEE ALL MEMBERS</button>
        </section>
    );
};

export default Teams;