import React from 'react';

// import './style.css';

function Footer() {
    return (
        <footer className="footer bg-dark text-white">
            <div className="d-flex flex-column">
                <p className="text-center my-2 network">
                    Redes Sociais
                </p>
                <hr className="my-1"/>
                <div className="d-flex justify-content-center align-items-center my-2">
                    <button className="fab fa-github footer-icon" onClick={() => {window.open("https://github.com/joseallisson", '_blank')}}></button>
                    <button className="fab fa-linkedin-in footer-icon" onClick={() => {window.open("https://www.linkedin.com/in/jos%C3%A9-alisson-bezerra-de-souza/", '_blank')}}></button>
                    <button className="fab fa-instagram footer-icon" onClick={() => {window.open("https://www.instagram.com/jose_alisson_bezerra/", '_blank')}}></button>
                </div>

                <div className="w-100 d-flex justify-content-center align-items-center bg-footer">
                    <p className="m-0">
                        © {new Date().getFullYear()} José Alisson Bezerra de Souza
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;