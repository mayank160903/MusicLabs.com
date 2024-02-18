import { Fragment, startTransition, useEffect, useState } from "react"

// import { useDispatch } from '@reduxjs/toolkit'
import {useNavigate} from 'react-router'

import './Wishlist.css'
import { Celebration, Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import authActions, { removeFromWl } from "../../store/auth";
import axios from "axios";


function capitalizeFirstLetter(string) {
  if(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}




function WishlistPage(){

   const courses = useSelector((state)=>state.course)
   const [mode,setMode] = useState("wish");
   const dispatch = useDispatch();

   const user = useSelector(state=> state.auth)


   const navigate = useNavigate();

   function purchaseCourseHandler(wishitem){
      // dispatch(courseActions.addCourse(wishitem))
     startTransition(()=>{ 
       navigate(`/checkout/${wishitem._id}`)
      })
    }

  //   useEffect(()=>{
  //     // dispatch(courseActions.fetchCourses())
  //     async function fetchWishlist(){
  //       const req = await fetch('http://localhost:8000/user/wishlist', {userId: user._id},
  //       {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Authorization': `Bearer ${user.token}`
  //         }
  //     })
  //   }
  //   fetchWishlist();
  //  } ,[])

    async function removeFromWishListHandler(course){
      
      try {
        const req = await axios.post('http://localhost:8000/api/v1/user/remove-wishlist', {userId: user.id, courseId: course._id},
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
      }}) 

      if(req.status === 200){
        console.log("nikal diya")
        dispatch(removeFromWl(course._id))
        toast.success("Course removed from wishlist")
      } 
    } catch(e) {
      console.log(e)
      toast.error("Error removing course from wishlist")
    }
  
  }


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
                        <div className="card" style={{width: '18rem', backgroundColor: '#181a1b', padding: '0rem', marginTop: '1rem'}}>
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
                               <div className="" id="wishlist-count"> {mode === 'wish' ? `Your Wishlist (${user.wishlist.length})`:`Your Courses (${user.courses.length})`}</div>
                            </div>
                          
                          
                      <div className="overflow-auto max-h-[70vh]">
                           {mode === 'wish' ? (  
                          
                            user.wishlist.map((wishitem) => {
                                return(
                              <div key={wishitem._id} className="wishblock" id={wishitem._id}>
                                <div className="imgcontainer">
                                    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3OUVLiBoBsr179pMOm4QFjoZoMuKA7UG7eg&usqp=CAU"  className = "course-img img-fluid"
                                    width="230px"/>         
                                </div>

                                <div className="wishitemleft d-flex flex-column">
                                  <div className="title2">
                                    <Link to = {`/coursedescription/${wishitem._id}`} className = "courselink">{wishitem.title}</Link>
                                  </div>

                                  <div className="teacher">
                                    <a>By {wishitem.teacher[0].firstName}</a>
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
                                    <div style={{paddingLeft: '5.2rem'}} className="del-icon" 
                                    onClick={()=>{removeFromWishListHandler(wishitem)}}>
                                      <Delete sx={{color: 'grey', fontSize: 28}} className=""></Delete>
                                      </div>
                                    {/* </form> */}
                                    
                                    
                                    <button className="buy-now h-[48px]" onClick={()=>{purchaseCourseHandler(wishitem)}}>Buy Now</button>

                                </div>
                                </div>)
                            })
                            
                            ):(
                              user.courses.map(course => {
                                return (<div className ="wishblock" key = {course._id} >
                                <div className ="imgcontainer">
                                    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3OUVLiBoBsr179pMOm4QFjoZoMuKA7UG7eg&usqp=CAU"  className = "course-img img-fluid"
                                    width="230px"/>
                                
                         
                                </div>

                                <div className="wishitemleft d-flex flex-column">
                                  <div className ="title2">
                                    <Link to = {`/coursedescription/${course.course._id}`} className = "courselink">{course.course.title} </Link>
                                  </div>

                                  <div className="teacher">
                                    <a>By {capitalizeFirstLetter(course.course.teacher[0].firstName)}</a>
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
                                  <button className="buy-now pb-2" onClick={()=>{navigate(`/course/${course.course._id}`)}}>
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