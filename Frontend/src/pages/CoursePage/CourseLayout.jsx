
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Dropdown from "../../components/CoursePage/Dropdown";
import MainContent from "../../components/CoursePage/MainContent";
import { useParams } from "react-router";
import { Box } from "@mui/material";

const DUMMY = {
    title: "Mastering Music",
    description: "Welcome to Mastering Music: A Comprehensive Guide, an immersive and dynamic exploration of the rich tapestry of music. Whether you're just beginning your musical journey or seeking to deepen your expertise, this meticulously crafted course offers an expansive and enlightening experience. Throughout this comprehensive guide, you'll delve into the intricate realms of music theory, instrument mastery, performance finesse, composition techniques, and the ever-evolving technological landscape within music creation. Each segment of this course is thoughtfully curated to offer a holistic understanding of music in all its forms." ,
    price: 150,
    sections: [
        {name: 'Introduction', videos: [{name: 'Intro', videos: 'video1', id:1},{name: 'What is Expected of You?', videos: 'video1', id:4}, {name: 'How to Watch And Learn', videos: 'video1', id:69}, { name: 'Getting Started', videos: 'video1', id:2 },
        { name: 'Course Overview', videos: 'video1', id:3 },
        { name: 'Navigating the Platform', videos: 'video1', id:4 }]},

        {name: 'Common Early Mistakes', videos: [ { name: 'Overlooking Fundamentals', videos: 'video1', id:33 },
        { name: 'Ignoring Practice Consistency', videos: 'video1', id:34 },
        { name: 'Rushing Through Techniques', videos: 'video1', id:35 },
        { name: 'Not Seeking Guidance', videos: 'video1', id:36 }]},
        
    {
    name: 'Music Theory Fundamentals',
    videos: [
      { name: 'Understanding Chords', videos: 'video1', id:17 },
      { name: 'Melody Composition Basics', videos: 'video1', id:18 },
      { name: 'Rhythmic Structures', videos: 'video1', id:19 },
      {name: 'Exploring 7 the Rhymes', videos: 'video1', id:67}
    ]},
    {
      name: 'Song Studies',
      videos: [
        { name: 'Classic Rock Anthems', videos: 'video1', id:11 },
        { name: 'Pop Ballads Deconstructed', videos: 'video1', id:12 },
        { name: 'Jazz Standards Exploration', videos: 'video1', id:13 },
        { name: 'Harmony and Counterpoint', videos: 'video1', id:20 },
{ name: 'Theme Development', videos: 'video1', id:21 },
{ name: 'Instrumentation Strategies', videos: 'video1', id:22 }
      ]
    },
    {
        name: 'Basic Principles',
        videos: [
                { name: 'Exploring Advanced Chords', videos: 'video1', id:37 },
                { name: 'Mastering Rhythmic Patterns', videos: 'video1', id:38 },
                { name: 'Understanding Song Structures', videos: 'video1', id:39 },
                { name: 'Improvisation Techniques', videos: 'video1', id:40 }
              ]},
              {name: 'Scales and Soloing Techniques',
              videos: [
                { name: 'Introduction to Major Scale', videos: 'video1', id:47 },
                { name: 'Pentatonic Scale Mastery', videos: 'video1', id:48 },
                { name: 'Exploring Modes: Dorian', videos: 'video1', id:49 },
                { name: 'Advanced Bending Techniques', videos: 'video1', id:50 },
                { name: 'Improvisation Strategies', videos: 'video1', id:51 }
              ]},
              {
                name: 'Improvisation Strategies',
                videos: [
                  { name: 'Developing Melodic Phrasing', videos: 'video1', id:52 },
                  { name: 'Understanding Chord Progressions', videos: 'video1', id:53 },
                  { name: 'Creating Expressive Solos', videos: 'video1', id:54 },
                  { name: 'Exploring Modal Interchange', videos: 'video1', id:55 },
                  { name: 'Mastering Rhythmic Variation', videos: 'video1', id:56 }
                ]
              },
              {
            name: 'Advanced Techniques',
            videos: [
              { name: 'Mastering Scales', videos: 'video1', id:8 },
              { name: 'Soloing Strategies', videos: 'video1', id:9 },
              { name: 'Rhythm Mastery', videos: 'video1', id:10 }
            ]
          },
    {name: 'Performance Mastery',
    videos: [
      { name: 'Stage Presence Techniques', videos: 'video1', id:14 },
      { name: 'Connecting with Your Audience', videos: 'video1', id:15 },
      { name: 'Live Gig Preparation', videos: 'video1', id:16 }
    ]
  },
    {name: 'Path ahead', videos: [{name: 'Key Strokes', videos: 'video1', id:5},{name: 'Lesson 1', videos: 'video1',id:6}]},
    ]
}

function CourseLayout(){

    const params = useParams();
    const isLoggedin =  useSelector(state => state.auth.isLoggedin);

    const [currentSection, setCurrentSection] = useState(null);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [courseInfo,setCourseInfo] = useState(null);
    const [initialLoading, setInitialLoading] = useState(true);
    // const dispatch = useDispatch();
    // dispatch(authActions.login());
    

    useEffect(()=>{
      async function getCourseInfo(id){
          const response = await fetch(`http://localhost:8000/api/course/${params.courseId}`,{
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
          setInitialLoading(false)
        }

      getCourseInfo(params.courseid);
  
  },[])

    return (
      !initialLoading && (
        <div className="relative h-auto flex pb-6">
        
        <div className="flex flex-col">
            <div className="w-[76vw] h-fit">
               <MainContent currentVideo={currentVideo} currentSection={currentVideo?.title} content={courseInfo} video={currentVideo}/>
               <Box sx={{marginTop: '1rem', padding: 2}}>
                <div className="flex flex-col">
                    <div className="font-bold text-2xl mb-4"> Course Description </div>
                   <div> {courseInfo.description} </div>
                </div>
               </Box>
            </div>
            <div className="absolute inset-y-0 overflow-auto scroll-y right-0 mt-2 w-[24vw] bg-neutral-200">
            
             { courseInfo.sections.map((section, index)=>{
                console.log(section.videos)
                    return(
                        <Dropdown key={section._id} id={section._id} num={index+1} currentSection={currentSection} setCurrentSection={setCurrentSection} title={section.name}  content={section?.videos} setVideo={setCurrentVideo}/>   
                    )
                })
            }
            </div>
        </div>

        </div>
      )
      
    )
}

export default CourseLayout;