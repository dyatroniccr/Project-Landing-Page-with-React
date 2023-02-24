import React from "react";

const NavBar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg container-fluid navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand h1 fw-bold text-white">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-muted"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <ul className="navbar-nav me-2">
                        <li className="nav-item">
                            <a className="nav-link active fw-bold text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled fw-bold text-muted" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled fw-bold text-muted" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled fw-bold text-muted">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
        </>
    );
};

export default NavBar;
