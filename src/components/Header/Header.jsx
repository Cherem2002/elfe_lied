import './Header.css';
import { ReactComponent as Cat } from './Cat.svg'; // Импортируйте SVG как компонент
import React from 'react';

const Header = () => {

    return (
        <header className="header">
            <div className="logo">Elfen lied</div>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item nav-item-category">
                        <div className="circles-container">
                            <div className="circle circle-1"></div>
                            <div className="circle circle-2"></div>
                            <div className="circle circle-3"></div>
                            <div className="circle circle-4"></div>
                        </div>                        
                        <a href="#">Каталог</a>
                    </li>
                    <li className="nav-item nav-item-info">
                        <a href="#">Блог</a>
                        <a href="#">Контакты</a>
                    </li>
                    <li className="nav-item nav-item-search">
                        <a href="#">Поиск</a>
                    </li>
                    <li className="nav-item nav-item-actions">
                        <a href="#">Избранное</a>
                        <a href="#">Профиль</a>
                        <a href="#">Корзина</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;
