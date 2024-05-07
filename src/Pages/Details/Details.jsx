import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Details = () => {
    const { id } = useParams();
    const [paloDetails, setPaloDetails] = useState(null);

    useEffect(() => {
        const paloJSONUrl = `/Mocks/palo-${id}.json`;

        fetch(paloJSONUrl)
            .then((response) => response.json())
            .then((data) => setPaloDetails(data))
    }, [id]);

    return (
        <div className=" h-full mx-auto px-4 p-10 bg-gradient-to-b from-zinc-400 to-gray-300 mt-8 mb-4">
            <div className="flex">
                <div className="w-1/2">
                    {paloDetails ? (
                        <Carousel>
                            {paloDetails.imagenes.map((imagen, index) => (
                                <div key={index}>
                                    <img
                                        src={imagen}
                                        alt={`Imagen ${index + 1}`}
                                        className="max-w-96"
                                    />
                                </div>
                            ))}
                        </Carousel>
                    ) : (
                        <p>Cargando imágenes...</p>
                    )}
                </div>
                <div className="w-1/2 mx-auto p-0">
                    {paloDetails ? (
                        <div className="p-4  text-gray-50">
                            <div className="mb-2 mt-2">
                                <h1 className="text-3xl font-bold mb-2 text-gray-50">Características</h1>
                                <hr />
                                <p><span className="font-extrabold text-2xl"> ${paloDetails.precio}</span></p>
                                <p><span className="font-bold">Color:</span> {paloDetails.color}</p>
                                <p><span className="font-bold">Talle:</span> {paloDetails.length}</p>
                                <p><span className="font-bold">Peso:</span> {paloDetails.weight}</p>
                                <p><span className="font-bold"></span> {paloDetails.composicion}</p>
                            </div>
                            <div className="mt-2">
                                <hr />
                                <h1 className="text-3xl font-bold mb-2 text-gray-50">Descripcion</h1>
                                <p>{paloDetails.description}</p>
                            </div>

                        </div>
                    ) : (
                        <p>Cargando detalles del palo...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Details;
