import React, { useRef } from 'react'
import './styles/app.scss'

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

// Elements
import Footer from './components/elements/Footer'

function App() {
  const App = useRef(null)

  const handleScroll = () => {
    const sections = document.querySelectorAll('[data-appear]')
    const PB = document.querySelector('[data-appear="slide-up-LEPROBLEME"]')
    const title = document.querySelector('[data-title]')
    const container = App.current
    const scrollY = container.scrollTop + window.innerHeight
    let titleFixed = false

    if (!titleFixed && container.scrollTop >= 110 && window.innerWidth >= 920) {
      title.style.position = 'fixed'
      title.style.top = '140px'
      titleFixed = true
    }

    for (let i = 0; i < sections.length; i++) {
      if (scrollY - 200 >= sections[i].offsetTop && !sections[i].classList.contains('is-visible')) {
        console.log(sections[i])
        sections[i].classList.add('is-visible')
        console.log(sections[i])
      }
    }
  }

  return (
    <div className="App" ref={App} onScroll={handleScroll}>
      <Hero/>
      <Accessible />
      <Inspiration />
      <Instructions />
      <Platform />
      <Difference />
      <Trust />
      <Testimonial />
      <Press />
      <Construct />
      <Footer />
    </div>
  )
}

export default App
