import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    /*const { user, logout } = useAuth();*/
    return (
        <header className="header">
            <div className="header-main">
                <h1 className="header-title">Manvial</h1>

                <nav className="header-nav">
                    <ul>


                    </ul>
                </nav>
            </div>
            <div className="work-time">
                <h2>Пн-Вс</h2>
                <h1>9.00-20.00</h1>
            </div>

        </header>
    );
}

export default Header;
