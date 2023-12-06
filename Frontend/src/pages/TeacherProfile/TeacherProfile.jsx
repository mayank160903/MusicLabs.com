

import React, { useState,useEffect } from "react";
import "./teacherProfile.css";
import Image from "react-bootstrap/Image";
import { NavLink } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EmailIcon from "@mui/icons-material/Email";
import { useParams } from "react-router";


const Teacher = () => {
  const { id } = useParams("");
  const [teacherData, setTeacherData] = useState("");
  const [coursesData, setCoursesData] = useState("");

  const getData = async () => {
    const res = await fetch(`/teacher/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();

    if (res.status != 201) {
      alert("No data available");
    } else {
      setTeacherData(data.teacher);
      setCoursesData(data.courses);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <>
      

      <div className="body_container">
        <div className="container">
          <div className="row circle_img">
            <div className="col-10 circle_img_col d-flex align-items-start justify-content-center">
              

              <img
                className="circle_image"
                src="/teacher_Profile_image.png"
                alt="Teacher Profile"
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
                <NavLink to={`/teachereditprofile/${teacherData.id}`}>
                  <button className="btn-button">Edit Profile</button>
                </NavLink>
                <br />
                <NavLink to="#">
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
                Post Graduation from Angus University of Music, California :
                <img src="/degree.jpg" alt="degree" />
              </h4>

              <h4 className="mt-3" style={{ color: "white" }}>
                Masters degree at Angus University of Music, California :{" "}
                <img
                  src="/achievements.png"
                  className="img-fluid rounded-circle"
                  alt="degree"
                />
              </h4>

              <h1 className="d-flex justify-content-center align-items-center animated-text">
                Experience
              </h1>

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
               
              </h4>
              <h4 className="mt-3" style={{ color: "white" }}>
                Grammy Award for Best New Artist
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
              <a href="#">
                <img
                  src="/public/beginnerpic.jpg"
                  style={{ width: "360px", height: "180px" }}
                  className="grid-element "
                />
              </a>
              <p className="text-white offset-3">Acoustic Blues</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teacher;

