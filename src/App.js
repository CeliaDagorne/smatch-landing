import React, { useEffect } from 'react'
import './styles/app.scss'

import locomotiveScroll from 'locomotive-scroll'

// Sections
import Hero from './components/sections/Hero'
import Accessible from './components/sections/Accessible'
import Inspiration from './components/sections/Inspiration'
import Instructions from './components/sections/Instructions'

function App() {
  const scrollRef = React.createRef();

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true
    })
  })

  return (
    <div className="App">
      <div ref={scrollRef}>
        <Hero />
        <Accessible />
        <Inspiration />
        <Instructions />
      </div>
    </div>
  )
}

export default App
