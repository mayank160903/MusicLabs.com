import { AddCircleRounded } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, Container, TextField } from "@mui/material";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { useNavigation, useNavigate, useParams } from "react-router"
// import styles from './CoursePage.module.css';

const API_KEY = '396353668692966'
const CLOUD_NAME = 'djcg8mvbx'

function CreateCourseDropdown({currentSection, setCurrentSection, title, num, total, content, setContent}) {

    console.log('rerender')
    
    const navigate = useNavigate();
    const params = useParams();
    // const [currentVideo, setCurrentVideo] = useState(params)
    const [addSection, setAddSection] = useState(false);
    const [content1,setContent1] = useState(content)

   


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
        navigate(`${id}`)
    }

    function videoWatchedHandler(id, e){
        setFinished((curr)=>(curr+1))
        // console.log(e)
    }

    function addSectionHandler(){
        setAddSection(true)
    }

    const [videoName, setVideoName] = useState("");
    const [video, setVideo] = useState(null);
    
      const handleNameChange = (event) => {
        setVideoName(event.target.value);
      };

      const handleVideoChange = (event) => {
        setVideo(event.target.files[0]);
      }

  async function addContentHandler(e){
        e.preventDefault();
        setContent1([...content1,{name:videoName, videos: video, id: 9}])

        try {
          let response = await fetch('http://localhost:8000/api/upload/get-singature', {
            method: 'GET',
          });

          const {signature, timestamp} = await response.json();

          const form = new FormData()
          form.append('file', video);
          form.append('folder', 'MastersOfMusic')

          const res = await fetch(
            `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/video/upload?api_key=${API_KEY}&timestamp=${timestamp}&signature=${signature}`,
            {
              method: 'POST',
              body: form,
            }
          )
          
          console.log(res)

        } catch (error) {
          console.error('Error uploading video:', error);
        }
        // console.log(response)
        setAddSection(false)
    }

    return (

        <Fragment>
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
        
        {content1?.map((lesson, index)=>{
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
        })}

        <AccordionDetails>
        <div onClick={addSectionHandler}>
            <div className="flex flex-col mt-4 cursor-pointer">
            <div className="width-[100%] flex justify-center"><AddCircleRounded sx={{color:"black"}}/></div>
            <div className="mx-auto  text-center bg-black text-white font-bold">
                Add New Content
            </div>
            </div>
        </div>
        {addSection && 
            <Container maxWidth="sm" sx={{marginTop: '1rem'}}>
      <form onSubmit={(e)=>{addContentHandler(e);}}>
        <Box marginBottom={2}>
          <TextField
            fullWidth
            label="Text Input"
            name="textInput"
            value={videoName}
            onChange={handleNameChange}
          />
        </Box>
        <Box marginBottom={2}>
          <TextField
            fullWidth
            name="videoInput"
            type="file"
            // value={video}
            onChange={handleVideoChange}
          />
        </Box>
        <Box marginBottom={2}>
          <Button variant="contained" color="primary" type="submit" sx={{marginY: "auto"}}>
            Submit
          </Button>
        </Box>
      </form>
    </Container>}
        </AccordionDetails>
    
    </Accordion>
    </Fragment>
    )
    }




export default CreateCourseDropdown;