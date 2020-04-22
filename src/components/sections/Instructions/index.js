import React, { useRef } from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'
import Button from '../../elements/Button'

// Accordion
import './accordion.scss';

// styles
import styles from './style.module.scss'
import typography from '../../../styles/imports/typography.module.scss'

const Instructions = () => {
  const accordion = useRef(null)
  const titleClass = classNames(styles.title, typography.h2)
  const subtitleClass = classNames(styles.subtitle, typography.h4)
  const footerLabelClass = classNames(styles.footerLabel, typography.h3)
  const accordionTitleClass = classNames('title', typography.cta)
  const accordionPanelClass = classNames('panel', styles.accordionPanel)

  const content = [
    {
      "title": "Créer",
      "text": "Crée toi un compte afin d’avoir un profil qui regroupera tes compétences, matchs et programmes qui t'intéressent.",
    },
    {
      "title": "Réveler",
      "text": "Crée toi un compte afin d’avoir un profil qui regroupera tes compétences, matchs et programmes qui t'intéressent.",
    },
    {
      "title": "Découvrir & Explorer",
      "text": "Crée toi un compte afin d’avoir un profil qui regroupera tes compétences, matchs et programmes qui t'intéressent.",
    },
    {
      "title": "Construire",
      "text": "Crée toi un compte afin d’avoir un profil qui regroupera tes compétences, matchs et programmes qui t'intéressent.",
    },
  ]

  const toggleAccordion = index => {
    accordion.current.children[index].classList.toggle('active')
  }

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <p className={typography.eyebrow}>Comment ça marche ?</p>
          <h2 className={titleClass}>L'orientation à portée<br/>de mains</h2>
          <h4 className={subtitleClass}>
            Crée toi un profil et rélève tes compétences afin de découvrir et explorer le monde professionnel.
          </h4>
        </div>

        {content && (
          <div ref={accordion} className="accordion">
            {content.map( (item, index) => (
              <div className="accordion-item" key={item.title}>
                <div className={accordionTitleClass} onClick={() => toggleAccordion(index)}>
                  <p>{item.title}</p>
                </div>
                <div className={accordionPanelClass}>
                  <div className={styles.accordionText}>
                    {item.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className={styles.footer}>
          <div className={styles.footerContainer}>
            <h3 className={footerLabelClass}>
              Explore tes possibilités avec  Smatch dès aujourd’hui
            </h3>
            <Button to="/">Je me lance</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Instructions