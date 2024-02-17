import { Fragment, startTransition, useEffect, useState } from "react"
import Header from "../Header/Header";
// import { useDispatch } from '@reduxjs/toolkit'
import {useNavigate} from 'react-router'

import './Wishlist.css'
import { Celebration, Delete } from "@mui/icons-material";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { courseActions } from "../../store/courses";



let HOLDER_DATA = [{
    title: "Music Mastery",
    teacher: "Jake Rockson",
    price: "150",
    imageUrl: "https://masterofmusic.onrender.com/images/fam-solos.jpg",
    _id: '10'
    },
    {
        title: "Tabla",
        teacher: "John Doe",
        price: "150",
        _id: '20',
        imageUrl: "https://masterofmusic.onrender.com/images/fam-solos.jpg"
    }]

  //   let HOLDER_DATA_courses = [{
  //     title: "Learn How To Play Guitar in 10 Days",
  //     teacher: "Rock Rockson",
  //     price: "500",
  //     imageUrl: "https://masterofmusic.onrender.com/images/fam-solos.jpg",
  //     _id: '1'
  //     },
  //     {
  //         title: "Tabla Tabla",
  //         teacher: "John Doe",
  //         price: "150",
  //         _id: '2',
  //         imageUrl: "https://masterofmusic.onrender.com/images/fam-solos.jpg"
  //     },
  //     {
  //       title: "Tabla",
  //       teacher: "John Doe",
  //       price: "150",
  //       _id: '3',
  //       imageUrl: "https://masterofmusic.onrender.com/images/fam-solos.jpg",
  //       completed: true
  //   },
  // ]

function WishlistPage(){

   const courses = useSelector((state)=>state.course)
   const [wishlist, setWishlist] = useState(HOLDER_DATA);
  //  const [courses, setCourses] = useState(HOLDER_DATA_courses);
   const [mode,setMode] = useState("wish");
   const dispatch = useDispatch();

   const user = useSelector(state=> state.auth.user)


  //  const dispatch = useDispatch();
   const navigate = useNavigate();

   function purchaseCourseHandler(wishitem){
      dispatch(courseActions.addCourse(wishitem))
     startTransition(()=>{ 
       navigate("/checkout")
      })
    }

    useEffect(()=>{
      // dispatch(courseActions.fetchCourses())
      async function fetchWishlist(){
        const req = await fetch('http://localhost:8000/user/wishlist', {userId: user._id},
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
          }
      })
    }
    fetchWishlist();
   } ,[])

    function getCertificate(){
      
      navigate("/certificate")
    
    }


    return(
    <Fragment>
    <div className="toast-container position-fixed top-0 end-0 p-3">
    <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div className="toast-header">
        <strong className="me-auto">Masters Of Music</strong>
       
        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div className="toast-body">
        Course removed from wishlist!
      </div>
    </div>
    
  </div>

 <div className="bodyMain">
    <div className="outer3">
    <div>
        <div className="maincontainer">
            <div className="wishmain d-flex ">
                <div className="d-none d-xl-block mb-5">
                    <div className="">
                        <div className="card" style={{width: '18rem', backgroundColor: '#181a1b', padding: '0rem'}}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEUAlv+tY//LAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=" className="card-img-top" alt="..."/>
                            <div className="card-body" style={{borderBottom: '2px solid grey', paddingBottom: '1.5rem'}}>
                              
                              <div className="userpic_con">  
                              <div className="userpic">
                                    
                                </div></div>
                                
                              <h5 className="proftitle2 align-items-end ml-8" >Welcome, {user?.firstName}</h5>
                            </div>
                            <ul className="list-group list-group-flush" style={{fontSize: '16px'}}>
                              <li className="list-group-item atb" style={{borderBottom: '2px solid grey', backgroundColor: '#181a1b'}}><Link to = "/studentprofile" color="#C0BAB2">Your Profile</Link></li>
                              <li className="list-group-item atb" style={{borderBottom: '2px solid grey', backgroundColor: '#181a1b'}}><div onClick={()=>{setMode('wish')}}> Wishlist</div></li>

                              <li className="list-group-item atb" style={{borderBottom: '2px solid grey', backgroundColor: '#181a1b'}}><div onClick={()=>{setMode('courses')}}>Your Courses</div></li>

                              <li className="list-group-item atb" style={{borderBottom: '2px solid grey',  backgroundColor: '#181a1b'}}><Link to = "/">Home</Link></li>
                              
                              <li className="atb list-group-item" style={{borderBottom: '2px solid grey',  backgroundColor: '#181a1b'}}><a href = "/logout" id = "logoutbtn" className = "logout-button">Log Out</a></li>
                            </ul>

                            
                          </div>
                    </div>
                    <div className="blackblock"></div>
                    

                </div>
               <div className="spaceline"></div>
                <div className="rightpanel">
                    <div className="rightcont">
                        <div className="rightmain d-flex flex-column">
                            <div className="rhead">
                               <div className="" id="wishlist-count"> {mode === 'wish' ? `Your Wishlist (${wishlist.length})`:`Your Courses (${courses.length})`}</div>
                            </div>
                          
                          
                      <div className="overflow-auto max-h-[70vh]">
                           {mode === 'wish' ? (  
                          
                            wishlist.map((wishitem) => {
                                return(
                              <div key={wishitem._id} className="wishblock" id={wishitem._id}>
                                <div className="imgcontainer">
                                    <img src = {wishitem.imageUrl}  className = "course-img img-fluid"
                                    width="230px"/>         
                                </div>

                                <div className="wishitemleft d-flex flex-column">
                                  <div className="title2">
                                    <a href = "http://localhost:8000/coursedescpage/<%=user.wishlist[i]._id%>" className = "courselink">{wishitem.title}</a>
                                  </div>

                                  <div className="teacher">
                                    <a>By {wishitem.teacher}</a>
                                  </div>

                                  <div className="rating">
                                    <div className="rate pt-1">
                                        <label htmlFor="star5">5 stars</label>
                                        <label htmlFor="star4">4 stars</label>
                                        <label htmlFor="star3">3 stars</label>
                                        <label htmlFor="star2">2 stars</label>
                                        <label htmlFor="star1">1 star</label>
                                        
                                      </div>
                                      
                                  </div>

                                  <div className="price">
                                    <div><p>$ {wishitem.price}</p></div>
                                  </div>
                                </div>

                                <div className="rightitembar">
                                  
                                    {/* <form id="del" onsubmit="return deleteHandler()">
                                    <input type="hidden" name="del-item"></input>
                                  */}
                                    <div style={{paddingLeft: '5.2rem'}} className="del-icon">
                                      <Delete sx={{color: 'grey', fontSize: 28}} className=""></Delete>
                                      </div>
                                    {/* </form> */}
                                    
                                    
                                    <button className="buy-now h-[48px]" onClick={()=>{purchaseCourseHandler(wishitem)}}>Buy Now</button>

                                </div>
                                </div>)
                            })
                            
                            ):(
                              courses.map(course => {
                                return (<div className ="wishblock" key = {course._id} >
                                <div className ="imgcontainer">
                                    <img src ={course.imageUrl}  className = "course-img img-fluid"
                                    width="230px"/>
                                
                         
                                </div>

                                <div className="wishitemleft d-flex flex-column">
                                  <div className ="title2">
                                    <a href = "http://localhost:8000/coursedescpage/<%=user.purchased[i]._id%>" className = "courselink">{course.title} </a>
                                  </div>

                                  <div className="teacher">
                                    <a>By {course.teacher}</a>
                                  </div>

                                  <div className="rating">
                                    <div className="rate pt-1">
                                        <label htmlFor="star5">5 stars</label>
                                        <label htmlFor="star4">4 stars</label>
                                        <label htmlFor="star3">3 stars</label>
                                        <label htmlFor="star2">2 stars</label>
                                        <label htmlFor="star1">1 star</label>
                                        
                                      </div>
                                      
                                  </div>

                                  <div className="price">
                                    <div><p></p></div>
                                  </div>
                                </div>

                                <div className="rightitembar">
                                {course.completed == true && <Celebration onClick={getCertificate}sx={{marginLeft: '3rem', cursor:'pointer'}}/>}                                                           
                                  <button className="buy-now pb-2" onClick={()=>{navigate(`/course/${course.title}/1`)}}>
                                    Go To Course</button>
                                </div>
                            </div>)
                              })


                            )}
                            </div> 
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>  
         </div>
         {/* <Footer /> */}
      </Fragment>
          
        )



}

export default WishlistPage