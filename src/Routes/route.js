import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import Login from "../pages/Accounts/Login/Login";
import Register from "../pages/Accounts/Register/Register";
import AddRecentVideo from "../pages/Admin/AddRecentVideo";
import AddSlider from "../pages/Admin/AddSlider";
import Home from "../pages/Home/Home";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: ([
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ])
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: ([
            {
                path: '/dashboard/slider',
                element: <AddSlider />
            },
            {
                path: '/dashboard/videos',
                element: <AddRecentVideo />
            }
        ])
    }
])