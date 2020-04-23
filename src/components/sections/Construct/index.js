import React from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'
import Button from '../../elements/Button'

// styles
import styles from './style.module.scss'
import typography from '../../../styles/imports/typography.module.scss'

const Construct = () => {
  const titleClass = classNames(styles.title, typography.h2)

  return (
    <section className={styles.section}>
      <Container>
        <h2 className={titleClass}>
          Prêt.e à construire ton futur ?
        </h2>
        <Button to="/">C’est parti !</Button>
      </Container>
    </section>
  )
}

export default Construct
