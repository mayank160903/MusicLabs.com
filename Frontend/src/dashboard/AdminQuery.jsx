import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import { Routes, Route } from 'react-router-dom';

import Query from './Query';

const AdminQuery = () =>{
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }

    return (
        <div className=' flex justify-between '>
         
          <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
          
    <div className="flex flex-col h-screen float-right">
  <div className="flex-1 overflow-y-auto w-full">
    <Query />
  </div>
</div>
          
          

          </div>

      )
}


export default AdminQuery;