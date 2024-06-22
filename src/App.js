import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/hero/Hero'
import Programs from './component/programmer/Programs'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>   <Programs/></div>
    
    </div>
  )
}

export default App;