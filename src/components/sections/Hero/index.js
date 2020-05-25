import React, { useEffect, useRef } from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'
import Link from '../../elements/Link'
import Menu from '../../elements/Menu'
// import lottie from 'lottie-web'
import Lottie from 'react-lottie'
import data from './title.json'
import { AboveSmartphone, Smartphone } from '../../elements/Media'

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
  const subtitleClass = classNames(styles.subtitle, typography.body)

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  useEffect(() => {
    section.current.classList.add(styles.appeared)
    // console.log(lottie, data)

    // lottie.loadAnimation({
    //   container: document.querySelector('.bodymovin'), // the dom element that will contain the animation
    //   renderer: 'svg',
    //   loop: true,
    //   autoplay: true,
    //   animationData: data // the path to the animation json
    // })
  })

  return (
    <section ref={section} className={styles.section}>
    <div data-title className={titleClass}>
      <Lottie options={defaultOptions} />
    </div>
      {/* <h1 data-title className={titleClass}>Smatch</h1> */}
      <Container extraClassName={styles.container}>
        <Menu />
        <div className={styles.wrapper}>
          <AboveSmartphone>
            <h2 className={headlineClass}>
              <div>
                <span>Match. Explore.</span>
              </div>
              <div>
                <span>Construis un avenir</span>
              </div>
              <div>
                <span>épanoui.</span>
              </div>
            </h2>
          </AboveSmartphone>
          <Smartphone>
            <h2 className={headlineClass}>
              <div>
                <span>Match.</span>
              </div>
              <div>
                <span>Explore.</span>
              </div>
              <div>
                <span>Construis</span>
              </div>
              <div>
                <span>un avenir</span>
              </div>
              <div>
                <span>épanoui.</span>
              </div>
            </h2>
          </Smartphone>
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
