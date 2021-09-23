import Head from 'next/head'
import Animated from '../components/Animated'
import Features from '../components/Features'
import Features2 from '../components/Features2'
import Features3 from '../components/Features3'
import Header from '../components/Header'
import Hero from '../components/Hero'
import  Navbar  from '../components/Navbar'
export default function Home() {
  return (
    
    <div className="-p-15">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Kaisei+HarunoUmi:wght@500&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Share&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Mukta:wght@300&display=swap" rel="stylesheet"></link>
      </Head>
      {/* <Header /> */}
      {/* Banner */}
      <Header />
      <Hero />
      {/* <Header /> */}
      <Features />
      <Features2 />
      <Features3 />
      {/* Info1 */}
      {/* Info2 */}
    </div>
  )
}
