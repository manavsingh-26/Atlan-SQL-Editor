import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import './landing.css'

const Landing = () => {
  return (
    <div>
      <div className='brown-oval'>
        <h1>SQL Editor <span>.</span></h1>
        <Link to={'/editor'}> <button> Let's Start</button></Link>
      </div>
      <Footer />
    </div>
  )
}

export default Landing