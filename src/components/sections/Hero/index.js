import React, { useEffect, useRef } from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'
import Link from '../../elements/Link'
import Menu from '../../elements/Menu'


// styles
import styles from './style.module.scss'
import typography from '../../../styles/imports/typography.module.scss'

// stickers
import cursor from '../../../assets/images/stickers/cursor-pink.svg'
import globe from '../../../assets/images/stickers/globe.svg'
import smiley from '../../../assets/images/stickers/smiley-yellow.svg'
import validate from '../../../assets/images/stickers/validate.svg'

const Hero = () => {
  const section = useRef(null)

  const titleClass = classNames(styles.title, typography.title)
  const headlineClass = classNames(styles.headline, typography.h2)
  const subtitleClass = classNames(styles.subtitle, typography.h4)

  useEffect(() => {
    document.querySelector('[data-menu]').style.top = 0
    document.querySelector('[data-menu]').style.opacity = 1
    section.current.classList.add(styles.appeared)
  })

  return (
    <section ref={section} className={styles.section}>
      <h1 data-title className={titleClass}>Smatch</h1>
      <Container>
        <Menu />
        <div className={styles.wrapper}>
          <div className={headlineClass}>
            <div>
              <h2>Match. Explore.</h2>
            </div>
            <div>
              <h2>Construis un avenir</h2>
            </div>
            <div>
              <h2>épanoui.</h2>
            </div>
          </div>
          <h3 className={subtitleClass}>
            <span>
              Nous utilisons des tests inspirés de méthodes de coaching reconnus et une approche personnalisée pour vous accompagner dans votre orientation.
            </span>
          </h3>
          <div className={styles.button}>
            <Link to="/" button>Je m'oriente</Link>
          </div>
          <div className={styles.stickers}>
            <img
              className={styles.sticker}
              src={validate}
              alt=""
            />
            <img
              className={styles.sticker}
              src={globe}
              alt=""
            />
            <img
              className={styles.sticker}
              src={cursor}
              alt=""
            />
            <img
              className={styles.sticker}
              src={smiley}
              alt=""
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
