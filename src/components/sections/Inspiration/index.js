import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'

// styles
import styles from './style.module.scss'
import typography from '../../../styles/imports/typography.module.scss'

const Inspiration = () => {
  const titleClass = classNames(styles.title, typography.h2)
  const section = useRef(null)
  const gifContainer = useRef(null)
  const gifWrapper = useRef(null)
  const content = useRef(null)

  const [gifVisibility, setGifVisibility] = useState(false)
  const [activeGif, setActiveGif] = useState(0)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const gifContainerClass = classNames(styles.gifContainer, { [styles.isVisible]: gifVisibility })

  const gifs = [
    'https://media.giphy.com/media/q2zZLjAbVzyZq/giphy.gif',
    'https://media.giphy.com/media/R4f1AlLMgeMuI/giphy.gif',
    'https://media.giphy.com/media/pWsz9pgd1X1Re/giphy.gif',
    'https://media.giphy.com/media/6Q3M4BIK0lX44/giphy.gif',
    'https://media.giphy.com/media/xULW8u6qcpEMknjcek/giphy.gif',
    'https://media.giphy.com/media/RUqTTOgWdIbHW/giphy.gif',
  ]

  const types = [
    'Articles',
    'Podcasts',
    'Vidéos & Stories',
    'Interviews',
    'Guide',
    'Quizzes & Tests',
  ]

  const getCoordinate = e => {
    setX(e.clientX)
    setY(e.clientY)

    const cursor = document.querySelector('[data-cursor]')
    cursor.style.top = `${e.clientY - 20}px`
    cursor.style.left = `${e.clientX - 30}px`
  }

  const showGif = () => {
    setGifVisibility(true)
    document.querySelector('[data-cursor]').style.opacity = 1;
  }

  const hideGif = () => {
    setGifVisibility(false)
    document.querySelector('[data-cursor]').style.opacity = 0;
  }

  useEffect(() => {
    content.current.addEventListener('mousemove', getCoordinate)
    content.current.addEventListener('mouseenter', showGif)
    content.current.addEventListener('mouseleave', hideGif)

    return () => {
      content.current.removeEventListener('mousemove', getCoordinate)
      content.current.removeEventListener('mouseenter', showGif)
      content.current.removeEventListener('mouseleave', hideGif)
    }
  }, [])

  useEffect(() => {
    gifContainer.current.style.left = `${x + 100}px`
    gifContainer.current.style.top = `${y - 30}px`
  }, [x, y])

  useEffect(() => {
    const currentGif = gifWrapper.current.querySelector(`.${styles.isVisible}`)
    if (currentGif) {
      currentGif.classList.remove(styles.isVisible)
    }
    gifWrapper.current.children[activeGif].classList.add(styles.isVisible)
  }, [activeGif])

  return (
    <section ref={section} className={styles.section}>
      <Container>
        <h2 data-appear="single-left" className={titleClass}>De quoi t’inspirer</h2>
        <div data-appear="slide-up" ref={content} className={styles.content}>
          {types.map((type, index) =>
            <div key={type} onMouseEnter={() => setActiveGif(index)} className={styles.line}>
              <h4 className={typography.cta}>{type}</h4>
            </div>
          )}
        </div>
        <div ref={gifContainer} className={gifContainerClass}>
          <div ref={gifWrapper} className={styles.gifWrapper}>
            {gifs.map(gif =>
              <img key={gif} className={styles.gif} src={gif} alt=""/>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Inspiration
