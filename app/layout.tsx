import './globals.css'
import { Inter } from 'next/font/google'
// import Head from 'next/head'
import {Nav, SmNav} from '../components/Nav'
import classes from './page.module.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pinning Bees',
  description: 'The Pinning Bees, a Pinterest Marketing Agency.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <Head>
      <link
        rel="icon"
        href="/favicon.ico"
        // type="image/ico"
        // sizes="<generated>"
      />

      </Head> */}
      <body className={inter.className}>
        <Nav />
        <SmNav />
        <div className={classes.navbarGap}></div>
        {children}
      </body>
    </html>
  )
}
