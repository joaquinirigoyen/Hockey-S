import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../Components/Card/Card";
import InputBuscar from "../../Components/InputBuscar/InputBuscar";


const Home = () => {

    const [paloState, setPaloState] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch('/Mocks/palos.json')
            .then((response) => response.json())
            .then((data) => setPaloState(data));
    }, []);

    const handleSearch = (value) => {
        setSearchTerm(value);
    };

    const filteredPalos = paloState.filter((palo) =>
        palo.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-gradient-to-b from-zinc-400 to-gray-300 min-h-screen h-full text-slate-800 flex items-center justify-center py-20 px-5">
            <div className="container flex flex-col max-w-3xl">
                <InputBuscar handleSearch={handleSearch} />
                <div className="grid grid-cols-3 gap-5">
                    {filteredPalos.map((element) => (
                        <Link to={`/element/${element.id}`} key={element.id}>
                            <Card element={element} />
                        </Link>
                    ))}
                </div>
                {searchTerm && filteredPalos.length === 0 && (
                    <p className=" text-xl font-bold text-red-500 mt-2">No se encontraron coincidencias</p>
                )}
            </div>
        </div>
    );
};

export default Home;