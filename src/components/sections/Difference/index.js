import React from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'

// shapes
import circle from '../../../assets/images/circle-yellow.svg'
import rectangle from '../../../assets/images/rectangle.svg'
import triangle from '../../../assets/images/triangle.svg'

// styles
import styles from './style.module.scss'
import typography from '../../../styles/imports/typography.module.scss'

const Platform = () => {

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
        <h2 data-appear="single-left" className={titleClass}>Notre différence</h2>
        <div data-appear="slide-up" className={styles.wrapper}>
          <div onMouseMove={e => {handleMove(e)}} className={styles.item}>
            <div className={itemTitleClass}>
              <h3>Des critères justes</h3>
            </div>
            <p className={bodyTextClass}>
              Tes critères de sélection ne devraient pas être restreints par ta filière ou par tes notes. Ce qui nous intéresse, c’est toi et tes compétences.
            </p>
          </div>
          <img className={styles.image} src={circle} alt=""/>
          <div onMouseMove={e => {handleMove(e)}} className={styles.item}>
            <div className={itemTitleClass}>
              <h3>Renforcer l’égalité</h3>
            </div>
            <p className={bodyTextClass}>
              Nous agissons pour assurer l'égalité, soutenir et favoriser l'ambition de tous les jeunes et futurs étudiants grâce à un outil accessible à tous.
            </p>
          </div>
          <img className={styles.image} src={rectangle} alt=""/>
          <div onMouseMove={e => {handleMove(e)}} className={styles.item}>
            <div className={itemTitleClass}>
              <h3>Inspirer</h3>
            </div>
            <p className={bodyTextClass}>
              Nous mettons à ta disposition des conseils et des inspirations afin de t’inspirer et te guider.
            </p>
          </div>
          <img className={styles.image} src={triangle} alt=""/>
        </div>
      </Container>
    </section>
  )
}

export default Platform
