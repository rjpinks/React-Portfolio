import React, { useState } from 'react'
import About from './About'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Resume from './Resume'
import Navbar from './Navbar'

const MainComponent = function () {
    const [currentPage, setCurrentPage] = useState('About Me');

    const renderPage = function () {
        if (currentPage === 'About Me') {
            return <About />
        }
        if (currentPage === 'Contact Info') {
            return <Contact />
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
    }

    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
}

export default MainComponent