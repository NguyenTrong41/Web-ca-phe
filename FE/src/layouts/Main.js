import React from 'react'
import Header from '../layouts/Header.js'
import Sidebar from '../layouts/Sidebar.js'
import {Outlet} from 'react-router-dom'
const main = () => {
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

export default main