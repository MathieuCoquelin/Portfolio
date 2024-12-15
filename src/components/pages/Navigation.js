import { Outlet, Link, BrowserRouter } from "react-router-dom";
import '../../styles/pages/Navigation.css';
import React from "react";

function Navigation () {
  return (
    <BrowserRouter>
        <nav>
            <ul className="navMenu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/skills">Skills</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </BrowserRouter>
  )
};

export default Navigation;
