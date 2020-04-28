import React from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'

// styles
import styles from './style.module.scss'
import typography from '../../../styles/imports/typography.module.scss'

// Svg
import blackPeak from '../../../assets/images/black-peak.svg'
import pinkPeak from '../../../assets/images/pink-peak.svg'
import shook from '../../../assets/images/emoji/shook.svg'
import heart from '../../../assets/images/emoji/heart.svg'
import money from '../../../assets/images/emoji/money.svg'

const Trust = () => {
  const titleClass = classNames(styles.title, typography.h2)

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={titleClass}>
            Ecoles et étudiant.es. Ils nous font confiance.
          </h2>
          <div className={styles.conversation}>
            <div className={styles.line}>
              <div className={styles.bulle}>
                <p>
                  Plus de 1 150 métiers répertoriés et 12 000 formations proposées
                </p>
                <img className={styles.peak} src={blackPeak} alt=""/>
                <img className={styles.emoji} src={shook} alt=""/>
              </div>
              <div className={styles.bulle}>
                <p>
                  LA MOULAGA !!!!
                </p>
                <img className={styles.peak} src={pinkPeak} alt=""/>
                <img className={styles.emoji} src={money} alt=""/>
              </div>
              <div className={styles.bulle}>
                <p>
                  1 200 étudiants qui utilisent la plateforme
                </p>
                <img className={styles.peak} src={blackPeak} alt=""/>
                <img className={styles.emoji} src={heart} alt=""/>
              </div>
              <div className={styles.bulle}>
                <p>
                  Ok je m’inscris direct
                </p>
                <img className={styles.peak} src={pinkPeak} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Trust
