import React, { useEffect, useState } from 'react'
import Bar from './MAIN/Main'
import TopHeader from './MAIN/TopHeader'
import "./App.css"
import Modal from './MAIN/Modal'

const App = () => {
  const [isMobile, setIsMobile] = useState(false)
 const[open,setopen]=useState(false)
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
    <Modal open={open} setopen={setopen}/>
    <div onClick={()=>setopen(true)}>
    <TopHeader/>
        <div><Bar/></div>
    </div>
    
    </>
  )
}

export default App