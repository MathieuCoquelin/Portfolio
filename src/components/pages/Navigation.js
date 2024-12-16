import { NavLink } from "react-router-dom";
import '../../styles/pages/Navigation.css';
import React, {useState} from "react";

function Navigation () {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
        <nav>
            <div className='menu' onClick = {() => {
                setMenuOpen(!menuOpen);
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/skills">Skills</NavLink>
                </li>
            </ul>
        </nav>
  )
};

export default Navigation;
