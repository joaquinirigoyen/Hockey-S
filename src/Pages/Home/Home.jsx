import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../Components/Card/Card";
import InputBuscar from "../../Components/InputBuscar/InputBuscar";

const Home = () => {
    const [paloState, setPaloState] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/Mocks/palos.json');
                const data = await response.json();
                setPaloState(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSearch = (value) => {
        setSearchTerm(value);
    };

    const filteredPalos = paloState.filter((palo) =>
        palo.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col min-h-screen items-center bg-gradient-to-b from-zinc-400 to-zinc-600 stext-slate-800 py-20 px-5">
            <div className="container mx-auto text-center justify-center items-center">
                <InputBuscar handleSearch={handleSearch} />
            </div>
            <div className="container flex flex-wrap justify-center gap-4">
                {filteredPalos.map((element, index) => (
                    <Link to={`/element/${element.id}`} key={element.id}>
                        <Card element={element} />
                    </Link>
                ))}
            </div>
            {searchTerm && filteredPalos.length === 0 && (
                <p className="text-2xl font-bold text-white mt-12">No se encontraron coincidencias</p>
            )}
        </div>
    );
};

export default Home;
