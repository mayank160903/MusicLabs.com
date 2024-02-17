import { Fragment, useEffect} from "react";
import {Outlet} from "react-router-dom"
import Footer from "./Footer/Footer";
import DefaultHeader from './Header/DefaultHeader';
import TeacherHeaderTest from "./Header/TeacherHeaderTest";

import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
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
            {user.role == 'teacher' ? <TeacherHeaderTest/> : <DefaultHeader/>}
            {/* <Headertest /> */}
            <Outlet/>
            <Footer/>
      
    </Fragment> 
    
    )
}

export default RootLayout;
