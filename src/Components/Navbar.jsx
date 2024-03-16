import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (

<nav className="navbar navbar-expand-lg bg-body-secondary " >
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                        <li className="nav-item active text-white">
                            <Link className="nav-link" to="/">
                                Profile setting
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/media">
                                Media
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/product">
                                Product
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/cart">
                                Cart
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/returnpolicy">
                                Return Policy
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
       
    );
}

export default Navbar;
