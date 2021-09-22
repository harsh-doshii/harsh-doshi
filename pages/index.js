import Head from 'next/head'
import Animated from '../components/Animated'
import Features from '../components/Features'
import Features2 from '../components/Features2'
import Header from '../components/Header'
import Hero from '../components/Hero'
export default function Home() {
  return (
    
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Kaisei+HarunoUmi:wght@500&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Share&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Mukta:wght@300&display=swap" rel="stylesheet"></link>
      </Head>
      {/* <Header /> */}
      {/* Banner */}
      <Hero />
      {/* <Header /> */}
      <Features />
      <Features2 />
      {/* Info1 */}
      {/* Info2 */}
    </div>
  )
}
