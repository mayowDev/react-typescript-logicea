"use client"
import Link from 'next/link'
import NavStyles from '../styles/Nav.module.scss'
import { useRouter } from 'next/navigation'
import ThemeToggle from './LightDarkToggle'

const Nav = () => {
  const route = useRouter()
  return (
    <nav className={NavStyles.nav}>
      <button className='button'> 
        <Link className={NavStyles.navLink} href={'/'}>Home Page</Link>
      </button>
      <button className='button' onClick={()=>route.push('/jokes/edit')}>
        Add new joke
      </button>
       <ThemeToggle/>

    </nav>
  )
}

export default Nav