import React, { useEffect } from 'react'
import './styles/app.scss'

import locomotiveScroll from 'locomotive-scroll'

// Sections
import Hero from './components/sections/Hero'
import Accessible from './components/sections/Accessible'
import Inspiration from './components/sections/Inspiration'
import Instructions from './components/sections/Instructions'
import Platform from './components/sections/Platform'
import Difference from './components/sections/Difference'
import Trust from './components/sections/Trust'
import Testimonial from './components/sections/Testimonial'
import Press from './components/sections/Press'
import Construct from './components/sections/Construct'

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
        <Platform />
        <Difference />
        <Trust />
        <Testimonial />
        <Press />
        <Construct />
      </div>
    </div>
  )
}

export default App
