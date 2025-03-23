
import './App.css'

import Hero from './components/Hero'
import HighLights from './components/HighLights'
import Model from './components/Model'
import Navbar from './components/Navbar'

const App = () => {

  return (
    <main className='bg-black'>
      <Navbar/>
      <Hero/>
      <HighLights/>
      <Model/>
    </main>
  )
}

export default App


