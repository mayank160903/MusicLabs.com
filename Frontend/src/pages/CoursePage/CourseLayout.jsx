import { Accordion, AccordionDetails, AccordionSummary, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { authActions } from "../../store/auth";

const DUMMY = {
    title: "Course Name",
    description: "Course Description",
    price: 100,
    sections: [
        {name: 'Section 1', videos: [{name: 'Lesson 1', videos: 'Lesson Content'},{name: 'Lesson 1', videos: 'Lesson Content'}]},
        {name: 'Section 2', videos: [{name: 'Lesson 1', viddeos: 'Lesson Content'},{name: 'Lesson 1', videos: 'Lesson Content'}]},
        {},

    ]

}

function CourseLayout(){

    const {value, setValue} = useState(true);
    const dispatch = useDispatch();
    dispatch(authActions.login());
   const isLoggedin =  useSelector(state => state.auth.isLoggedin);

   console.log(isLoggedin);
    return (
        <div className="relative h-[100vh]">
            <div className="absolute inset-y-0 right-0 w-[28vw] bg-cyan-300">
                <Accordion expanded={value} onChange={()=>{setValue(!value)}}>
                    <AccordionSummary sx={{borderBottom: '1px solid rgba(0, 0, 0, .125)', maxHeight: '64px', minHeight: '64px', '&:hover': {backgroundColor: 'rgba(0, 0, 0, .125)'}}}
                        expandIcon={<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <div className="flex">
                            <div></div>
                                <div>
                                    Section 1: Introduction
                                </div>
                            </div>
                    </AccordionSummary>

                    <AccordionDetails>
                        
                        {"1. Introduction"}
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default CourseLayout;