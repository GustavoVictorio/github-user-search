import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = () => (
    <div className="header-container">
        <div className="header-title">
            <Link to="/">
                Bootcamp DevSuperior
            </Link>
        </div>

    </div>
);

export default Header;