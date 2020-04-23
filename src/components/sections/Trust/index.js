import React from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'

// styles
import styles from './style.module.scss'
import typography from '../../../styles/imports/typography.module.scss'

const Trust = () => {
  const titleClass = classNames(styles.title, typography.h2)

  return (
    <section className={styles.section}>
      <Container>
        <h2 className={titleClass}>
          Ecoles et étudiant.es. Ils nous font confiance.
        </h2>
      </Container>
    </section>
  )
}

export default Trust
