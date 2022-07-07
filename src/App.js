import React, { useEffect, useState } from 'react'
import Bar from './Main'
import TopHeader from './TopHeader'
import "./App.css"
import Searchheader from './Searchheader'

const App = () => {
  const [isMobile, setIsMobile] = useState(false)
 
//choose the screen size 
const handleResize = () => {
  if (window.innerWidth < 720) {
      setIsMobile(true)
  } else {
      setIsMobile(false)

  }
}

// create an event listener
useEffect(() => {
  window.addEventListener("resize", handleResize)
})
  return (
    <>
    <div onClick={()=>{}}>
    <TopHeader/>
    <Searchheader/>
    <div><Bar/></div>
    </div>
    
    </>
  )
}

export default App