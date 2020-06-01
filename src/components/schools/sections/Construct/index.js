import React from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'
import Link from '../../elements/Link'

// styles
import styles from './style.module.scss'
import typography from '../../../../styles/imports/typography.module.scss'

const SchoolConstruct = () => {
  const titleClass = classNames(styles.title, typography.h2)
  const textClass = classNames(styles.text, typography.h4)

  return (
    <section className={styles.section}>
      <Container>
        <div>
          <div className={styles.wrapper} data-appear="slide-up">
            <h2 className={titleClass}>
              Prêts à nous rejoindre ?
            </h2>
            <p className={textClass}>
              Faites de l’orientation une priorité.
            </p>
            <Link to="https://smatch.netlify.app/contact" button>Nous contacter</Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SchoolConstruct
