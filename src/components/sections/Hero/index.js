import React from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'
import Button from '../../elements/Button'

// styles
import styles from './style.module.scss'
import typography from '../../../styles/imports/typography.module.scss'

// stickers
import cursor from '../../../assets/images/stickers/cursor.svg'
import globe from '../../../assets/images/stickers/globe.svg'
import smiley from '../../../assets/images/stickers/smiley.svg'
import validate from '../../../assets/images/stickers/validate.svg'

const Hero = () => {
  const titleClass = classNames(styles.title, typography.title)
  const subtitleClass = classNames(styles.subtitle, typography.h4)

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <h1 className={titleClass}>Smatch</h1>
          <h2 className={typography.h2}>
            Match. Explore.
            Construis un avenir
            épanoui.
          </h2>
          <h3 className={subtitleClass}>
            Nous utilisons des tests inspirés de méthodes de coaching reconnus et une approche personnalisée pour vous accompagner dans votre orientation.
          </h3>
          <Button to="/">Je m'oriente</Button>
          <div className={styles.stickers}>
            <img className={styles.sticker} src={validate} alt=""/>
            <img className={styles.sticker} src={globe} alt=""/>
            <img className={styles.sticker} src={cursor} alt=""/>
            <img className={styles.sticker} src={smiley} alt=""/>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
