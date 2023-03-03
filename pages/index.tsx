import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'


import Landing from './Landing'
import Footer from '@/components/Footer/Footer'
import Secondiv from '@/components/Secondiv/Secondiv'
import Login from './Login'
import Signup from './Signup'
import Fourthdiv from '@/components/Fourthdiv/Fourthdiv'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     {/* <Landing /> */}
     {/* <Footer /> */}
     {/* <Secondiv /> */}
     {/* <Login /> */}
     {/* <Signup /> */}
     <Fourthdiv />
      
    </>
  )
}
