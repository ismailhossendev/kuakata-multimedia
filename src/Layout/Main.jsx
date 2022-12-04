import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../ShareComponents/Footer';
import Header from '../ShareComponents/Header';

const Main = () => {
    return (
        <div className='min-h-screen relative'>
            <div className="bg-rose-600 px-4 py-3 text-white">
                <p className="text-center text-sm font-medium">
                    Love Alpine JS? Check out this new course!
                    <a className="underline" href="/alpinejs"> Learn More → </a>
                </p>
            </div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;