import React, { useState } from "react";
import "./studentProfile.css";
import Image from "react-bootstrap/Image";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import { Link, NavLink } from "react-router-dom";
import profileImage from "./teacher_Profile_image copy.png"
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

const Student = () => {
  const user = useSelector(state => state.auth)
  const [courses, setCourses] = useState([]);
  const [coursesLoading, setCoursesLoading] = useState(true);

  useEffect(()=>{
    async function getCourseInfo(){
      if(!user?.isLoggedin){
        return ;
      }
      try {
        const req = await axios.get(`http://localhost:8000/api/v1/user/your-courses/${user?.id}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
          }
        })

        if(req.status == 200){
          console.log(req.data)
          setCourses(req.data.courses)
          setCoursesLoading(false)
        }
      } catch (e){
        console.log(e)
      }
    }

    getCourseInfo();
      
   },[])


  return (
    <>
      {/* <div className="header_container">
        <div className="row">
          <div className="col-12">
            {/* <div className="upper-head">
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
            </div> */}
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}

      <div className="body_container">
        <div className="container">
          <div className="row circle_img">
            <div className="col-10 circle_img_col d-flex align-items-start justify-content-center">
              {/* <Image
                className="circle_image"
                src="/teacher_Profile_image.png"
              /> */}

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
            <div className="col-md-5">
              <div className="text-white mx-20 text-lg">FullName</div>
              <div className="text-white mx-20 text-lg">Username</div>
              <br />
              <br />
              <span className="text-white mx-20 text-lg">
                <PlaceIcon /> Location : California, USA
              </span>
              <br />
              <br />
              <span className="text-white mx-20 text-lg">
                <EmailIcon /> Email : Email
              </span>
              <br />
              <br />
              <br />
              <br />
              <div className="btn-main mx-20">
                <Link to="/studenteditprofile">
                  <button className="btn-button">Edit Profile</button>
                </Link>
              </div>
            </div>
            <div className="col-md-5 offset-1">
              <div className="d-flex justify-content-center align-items-center animated-text text-4xl">
                specializes in a particular musical instrument
              </div>
              <div className="content text-white text-center text-2xl">Piano</div>
              <div className="d-flex justify-content-center align-items-center animated-text text-4xl">
                YOUR BIO
              </div>
              <div className="content text-white text-2xl">
                Hi, I'm passionate about playing the piano and learning music.
                I'm currently enrolled in piano classes at XYZ Music School.
              </div>
              <div className="d-flex justify-content-center align-items-center animated-text text-4xl">
                Music Genres
              </div>
              <div className="content text-white text-2xl ">Classical, Jazz</div>
              <div className="d-flex justify-content-center align-items-center animated-text text-4xl">
                YOUR Performance Videos Link
              </div>
              <div className="content text-white text-2xl">XYZ</div>
              <div className="d-flex justify-content-center align-items-center animated-text text-4xl">
                YOUR Upcoming Performance
              </div>
              <ul>
                <li>Concert at City Hall - 05/15/2023</li>
                <li>Jazz Festival - 07/20/2023</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="upload-heading d-flex justify-content-center align-items-center">
          <h1>YOUR PURCHASED COURSE</h1>
        </div>
        <div className="flex flex-row">
        {!coursesLoading ? ( courses.map((course, index) => {
        return ( <div className="container" key={course.course._id}>
          
          <div className="row card_container justify-content-center" id="col1">
            <div className="col-md-12">
              <Link to={`/coursedescription/${course.course._id}`}>
                <img
                  src="/beginnerpic.jpg"
                  style={{ width: "360px", height: "180px" }}
                  className="grid-element "
                >

                </img>
              </Link>
              <p className="text-black text-center">{course.course.title}</p>
            </div>
          </div>
        </div>)}
        )) : ("Loading")
        }
        </div>

      </div>
    </>
  );
};

export default Student;
