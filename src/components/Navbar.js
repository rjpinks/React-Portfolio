import React from 'react';

const Navbar = ({ currentPage, handlePageChange }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a 
                            onClick={() => handlePageChange('About Me')}
                            className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'} 
                            aria-current="page" 
                            href="#about"
                            >
                                About Me
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} 
                            href="#portfolio"
                            >
                                Portfolio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                onClick={() => handlePageChange('Contact Info')}
                                className={currentPage === 'Contact Info' ? 'nav-link active' : 'nav-link'}
                                href="#contact"
                                >
                                    Contact Info
                                </a>
                        </li>
                        <li className="nav-item">
                            <a
                            onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                            href="#resume"
                            >
                                Resumé
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar