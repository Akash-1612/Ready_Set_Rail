import React from "react";
import "../css/navbar.css";

function Navbar() {
    return (
        <div className="main-body">
            <nav className="navbar">

                <div class="main">
                    <a href="/">
                        <h1> TeeTee
                            <div class="roller">
                                <span id="rolltext">Ready<br />Set<br />Rail<br /></span>
                            </div>
                        </h1>
                    </a>

                </div>

                <ul className="nav-links">
                    <li><a href="/pnr">Check PNR</a></li>
                    <span> | </span>
                    <li><a href="#">Route Map</a></li>
                </ul>
            </nav>
        </div>
    )
};

export default Navbar;