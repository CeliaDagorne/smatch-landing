import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'
import Link from '../../elements/Link'

import Anim1 from './animations/anim01'
import Anim2 from './animations/anim02'
import Anim3 from './animations/anim03'
import Anim4 from './animations/anim04'

// Accordion
import './accordion.scss';
import accordionStyles from './accordion.module.scss';

// styles
import styles from './style.module.scss'
import typography from '../../../styles/imports/typography.module.scss'

const Panel = ({ label, content, activeTab, index, activateTab }) => {
  const [height, setHeight] = useState(0)
  const panelRef = useRef(null)

  const isActive = activeTab === index
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
        <span>
          {label}
        </span>
      </button>
      <div data-marquee className={styles.marquee}>
        <div>
          <span>{label}</span>
          <span>{label}</span>
          <span>{label}</span>
          <span>{label}</span>
          <span>{label}</span>
          <span>{label}</span>
          <span>{label}</span>
          <span>{label}</span>
          <span>{label}</span>
          <span>{label}</span>
        </div>
      </div>
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
            {index === 3 && <Anim4 play={activeTab === 3} />}
          </div>
        </div>
      </div>
    </div>
  )
}

const Accordion = ({ panels }) => {
  const [activeTab, setActiveTab] = useState(0)

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

const Instructions = () => {
  const accordion = useRef(null)
  const titleClass = classNames(styles.title, typography.h2)
  const subtitleClass = classNames(styles.subtitle, typography.body)
  const footerLabelClass = classNames(styles.footerLabel, typography.h3)
  const [cursorVisibility, setCursorVisibility] = useState(false)
  const [animIndex, setAnimIndex] = useState(null)

  const panels = [
    {
      label: "Créer",
      content: "Crée et enrichis ton profil à travers notre programme composé de plusieurs tests d’introspection. Ce profil regroupera tes compétences, tes aspirations, tes matchs ainsi que les formations qui t'intéressent.",
    },
    {
      label: "Révéler",
      content: "Révèle tes compétences, limitants, contraintes et aspirations à travers ces tests. Cela te permettra d’obtenir des propositions de formations et de métiers qui te correspondent le plus.",
    },
    {
      label: "Découvrir & Explorer",
      content: "Découvre d’autres voies d’orientation et explore un grand nombre de formations scolaires repertoriées sur la plateforme.",
    },
    {
      "label": "Concrétiser",
      "content": "Smatch est un facilitateur qui agit tant sur le plan du conseil d’orientation que dans la mise en relation avec ta future école. Smatch te permet ainsi de prendre contact facilement avec cette dernière via la plateforme afin d’atteindre tes objectifs.",
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
            Crée toi un profil et révèle tes compétences afin de découvrir et explorer le monde professionnel.
          </h4>
        </div>
        <div className={styles.noCursor} ref={accordion}>
          <Accordion panels={panels}/>
        </div>
        <div className={styles.footer}>
          <div data-appear="slide-up" className={styles.footerContainer}>
            <h3 className={footerLabelClass}>
              Explore tes possibilités avec  Smatch dès aujourd’hui
            </h3>
            <Link to="https://smatch.netlify.app/inscription" button>Je me lance</Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Instructions
