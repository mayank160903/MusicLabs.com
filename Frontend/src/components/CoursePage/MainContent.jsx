import { Typography } from "@mui/material";
import { Fragment } from "react";
import { useParams } from "react-router";
import trialvideo from "./trial.mp4"
// import video from './update_profile.js - Online Bank System - Visual Studio Code 2023-03-23 00-06-51'




function MainContent({currentVideo, currentSection}){

    const params = useParams();
    

return(
    
    <Fragment>
     <div className="flex flex-col">
        <div className="font-bold ml-2 mt-4 text-2xl ">
        
            {currentSection}
     
        </div>
        <div className="flex justify-center align-top mt-4 mx-auto">
                <video controls={true}
                    style={{ borderColor: "black" }}
                    className=" border border-[#B7B7B7] cursor-pointer">
                    <source src={trialvideo} type="video/mp4" />

                </video>
        </div>
     </div>
    </Fragment>

)}


export default MainContent;