import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/login">login</Link>
            <Link to="/register">register</Link>
            <Link to="/register-rbs">register RBS</Link>
            <Link to="/register-bs">register BS</Link>
            
        </nav>
    );
};

export default Header;