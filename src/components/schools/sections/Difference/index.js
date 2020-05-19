import React from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'

// shapes
import circle from '../../../../assets/images/circle-yellow.svg'
import rectangle from '../../../../assets/images/rectangle.svg'
import triangle from '../../../../assets/images/triangle.svg'

// styles
import styles from './style.module.scss'
import typography from '../../../../styles/imports/typography.module.scss'

const SchoolDifference = () => {

  const titleClass = classNames(styles.title, typography.h2)
  const itemTitleClass = classNames(styles.itemTitle, typography.h3)
  const bodyTextClass = classNames(styles.bodyText, typography.body)

  const handleMove = e => {
    e.persist()
    const img = e.target.nextSibling
    img.style.left = `${e.clientX - 80}px`
    img.style.top = `${e.clientY - 80}px`
  }

  return (
    <section className={styles.section}>
      <Container>
        <h2 data-appear="single-left" className={titleClass}>À vos côtés pour vous accompager</h2>
        <div data-appear="slide-up" className={styles.wrapper}>
          <div onMouseMove={e => {handleMove(e)}} className={styles.item}>
            <div className={itemTitleClass}>
              <h3>Affirmer votre identité</h3>
            </div>
            <p className={bodyTextClass}>
              Smatch met à disposition une équipe de tournage et des outils afin de renforcer l’identité visuelle et créer du contenu de qualité afin de renforcer votre image.
            </p>
          </div>
          <img className={styles.image} src={circle} alt=""/>
          <div onMouseMove={e => {handleMove(e)}} className={styles.item}>
            <div className={itemTitleClass}>
              <h3>Toujours à votre écoute</h3>
            </div>
            <p className={bodyTextClass}>
              Nous agissons pour assurer l'égalité, soutenir et favoriser l'ambition de tous les jeunes et futurs étudiants grâce à un outil accessible à tous.
            </p>
          </div>
          <img className={styles.image} src={rectangle} alt=""/>
          <div onMouseMove={e => {handleMove(e)}} className={styles.item}>
            <div className={itemTitleClass}>
              <h3>Vous amener les bons étudiants</h3>
            </div>
            <p className={bodyTextClass}>
              Smatch met en place des activités d’introspection et de matching, permettant de faire le lien entre les lycéens concernés par votre formation, et vous.
            </p>
          </div>
          <img className={styles.image} src={triangle} alt=""/>
        </div>
      </Container>
    </section>
  )
}

export default SchoolDifference
