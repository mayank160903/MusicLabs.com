import { useState } from 'react'
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

import SigninSignupForm from './pages/Signup/Signup';


import Certificate from './pages/Certificate/Certificate';

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    { path: '/', element: <RootLayout/>, 
      children: [
        {path: '/', element: <Homepage/> },
        {path: '/ContactUs', element: <ContactUs/> },
        {path: '/wishlist', element: <WishlistPage/>},
        {path: '/instructor',element:<Instructor/>},
        {path: '/checkout', element: <PaymentPage/>},
        {path: '/spotlight', element: <Spotlight/>},
        {path: '/faq', element: <Faq/>},
        {path: '/Signup', element: <SigninSignupForm/>},
        {path: '/certificate', element: <Certificate/>},

        
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
