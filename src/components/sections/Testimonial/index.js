import React from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'

// styles
import styles from './style.module.scss'
import typography from '../../../styles/imports/typography.module.scss'

const Testimonial = () => {
  const textClass = classNames(styles.text, typography.h3)

  return (
    <section className={styles.section}>
      <Container>
        <div data-appear="slide-up">
          <p className={textClass}>
            “Je pensais avoir tout vu et que rien ne me correspondait. Smatch m'a ouvert de nombreuses pistes auquel je n'avais pas pensé et m’a aidé à me connaître.”
          </p>
          <p className={typography.h4}>Adama, Lycéen en Terminale S</p>
        </div>
      </Container>
    </section>
  )
}

export default Testimonial
