import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardAside from '../ShareComponents/DashboardAside';
import Header from '../ShareComponents/Header';

const Dashboard = () => {
    return (
        <>
            <Header />
            <div className="drawer drawer-mobile container mx-auto">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-2">
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <DashboardAside />
                </div>
            </div>
        </>
    );
};

export default Dashboard;