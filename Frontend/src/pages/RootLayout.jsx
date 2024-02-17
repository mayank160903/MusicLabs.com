import { Fragment, useEffect} from "react";
import {Outlet} from "react-router-dom"
import Footer from "./Footer/Footer";
import DefaultHeader from './Header/DefaultHeader';
// import TeacherHeaderTest from "./Header/TeacherHeaderTest";
import TeacherHeader from "./Header/TeacherHeaderTest";

import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import TeacherHeaderTest from "./Header/TeacherHeaderTest";
import StudentHeaderTest from "./Header/StudentHeaderTest";
// import { useSelector } from "react-redux/es/hooks/useSelector";
// import HeaderBar from "../components/Header";
// import SideBar from "../components/Sidebar";
// import HeaderBarUnsigned from "../components/Header2";

// import classes from './RootLayout.module.css'

function RootLayout(){
    
    const user = useSelector(state => state.auth);

    return(
    
    <Fragment>  
            

            <ToastContainer />
            {/* <Header/> */}
            <div className="relative z-[10]">
            {user.role == 'teacher' ? <TeacherHeaderTest/> : (user.role == 'User' ? <StudentHeaderTest/> :<DefaultHeader/>)}
            </div>
            {/* <Headertest /> */}
            
            <div className="relative z-[5]">    
            <Outlet/>
            </div>

            <Footer/>
      
    </Fragment> 
    
    )
}

export default RootLayout;
