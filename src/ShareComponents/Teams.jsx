import React from 'react';

const Teams = () => {
    return (
        <section className="">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10" >
                <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">Our team</h1>
                <p className="max-w-2xl text-center ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
                <div className="flex flex-col justify-center m-8 text-center" >
                    <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full " src="https://source.unsplash.com/100x100/?portrait?0" />
                    <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                    <p className="">Visual Designer</p>
                </div>
                <div className="flex flex-row flex-wrap-reverse justify-center" >
                    <div className="flex flex-col justify-center m-8 text-center" >
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full " src="https://source.unsplash.com/100x100/?portrait?0" />
                        <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                        <p className="">Visual Designer</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center" >
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full " src="https://source.unsplash.com/100x100/?portrait?0" />
                        <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                        <p className="">Visual Designer</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center" >
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full " src="https://source.unsplash.com/100x100/?portrait?0" />
                        <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                        <p className="">Visual Designer</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center" >
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full " src="https://source.unsplash.com/100x100/?portrait?0" />
                        <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                        <p className="">Visual Designer</p>
                    </div>
                </div>
            </div>
            <button className='btn btn-secondary mx-auto block'>SEE ALL MEMBERS</button>
        </section>
    );
};

export default Teams;