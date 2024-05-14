import React, { useState } from "react";

const Card = ({ element }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseOver = () => {
        setHovered(true);
    };

    const handleMouseOut = () => {
        setHovered(false);
    };

    return (
        <div className="flex flex-col gap-5 justify-center items-center mx-6 my-6 bg-white p-2 rounded shadow-md" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <img src={hovered ? process.env.PUBLIC_URL + element.imageHovered : process.env.PUBLIC_URL + element.image} alt={element.nombre} className="mb-2 rounded-lg" style={{ width: "200px", height: "200px" }} />
            <div>
                <h2 className="text-xl font-bold">{element.nombre}</h2>
                <div className="flex justify-center gap-4 font-extralight">
                    <p>${element.precio}</p>
                    <p>{element.composicion}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
