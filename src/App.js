import React, { useEffect, useState } from 'react'
import Bar from './MAIN/Main'
import TopHeader from './MAIN/TopHeader'
import "./App.css"
import Modal from './MAIN/Modal'
import Inputmodal from './MAIN/Inputmodal'

const App = () => {
  const [isMobile, setIsMobile] = useState(false)
 const[open,setopen]=useState(false)
 const[openinput,setopeninput]=useState(false)
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

const[walletname,setwalletname]=useState("")
  return (
    <>
    <Inputmodal openinput={openinput} setopeninput={setopeninput} walletname={walletname} setwalletname={setwalletname} />
    <Modal open={open} setopen={setopen} setopeninput={setopeninput} walletname={walletname} setwalletname={setwalletname}  />
    <div onClick={()=>setopen(true)}>
    <TopHeader/>
        <div><Bar/></div>
    </div>
    
    </>
  )
}

export default App