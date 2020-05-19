import React from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'
import Link from '../../elements/Link'

// styles
import styles from './style.module.scss'
import typography from '../../../../styles/imports/typography.module.scss'

const SchoolAccessible = () => {
  const titleClass = classNames(styles.title, typography.h2)

  return (
    <section className={styles.section}>
      <Container>
        <div>
          <h2 data-appear="single-left" className={titleClass}>
          Recrutez des
          étudiants<br/>
          de tout horizon
          </h2>
        </div>
        <div>
          <div data-appear="slide-left" className={styles.wrapper}>
            <h2 className={typography.h3}>
              Conçue pour les étudiants, notre plateforme numérique leur offre les outils nécessaires afin de s’orienter en toute sérénité.
            </h2>
            <p className={styles.textBody}>
              Notre outil facilite aussi la vie des écoles en mettant à leur disposition des informations essentielles aux suivis de leurs futurs étudiants mais aussi la possibilité de renforcer leur visibilité sur internet.
            </p>
            <Link to="/" button>Découvrir notre outil</Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SchoolAccessible
