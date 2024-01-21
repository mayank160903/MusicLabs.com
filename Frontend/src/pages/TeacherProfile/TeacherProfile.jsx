

import React, { useState,useEffect } from "react";
import "./teacherProfile.css";
import Image from "react-bootstrap/Image";
import { NavLink } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EmailIcon from "@mui/icons-material/Email";
import { useParams } from "react-router";
import profileImage from "./teacher_Profile_image copy.png"


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
                src={profileImage}
                alt="Teacher Profile"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-5 ">
              <h1 className="text-white mx-20">FullName</h1>
              <div className="text-white mx-20">Username</div>
              <br />
              <br />
              <span className="text-white mx-20">
                <PlaceIcon /> Location : California, USA
              </span>
              <br />
              <br />
              <span className="text-white mx-20">
                <CalendarMonthIcon /> Joining Of Year : 3 march 2002
              </span>
              <br />
              <br />
              <span className="text-white mx-20">
                <EmailIcon /> Email : Email
              </span>
              <br />
              <br />
              <br />
              <br />
              <div className="btn-main mx-20">
                <NavLink to="/teachereditprofile">
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

            <div className="col-md-5 ml-3 offset-1">
              <div className="flex justify-center items-center animated-text text-4xl">
                Description
              </div>
              <div className="content text-white text-2xl">
                Hey whatsup you guys? Marty Schwartz here and I am here to help
                you with your music learning
              </div>
              <div className="flex justify-center items-center animated-text text-4xl mt-4">
                Education
              </div>

              <div className="mt-3 text-2xl" style={{ color: "white" }} >
                <span className="whitespace-nowrap">Post Graduation from Angus University of Music, California : <img src="/degree.jpg" alt="degree" height={70} width={60} className="inline-block"/></span>
              </div>

              <div className="mt-3 text-2xl" style={{ color: "white" }}>
                <span className="whitespace-nowrap">Masters degree at Angus University of Music, California :<img src="/achievements.png" className="img-fluid rounded-circle inline-block" alt="degree" height={70} width={60} /></span>
              </div>

              <div className="d-flex justify-content-center align-items-center animated-text text-4xl">
                Experience
              </div>

              <div className="mt-3 text-2xl" style={{ color: "white" }}>
                On the teaching field since 2003
              </div>
              <div className="mt-3 text-2xl" style={{ color: "white" }}>
                Rock, Blues, Music Theory
              </div>

              <div className="d-flex justify-content-center align-items-center animated-text text-4xl mt-4">
                Achievements
              </div>

              <div className="mt-3 text-2xl" style={{ color: "white" }}>
                Masters degree at Angus University of Music, California :{" "}
               
              </div>
              <div className="mt-3 text-2xl" style={{ color: "white" }}>
                Grammy Award for Best New Artist
              </div>
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

