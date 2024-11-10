import React from 'react';
import bannerImage from '../../assets/books.jpg'
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero bg-[#1313130D] rounded-3xl w-11/12 mx-auto mt-12">
            <div className="hero-content flex-col justify-center lg:flex-row-reverse md:px-28 md:py-20">
                <img
                    src={bannerImage}
                    className="w-80 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl text-center lg:text-left font-bold">Books to freshen up your bookshelf</h1>
                    <NavLink to={"/ListedBooks"} className="btn bg-[#23BE0A] text-white font-semibold mt-10">View The List</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Banner;