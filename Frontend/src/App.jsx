import { useState } from 'react'

import './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

import RootLayout from './pages/RootLayout'

import ContactUs from './pages/ContactUs/ContactUs'
import WishlistPage from './pages/Wishlist/Wishlist'
import Instructor from './pages/Instructor/Instructor';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import Homepage from './pages/Homepage/homepage'
import Spotlight from './pages/Spotlight/Spotlight'
import Faq from './pages/Faq/Faq'
import StudentProfile from './pages/StudentProfile/StudentProfile';
import SigninSignupForm from './pages/Signup/Signup';
import BecomeInstructor from './pages/BecomeInstructor/BecomeInstructor';

import AdminQuery from './dashboard/AdminQuery';
import Certificate from './pages/Certificate/Certificate';
import AdminAcceptance from './dashboard/AdminAcceptance';
import LoginForm from './pages/login/Login';
import AdminUsers from './dashboard/AdminUsers';
import ForgotPassword from './pages/forgotpassword/ForgotPassword'
import CourseLayout from './pages/CoursePage/CourseLayout'
import Teacher from './pages/TeacherProfile/TeacherProfile';
import AdminTeachers from  './dashboard/AdminTeachers'; 
import AdminDashboard from './dashboard/Admin';
import Catalogue from './pages/Catalogue/Catalogue'
import TeacherEditProfile from './pages/TeacherEditProfile/TeacherEditProfile';
import StudentEditProfile from './pages/StudentEditProfile/StudentEditProfile';
import CreateCourseLayout from './pages/CreateCoursePage.jsx/CreateCourse'
// import Headertest from './pages/Header/Headertest'
import DefaultHeader from './pages/Header/DefaultHeader';
import CourseUpload from './pages/courseUpload/courseUpload'
import Teachers_Dashboard from './Teacher Dashboard/Teachers_Dashboard';
import Dashboard from './admin/Dashboard'
import Quiz from  './pages/Quiz/Quiz';
import CourseDescription from './pages/CourseDescription/CourseDescription';



function App() {
  const [count, setCount] = useState(0);

  // const PaymentPage = React.lazy(() => import('./pages/PaymentPage/PaymentPage'))
  
  const router = createBrowserRouter([
    // {path:'/dashboard', element:<AdminDashboard/>},
    
    { path: '/', element: <RootLayout/>, 
      children: [
        {path: '/', element: <Homepage/> },
        // {path: '/testing', element: <NewHeader /> },
        {path: '/ContactUs', element: <ContactUs/> },
        // {path: '/abcd', element: <AdminQuery/> },
        {path: '/DefaultHeader', element: <DefaultHeader />},
        {path: '/Teacher-Dashboard', element: <Teachers_Dashboard />},
        {path: '/quiz', element: <Quiz />},
        {path: '/becomeInstructor', element: <BecomeInstructor />},
        {path : '/dashboard/admin/query' , element : <AdminQuery/>},
        {path:'/dashboard', element:<AdminDashboard/>},
        {path: '/dashboard/admin/accept' , element : <AdminAcceptance/>},
        {path: '/dashboard/admin/Teachers' , element : <AdminTeachers/>},
        {path: '/dashboard/admin/Users' , element : <AdminUsers/>},
        {path: '/wishlist', element: <WishlistPage/>},
        {path: '/instructor',element:<Instructor/>},
        {path:'/teacher/:id', element:<Teacher/>},
        {path:'/teachereditprofile/:id',element:<TeacherEditProfile/>},
        {path:'/catalogue', element:<Catalogue />},
        {path: '/studenteditprofile', element: <StudentEditProfile/>},
       {path:'/studentprofile', element:<StudentProfile/>},
        {path: '/checkout', element: <PaymentPage/>},
        // {path: '/query', element: <Query/>},
        {path: '/spotlight', element: <Spotlight/>},
        {path: '/faq', element: <Faq/>},
        {path: '/register', element: <SigninSignupForm/>},
        {path: '/certificate', element: <Certificate/>},
        {path: '/login', element: <LoginForm/>},
        { path: '/dashboard', element: <AdminDashboard /> },
       
        {path: '/forgot', element: <ForgotPassword/>},
        {path: '/coursedescription/:courseId', element: <CourseDescription/>},
        {path: '/course/:courseId', element: <CourseLayout/>},
        {path: '/createcourse', element: <CreateCourseLayout/>},

        {path: '/createcourse/:courseid', element: <CreateCourseLayout/>},
        {path: '/createcourse/:courseid/:section', element: <CreateCourseLayout/>},
      
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