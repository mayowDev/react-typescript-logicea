
import  './page.module.css'
import JokesList from './pages/jokes.server'
import Navbar from './components/Navbar'
import ThemeContextWrapper from './context/themeWrapper';

export default function Home() {
  return (
    < ThemeContextWrapper>
      <Navbar/>
      <JokesList/>
    </ThemeContextWrapper>
  )
}
