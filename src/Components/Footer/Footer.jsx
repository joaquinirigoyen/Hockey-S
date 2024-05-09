import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center mt-0">
            <div className="container mx-auto">
                <ul className="flex gap-5 justify-center mt-1">
                    <li>
                        <a href="https://www.instagram.com/joaquin.iri/" target="_blank" rel="noopener noreferrer">
                            <img className="h-8 w-8 hover:text-gray-500" src="icons/instagram-icon.svg" alt="ig" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/joaquinirigoyen" target="_blank" rel="noopener noreferrer">
                            <img className="h-8 w-8 hover:text-gray-500" src="icons/github-icon.svg" alt="git" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/joaquin-conrado-irigoyen-896499228/" target="_blank" rel="noopener noreferrer">
                            <img className="h-8 w-8 hover:text-gray-500" src="icons/linkedin-icon.svg" alt="linkedin" />
                        </a>
                    </li>
                </ul>

                <h2 className="font-semibold mt-1">
                    Joaquín Irigoyen 2024 &copy; Hockey's
                </h2>

                <div className="justify-center mt-1 text-xs underline text-white hover:text-gray-500">
                    <a href="/#">Contacto</a>
                    <span className="text-white mx-2">|</span>
                    <a href="/#">Políticas de Seguridad</a>
                    <span className="text-white mx-2">|</span>
                    <a href="/#">Preguntas frecuentes</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
