import React from 'react';
import './styles/app.scss'

// Sections
import Hero from './components/sections/Hero'
import Accessible from './components/sections/Accessible'
import Inspiration from './components/sections/Inspiration'

function App() {
  return (
    <div className="App">
      <Hero />
      <Accessible />
      <Inspiration />
    </div>
  )
}

export default App
