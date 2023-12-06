import React from 'react'
import './Header.css';
import logo2 from '../../images/logo2.jpg';
import guitaricon from '../../images/guitariconnav.png';
import profileicon from '../../images/profile-icon.png';

const StudentHeader = () => {
  return (
    <div>
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
              <li>
                <div className="dropdown" style={{ float: 'right' }}>
                  <button><img className="prof-icon" src={profileicon} alt="Profile Icon" /></button>
                  <div className="dropdown-content">
                    <a href="/student-profile">Dashboard</a>
                    <a href="#">Edit Profile</a>
                    <a href="/logout">Log Out</a>
                  </div>
                </div>
              </li>
              <li><a href="/spotlight">SPOTLIGHT</a></li>
              <li><a href="/wishlist">WISHLIST</a></li>
              <li><a href="/instructor">OUR INSTRUCTORS</a></li>
              <li><a href="/faq">FAQs</a></li>
              <li><a href="/contactus">CONTACT US</a></li>
              <li><a href="/catalogue">CATALOGUE</a></li>
              <li><a href="/">HOME</a></li>
              <li><a href="/"><img src={guitaricon} className="icon" width="64" height="64" alt="Guitar Icon" /></a></li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
    </div>
  )
}

export default StudentHeader
