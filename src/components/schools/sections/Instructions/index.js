import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'
import Link from '../../elements/Link'

import Anim1 from './animations/anim01'
import Anim2 from './animations/anim02'
import Anim3 from './animations/anim03'

// Accordion
import './accordion.scss';

// styles
import styles from './style.module.scss'
import typography from '../../../../styles/imports/typography.module.scss'

const SchoolInstructions = () => {
  const accordion = useRef(null)
  const titleClass = classNames(styles.title, typography.h2)
  const subtitleClass = classNames(styles.subtitle, typography.h4)
  const accordionItemClass = classNames('accordion-item', styles.accordionItem)
  const footerLabelClass = classNames(styles.footerLabel, typography.h3)
  const accordionTitleClass = classNames('title', styles.accordionTitle, typography.cta)
  const accordionPanelClass = classNames('panel', styles.accordionPanel)
  const [cursorVisibility, setCursorVisibility] = useState(false)
  const [animIndex, setAnimIndex] = useState([])

  const content = [
    {
      "title": "Développez",
      "text": "Développez et mettez en avant une image de marque qualitative afin d’adopter une stratégie numérique proactive grâce à notre service de production de contenu vidéo et photo.",
    },
    {
      "title": "Analysez",
      "text": "Obtenez des retours sur votre investissement sur la plateforme et analysez vos prospects depuis votre espace personnel à l’aide du dashboard fourni.",
    },
    {
      "title": "Recrutez",
      "text": "Découvrez constamment de nouveaux candidats dont les aspirations sont alignées avec vos formations grâce au match de compétences-formation. Smatch propose, par ailleurs, une prise de contact simplifiée pouvant être facilement gérée via notre outil.",
    },
  ]

  const toggleAccordion = index => {
    const line = accordion.current.children[index]
    line.classList.toggle('active')
    line.querySelector(`.${styles.cross}`).classList.toggle(styles.activeCross)

    if (line.classList.contains('active')) {
      setAnimIndex(index)
    }
    console.log(animIndex)
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
    document.querySelector('[data-cursor]').style.opacity = 0;
    setCursorVisibility(false)
  }

  useEffect(() => {
    console.log(animIndex)
  }, [animIndex])

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
          <h2 className={titleClass}>Promouvoir et renforcer sa marque</h2>
          <h4 className={subtitleClass}>
            Smatch permet aux écoles de mettre en place une stratégie numérique proactive pour suivre le marché des étudiants d'aujourd'hui.
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
                    {/* <img className={styles.image} src={`/images/instructions/illu-${index}.png`} alt=""/> */}
                    {animIndex === 0 && <Anim1 />}
                    {animIndex === 1 && <Anim2 />}
                    {animIndex === 2 && <Anim3 />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className={styles.footer}>
          <div data-appear="slide-up" className={styles.footerContainer}>
            <h3 className={footerLabelClass}>
              En savoir plus sur les avantages de Smatch
            </h3>
            <Link to="/" button>Nous contacter</Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SchoolInstructions
