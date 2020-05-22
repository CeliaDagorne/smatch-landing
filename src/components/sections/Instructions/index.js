import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'
import Link from '../../elements/Link'

// Accordion
import './accordion.scss';

// styles
import styles from './style.module.scss'
import typography from '../../../styles/imports/typography.module.scss'

const Instructions = () => {
  const accordion = useRef(null)
  const titleClass = classNames(styles.title, typography.h2)
  const subtitleClass = classNames(styles.subtitle, typography.body)
  const accordionItemClass = classNames('accordion-item', styles.accordionItem)
  const footerLabelClass = classNames(styles.footerLabel, typography.h3)
  const accordionTitleClass = classNames('title', styles.accordionTitle, typography.cta)
  const accordionPanelClass = classNames('panel', styles.accordionPanel)
  const [cursorVisibility, setCursorVisibility] = useState(false)

  const content = [
    {
      "title": "Créer",
      "text": "Crée et enrichis ton profil à travers notre programme composé de plusieurs tests d’introspection. Ce profil regroupera tes compétences, tes aspirations, tes matchs ainsi que les formations qui t'intéressent.",
    },
    {
      "title": "Réveler",
      "text": "Révèle tes compétences, limitants, contraintes et aspirations à travers ces tests. Cela te permettra d’obtenir des propositions de formations et de métiers qui te correspondent le plus.",
    },
    {
      "title": "Découvrir & Explorer",
      "text": "Découvre d’autres voies d’orientation et explore un grand nombre de formations scolaires repertoriées sur la plateforme.",
    },
    {
      "title": "Concrétiser",
      "text": "Smatch est un facilitateur qui agit tant sur le plan du conseil d’orientation que dans la mise en relation avec ta future école. Smatch te permet ainsi de prendre contact facilement avec cette dernière via la plateforme afin d’atteindre tes objectifs.",
    },
  ]

  const toggleAccordion = index => {
    const line = accordion.current.children[index]
    line.classList.toggle('active')
    line.querySelector(`.${styles.cross}`).classList.toggle(styles.activeCross)
  }

  const getCoordinate = e => {
    const cursor = document.querySelector('[data-cursor]')
    cursor.style.top = `${e.clientY - 20}px`
    cursor.style.left = `${e.clientX - 75}px`

    if (!cursorVisibility) {
      document.querySelector('[data-cursor]').style.opacity = 1;
      setCursorVisibility(true)
    }
  }

  const hideCursor = () => {
    setCursorVisibility(false)
    document.querySelector('[data-cursor]').style.opacity = 0;
  }

  useEffect(() => {
    accordion.current.addEventListener('mousemove', getCoordinate)
    accordion.current.addEventListener('mouseleave', hideCursor)

    return () => {
      accordion.current.removeEventListener('mousemove', getCoordinate)
      accordion.current.removeEventListener('mouseleave', hideCursor)
    }
  }, [])

  return (
    <section className={styles.section}>
      <Container>
        <div data-appear="slide-up" className={styles.header}>
          <p className={typography.eyebrow}>Comment ça marche ?</p>
          <h2 className={titleClass}>L'orientation à portée<br/>de mains</h2>
          <h4 className={subtitleClass}>
            Crée toi un profil et rélève tes compétences afin de découvrir et explorer le monde professionnel.
          </h4>
        </div>

        {content && (
          <div data-appear="slide-left" ref={accordion} className="accordion">
            {content.map( (item, index) => (
              <div className={accordionItemClass} key={item.title}>
                <div className={accordionTitleClass} onClick={() => toggleAccordion(index)}>
                  <p>{item.title}</p>
                  <div className={styles.cross}>
                    <div/>
                    <div/>
                  </div>
                </div>
                <div className={accordionPanelClass}>
                  <div className={styles.accordionText}>
                    {item.text}
                  </div>
                  <div className={styles.accordionContent}>
                    <img className={styles.image} src={`/images/instructions/student/illu-${index}.png`} alt=""/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className={styles.footer}>
          <div data-appear="slide-up" className={styles.footerContainer}>
            <h3 className={footerLabelClass}>
              Explore tes possibilités avec  Smatch dès aujourd’hui
            </h3>
            <Link to="/" button>Je me lance</Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Instructions
