
import React from 'react'
import '../styles/style.css'

const Banner = () => {
  return (
    <>
    <div id='banner-main'>
        <div id='banner-black'>
        <h1 style={{color:"white"}}>High quality professional <span style={{color:"red"}}>software development</span> services</h1>
        <h4 style={{color:"white"}}>We are obsessed with growing your business. Fast.</h4>
        <div id='banner-button'>
            <button style={{backgroundColor:"transparent",color:"white"}}>Talk to expert</button>
            <button style={{backgroundColor:"white"}}>Hire Top Talent Now</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default Banner;