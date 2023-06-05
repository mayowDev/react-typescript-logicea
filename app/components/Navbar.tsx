"use client"
import Link from 'next/link'
import NavStyles from '../styles/Nav.module.scss'
import ThemeToggle from './LightDarkToggle'

const Nav = () => {
  return (
    <nav className={NavStyles.nav}>
      <button> 
        <Link className={NavStyles.navLink} href={'/'}>Home Page</Link>
      </button>
       <ThemeToggle/>

    </nav>
  )
}

export default Nav