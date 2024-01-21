import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './pages/RootLayout'

import ContactUs from './pages/ContactUs/ContactUs'
import WishlistPage from './pages/Wishlist/Wishlist'
import Instructor from './pages/Instructor/Instructor';
import PaymentPage from './pages/PaymentPage/PaymentPage'
import Homepage from './pages/Homepage/homepage'
import Spotlight from './pages/Spotlight/Spotlight'
import Faq from './pages/Faq/Faq'
import StudentProfile from './pages/StudentProfile/StudentProfile';
import SigninSignupForm from './pages/Signup/Signup';


import Certificate from './pages/Certificate/Certificate';

import LoginForm from './pages/login/Login';

import ForgotPassword from './pages/forgotpassword/ForgotPassword'
import CourseLayout from './pages/CoursePage/CourseLayout'
import Teacher from './pages/TeacherProfile/TeacherProfile';

import AdminDashboard from './dashboard/Admin';
import Catalogue from './pages/Catalogue/Catalogue'
import TeacherEditProfile from './pages/TeacherEditProfile/TeacherEditProfile';
import StudentEditProfile from './pages/StudentEditProfile/StudentEditProfile';
import CreateCourseLayout from './pages/CreateCoursePage.jsx/CreateCourse'
import Headertest from './pages/Header/Headertest'
import CourseUpload from './pages/courseUpload/courseUpload'


function App() {
  const [count, setCount] = useState(0);

  const PaymentPage = React.lazy(() => import('./pages/PaymentPage/PaymentPage'))
  
  const router = createBrowserRouter([
    {path:'/dashboard', element:<AdminDashboard/>},
    { path: '/', element: <RootLayout/>, 
      children: [
        {path: '/', element: <Homepage/> },
        // {path: '/testing', element: <NewHeader /> },
        {path: '/ContactUs', element: <ContactUs/> },
        {path: '/HeaderTest', element: <Headertest />},
        {path: '/wishlist', element: <WishlistPage/>},
        {path: '/instructor',element:<Instructor/>},
        {path:'/teacher/:id', element:<Teacher/>},
        {path:'/teachereditprofile',element:<TeacherEditProfile/>},
        {path:'/catalogue', element:<Catalogue />},
        {path: '/studenteditprofile', element: <StudentEditProfile/>},
       {path:'/studentprofile', element:<StudentProfile/>},
        {path: '/checkout', element: <PaymentPage/>},
        {path: '/spotlight', element: <Spotlight/>},
        {path: '/faq', element: <Faq/>},
        {path: '/register', element: <SigninSignupForm/>},
        {path: '/certificate', element: <Certificate/>},
        {path: '/login', element: <LoginForm/>},
        {path: '/forgot', element: <ForgotPassword/>},
        {path: '/course/:courseId', element: <CourseLayout/>, 
        children:[
          {path: ':section', element: <h1>hello</h1>},
        ]},
        
        {path: '/createcourse/:courseid', element: <CreateCourseLayout/>},

        {path: '/createcourse/:courseid/:section', element: <CreateCourseLayout/>},
        {path: '/createcourse', element: <CreateCourseLayout/>},
        {path: '/courseUpload', element: < CourseUpload />}
      ]
    },  
  ]);

  return (
    <>
    
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}

export default App