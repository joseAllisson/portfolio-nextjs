import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import Profile from '../../assets/img/perfil.png';

// import "./style.css";

function Header() {
    const location = useRouter();
    const path = location.pathname;

    return (
        <header>
            <section className="header d-flex justify-content-center align-items-center">
                <Link href="/cv" target="_blank" className="btn btn-header btn-docs" title="Currículo PDF">
                    <i className="far fa-file-alt"></i>
                </Link>

                <a href="#section" className="btn btn-header btn-arrow-bottom">
                    <i className="far fa-arrow-down"></i>
                </a>

                <div>
                    <img src={Profile} alt="Jose Alisson" className="profile-img" />

                    <div className="description-profile">
                        <h1>José Alisson Bezerra</h1>
                        <p>Portfólio</p>
                    </div>
                </div>
            </section>

            <section className="navigation nav-shadow bg-white" id="section">

                <nav className="navbar-expand-lg navbar-light bg-white">
                    <div className="navbar-collapse">
                        <ul className="navbar-nav">
                            <li className={path === "/sobre" ? "active nav-item" : "nav-item"}>
                                <Link className="nav-link p-3" href="/sobre">SOBRE</Link>
                            </li>
                            <li className={path === "/" ? "active nav-item" : "nav-item"}>
                                <Link className="nav-link p-3" href="/">PORTFÓLIO</Link>
                            </li>
                            <li className={path === "/contato" ? "active nav-item" : "nav-item"}>
                                <Link className="nav-link p-3" href="/contato">CONTATO</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

            </section>
        </header>


    );
}

export default Header;
