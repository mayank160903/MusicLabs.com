import { Accordion, AccordionDetails, AccordionSummary, MenuItem, Select } from "@mui/material";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { authActions } from "../../store/auth";
import Dropdown from "../../components/CoursePage/Dropdown";

const DUMMY = {
    title: "Course Name",
    description: "Course Description",
    price: 100,
    sections: [
        {name: 'Section 1', videos: [{name: 'Lesson 1', videos: 'Lesson Content'},{name: 'Lesson 1', videos: 'Lesson Content'}]},
        {name: 'Section 2', videos: [{name: 'Lesson 1', videos: 'Lesson Content'},{name: 'Lesson 1', videos: 'Lesson Content'}]},

    ]

}

function CourseLayout(){

    const [value, setValue] = useState(true);
    const [currentSection, setCurrentSection] = useState("");
    // const dispatch = useDispatch();
    // dispatch(authActions.login());
   const isLoggedin =  useSelector(state => state.auth.isLoggedin);
    
    return (
        <div className="relative h-[100vh]">
            <div className="absolute inset-y-0 right-0 w-[28vw] bg-cyan-300">
                {/* <Accordion expanded={value} onChange={()=>{setValue(!value)}}>
                    <AccordionSummary sx={{borderBottom: '1px solid rgba(0, 0, 0, .125)', maxHeight: '84px', minHeight: '84px', '&:hover': {backgroundColor: 'rgba(0, 0, 0, .125)'}}}
                        expandIcon={<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <div className="flex flex-col">
                            <div></div>
                                <div className="font-semibold mt-8">
                                    Section 1: Introduction
                                </div>
                                <div className="mt-2 text-slate-600 ">9/10 | 57 Min</div>
                            </div>
                    </AccordionSummary>

                    <AccordionDetails>
                        
                        {"1. Introduction"}
                    </AccordionDetails>
                    
                    <AccordionDetails>
                        
                        {"2. Moving Forward"}
                    </AccordionDetails>
                </Accordion> */}
               { DUMMY.sections.map((section, index)=>{
                console.log(section.videos)
                    return(
                        <Dropdown key={index} currentSection={currentSection} setCurrentSection={setCurrentSection} title={section.name} num={index+1} total={section.videos.length} finished={1} content={section?.videos}/>
                        
                    )
                })
            }
            </div>
        </div>
    )
}

export default CourseLayout;