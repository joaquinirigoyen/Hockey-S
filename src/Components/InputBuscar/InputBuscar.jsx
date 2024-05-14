import React, { useState } from "react";

const InputBuscar = ({ handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        handleSearch(value);
    };

    return (
        <div className="mt-4 max-w-md mx-auto">
            <div className="relative">
                <input
                    className="w-64 focus:shadow-lg font-Inter text-white  focus:shadow-gray-200 pl-14 py-2 bg-gray-700 rounded-2xl outline-none"
                    type="text"
                    placeholder="¿Qué estás buscando?"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <span className="absolute inset-y-0 left-0 pl-0 flex items-center pointer-events-none">
                    <img
                        className="w-64 h-4 text-gray-500"
                        src="icons/search-icon.svg"
                        alt="search Icon"
                    />
                </span>
            </div>
        </div>


    );



};

export default InputBuscar;
