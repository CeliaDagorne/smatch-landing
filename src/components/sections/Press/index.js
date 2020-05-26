import React from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'
import Link from '../../elements/Link'

// styles
import styles from './style.module.scss'
import typography from '../../../styles/imports/typography.module.scss'

const Press = () => {
  const titleClass = classNames(styles.title, typography.h2)

  const content = [
    {
      "img": "konbini.png",
      "link": "/",
    },
    {
      "img": "brut.png",
      "link": "/",
    },
    {
      "img": "loop.png",
      "link": "/",
    },
    {
      "img": "france-tv.png",
      "link": "/",
    },
    {
      "img": "slate.png",
      "link": "/",
    },
    {
      "img": "nova.png",
      "link": "/",
    },
  ]

  return (
    <section className={styles.section}>
      <Container>
        <h2 data-appear="single-up" className={titleClass}>
          Ils parlent de nous
        </h2>
        <div data-appear="logos" className={styles.grid}>
          {content && (
            content.map(item => (
              <div key={item.img} to={item.link} className={styles.gridItem}>
                <Link to={item.link}>
                  <img src={`/images/logos/${item.img}`} alt=""/>
                </Link>
              </div>
            ))
          )}
        </div>
      </Container>
    </section>
  )
}

export default Press
