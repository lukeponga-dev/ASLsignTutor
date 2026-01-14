import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Activity } from 'lucide-react';

export default function Navbar() {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="navbar glass-panel">
            <div className="container navbar-content">
                <Link to="/" className="logo-area">
                    <div className="icon-wrapper">
                        <Brain size={24} className="text-accent" />
                    </div>
                    <span className="logo-text">SignMate</span>
                </Link>

                <div className="nav-links">
                    <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                        Home
                    </Link>
                    <Link to="/learn" className={`nav-link ${isActive('/learn') ? 'active' : ''}`}>
                        Practice
                    </Link>
                    <Link to="/dashboard" className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}>
                        Progress
                    </Link>
                </div>

                <div className="status-indicator">
                    <Activity size={16} className="text-success" />
                    <span>System Online</span>
                </div>
            </div>
        </nav>
    );
}
