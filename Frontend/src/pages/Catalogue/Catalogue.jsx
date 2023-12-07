import React from 'react'
import PropTypes from 'prop-types'
import c1 from '../../images/carousel-1.jpg';
import c2 from '../../images/carousel-2.jpg';
import c3 from '../../images/carousel-3.jpg';
import anatomy from '../../images/song-lesson-pic.png';
import seemore from '../../images/seemore.png';
import andy from '../../images/mt-andy.jpg';
import musictheory from '../../images/musictheorypic.jpg';
import carl from '../../images/carl-pic.jpg';
import marty from '../../images/marty-pic.jpg';
import justin from '../../images/justin-pic.jpg';
import metal from '../../images/ez-metal.jpg';



import './Catalogue.css';

const Catalogue = (props) => {

    const customStyle = {
        height: '800px',
        width: '1500px',
        padding: '10px'
      };

      const customStyle2 = {
        color: 'rgb(255, 255, 255)',
        fontFamily: "'Bruno Ace', cursive"
      };

      const customStyle3 = {
        height: '197px',
        width: '347px',
        // Add other CSS properties as needed
      };

      const customStyle4 = {
        marginBottom : '3rem'
      }
    
  return (
    <div>
       <div className="head-slides">
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={c1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={c2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={c3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <div className="video-part">
                      <div className="our-team">
                        <h1 className="our-team-header" id='first-line'>GUITAR LESSONS</h1>
                        <h1 className="our-team-header" id='second-line'>THAT REALLY WORK</h1>
                        <p className="our-team-content">Learn guitar online with world-class instructors and</p>
                        <p className="our-team-content">become the best guitar player you can be.</p>
                      </div>
                      <div className="video_box">
                        <video id="home-video" src="images/catalogue-video.mp4" type="video/mp4" controls></video>
                      </div>
                    </div>

                    <nav className="navbar" id="navbar-id" style={{backgroundColor:"black"}}>

                      <div className="container-fluid">
                        <a className="navbar-brand" id="heading">OUR COURSES</a>
                        <form className="d-flex" onsubmit="return searchHandler()">
                          <input className="form-control me-2" id="squery" name="squery" type="search" placeholder="Search"
                            aria-label="Search" value="" />
                          {/* <button className="btn btn-outline-success" id="search-box" type="submit">Search</button> */}
                        </form>
                      </div>

                    </nav>

                    {/* <div className="rock" id="courses" style={customStyle4}> */}
                    <div className="beginner">
                        <div className="title-seeall">
                          <div className="title">
                            <h1 style={customStyle2}>MUSIC THEORY</h1>
                          </div>
                          <div className="see-all">
                            <button onclick="window.location.href = '/beginnercoursedesc' " className="see-all-button">
                              <div className="see-all-txt">See All</div>
                              <img src={seemore} />
                            </button>
                          </div>
                        </div>
                        <div className="row row-cols-1 row-cols-md-3 g-4 cards">
                          <div className="col card-pad">
                            <div className="card card-bg-manual crd">
                              <a href="/coursedescpage"><img src={andy}
                                  style={customStyle3} className="card-img-top" alt="..." /></a>
                              <div className="card-body">
                                <h6 className="card-title">Music Theory for Beginners</h6>
                                <h6 className="card-title">By Andy Gilmour</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col card-pad">
                            <div className="card crd">
                              <a href="/coursedescpage"><img src={musictheory}
                                  style={customStyle3} className="card-img-top" alt="..." /></a>
                              <div className="card-body">
                                <h6 className="card-title">Dive into Music Theory</h6>
                                <h6 className="card-title">By Justin Langer</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col card-pad">
                            <div className="card crd">
                              <a href="/coursedescpage"><img src={carl}
                                  style={customStyle3} className="card-img-top" alt="..." /></a>
                              <div className="card-body">
                                <h6 className="card-title">Music Theory A-Z</h6>
                                <h6 className="card-title">By Carl Brown</h6>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>

                      <div className="beginner">
                        <div className="title-seeall">
                          <div className="title">
                            <h1 style={customStyle2}>BEGINNER</h1>
                          </div>
                          <div className="see-all">
                            <button onclick="window.location.href = '/beginnercoursedesc' " className="see-all-button">
                              <div className="see-all-txt">See All</div>
                              <img src={seemore} />
                            </button>
                          </div>
                        </div>
                        <div className="row row-cols-1 row-cols-md-3 g-4 cards">
                          <div className="col card-pad">
                            <div className="card crd">
                              <a href="/coursedescpage"><img src={marty}
                                  style={customStyle3} className="card-img-top" alt="..." /></a>
                              <div className="card-body">
                                <h6 className="card-title">Your Very First guitar lessons</h6>
                                <h6 className="card-title">By Marty Schwartz</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col card-pad">
                            <div className="card crd">
                              <a href="/coursedescpage"><img src={justin}
                                  style={customStyle3} className="card-img-top" alt="..." /></a>
                              <div className="card-body">
                                <h6 className="card-title">Beginner music course</h6>
                                <h6 className="card-title">By Justin Guitar</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col card-pad">
                            <div className="card crd">
                              <a href="/coursedescpage"><img src={carl}
                                  style={customStyle3} className="card-img-top" alt="..." /></a>
                              <div className="card-body">
                                <h6 className="card-title">Dive into music with this beginner!</h6>
                                <h6 className="card-title">By Carl Brown</h6>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>


                      <div className="beginner">
                        <div className="title-seeall">
                          <div className="title">
                            <h1 style={customStyle2}>METAL</h1>
                          </div>
                          <div className="see-all">
                            <button onclick="window.location.href = '/beginnercoursedesc' " className="see-all-button">
                              <div className="see-all-txt">See All</div>
                              <img src={seemore} />
                            </button>
                          </div>
                        </div>
                        <div className="row row-cols-1 row-cols-md-3 g-4 cards">
                          <div className="col card-pad">
                            <div className="card crd">
                              <a href="/coursedescpage"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx1sKeV2p4Ao0goWy7IAdj5mDguUkKqAaZ0w"
                                  style={customStyle3} className="card-img-top" alt="..." /></a>
                              <div className="card-body">
                                <h6 className="card-title">Diving deep into Metal</h6>
                                <h6 className="card-title">By Vincent Chase</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col card-pad">
                            <div className="card crd">
                              <a href="/coursedescpage"><img src={metal}
                                  style={customStyle3} className="card-img-top" alt="..." /></a>
                              <div className="card-body">
                                <h6 className="card-title">Mastering the Fretboard</h6>
                                <h6 className="card-title">By Carl Brown</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col card-pad">
                            <div className="card crd">
                              <a href="/coursedescpage"><img src={marty}
                                  style={customStyle3} className="card-img-top" alt="..." /></a>
                              <div className="card-body">
                                <h6 className="card-title">What is Metal?</h6>
                                <h6 className="card-title">By Marty Schwartz</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col card-pad">
                            <div className="card crd">
                              <a href="/coursedescpage"><img src={andy}
                                  style={customStyle3} className="card-img-top" alt="..." /></a>
                              <div className="card-body">
                                <h6 className="card-title">Introduction to Distortion</h6>
                                <h6 className="card-title">By Andy Gilmour</h6>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>
                      {/* </div> */}

                    

                    <div className="song-lessons">
                      <h1 className="our-team-header">ANATOMY OF SONG LESSONS</h1>
                      <img src={anatomy} style={customStyle} />
                    </div>

    </div>
  )
}

Catalogue.propTypes = {

}

export default Catalogue

