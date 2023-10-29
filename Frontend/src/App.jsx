import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import ContactUs from './pages/ContactUs'
import WishlistPage from './pages/Wishlist/Wishlist'
import Instructor from './pages/Instructor';
import PaymentPage from './pages/PaymentPage/PaymentPage'
import Homepage from './pages/Homepage/homepage'

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    { path: '/', element: <RootLayout/>, 
      children: [
        {path: '/home', element: <Homepage/> },
        {path: '/ContactUs', element: <ContactUs/> },
        {path: '/wishlist', element: <WishlistPage/>},
        {path: '/instructor',element:<Instructor/>},
        {path: '/checkout', element: <PaymentPage/>},
        
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
