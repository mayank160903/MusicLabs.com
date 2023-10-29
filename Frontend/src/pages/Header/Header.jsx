import React from 'react';
import './Header.css';
import logo2 from '../../images/logo2.jpg';
import guitaricon from '../../images/guitariconnav.png';

const Header = () => {
    return (
        <div>
            <div className="upper-head">
                <div className="top-logo">
                    <img src={logo2} width="120" height="120" className="center" alt="Logo" />
                </div>
                <div className="title-text">
                    <h1 className="title">MASTER OF MUSICS</h1>
                    <p className="preheader-text">Master your music skills with the best music lessons!</p>
                </div>
            </div>

            <div className="specific">
                <header>
                    <nav className="navbar" style={{ marginBottom: '0px' }}>
                        <ul>
                        <li><a href="/login">SIGN IN</a></li>
                    <li><a href="#">|</a></li>
                    <li><a href="/register">SIGN UP</a></li>
                    <li>        </li>
                    <li></li>
                    <li><a href="/spotlight">SPOTLIGHT</a></li>
                    <li><a href="/wishlist">WISHLIST</a></li>
                    <li><a href="/instructor">OUR INSTRUCTORS</a></li>
                    <li><a href="/faq">FAQs</a></li>
                    <li><a href="/contactus">CONTACT US</a></li>
                    <li><a href="/catalogue">CATALOGUE</a></li>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/"><img src={guitaricon} class="icon" width="64" height="64" /></a></li>

 </ul>
                    </nav>
                </header>
            </div>
        </div>
    );
}

export default Header;
