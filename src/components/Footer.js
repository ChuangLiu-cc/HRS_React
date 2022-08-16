import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer-container'>Reservation System &copy;{new Date().getFullYear()}</footer>
  )
}

export default Footer