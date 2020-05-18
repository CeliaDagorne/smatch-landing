import React from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'
import Link from '../../elements/Link'

// styles
import styles from './style.module.scss'
import typography from '../../../styles/imports/typography.module.scss'

const Accessible = () => {
  const titleClass = classNames(styles.title, typography.h2)

  return (
    <section className={styles.section}>
      <Container>
        <div>
          <h2 data-appear="single-left" className={titleClass}>
            Gratuit et accessible à tous.tes
          </h2>
        </div>
        <div>
          <div data-appear="slide-left" className={styles.wrapper}>
            <h2 className={typography.h3}>
              L’équipe de Smart est fière d’offrir un outil gratuit et accessible afin de bâtir le futur de l’orientation.
            </h2>
            <p className={styles.textBody}>
              Parce que s'orienter n'est pas une chance mais un droit. Notre mission est d’offrir des outils gratuit afin que tu puisses trouver ta voie et croire en toi.
            </p>
            <Link to="/" button>Découvrir</Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Accessible
