import React from 'react'

const Smallslider = ({toggle,text}) => {
  return (
    <>
    <header>
        <div className='heading'>
        <h1 >{text}</h1>
        {toggle&&
        <div className='toggle'>
            <p>Next 7 days</p>
            <p>Coming Soon</p>
            <p>Live</p>
        </div>
}
        </div>
    </header>
    </>
  )
}

export default Smallslider