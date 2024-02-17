import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import {addToWl } from '../../store/auth';

import {Link, useNavigate, useParams} from 'react-router-dom'; // Import the useParams hook from React Router
import styles from './CourseDescription.module.css'; // Import CSS Modules

import playButton from './images/play-button.png'; // Import the play button image
import courseContentIcon from './images/course-content-icon.png'; // Import the course content icon image
import martyPic from './images/marty-pic.jpg'; // Import the Marty image
import tv from './images/tv.png';
import subtitles from './images/subtitles.png';
import highFive from './images/high-five.png';
import hours from './images/24-hours.png';
import checkmark from './images/checkmark.png'
import certificate from './images/certificate.png';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';

function capitalizeFirstLetter(string) {
  if(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

const CourseDetails = () => {

    const [course, setCourse] = useState(null);
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [isPurchased, setIsPurchased] = useState(false);


    useEffect(() => {
      if(user.wishlist.find(course => course._id === params.courseId)){
        setIsWishlisted(true);
      }
      if(user.courses.find(course => course.course._id === params.courseId)){
        setIsPurchased(true);
      }
      if(user.isLoggedin == false){
        setIsPurchased(false);
        setIsWishlisted(false);
      }
    },[user.wishlist, user.courses, user.isLoggedin])
    
    useEffect(() => {
    async function getCourseInfo() {
        const res = await axios.get(`http://localhost:8000/api/course/description/${params.courseId}`);
        // console.log(res.status == "200")
        if(res.status == "200"){
          
          setCourse(res.data.course)
        }
        }
        getCourseInfo();
    },[])

    async function addToWishlist(){
      if(user.isLoggedin == false){
        toast.info('Please Login to add to wishlist');
        navigate('/login');
        return ;
      }
      if(isPurchased){
        toast.info('Already Bought')
        return ;
      }
      if(isWishlisted){
        toast.info('Already in Wishlist');
        return ;
      }
      try {
        const req = await axios.post('http://localhost:8000/api/v1/user/add-to-wl', {
          userId: user.id,
          courseId: params.courseId
        }, {
          headers: {
            'x-auth-token': user.token,
            'Content-Type': 'application/json'
          }

        })

        if(req.status === 200){
          toast.success('Added to Wishlist');
          dispatch(addToWl(course));
        }}
         catch (e){
          console.log(e);
          toast.error('Failed to add to wishlist');
        }

    }

    function purchaseCourseHandler(){
      if(isPurchased){
        navigate(`/course/${params.courseId}`)
      } else {
        navigate(`/checkout/${params.courseId}`)
      }
    }

  return (
    <Fragment>
      <div className='bg-black'>
        <div className={styles.maintop}>
          <div className={styles.courseContainer}>
            <div className="row px-5 mx-4">
              <div className="col-lg-8 px-3">
                <div className={styles['course-title']}>
                  <h1 style={{ fontFamily: 'Archivo Black', color: 'aqua',fontSize: '2.5rem',letterSpacing:'-.02rem', fontWeight: 600 }}>
                  {course?.title}
                  </h1>
                </div>
                <div className={styles['course-info']}>
                  <p>{course?.description}</p>
                </div>
                <div className="d-flex mb-2">
                  <div>
                    <span className="mr-3">4.0</span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="mx-2">(2200 Ratings) </span>
                  </div>
                  <div></div>
                </div>
                <div className={styles.author}>
        <Link to = '#'>Created By {capitalizeFirstLetter(course?.teacher[0]?.firstName)}</Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={styles['course-leftbar']}>
                  <div className="inner">
                    <div
                      className={`card d-none d-lg-block p-0`}
                      style={{ width: '20rem', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                      <img src="https://worshiptutorials.com/wp-content/uploads/2015/11/Beginner-Guitar-Course.jpg" className="card-img-top" alt="Card image cap" />
                      <a href="/coursepage">
                        <div className={styles.play}>
                          <img src={playButton} width="40px" />
                        </div>
                      </a>
                      <div className="card-body">
                        <h5 className="card-title prc" style={{ color: 'black', marginBottom: '1.5rem' }}>
                          <div className='flex justify-between'>
                            <div  style={{fontFamily:"quicksand"}}>Price : </div>
                            <div  style={{fontFamily:"quicksand"}}>{course?.price}</div>
                          </div>
                        </h5>
                        <p className={styles.cardDesc} style={{ color: 'black' }}>
                        {course?.description}
                        </p>
                        <div className="d-flex justify-content-between">
                         <button className={styles.cardButton} style={isPurchased ? {backgroundColor: 'green'} : {}} onClick={purchaseCourseHandler}>
                          {isPurchased ? "Go To Course" : "Buy This Course"}
                         </button>
                         <button className={styles.cardButton}  style={isWishlisted ? {backgroundColor: 'green'} : {}} onClick={addToWishlist}>
                          {(isWishlisted) ? "Already in Wishlist" : "Add to Wishlist"}
                         </button>
                          {/* <a href={`/checkout/${course?._id}`} className="btn btn-dark">
                            Buy This Course
                          </a>
                          <a
                            onClick={() => AddToWishlist(course?._id)}
                            className="btn btn-dark text-base "
                            id="wlbutton">
                            Add to Wishlist
                          </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.courseContainer}>
          <div className="row g-5">
            <div className="col-lg-8">
              <div className={styles.course_info}>
                <div className={`${styles.thumnail} ${styles.courseBox} ${styles['container-img']}`}>
                  <img src={martyPic} alt="" className="w-100" />
                  <div className={styles['bottom-right']}>
                    <div style={{ color: 'black' }}></div>
                    <div></div>
                  </div>
                </div>

                <div className={styles.courseBox}>
                  <div className={styles.titleStyle1}>
                    <div className={styles.style1}>Course Content: </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className={styles.list1}>
                        <ul className={styles.list1}>
                        {course?.sections?.map((section,index) => {
                          return (
                            <li className="mt-0" key={section._id}>
                            <span className={`${styles.greentick} mt-0`}>
                              <img src={courseContentIcon} alt="" width="20px" />
                            </span>
                            {index+1}.<a style={{ textDecoration: 'none', color: 'black',marginLeft:"6px" }} href="#">
                            {" " + section.name}
                            </a>
                            <hr style={{ color: 'black' }} />
                          </li>
                          )
                        })}
                        
                        </ul>
                      </div>
                    </div>
                    
                  </div>
                  
                </div>

                <div className={styles.courseBox}>
                            <div className={styles.titleStyle1}>
                                <div className = {styles.style1}>This Course Includes: </div>
                               
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className={styles.list1}>
                                        <ul className={styles.list1}>
                                            <li className="mt-0">
                                                <span className = {`${styles.greentick} mt-0`}><img src={tv} alt="" width="20px"/></span>
                                                10 Hours of Video Lectures
                                            </li>
                                            <li className="mt-0">
                                                <span className = {`${styles.greentick} mt-0`}><img src={subtitles} alt="" width="20px"/></span>
                                                Closed Captions
                                            </li>

                                            <li className="mt-0">
                                                <span className = {`${styles.greentick} mt-0`}><img src={highFive} alt="" width="20px"/></span>
                                                Community Support
                                            </li>
                               </ul>
                               </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={styles.list1}>
                                <ul className={styles.list1}>
                                    
                                    <li className="mt-0">
                                        <span className = {`${styles.greentick} mt-0`}><img src={hours} alt="" width="20px"/></span>
                                        Live Support 24/7
                                    </li>
                                    <li className="mt-0">
                                        <span className = {`${styles.greentick} mt-0`}><img src={certificate} alt="" width="20px"/></span>
                                        Certification
                                    </li>
                
                       </ul>
                </div>
                    </div>
                        
                    </div>
                {/* Other course boxes */}
              </div>

              <div className={`${styles.courseBox} mt-4`}>
                    <div className={styles.courseContent}>
                        <div className="row g-5 mb-5">
                            <div className="col-lg-6">
                                <div className="title">
                                    <div className={styles.titleStyle1}>
                                        <h4 className = {styles.style1}>Requirements</h4>
                                    </div>
                                </div>
                                <div className={`${styles.list} ${styles.req}`}>
                                    <ul className={`${styles.list} ${styles.req}`}>
                                        <li className="mt-0">
                                            <span className ={`${styles.greentick} mt-0`}><img src={checkmark} alt=""/></span>
                                            No Prior Experience Required. 
                                        </li>
                                        <li className="mt-0">
                                            <span className = {`${styles.greentick} mt-0`}><img src={checkmark} alt=""/></span>
                                            A working Internet connection. 
                                        </li>
                                        <li>
                                            <span className = {`${styles.greentick} mt-0`}><img src={checkmark} alt=""/></span>
                                            Access to a well tuned Guitar.
                                        </li>

                                        <li>
                                            <span className = {`${styles.greentick} mt-0`}><img src={checkmark} alt=""/>
                                            </span>
                                            A Burning Passion to Learn. 
                                        </li>
                        
                                    </ul>
                                </div>
                            </div>

                          <div className="col-lg-6">
                                 <div className="title">
                                     <div className={styles.titleStyle1}>
                                         <h4 className = {styles.style1}>Description</h4>
                                     </div>
                                 </div>
                                 <div className="list1 req">
                                     <ul className="list1 req">
                                         <li className="mt-0">
                                             <span className = {`${styles.greentick} mt-0`}><img src={checkmark} alt=""/></span>
                                             Learn Basics of Music Notes and pitches 
                                         </li>
                                      

                                         <li>
                                             <span className = {`${styles.greentick} mt-0`}><img src={checkmark} alt=""/></span>
                                             Be Able to Play Pop Songs
                                         </li>
                                         <li>
                                             <span className = {`${styles.greentick} mt-0`}><img src={checkmark} alt=""/></span>
                                             Become an advanced and confident Guitar Player within a month. 
                                         </li>
                                      
                        
                                     </ul>
                                 </div>
                             </div>
                         </div>

                       
                     </div>
                    
                     </div>
            </div>
            </div>
          
        </div>
      </div>
      </div>
    </Fragment>
  );
};

export default CourseDetails;




// import { Fragment } from 'react';
// import  './CourseDescription.css';

// function CourseDescription(){

//     return(
//         <Fragment>
//         <div className="content-bg">
//         <div className="maintop">
//                 <div className="container">
//                     <div className="row px-5 mx-4">
//                         <div className="col-lg-8 px-3">
//                         <div className="course-title">
//                             <h1 style={{fontFamily: 'Archivo Black', color:'aqua'}}> Course Title
//                             </h1>
//                         </div>

//                         <div className="course-info">
//                           {/* <p><%= course.description %></p> */}
//                         </div>

//                         <div className="d-flex mb-2">
//                             <div>
//                                 <span className="mr-3">4.0</span>
//                                 <span className="fa fa-star checked"></span>
//                                 <span className="fa fa-star checked"></span>
//                                 <span className="fa fa-star checked"></span>
//                                 <span className="fa fa-star checked"></span>
//                                 <span className="fa fa-star"></span>
//                                 <span className ="mx-2">(2200 Ratings) </span>    
//                             </div>
                                   
//                                 <div>
                                    
//                                 </div>
//                         </div>
//                         <div className="author"><a href="#" style="color: white; text-decoration: none;">Created By </a></div>
//                     </div>
//                 <div className="col-lg-4">
//                     <div className="course-leftbar">
//                         <div className="inner">
//                             <div className="card d-none d-lg-block" style="width: 21rem; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;">
//                                 <img src='<%= course.imageUrl %>' className="card-img-top" alt="Card image cap"/>

//                               <a href="/coursepage">
//                                 <div className = "play">
//                                     <img src = "/images/play-button.png" width="40px"/>
//                                 </div></a>
//                                 <div className="card-body">
//                                   <h5 className="card-title prc" style="color: black;"><p style="color: black;">Price:</p> <p style="color: black;">100 Rs </p></h5>
//                                   <p className="card-text" style="color: black; ">Course Desc</p>
//                                 <div className="d-flex justify-content-between">
//                                     <a href="/checkout/<%= course._id %>" className="btn btn-dark">Buy This Course</a>
//                                     <a  className="btn btn-dark" id="wlbutton">Add to Wishlist</a>
//                                 </div>
                                    

                                        
//                                 </div>
//                               </div>
//                         </div>
//                     </div>
//                 </div>
                
//                 </div>
//                 </div>
//         </div>

//         <div className="container">            
//             <div className="row g-5">
//                 <div className="col-lg-8">
//                     <div className="course_info">
//                         <div className="thumnail course-box container-img">
//                             <img src="/images/marty-pic.jpg" alt="" className="w-100"/>
//                             <div className="bottom-right">
//                                 <div style="color:black"></div>
//                             <div></div>
                            
//                             </div>
//                         </div>

//                         <div className="course-box">
//                             <div className="title-style">
//                                 <div className = "style1">Course Content: </div>
                               
//                             </div>
//                             <div className="row">
//                                 <div className="col-lg-6">
//                                     <div className="list1">
//                                         <ul className="list1">
//                                             <li className="mt-0">
//                                                 <span className = "greentick mt-0"><img src="/images/course-content-icon.png" alt="" width="20px"/></span>
//                                                 1. <a style="text-decoration: none; color:black;" href="#">Your very first acoustic guitar lesson</a>
//                                                 <hr style="color:black;"/>
//                                             </li>
//                                             <li className="mt-0">
//                                                 <span className = "greentick mt-0"><img src="/images/course-content-icon.png" alt="" width="20px"/></span>
                                            //     2. <a style="text-decoration: none; color:black;" href="#">The A major chord</a>
                                            //     <hr/>
                                            // </li>

                                            // <li className="mt-0">
                                            //     <span className = "greentick mt-0"><img src="/images/course-content-icon.png" alt="" width="20px"/></span>
                                            //     3. The G major chord
                                            //     <hr/>
                                            // </li>
                            
                                            // <li className="mt-0">
                                            //     <span className = "greentick mt-0"><img src="/images/course-content-icon.png" alt="" width="20px"/></span>
                                            //     4. The D major chord
                                            //     <hr/>
                                            // </li>
                                            // <li className="mt-0">
                                            //     <span className = "greentick mt-0"><img src="/images/course-content-icon.png" alt="" width="20px"/></span>
                                            //     5. The A minor and E major Chords
                                            //     <hr/>
                                            // </li>
                                            // <li className="mt-0">
                                            //     <span className = "greentick mt-0"><img src="/images/course-content-icon.png" alt="" width="20px"/></span>
                                            //     6. The C major chord
                                            //     <hr/>
                                            // </li>
                                            // <li className="mt-0">
                                            //     <span className = "greentick mt-0"><img src="/images/course-content-icon.png" alt="" width="20px"/></span>
                                            //     7. The F major chord
                                            //     <hr/>
                                            // </li>
                                            // <li className="mt-0">
                                            //     <span className = "greentick mt-0"><img src="/images/course-content-icon.png" alt="" width="20px"/></span>
                                            //     8. The D minor chord
                                            //     <hr/>
                                            // </li>
//                                </ul>
//                         </div>
                     
//                         </div>
//                     </div>
                        

//                         <div className="course-box">
//                             <div className="title-style">
//                                 <div className = "style1">This Course Includes: </div>
                               
//                             </div>
//                             <div className="row">
//                                 <div className="col-lg-6">
//                                     <div className="list1">
//                                         <ul className="list1">
//                                             <li className="mt-0">
//                                                 <span className = "greentick mt-0"><img src="/images/tv.png" alt="" width="20px"/></span>
//                                                 10 Hours of Video Lectures
//                                             </li>
//                                             <li className="mt-0">
//                                                 <span className = "greentick mt-0"><img src="/images/subtitles.png" alt="" width="20px"/></span>
//                                                 Closed Captions
//                                             </li>

//                                             <li className="mt-0">
//                                                 <span className = "greentick mt-0"><img src="/images/high-five.png" alt="" width="20px"/></span>
//                                                 Community Support
//                                             </li>
                            

//                                </ul>
//                         </div>
//                         <div className="col-lg-6">
//                             <div className="list1">
//                                 <ul className="list1">
                                    
//                                     <li className="mt-0">
//                                         <span className = "greentick mt-0"><img src="/images/24-hours.png" alt="" width="20px"/></span>
//                                         Live Support 24/7
//                                     </li>
//                                     <li className="mt-0">
//                                         <span className = "greentick mt-0"><img src="/images/certificate.png" alt="" width="20px"/></span>
//                                         Certification
//                                     </li>
                
//                        </ul>
//                 </div>
//                     </div>
                        
//                     </div>

//                     <div className="course-box mt-4
//                     ">
//                     <div className="course-content">
//                         <div className="row g-5 mb-5">
//                             <div className="col-lg-6">
//                                 <div className="title">
//                                     <div className="title-style">
//                                         <h4 className = "style1">Requirements</h4>
//                                     </div>
//                                 </div>
//                                 <div className="list1 req">
//                                     <ul className="list1 req">
//                                         <li className="mt-0">
//                                             <span className = "greentick mt-1"><img src="/images/checkmark.png" alt=""/></span>
//                                             No Prior Experience Required. 
//                                         </li>
//                                         <li className="mt-0">
//                                             <span className = "greentick mt-1"><img src="/images/checkmark.png" alt=""/></span>
//                                             A working Internet connection. 
//                                         </li>
//                                         <li>
//                                             <span className = "greentick mt-1"><img src="/images/checkmark.png" alt=""/></span>
//                                             Access to a well tuned Guitar.
//                                         </li>

//                                         <li>
//                                             <span className = "greentick mt-1"><img src="/images/checkmark.png" alt=""/>
//                                             </span>
//                                             A Burning Passion to Learn. 
//                                         </li>
                        
//                                     </ul>
//                                 </div>
//                             </div>

// //                             <div className="col-lg-6">
// //                                 <div className="title">
// //                                     <div className="title-style">
// //                                         <h4 className = "style1">Description</h4>
// //                                     </div>
// //                                 </div>
// //                                 <div className="list1 req">
// //                                     <ul className="list1 req">
// //                                         <li className="mt-0">
// //                                             <span className = "greentick mt-1"><img src="/images/checkmark.png" alt=""/></span>
// //                                             Learn Basics of Music Notes and pitches 
// //                                         </li>
                                      

// //                                         <li>
// //                                             <span className = "greentick mt-1"><img src="/images/checkmark.png" alt=""/></span>
// //                                             Be Able to Play Pop Songs
// //                                         </li>
// //                                         <li>
// //                                             <span className = "greentick mt-1"><img src="/images/checkmark.png" alt=""/></span>
// //                                             Become an advanced and confident Guitar Player within a month. 
// //                                         </li>
                                      
                        
// //                                     </ul>
// //                                 </div>
// //                             </div>
// //                         </div>

                       
// //                     </div>
                    
// //                     </div>
// //                     <div className="course-box" style="margin-bottom: 10px;">
// //                         <div className="title">
// //                             <div className="title-style">
// //                                 <h4 className = "style1">Rating</h4>
// //                             </div>
// //                         </div>

// //                         <div className="row g-5 mb-5">
// //                             <div className="col-lg-12">
// //                                 <div className="ratingval">
// //                                     <div className="numb">4.3</div>
// //                                     <div className="rating">
                                   
// //                                 <span className="fa fa-star checked"></span>
// //                                 <span className="fa fa-star checked"></span>
// //                                 <span className="fa fa-star checked"></span>
// //                                 <span className="fa fa-star checked"></span>
// //                                 <span className="fa fa-star"></span>
// //                                 </div>

// //                                 <span className="gb">
// //                                    Course Rating
// //                                 </span>
// //                                 </div>
// //                             </div>


// //                             <a href="/checkout" className="btn btn-dark">Buy This Course</a>
// //                                   <a href="/wishlist" className="btn btn-dark">Add to Wishlist</a>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
            // </div>
            // </div>
//             </div>
//             </div>
//         </div>

//         </div>
//             </Fragment>


//     )

// }


// export default CourseDescription;