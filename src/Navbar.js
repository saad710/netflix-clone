import React, { useState } from 'react';
import { useEffect } from 'react';
import './Navbar.css';

function Navbar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };

    }, []);
    return (
        <div className={`nav ${show && "nav-black"}`}>
            <img className="nav-logo" src="https://pmcvariety.files.wordpress.com/2020/05/netflix-logo.png?w=1024" alt="netflix-logo"/>
            <img className="nav-avatar" src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" alt="Netflix avatar"/>
        </div>
    )
}

export default Navbar;
