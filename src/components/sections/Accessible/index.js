import React, { useEffect, useRef } from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'

// styles
import styles from './style.module.scss'
import typography from '../../../styles/imports/typography.module.scss'

const Accessible = () => {
  const titleClass = classNames(styles.title, typography.h2)
  const textBodyClass = classNames(styles.textBody, typography.body)

  const section = useRef(null)

  const getCoordinate = e => {
    const cursor = document.querySelector('[data-cursor-smiley]')
    cursor.style.top = `${e.clientY + 10}px`
    cursor.style.left = `${e.clientX - 30}px`
  }

  const showCursor = () => {
    document.querySelector('[data-cursor-smiley]').style.opacity = 1;
    document.querySelector('[data-cursor-smiley]').style.visibility = 'visible';
  }

  const hideCursor = () => {
    document.querySelector('[data-cursor-smiley]').style.opacity = 0;
    document.querySelector('[data-cursor-smiley]').style.visibility = 'hidden';
  }

  useEffect(() => {
    section.current.addEventListener('mousemove', getCoordinate)
    section.current.addEventListener('mouseenter', showCursor)
    section.current.addEventListener('mouseleave', hideCursor)

    return () => {
      section.current.removeEventListener('mousemove', getCoordinate)
      section.current.removeEventListener('mouseenter', showCursor)
      section.current.removeEventListener('mouseleave', hideCursor)
    }
  }, [])

  return (
    <section ref={section} className={styles.section}>
      <Container>
        <div>
          <h2 data-appear="single-up" className={titleClass}>
            Gratuit et accessible à tou.te.s
          </h2>
        </div>
        <div>
          <div data-appear="slide-up" className={styles.wrapper}>
            <h2 className={typography.h3}>
              Bâtissons ensemble le futur de l’orientation scolaire
            </h2>
            <p className={textBodyClass}>
              Parce que s'orienter n'est pas une chance mais un droit. Notre mission est d’offrir des outils gratuit afin que tu puisses trouver ta voie et croire en toi.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Accessible
