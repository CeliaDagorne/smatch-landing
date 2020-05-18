import React, { useEffect, useRef } from 'react'
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
  const subtitleClass = classNames(styles.subtitle, typography.h4)
  const footerLabelClass = classNames(styles.footerLabel, typography.h3)
  const accordionTitleClass = classNames('title', styles.accordionTitle, typography.cta)
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
    const line = accordion.current.children[index]
    line.classList.toggle('active')
    line.querySelector(`.${styles.cross}`).classList.toggle(styles.activeCross)
  }

  const getCoordinate = e => {
    const cursor = document.querySelector('[data-cursor]')
    cursor.style.top = `${e.clientY - 20}px`
    cursor.style.left = `${e.clientX - 75}px`
  }

  const showCursor = () => {
    document.querySelector('[data-cursor]').style.opacity = 1;
  }

  const hideCursor = () => {
    document.querySelector('[data-cursor]').style.opacity = 0;
  }

  useEffect(() => {
    accordion.current.addEventListener('mousemove', getCoordinate)
    accordion.current.addEventListener('mouseenter', showCursor)
    accordion.current.addEventListener('mouseleave', hideCursor)

    return () => {
      accordion.current.removeEventListener('mousemove', getCoordinate)
      accordion.current.removeEventListener('mouseenter', showCursor)
      accordion.current.removeEventListener('mouseleave', hideCursor)
    }
  }, [])

  return (
    <section className={styles.section}>
      <Container>
        <div data-appear="slide-left" className={styles.header}>
          <p className={typography.eyebrow}>Comment ça marche ?</p>
          <h2 className={titleClass}>L'orientation à portée<br/>de mains</h2>
          <h4 className={subtitleClass}>
            Crée toi un profil et rélève tes compétences afin de découvrir et explorer le monde professionnel.
          </h4>
        </div>

        {content && (
          <div data-appear="slide-left" ref={accordion} className="accordion">
            {content.map( (item, index) => (
              <div className="accordion-item" key={item.title}>
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
                    <img
                      className={styles.big}
                      src="/images/stickers/sticker-smatch.svg"
                      alt="Smatch sticker"
                    />
                    <img
                      className={styles.smiley}
                      src="/images/stickers/smiley-orange.svg"
                      alt="Smiley orange"
                    />
                    <img
                      className={styles.smiley}
                      src="/images/stickers/smiley-yellow.svg"
                      alt="Smiley jaune"
                    />
                    <img
                      className={styles.smiley}
                      src="/images/stickers/smiley-blue.svg"
                      alt="Smiley bleu"
                    />
                    <img
                      className={styles.free}
                      src="/images/stickers/sticker-free.svg"
                      alt="Free sticker"
                    />
                    <img
                      className={styles.start}
                      src="/images/stickers/sticker-start.svg"
                      alt="Start sticker"
                    />
                    <img
                      className={styles.try}
                      src="/images/stickers/try.svg"
                      alt="Try sticker"
                    />
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
