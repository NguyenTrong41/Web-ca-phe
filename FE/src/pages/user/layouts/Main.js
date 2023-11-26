import React from 'react'
import Header from './Header'

import Footer from './Footer'

const Main = ( {children, ...props}) => {
  return (
    <div {...props}>
        <Header/>
        {children}
        <Footer/>

        
    </div>
  )
}

export default Main