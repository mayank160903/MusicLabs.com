/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
// import trialvideo from "../"
// import video from './update_profile.js - Online Bank System - Visual Studio Code 2023-03-23 00-06-51'



function MainContent({currentVideo, currentSection, content, vid}){

    const params = useParams();
    console.log(params.section)

   
    useEffect(()=>{
        console.log(params)
    },[params.section])
    

return(
    
    <Fragment>
     <div className="flex flex-col">
        <div className="font-bold ml-4 mt-4 text-2xl ">
        {currentSection}
            
        </div>
        <div className="flex justify-center align-top mt-4">
                <video controls={true}
                    style={{ borderColor: "black"}}
                    className=" border border-[#B7B7B7] w-[90%] mx-auto cursor-pointer">
                    <source src={currentVideo?.url} type="video/mp4" />
                </video>
        </div>
     </div>
    </Fragment>

)}


export default MainContent;