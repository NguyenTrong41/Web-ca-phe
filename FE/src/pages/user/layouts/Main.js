import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Main = ( {children, ...props}) => {
  return (
    <div {...props}>
        <Header/>
        {children}
        <Footer/>
        <Outlet/>
        
    </div>
  )
}

export default Main