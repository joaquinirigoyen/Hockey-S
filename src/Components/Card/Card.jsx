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
        <div className="bg-white p-2 rounded" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <img src={hovered ? process.env.PUBLIC_URL + element.imageHovered : process.env.PUBLIC_URL + element.image} alt={element.name} className="mb-2" />
            <div className="container">
                <div id="nombre">
                    <h2 className="text-xl font-bold">{element.nombre}</h2>
                </div>
                <div className="flex justify-center p-3 grid-cols-3 gap-4 font-extralight">
                    <div id="precio">
                        <p>${element.precio}</p>
                    </div>
                    <div id="composicion">
                        <p>{element.composicion}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
