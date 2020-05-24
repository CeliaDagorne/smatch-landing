import React, { useEffect, useRef } from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'
import Link from '../../elements/Link'
import Menu from '../../elements/Menu'
import { AboveSmartphone, Smartphone } from '../../elements/Media'

// styles
import styles from './style.module.scss'
import typography from '../../../../styles/imports/typography.module.scss'

const SchoolHero = () => {
  const section = useRef(null)

  const titleClass = classNames(styles.title, typography.title)
  const headlineClass = classNames(styles.headline, typography.h2)
  const subtitleClass = classNames(styles.subtitle, typography.h4)

  useEffect(() => {
    section.current.classList.add(styles.appeared)
  })

  return (
    <section ref={section} className={styles.section}>
      <h1 data-title className={titleClass}>Smatch</h1>
      <Container extraClassName={styles.container}>
        <Menu />
        <div className={styles.wrapper}>
          <AboveSmartphone>
            <h2 className={headlineClass}>
              <div>
                <span>Ouvrez les portes</span>
              </div>
              <div>
                <span>de votre école à</span>
              </div>
              <div>
                <span>des milliers d'étudiants</span>
              </div>
            </h2>
          </AboveSmartphone>
          <Smartphone>
            <h2 className={headlineClass}>
              <div>
                <span>Ouvrez les portes</span>
              </div>
              <div>
                <span>portes</span>
              </div>
              <div>
                <span>de votre</span>
              </div>
              <div>
                <span>école à</span>
              </div>
              <div>
                <span>des milliers</span>
              </div>
              <div>
                <span>d'étudiants</span>
              </div>
            </h2>
          </Smartphone>
          <h3 className={subtitleClass}>
            <span>
              Smatch est une plateforme qui relie les étudiants et les établissements d'enseignement supérieur afin de faire de l’orientation une priorité.
            </span>
          </h3>
          <div className={styles.button}>
            <Link to="/" button>Nous rejoindre</Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SchoolHero
