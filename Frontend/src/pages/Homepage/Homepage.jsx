import React from "react";
import "./homestyle.css";
import course1 from '../../images/beginnerpic.jpg'
import course2 from '../../images/course_rock.jpg'
import course3 from '../../images/metalpic.jpg'
import course4 from '../../images/bluespic.jpg'
import course5 from '../../images/acousticpic.jpg'
import course6 from '../../images/musictheorypic.jpg'
import course7 from '../../images/guitartone.jpg'
import course8 from '../../images/legendstyles.jpg'
import course9 from '../../images/guitartechnique.jpg'
import HomeHead from "../Home-Head/HomeHead";
import VideoBox from "../../components/Video-box/VideoBox";
// import VideoApp from '../Videoplayer/VideoApp'
import VideoApp from "../Videoplayer/VideoApp";
// import homevideo from '../../images/intro_carl.mp4';

const Homepage = () => {
  return (

    <div className="body-bg"> 
    {/* <div className="bg">
        <div className="centertext-content">
            <div className="centertext-content">
                <p className="centertext-content">Begin your music Journey with Master Of Musics</p>
                <p className="centertext-content">From Classic Blues to Heavy Metal,</p>
                <p className="centertext-content" >We have everything covered for you</p>
                <p className="centersubtext">Join us to begin your Journey!</p>
                <button onclick="window.location.href = '/'" className = "home-login-button"><div className="button-content" id="join-us">JOIN US</div></button>
                </div>
        </div>
        </div> */}
        <HomeHead />
        <VideoBox />

        <div className="flex flex-nowrap body-bg justify-items-stretch content-center">
          <div className="w-1/2"> 
          <div className="our-team-home">
          <h1 className="our-team-header-home">OUR TEAM</h1>
          <p className="our-team-content-home">
            We have music instructors from the best institutes of music.
          </p>
          <p className="our-team-content-home">
            Heavy metal like Metallica, Megadeth, Black Sabbath
          </p>
          <p className="our-team-content-home">
            Hard Rock like AC/DC and Guns-and-Roses, Classy Blues like{" "}
          </p>
          <p className="our-team-content-home">
            Pink Floyd and The Beatles, Jimi Hendrix's blues chords,
          </p>
          <p className="our-team-content-home">
            core music theory, Amplifier settings, guitar tone, guitar
            maintenance
          </p>
          <p className="our-team-content-home">
            you name it, we have it. Have a look at our instructors below!
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="home-login-button"
          >
            <div className="button-content" id="instructor-button">
              OUR INSTRUCTORS
            </div>
          </button>
        </div>
          </div>
          <div className="w-1/2 justify-self-center">   
        <div className="video_box">
          {/* <VideoApp /> */}
          {/* <video
            poster="images/logo.jpg"
            id="home-video"
            src=""
            type="video/mp4"
            controls
          ></video> */}
        </div>
        </div>
        </div>


      <div className="course-heading">SOME OF OUR COURSES</div>
      <div className="text-center" style={{ color: "aliceblue" }}>
        <div className="row" id="col1">
          <div className="col">
            <a href="/beginnercoursedesc">
              <img
                src={course1}
                style={{width: '360px', height: '180px'}}
                className="grid-element"
              />
            </a>
          </div>
          <div className="col">
            <a href="/rockcoursedesc">
              <img
                src={course2}
                style={{width: '360px', height: '180px'}}
                className="grid-element"
              />
            </a>
          </div>
          <div className="col">
            <a href="/">
              <img
                src={course3}
                style={{width: '360px', height: '180px'}}
                className="grid-element"
              />
            </a>
          </div>
        </div>

        <div className="row" id="col1">
          <div className="col">
            <a href="/">
              <img
                src={course4}
                style={{width: '360px', height: '180px'}}
                className="grid-element"
              />
            </a>
          </div>
          <div className="col">
            <a href="/">
              <img
                src={course5}
                style={{width: '360px', height: '180px'}}
                className="grid-element"
              />
            </a>
          </div>
          <div className="col">
            <a href="/">
              <img
                src={course6}
                style={{width: '360px', height: '180px'}}
                className="grid-element"
              />
            </a>
          </div>
        </div>

        <div className="row" id="col1">
          <div className="col">
            <a href="/">
              <img
                src={course7}
                style={{width: '360px', height: '180px'}}
                className="grid-element"
              />
            </a>
          </div>
          <div className="col">
            <a href="/">
              <img
                src={course8}
                style={{width: '360px', height: '180px'}}
                className="grid-element"
              />
            </a>
          </div>
          <div className="col">
            <a href="/">
              <img
                src={course9}
                style={{width: '360px', height: '180px'}}
                className="grid-element"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="more-courses">
        Find more courses at
        <button
          onClick={() => (window.location.href = "/")}
          className="home-login-button  ml-2"
        >
          <div className="button-content">CATALOGUE</div>
        </button>
      </div>
      <div className="pre-footer-bg">
        <p className="pre-footer">
          "Music Lessons that are second to none. This website boosted my music
          skills"
        </p>
        <p className="pre-footer">Practice and the right guidance is all it takes.</p>
      </div>
    </div>
  );
};

export default Homepage;
