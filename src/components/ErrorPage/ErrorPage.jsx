import React from 'react';
import { NavLink } from 'react-router-dom';


const ErrorPage = () => {
    return (
        <div>
        <div className='h-screen md:w-1/2 mx-auto flex flex-col justify-center items-center space-y-4'>
            <h1 className='text-3xl font-bold text-center'>404 : Page Not Found</h1>
            <p className='text-xl font-medium text-center'>The page you are looking for is not found</p>

            <NavLink to={"/"} className='btn bg-[#23BE0A] text-white font-bold'>Go Back Home</NavLink>
        </div>
        </div>
    );
};

export default ErrorPage;