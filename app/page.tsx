
import styles from './page.module.css'
import Jokes from './pages/JokesListing'

import ThemeContextWrapper from './context/themeWrapper';

export default function Home() {
  return (
    < ThemeContextWrapper>
      <Jokes/>
    </ThemeContextWrapper>
  )
}
