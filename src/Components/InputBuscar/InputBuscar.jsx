import React, { useState } from "react";

const InputBuscar = ({ handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        handleSearch(value);
    };

    return (
        <div className="mt-4 relative m-5">
            <div className="absolute inset-y-0 pl-64 flex items-center pointer-events-none">
                <span className="border-gray-500 border-solid p-3 rounded-full">
                    <img
                        className="h-4 w-4"
                        src="/search-icon.svg"
                        alt="search Icon"
                    />
                </span>
            </div>
            <input
                className="focus:shadow-lg font-Inter text-white focus:shadow-gray-200 pl-12 w-auto py-2 bg-gray-700 rounded-2xl outline-none transition-all duration-300 ease-in-out"
                type="text"
                placeholder="¿Que estas buscando?"
                value={searchTerm}
                onChange={handleChange}
            />

        </div>
    );

};

export default InputBuscar;
