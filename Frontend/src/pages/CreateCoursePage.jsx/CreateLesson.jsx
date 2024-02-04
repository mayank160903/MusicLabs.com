/* eslint-disable react/prop-types */
import { AccordionDetails, Checkbox } from "@mui/material";
import { EditIcon, Trash2 } from "lucide-react";
import { Fragment, useState } from "react";
import DeleteWarning from "./DeleteWarning";
import axios from "axios";
import { toast } from "react-toastify";



function CreateLesson({ index, contentChangeHandler, lesson, content }) {
    // ${lesson.id == params.section ? " bg-slate-200": ""} 
    const [warning, setWarning] = useState(false)
    async function deleteVideoHandler() {
        setWarning(false)
       try {
        const response = await axios.post(`http://localhost:8000/api/course/deletevideo`, { videoId : lesson._id }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        })
        if (response.status === 200) {
            // setCourseInfo(curr => {
            //     return { ...curr, sections: curr.sections.filter(sec => sec._id !== section._id) }
            // })
        }
       } catch (error) {
           console.log(error)
           toast.error("Error deleting video")
       }
    }


    return (
        <Fragment>
            <DeleteWarning open={warning} setOpen={setWarning} action={deleteVideoHandler}/>
            <AccordionDetails key={index} className={`border-b-2  border-b-slate-300  cursor-pointer pl-2`}
                sx={{ '&:hover': { backgroundColor: 'rgba(0, 0, 0, .125)', "& .MuiAccordionDetails-root": "pl-2" } }}
                onClick={() => { contentChangeHandler(lesson) }}>
                <div className="flex flex-row ml-3 mr-4">
                    <div></div>
                    <div className="font-weight-bold my-auto pb-1">{`Lesson ${index + 1}  :  ${lesson.name}`}</div>
                    <div className="ml-auto flex" >
                    <div className="align-self-center mr-2">
                       <EditIcon className="hover:text-blue-600" id={`edit-section-${lesson._id}`} />
                    </div>
                    <div className="align-self-center mr-2" onClick={()=>{setWarning(true)}}>
                        <Trash2 className="hover:text-red-800 text-red-500" id={`delete-section-${lesson._id}`} /></div>
                    </div>
                </div>
            </AccordionDetails>
        </Fragment>
    )

}

export default CreateLesson;