import React from 'react';

const TeamCard = () => {
    return (
        <div className="flex flex-col justify-center m-8 text-center" >
            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full " src="https://source.unsplash.com/100x100/?portrait?0" />
            <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
            <p className="">Visual Designer</p>
        </div>
    );
};

export default TeamCard;