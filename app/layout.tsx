import './globals.css'
import { Inter } from 'next/font/google'
import { Rubik } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })
const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'congenial-fiesta',
  description: 'application for the best fizzy drinks you could possibly imagine.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
 
  )
}
