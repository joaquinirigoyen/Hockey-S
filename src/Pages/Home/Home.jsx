import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../Const/Routes"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../Components/Card/Card";



const Home = () => {
    const [paloState, setPaloState] = useState([]);

    useEffect(() => {
        fetch('/Mocks/palos.json') // Ruta relativa al directorio 'public'
            .then((response) => response.json())
            .then((data) => setPaloState(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (

        <div className="bg-gradient-to-b from-slate-800 to-gray-300 min-h-screen h-full text-slate-800 flex items-center justify-center py-20 px-5">
            <div className="container flex flex-col max-w-3xl">
                {/* <h1 className="text-3xl font-bold mb-8">Palos</h1> */}
                <div className="grid grid-cols-3 gap-5 shadow-md">
                    {paloState.map((element) => (
                        <Link to={`/element/${element.id}`} key={element.id}>
                            <Card element={element} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
