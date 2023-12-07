import React from 'react';
import './Header.css';
import logo2 from '../../images/logo2.jpg';
import guitaricon from '../../images/guitariconnav.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="upper-header">
                <div className="top-logo py-3 pl-5">
                    <img src={logo2} width="120" height="120" className="centerStyle" alt="Logo" />
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
                    <li><Link to="/spotlight">SPOTLIGHT</Link></li>
                    <li><Link to="/wishlist">WISHLIST</Link></li>
                    <li><Link to="/instructor">OUR INSTRUCTORS</Link></li>
                    <li><Link to="/faq">FAQs</Link></li>
                    <li><Link to="/contactus">CONTACT US</Link></li>
                    <li><Link to="/catalogue">CATALOGUE</Link></li>
                    <li><Link to="/">HOME</Link></li>
                    <li className='mt-0 mb-1 '><a href="/" className='m-0 p-0'><img src={guitaricon} className="icon" width="60" height="60" /></a></li>

 </ul>
                    </nav>
                </header>
            </div>
        </div>
    );
}

export default Header;
