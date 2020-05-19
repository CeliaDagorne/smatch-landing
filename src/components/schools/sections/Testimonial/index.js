import React from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'

// styles
import styles from './style.module.scss'
import typography from '../../../../styles/imports/typography.module.scss'

const SchoolTestimonial = () => {
  const textClass = classNames(styles.text, typography.h3)

  return (
    <section className={styles.section}>
      <Container>
        <div data-appear="slide-up">
          <p className={textClass}>
            “Nous étions à la recherche d'un outil comme celui de Smatch afin de créer des intéractions plus significatives avec des étudiants aux backgrounds différents.”
          </p>
          <p className={typography.h4}>Denys Chomel, Responsable des Admissions à HETIC</p>
        </div>
      </Container>
    </section>
  )
}

export default SchoolTestimonial
