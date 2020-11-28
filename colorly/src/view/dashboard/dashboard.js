import React from 'react';
import ColorCards from '../../components/color-cards/color-cards';
import Nav from '../../components/nav/nav';
import './dashboard.css';

export default function Dashboard() {
    return (
        <div className="dashboard_container">
           <Nav />
           <ColorCards />
        </div>
    )
}
