import React from 'react';

const Navbar = () => {
    return (
        // <header>
        //     <a href="#about" className="section-link">About Me</a>
        //     <a href="#portfolio" className="section-link">Portfolio</a>
        //     <a href="#contact" className="section-link">Contact Info</a>
        //     <a href="#resume" className="section-link">Resumé</a>
        // </header>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#about">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact Info</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#resume">Resumé</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar