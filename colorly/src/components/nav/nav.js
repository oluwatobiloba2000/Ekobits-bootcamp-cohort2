import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css';

export default function Nav() {
    return (
        <nav className="dashboard-nav">
            <h1 className="dashboard-logo">
                <Link to="/">Colorly</Link>
            </h1>

            <Link to="/color/add">
                <button className="nav-add-color-btn">Add color</button>
            </Link>
       </nav>
    )
}
