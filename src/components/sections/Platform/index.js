import React from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'
import Link from '../../elements/Link'

// styles
import styles from './style.module.scss'
import typography from '../../../styles/imports/typography.module.scss'

// images
import window from '../../../assets/images/window.svg'

const Platform = () => {
  const titleClass = classNames(styles.title, typography.h2)
  const bodyTextClass = classNames(styles.textBody, typography.eyebrow)

  return (
    <section className={styles.section}>
      <Container>
        <h2 data-appear="single-left" className={titleClass}>La plateforme unique pour ton futur</h2>
        <div className={styles.wrapper}>
          <div  data-appear="visual" className={styles.visual}>
            <img src={window} alt=""/>
            <div className={styles.circle}/>
            <div className={styles.triangle}/>
            <div className={styles.rectangle}/>
          </div>
          <div data-appear="slide-right" className={styles.content}>
            <h3 className={typography.h3}>
              Des tests efficaces et un algorithme conçu pour toi.
            </h3>
            <p className={bodyTextClass}>
              Smatch scanne, compile et analyse l’ensemble de tes caractéristiques et tes envies pour aboutir à un vaste horizon d’opportunités - que tu en connaisses l’intitulé ou pas. Smatch te permet d'obtenir un résultat personnalisé.<br/>
              La plateforme te guide et te fournit toutes les clés pour mener à bien ton choix d'orientation.
            </p>
            <div className={styles.line} />
            <div className={styles.testimonial}>
              <p className={typography.body}>
                “Notre algorithme a été conçu et développé par les meilleurs développeuses et développeurs de La Montreuil Valley ”
              </p>
              <p className={styles.label}><span>Marjorie F,</span> Product Owner</p>
            </div>
            <Link to="/" button>Faire le test</Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Platform
