import React from "react";
import "./studentProfile.css";
import Image from "react-bootstrap/Image";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import { NavLink } from "react-router-dom";

const Student = () => {
  return (
    <>
      <div className="header_container">
        <div className="row">
          <div className="col-12">
            <div className="upper-head">
              <div className="top-logo">
                <img
                  className="bg"
                  src="header_image.jpeg"
                  alt=" image_Description"
                />
              </div>

              <div className="title-text">
                <h1 className="title">MASTER OF MUSICS</h1>
                <p className="preheader-text">
                  Master your music skills with the best music lessons!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="body_container">
        <div className="container">
          <div className="row circle_img">
            <div className="col-10 circle_img_col d-flex align-items-start justify-content-center">
              <Image
                className="circle_image"
                src="/teacher_Profile_image.png"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1 className="text-white">FullName</h1>
              <p className="text-white">Username</p>
              <br />
              <br />
              <span className="text-white">
                <PlaceIcon /> Location : California, USA
              </span>
              <br />
              <br />
              <span className="text-white">
                <EmailIcon /> Email : Email
              </span>
              <br />
              <br />
              <br />
              <br />
              <div className="btn-main">
                <NavLink href="#">
                  <button className="btn-button">Edit Profile</button>
                </NavLink>
              </div>
            </div>
            <div className="col-md-5 offset-1">
              <h1 className="d-flex justify-content-center align-items-center animated-text">
                specializes in a particular musical instrument
              </h1>
              <h4 className="content text-white text-center">Piano</h4>
              <h1 className="d-flex justify-content-center align-items-center animated-text">
                YOUR BIO
              </h1>
              <h4 className="content text-white ">
                Hi, I'm passionate about playing the piano and learning music.
                I'm currently enrolled in piano classes at XYZ Music School.
              </h4>
              <h1 className="d-flex justify-content-center align-items-center animated-text">
                Music Genres
              </h1>
              <h4 className="content text-white ">Classical, Jazz</h4>
              <h1 className="d-flex justify-content-center align-items-center animated-text">
                YOUR Performance Videos Link
              </h1>
              <h4 className="content text-white ">XYZ</h4>
              <h1 className="d-flex justify-content-center align-items-center animated-text">
                YOUR Upcoming Performance
              </h1>
              <ul>
                <li>Concert at City Hall - 05/15/2023</li>
                <li>Jazz Festival - 07/20/2023</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="upload-heading d-flex justify-content-center align-items-center">
          <h1>YOUR PURCHASE COURSE</h1>
        </div>
        <div className="container ">
          <div className="row card_container justify-content-center" id="col1">
            <div className="col-md-5">
              <NavLink href="#">
                <img
                  src="beginnerpic.jpg"
                  style={{ width: "360px", height: "180px" }}
                  className="grid-element "
                />
              </NavLink>
              <p className="text-white offset-3">Acoustic Blues</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;
