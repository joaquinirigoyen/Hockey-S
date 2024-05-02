import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="bg-slate-800 text-white p-4 fixed top-0 w-full z-10">
            <div className="flex justify-center">
                <ul className="flex h-full items-center text-center">
                    <li className="nav-links px-4 capitalize font-medium text-gray-100 hover:scale-105 hover:text-white duration-200 ">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-links px-4 capitalize font-medium text-gray-100 hover:scale-105 hover:text-white duration-200 ">
                        <Link to="/about">Sobre nosotros</Link>
                    </li>
                    <li className="nav-links px-4 capitalize font-medium text-gray-100 hover:scale-105 hover:text-white duration-200 link-underline">
                        <Link to="/contact">Contacto</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
