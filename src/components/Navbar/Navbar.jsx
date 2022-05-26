import React from 'react'
import './Navbar.css'
import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'


const Navbar = () => {
  return (
    <nav className='nav '>
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <div className='sql'>
          <h1> SQL EDITOR</h1>
        </div>
      </Link>
      <div className='menu'>
        <AiOutlineMenu className='menu-icon' />

        <div className='routes '>
          <Link to={'/'} style={{ textDecoration: 'none' }} ><p>Home <div className='underline'></div></p>  </Link>
          <Link to={'/editor'} style={{ textDecoration: 'none' }}> <p>SQL Editor <div className='underline'></div></p> </Link>
          <Link to={'/'} style={{ textDecoration: 'none' }}><p> About <div className='underline'></div></p> </Link>
          <Link to={'/'} style={{ textDecoration: 'none' }}><p> Contact us <div className='underline'></div></p> </Link>
        </div>
      </div>
      <div className='gitlogodiv'>
        <a href='https://github.com/manavsingh-26/Atlan-SQL-Editor'><BsGithub className='gitlogo' /></a>
      </div>






    </nav>
  )
}

export default Navbar