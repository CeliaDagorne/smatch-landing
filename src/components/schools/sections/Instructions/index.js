import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'
import Link from '../../elements/Link'

import Anim1 from './animations/anim01'
import Anim2 from './animations/anim02'
import Anim3 from './animations/anim03'

// Accordion
import './accordion.scss';
import accordionStyles from './accordion.module.scss';

// styles
import styles from './style.module.scss'
import typography from '../../../../styles/imports/typography.module.scss'

const Panel = ({ label, content, activeTab, index, activateTab }) => {
  const [height, setHeight] = useState(0)
  const panelRef = useRef(null)

  const isActive = activeTab === index;
  const innerStyle = {
    height:  `${isActive ? height : 0}px`
  }

  useEffect(() => {
		window.setTimeout(() => {
      const el = panelRef.current
			const newHeight = el.querySelector(`.${accordionStyles.inner}`).scrollHeight
			setHeight(newHeight)
		}, 333)
  })

  return (
    <div ref={panelRef} className={accordionStyles.panel}
      role="tabpanel"
      aria-expanded={ isActive }
    >
      <button
        className={accordionStyles.label}
        role="tab"
        onClick={activateTab}>
        {label}
      </button>
      <div
        className={accordionStyles.inner}
        style={innerStyle}
        aria-hidden={!isActive}
      >
        <div className={accordionStyles.content}>
          <div className={accordionStyles.text}>
            {content}
          </div>
          <div className={styles.accordionContent}>
            {index === 0 && <Anim1 play={activeTab === 0} />}
            {index === 1 && <Anim2 play={activeTab === 1} />}
            {index === 2 && <Anim3 play={activeTab === 2} />}
          </div>
        </div>
      </div>
    </div>
  )
}

const Accordion = ({ panels }) => {
  const [activeTab, setActiveTab] = useState(null)

	const activateTab = index => {
    const newActiveTab = activeTab === index ? -1 : index
    setActiveTab(newActiveTab)
	}

  return (
    <div data-appear="slide-left" className={accordionStyles.accordion} role="tablist">
      {panels.map((panel, index) =>
        <Panel
          key={ index }
          activeTab={ activeTab }
          index={ index }
          { ...panel }
          activateTab={ () => { activateTab(index) } }
        />
      )}
    </div>
  )
}

const SchoolInstructions = () => {
  const accordion = useRef(null)
  const titleClass = classNames(styles.title, typography.h2)
  const subtitleClass = classNames(styles.subtitle, typography.h4)
  const footerLabelClass = classNames(styles.footerLabel, typography.h3)
  const [cursorVisibility, setCursorVisibility] = useState(false)
  const [animIndex, setAnimIndex] = useState(null)

  const panels = [
    {
      label: "Développez",
      content: "Développez et mettez en avant une image de marque qualitative afin d’adopter une stratégie numérique proactive grâce à notre service de production de contenu vidéo et photo.",
    },
    {
      label: "Analysez",
      content: "Obtenez des retours sur votre investissement sur la plateforme et analysez vos prospects depuis votre espace personnel à l’aide du dashboard fourni.",
    },
    {
      label: "Recrutez",
      content: "Découvrez constamment de nouveaux candidats dont les aspirations sont alignées avec vos formations grâce au match de compétences-formation. Smatch propose, par ailleurs, une prise de contact simplifiée pouvant être facilement gérée via notre outil.",
    },
  ]

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
        <div className={styles.noCursor} ref={accordion}>
          <Accordion panels={panels}/>
        </div>
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
