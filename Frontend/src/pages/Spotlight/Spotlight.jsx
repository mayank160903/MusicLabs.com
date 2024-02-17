import React from 'react';
import './Spotlight.css';
import spotlightimg from '../../images/spotlight.jpg';
import TeacherHeaderTest from '../Header/TeacherHeaderTest';
import StudentHeaderTest from '../Header/StudentHeaderTest';

const MyComponent = () => {
    return (
        <div style={{ backgroundColor: 'black' }}>
            <StudentHeaderTest />
            <TeacherHeaderTest />
            <div className="description">
                <div className="title-text">
                    <h1 className="our-team-header">STUDENT<div style={{ color: 'aqua' }}>SPOTLIGHT</div></h1>
                    <p className="our-team-content">For those students who have enrolled to our program,</p>
                    <p className="our-team-content">we have Carl Brown helping our students</p>
                    <p className="our-team-content">help them with their problems</p>
                </div>
                <div className="video_box">
                    <img src={spotlightimg} style={{ width: '500px', height: '320px' }} alt="Spotlight" />
                </div>
            </div>

            {/* IFRAME videos */}
            <div className="">
            <span className="line"></span>
            <div className="item">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/BlO8vHshYRk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className="info">
                    <p className="about">Student Spotlight: </p>
                    <p className="about-info">Carl Brown helps our students and explains how to hold the barre chords properly.</p>
                    <h4 className="instruct"> Instuctor Name:<span className="name">  CARL BROWN</span></h4>
                </div>
                
            </div>
            <span className="line"></span>
            <div className="item">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/jZjc-Avbig0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className="info">
                    <p className="about">Student Spotlight: </p>
                    <p className="about-info">Carl Brown helps our students and explains how to hold the barre chords properly.</p>
                    <h4 className="instruct"> Instuctor Name:<span className="name"> CARL BROWN</span></h4>
                </div>
            </div>
            <span className="line"></span>
            <div className="item">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/svaH5cQ6gZY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className="info">
                    <p className="about">Student Spotlight:  </p>
                    <p></p>
                    <h4 className="instruct">Instuctor Name:<span className="name">  CARL BROWN</span></h4>
                    <h4 className="instruct">Instuctor Name:<span className="name">  CARL BROWN</span></h4>
                </div>
            </div>
            <span className="line"></span>
            <div className="item">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/xEsnvNcJ7o8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className="info">
                    <p className="about">Student Spotlight:  </p>
                    <p className="about-info">The guitar is a fretted musical instrument that typically has six strings. It is usually held flat against the player's body and played by strumming or plucking the strings with the dominant hand, while simultaneously pressing selected strings against frets with the fingers of the opposite hand.</p>
                    <h4 className="instruct">Instuctor Name:<span className="name">  CARL BROWN</span></h4>
                </div>
            </div>
            <span className="line"></span>
            <div className="item">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/DLQ6fbKISFo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className="info">
                    <p className="about">Student Spotlight:  </p>
                    <p className="about-info">The guitar is a fretted musical instrument that typically has six strings. It is usually held flat against the player's body and played by strumming or plucking the strings with the dominant hand, while simultaneously pressing selected strings against frets with the fingers of the opposite hand.</p>
                    <h4 className="instruct">Instuctor Name:<span className="name"> CARL BROWN</span></h4>
                </div>
            </div>
            <span className="line"></span>
            <div className="item">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/-GxFtW4qe3g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className="info">
                    <p className="about">Student Spotlight:  </p>
                    <p className="about-info">The guitar is a fretted musical instrument that typically has six strings. It is usually held flat against the player's body and played by strumming or plucking the strings with the dominant hand, while simultaneously pressing selected strings against frets with the fingers of the opposite hand.</p>
                    <h4 className="instruct"> Instuctor Name:<span className="name">  CARL BROWN</span></h4>
                </div>
            </div>    
            <span className="line"></span>
            <div className="item">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/vHSIR7k9tDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className="info">
                    <p className="about">Student Spotlight: </p>
                    <p className="about-info">The guitar is a fretted musical instrument that typically has six strings. It is usually held flat against the player's body and played by strumming or plucking the strings with the dominant hand, while simultaneously pressing selected strings against frets with the fingers of the opposite hand.</p>
                    <h4 className="instruct"> Instuctor Name:<span className="name">  CARL BROWN</span></h4>
                </div>
            </div>
            <span className="line"></span>
            <div className="item">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/QpToL3SOFTE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className="info">
                    <p className="about">Student Spotlight:  </p>
                    <p className="about-info">The guitar is a fretted musical instrument that typically has six strings. It is usually held flat against the player's body and played by strumming or plucking the strings with the dominant hand, while simultaneously pressing selected strings against frets with the fingers of the opposite hand.</p>
                    <h4 className="instruct">Instuctor Name:<span className="name">  CARL BROWN</span></h4>
                </div>
            </div>
            <span className="line"></span>
            <div className="item">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/n9pSIOJvCi0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className="info">
                    <p className="about">Student Spotlight:  </p>
                    <p className="about-info">The guitar is a fretted musical instrument that typically has six strings. It is usually held flat against the player's body and played by strumming or plucking the strings with the dominant hand, while simultaneously pressing selected strings against frets with the fingers of the opposite hand.</p>
                    <h4 className="instruct"> Instuctor Name:<span className="name">  CARL BROWN</span></h4>
                </div>
            </div>
            <span className="line"></span>
            <div className="item">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/FR-nNkCDwn8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className="info">
                    <p className="about">Student Spotlight:  </p>
                    <p className="about-info">The guitar is a fretted musical instrument that typically has six strings. It is usually held flat against the player's body and played by strumming or plucking the strings with the dominant hand, while simultaneously pressing selected strings against frets with the fingers of the opposite hand.</p>
                    <h4 className="instruct">Instuctor Name:<span className="name">  CARL BROWN</span></h4>
                </div>
            </div>
                
                {/* Your iframe content */}
                {/* For brevity, only the structure is provided */}
                {/* You need to insert your iframe elements here */}
            </div>
        </div>
    );
}

export default MyComponent;
