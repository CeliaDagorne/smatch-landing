import React, { useRef, useState } from 'react'
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
  const [visual, setVisual] = useState(false);

  const handleScroll = () => {
    console.log('handle scroll removed')
    // const sections = document.querySelectorAll('[data-appear]')
    // const title = document.querySelector('[data-title]')
    // const container = App.current
    // const scrollY = container.scrollTop + window.innerHeight
    // let titleFixed = false

    // if (!titleFixed && container.scrollTop >= 110 && window.innerWidth >= 920) {
    //   title.style.position = 'fixed'
    //   title.style.top = '140px'
    //   titleFixed = true
    // }

    // for (let i = 0; i < sections.length; i++) {
    //   const offsetTop = sections[i].offsetParent === document.body ? sections[i].offsetTop : sections[i].offsetParent.offsetTop
    //   if (scrollY - 200 >= offsetTop && !sections[i].classList.contains('is-visible')) {
    //     sections[i].classList.add('is-visible')
    //     if (sections[i].dataset.appear === 'visual') {
    //       setTimeout(() => {
    //         setVisual(true)
    //       }, 600);
    //     }
    //   }
    // }
  }

  return (
    <div className="App" ref={App} onScroll={handleScroll}>
      <Hero/>
      <Accessible />
      <Inspiration />
      <Instructions />
      <Platform appeared={visual} />
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
