import './Header.css';
import React from 'react';

const Header = () => {

    return (
        <header className="header">
            <div className="logo">Elfen lied</div>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><a href="#">Каталог</a></li>
                    <li className="nav-item"><a href="#">Блог</a></li>
                    <li className="nav-item"><a href="#">Контакты</a></li>
                    <li className="nav-item"><a href="#">Поиск</a></li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;
