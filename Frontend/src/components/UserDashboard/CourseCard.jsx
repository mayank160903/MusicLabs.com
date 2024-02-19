/* eslint-disable react/prop-types */
import { Celebration } from "@mui/icons-material";
import { LinearProgress } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function capitalizeFirstLetter(s){
    if(s){
        return s.charAt(0).toUpperCase() + s.slice(1);
    }
    return s;
}




function CourseCard({course,progress}){

    const navigate = useNavigate();

    function getCertificate(){
        navigate("/certificate")
      }

    let k= 0;
    for(let i = 0; i<progress.length; i++){
        if(progress[i].watched){
            k++;
        }
    }

    let vids = 0;
    for(let j = 0; j<course.sections.length; j++){
        vids += course.sections[j].videos.length;
    }
      
    const [progressValue, setProgressValue] = useState(k);
    const [totalVideos, setTotalVideos] = useState(vids)
    
    return (
        <div className ="wishblock" key = {course._id} >
        <div className ="imgcontainer">
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3OUVLiBoBsr179pMOm4QFjoZoMuKA7UG7eg&usqp=CAU"  className = "course-img img-fluid"
            width="230px"/>
            <div>
            <LinearProgress variant="determinate" value={(progressValue/totalVideos)* 100} />
            </div>
        </div>

        <div className="wishitemleft d-flex flex-column">
          <div className ="title2">
            <Link to = {`/coursedescription/${course._id}`} className = "courselink">{course.title} </Link>
          </div>

          <div className="teacher">
            <a>By {capitalizeFirstLetter(course.teacher[0].firstName)}</a>
          </div>

          <div className="rating">
            <div className="rate pt-1">
                <label htmlFor="star5">5 stars</label>
                <label htmlFor="star4">4 stars</label>
                <label htmlFor="star3">3 stars</label>
                <label htmlFor="star2">2 stars</label>
                <label htmlFor="star1">1 star</label>
                
              </div>
              
          </div>

          <div className="price">
            <div><p></p></div>
          </div>
        </div>

        <div className="rightitembar">
        {progressValue/totalVideos == 1 && <Celebration onClick={getCertificate} sx={{marginLeft: '3rem', cursor:'pointer'}}/>}                                                           
          <button className="buy-now pb-2" onClick={()=>{navigate(`/course/${course._id}`)}}>
            Go To Course</button>
        </div>
    </div>
    )
}


export default CourseCard;