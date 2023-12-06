
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Dropdown from "../../components/CoursePage/Dropdown";
import MainContent from "../../components/CoursePage/MainContent";
import { useParams } from "react-router";
import { Box } from "@mui/material";

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

function CourseLayout(){

    const params = useParams();
    const [value, setValue] = useState(true);
    const [currentSection, setCurrentSection] = useState("");
    // const dispatch = useDispatch();
    // dispatch(authActions.login());
   const isLoggedin =  useSelector(state => state.auth.isLoggedin);
    
    return (
        <div className="relative h-auto flex pb-6">
        <div className="flex flex-col">
            <div className="w-[72vw] h-fit">
               <MainContent currentVideo={params.section} currentSection={currentSection} content={DUMMY}/>
               <Box sx={{marginTop: '1rem', padding: 2}}>
                <div className="flex flex-col">
                    <div className="font-bold text-2xl"> Course Description </div>
                   <div> {DUMMY.description} </div>
                </div>
               </Box>
            </div>
            <div className="absolute inset-y-0 right-0 w-[28vw] bg-cyan-300">
            
             { DUMMY.sections.map((section, index)=>{
                console.log(section.videos)
                    return(
                        <Dropdown key={index} currentSection={currentSection} setCurrentSection={setCurrentSection} title={section.name} num={index+1} total={section.videos.length}  content={section?.videos}/>    
                    )
                })
            }
            </div>
        </div>
        </div>
    )
}

export default CourseLayout;