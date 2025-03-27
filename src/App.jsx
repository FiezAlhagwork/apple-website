
import './App.css'
import Features from './components/Features'
import Footer from './components/Footer'

import Hero from './components/Hero'
import HighLights from './components/HighLights'
import HowItWork from './components/HowItWork'
import Model from './components/Model'
import Navbar from './components/Navbar'
import * as Sentry from "@sentry/react";
const App = () => {


  return (
    <main className='bg-black'>
      <Navbar/>
      <Hero/>
      <HighLights/>
      <Model/>
      <Features/>
      <HowItWork/>
      <Footer/>
    </main>
  )
}

export default Sentry.withProfiler(App) 


