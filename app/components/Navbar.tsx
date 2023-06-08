"use client"
import NavStyles from '../styles/Nav.module.scss'
import { useRouter } from 'next/navigation'
import ThemeToggle from './LightDarkToggle'
import Button from './Button/Button'

const Nav = () => {
  const route = useRouter()
  return (
    <nav className={NavStyles.nav}>
        {/* <Link className={NavStyles.navLink} href={'/'}></Link> */}
      <Button
        onClick={()=>route.push('/')}
        text='Home Page'
        className='button'
      />
       <ThemeToggle/>

    </nav>
  )
}

export default Nav