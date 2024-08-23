import './Header.css';
import { ReactComponent as Search } from './search.svg'; // Импортируйте SVG как компонент
import { ReactComponent as Favorite } from './favorite.svg'; // Импортируйте SVG как компонент
import { ReactComponent as Profile } from './profile.svg'; // Импортируйте SVG как компонент
import { ReactComponent as Basket } from './basket.svg'; // Импортируйте SVG как компонент
import React from 'react';

const Header = () => {
    return (
        <header className="Header">
            <nav className="nav">
                <div className="logo">Elfen lied</div>
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
                    <li className="nav-item nav-item-actions">
                        <div className='search'>
                            <Search className="search-svg" />
                            <a href="#">Поиск</a>
                        </div>
                        <Favorite className="favorite-svg" />
                        <Profile className="profile-svg" />
                        <Basket className="basket-svg" />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

