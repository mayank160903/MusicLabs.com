import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import ContactUs from './pages/ContactUs'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    { path: '/', element: <RootLayout/>, 
      children: [
        { path: '/', element: <div>Home</div> },
        { path: '/ContactUs', element: <ContactUs/> },
      ]
    },  
  ])

  


  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}

export default App
