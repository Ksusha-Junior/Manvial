import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    /*const { user, logout } = useAuth();*/
    return (
        <header className="header">
            <div className="header-main">
                <h1 className="header-title">Manvial</h1>
                <h2 className='header-text'>Качественно! Недорого! В удобное для Вас время!</h2>

                <nav className="header-nav">
                    <ul>
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/prices">Услуги и цены</Link></li>
                        <li>Это важно!</li>
                        <li>Отзывы</li>

                    </ul>
                </nav>
            </div>
            <div className="work-time">
                <h2>Пн-Вс</h2>
                <h1>9.00-20.00</h1>
                <h1>+375 29 312 29 94</h1>
                <h1>+375 29 743 10 61</h1>
            </div>

        </header>
    );
}

export default Header;
