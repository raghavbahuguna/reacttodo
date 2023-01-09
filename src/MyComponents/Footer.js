import React from 'react'
// import './footer.css'
export const Footer = () => {
    let footerstyle={
        position:"relative",
        width: "100%",
        top:"100vh",
        backgroundColor:"red"
    }
  return (
    <footer className='text-light py-3' style={footerstyle}>footer</footer>
  )
}
