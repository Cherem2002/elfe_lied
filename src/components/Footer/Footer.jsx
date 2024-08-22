import './Footer.css';
import React from 'react';
import { ReactComponent as FootLogo } from './FootLogo.svg'; // Импортируйте SVG как компонент

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2023</p>
                <div className="footer-logo">
                    <FootLogo className="logo-svg" />
                </div>
                <p>Все права защищены.</p>
            </div>
        </footer>

    );
};
export default Footer;