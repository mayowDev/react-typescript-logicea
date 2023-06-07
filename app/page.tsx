
import  './page.module.css'
import JokesList from './jokes/jokes.server'
import ThemeContextWrapper from './context/themeWrapper';

//index home page
export default function Home() {
  return (
    < ThemeContextWrapper>
      <JokesList/>
    </ThemeContextWrapper>
  )
}
