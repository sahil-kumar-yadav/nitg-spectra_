import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar/NavBar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Spectra Website',
  description: 'Generated by next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} cursor-[url("/cursor.png"),auto]`}  >
      <NavBar />
      
        {children}
      </body>
    </html>
  )
}
