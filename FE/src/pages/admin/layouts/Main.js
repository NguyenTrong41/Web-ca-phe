import React from 'react'
import Header from './Header.js'
import Sidebar from './Sidebar.js'
import {Outlet} from 'react-router-dom'
const Main = () => {
  return (
    <div>
        <Header/>
        <div id="layoutSidenav">
            <Sidebar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Main

