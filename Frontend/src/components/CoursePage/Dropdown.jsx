import { Accordion, AccordionDetails, AccordionSummary, Checkbox } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigation, useNavigate, useParams } from "react-router"
import styles from './CoursePage.module.css';

function Dropdown({currentSection, setCurrentSection, title, num, total, content, setVideo}) {

    console.log('rerender')
    
    const navigate = useNavigate();
    const params = useParams();
    // const [currentVideo, setCurrentVideo] = useState(params)

    useEffect(()=>{
        console.log(params)
    
    },[params])

    const [finished, setFinished] = useState(0);

    function clickHandler(){
        console.log(title)
        if(currentSection != title){
            setCurrentSection(title)
            return ;
        } else
        setCurrentSection("")
    }

    function contentChangeHandler(id){
        setVideo(2)
        navigate(`${id}`)
    }

    function videoWatchedHandler(id, e){
        setFinished((curr)=>(curr+1))
        // console.log(e)
    }


    return (
        <Accordion expanded={currentSection == title ? true : false} sx={{marginTop: '1rem'}}onChange={clickHandler} className="& .MuiPaper-root mt-0 mb-0">
        <AccordionSummary sx={{borderBottom: '2px solid rgba(0, 0, 0, .25)',  maxHeight: '64px', minHeight: '64px', '&:hover': {backgroundColor: 'rgba(0, 0, 0, .125)'}}}
        className="shadow-md"
            expandIcon={<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
        >
            <div className="flex">
                <div></div>
                    <div className="flex flex-col">
                        <div className="font-weight-bold">{`Section ${num}: ${title}`}</div>
                        {`${finished} / ${total}`} | {`${ Math.round(finished/total * 100)}%`}
                    </div>
                </div>
        </AccordionSummary>
        
        {content?.map((lesson, index)=>{
            return (
                <AccordionDetails key={index} className={`border-b-2  border-b-slate-300  cursor-pointer pl-2 
                ${lesson.id == params.section ? " bg-slate-200": ""} `}
                sx={{'&:hover': {backgroundColor: 'rgba(0, 0, 0, .125)', "& .MuiAccordionDetails-root": "pl-2"}} }
                 onClick={()=>{contentChangeHandler(lesson.id)}}>
                    <div className={`flex flex-row`} >
                        <div><Checkbox onClick={(e)=>{videoWatchedHandler(lesson.id,e)}} value={true}/></div>
                        <div className="font-weight-bold my-auto pb-1">{`Lesson ${index+1}: ${lesson.name}`}</div>
                    </div>
                </AccordionDetails>
            )
        })
    }
    </Accordion>
    )
}


export default Dropdown;