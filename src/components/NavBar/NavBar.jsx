import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const link = (
        <>
            <li>

                <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                        isActive
                            ? "border border-[#23BE0A] text-[#23BE0A] font-semibold p-2 rounded-lg"
                            : "border-none"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>

                <NavLink
                    to={"/ListedBooks"}
                    className={({ isActive }) =>
                        isActive
                            ? "border border-[#23BE0A] text-[#23BE0A] font-semibold p-2 rounded-lg"
                            : "border-none"
                    }
                >
                    Listed Books
                </NavLink>
            </li>
            <li>

                <NavLink
                    to={"/PagesToRead"}
                    className={({ isActive }) =>
                        isActive
                            ? "border border-[#23BE0A] text-[#23BE0A] font-semibold p-2 rounded-lg"
                            : "border-none"
                    }
                >
                    Pages to Read
                </NavLink>
            </li>
        </>
    );
    return (
        <div className="navbar w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {link}
                    </ul>
                </div>
                <a href="/" className="btn btn-ghost text-xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 items-center gap-4">{link}</ul>
            </div>
            <div className="navbar-end gap-4">
                <a className="btn bg-[#23BE0A] text-white font-semibold">Sign In</a>
                <a className="hidden sm:flex btn bg-[#59C6D2] text-white font-semibold">Sign Up</a>
            </div>
        </div>
    );
};

export default NavBar;
