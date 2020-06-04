import React, { useRef, useEffect } from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'
import Link from '../../elements/Link'

// styles
import styles from './style.module.scss'
import typography from '../../../../styles/imports/typography.module.scss'

const SchoolAccessible = () => {
  const titleClass = classNames(styles.title, typography.h2)

  const section = useRef(null)

  const getCoordinate = e => {
    const cursor = document.querySelector('[data-cursor-smiley-blue]')
    cursor.style.top = `${e.clientY + 10}px`
    cursor.style.left = `${e.clientX - 30}px`
  }

  const showCursor = () => {
    document.querySelector('[data-cursor-smiley-blue]').style.opacity = 1;
    document.querySelector('[data-cursor-smiley-blue]').style.visibility = 'visible';
  }

  const hideCursor = () => {
    document.querySelector('[data-cursor-smiley-blue]').style.opacity = 0;
    document.querySelector('[data-cursor-smiley-blue]').style.visibility = 'hidden';
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
          Recrutez des
          étudiants<br/>
          de tout horizon
          </h2>
        </div>
        <div>
          <div data-appear="slide-up" className={styles.wrapper}>
            <h2 className={typography.h3}>
              Conçue pour les étudiants, notre plateforme numérique leur offre les outils nécessaires afin de s’orienter en toute sérénité.
            </h2>
            <p className={styles.textBody}>
              Notre outil facilite aussi la vie des écoles en mettant à leur disposition des informations essentielles aux suivis de leurs futurs étudiants mais aussi la possibilité de renforcer leur visibilité sur internet.
            </p>
            <Link to="https://smatch.netlify.app/contact" button>Découvrir notre outil</Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SchoolAccessible
