import React from "react";
import "./teacherProfile.css";
import Image from "react-bootstrap/Image";
import { NavLink } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EmailIcon from "@mui/icons-material/Email";


const Teacher = () => {
  return (
    <>
      <div className="header_container">
        <div className="row">
          <div className="col-12">
            <div className="upper-head">
              <div className="top-logo">
                <img
                  className="bg"
                  src="/header_image.jpeg"
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
                <CalendarMonthIcon /> Joining Of Year : 3 march 2002
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
                <br />
                <NavLink href="#">
                  <button className="btn-button right_to_left_offset">
                    Upload Courses
                  </button>
                </NavLink>
              </div>
            </div>

            <div className="col-md-5 offset-1">
              <h1 className="d-flex justify-content-center align-items-center animated-text">
                Description
              </h1>
              <h4 className="content text-white">
                Hey whatsup you guys? Marty Schwartz here and I am here to help
                you with your music learning
              </h4>
              <h1 className="d-flex justify-content-center align-items-center animated-text">
                Education
              </h1>

              <h4 className="mt-3" style={{ color: "white" }}>
                Post Graduation from Angus University of Music, California :{" "}
                <img src="degree.jpg" alt="degree" />
              </h4>
              <h4 className="mt-3" style={{ color: "white" }}>
                On the teaching field since 2003
              </h4>
              <h4 className="mt-3" style={{ color: "white" }}>
                Rock, Blues, Music Theory
              </h4>

              <h1 className="d-flex justify-content-center align-items-center animated-text">
                Achievements
              </h1>

              <h4 className="mt-3" style={{ color: "white" }}>
                Masters degree at Angus University of Music, California :{" "}
                <img
                  src="achievements.png"
                  className="img-fluid rounded-circle"
                  alt="degree"
                />
              </h4>
              <h4 className="mt-3" style={{ color: "white" }}>
                Musician of the year at jamplay.com
              </h4>
            </div>
          </div>
        </div>

        <br />
        <br />

        <div class="upload-heading d-flex justify-content-center align-items-center">
          <h1>UPLOADED COURSES</h1>
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
      asvhdsjlp;sd
      []
      \dfvodskv.sdfnjsdfnc
    </>
  );
};

export default Teacher;
