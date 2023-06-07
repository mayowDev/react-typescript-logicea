import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import ThemeContextWrapper from './context/themeWrapper';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'React / Typescript - Logicea ',
  description: 'This next.JS app displays jokes ',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      < ThemeContextWrapper>
      <Navbar/>
      </ ThemeContextWrapper>

     
        {children}
        </body>
    </html>
  )
}
