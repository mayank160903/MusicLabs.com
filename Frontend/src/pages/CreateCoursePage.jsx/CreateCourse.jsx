
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Dropdown from "../../components/CoursePage/Dropdown";
import MainContent from "../../components/CoursePage/MainContent";
import {useParams } from "react-router";
import { Box } from "@mui/material";
import { AddCircleRounded, AddIcCallRounded } from "@mui/icons-material";
// import CreateCourseDropdownDropdown from "./CreateCourseDropdown";
import CreateCourseDropdown from "./CreateCourseDropdown";
import axios from "axios";

const DUMMY = {
    title: "Course Name",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio vitae minima debitis at ratione temporibus rerum, tempore nesciunt non corporis, totam, labore dolorum libero illo deserunt harum repellat consectetur? Voluptatem! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae aliquid cumque, nesciunt rerum molestias a beatae? Reiciendis, rem repudiandae sint qui culpa inventore illo ab unde minima quos fuga! Blanditiis.",
    price: 100,
    sections: [
        {name: 'Introduction', videos: [{name: 'Lesson 1', videos: 'Lesson Content', id:1},{name: 'Lesson 1', videos: 'Lesson Content', id:2}]},
        {name: 'Section 2', videos: [{name: 'Lesson 1', videos: 'Lesson Content', id:3},{name: 'Lesson 1', videos: 'Lesson Content', id:4}]},
        {name: 'Moving Forward', videos: [{name: 'Key Strokes', videos: 'Lesson Content', id:5},{name: 'Lesson 1', videos: 'Lesson Content',id:6}]},

    ]

}

function CreateCourseLayout(){

    const params = useParams();
    const [currentSection, setCurrentSection] = useState("");
    const [currentTitle, setCurrentTitle] = useState("");
    const [addSection, setAddSection] = useState(false);
    const [courseInfo, setCourseInfo] = useState({sections:[]})
    
    const [currentVideo, setCurrentVideo] = useState(null);
    
    console.log(params.courseid)
    
    useEffect(()=>{
        async function getCourseInfo(id){
            const response = await fetch(`http://localhost:8000/api/course/${id}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            const data = await response.json();
            setCourseInfo(data.course)
            setCurrentVideo(data.course.sections[0]?.videos[0])
            setCurrentSection(data.course.sections[0]?._id)
        }

        getCourseInfo(params.courseid);
    
    },[])

    useEffect(()=>{
        setCurrentTitle(courseInfo?.sections?.find(section=>section._id === currentSection)?.name)
    },[currentSection])



   async function addSectionHandler(){

    const formData = {
        courseId: params.courseid,
        sectionName: 'Enter Name'
    }
    
    const response = await axios.post(`http://localhost:8000/api/course/addsection`, formData,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    })
    console.log(response)
    setAddSection(true);

    setCourseInfo(curr=> {
        const new_section = {name: 'Enter Name', videos: []}
        return {curr, sections : [...curr.sections, new_section] }
    })

   }
    
    return (
        <div className="relative h-auto flex pb-6">
        <div className="flex flex-col">
            <div className="w-[72vw] h-fit">
               <MainContent currentVideo={currentVideo} currentSection={currentTitle} content={courseInfo}/>
               <Box sx={{marginTop: '1rem', padding: 2}}>
                <div className="flex flex-col">
                    <div className="font-bold text-2xl"> Course Description </div>
                   <div> {courseInfo?.description} </div>
                </div>
               </Box>
            </div>
            <div className="absolute inset-y-0 right-0 w-[28vw] bg-cyan-300">
                
               { courseInfo?.sections?.map((section, index)=>{
                {/* console.log(section.videos) */}
                    return(
                        <CreateCourseDropdown key={section._id} id={section._id} currentSection={currentSection} setCurrentSection={setCurrentSection} title={section.name} num={index+1} total={section.videos?.length} content={section?.videos} setContent={setCourseInfo} setCurrentVideo={setCurrentVideo}  />    
                    )
                })
            }

            <div onClick={addSectionHandler}>
            <div className="flex flex-col mt-4 cursor-pointer">
            <div className="width-[100%] flex justify-center"><AddCircleRounded sx={{color:"white"}}/></div>
            <div className="mx-auto  text-center bg-black text-white font-bold">
                Add New Content
            </div>
            </div>
            </div>


            <div>

            </div>
    
        </div>
            </div>
                </div>
    )
}

export default CreateCourseLayout;