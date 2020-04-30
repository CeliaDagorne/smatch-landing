import React from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'

// styles
import styles from './style.module.scss'
import typography from '../../../styles/imports/typography.module.scss'

import brut from '../../../assets/images/logos/brut.svg'

const Press = () => {
  const titleClass = classNames(styles.title, typography.h2)

  const content = [
    {
      "img": "/a",
      "link": "/",
    },
    {
      "img": "/b",
      "link": "/",
    },
    {
      "img": "/c",
      "link": "/",
    },
    {
      "img": "/d",
      "link": "/",
    },
    {
      "img": "/e",
      "link": "/",
    },
    {
      "img": "/f",
      "link": "/",
    },
  ]

  return (
    <section className={styles.section}>
      <Container>
        <h2 data-appear="single-right" className={titleClass}>
          Ils parlent de nous
        </h2>
        <div data-appear="logos" className={styles.grid}>
          {content && (
            content.map(item => (
              <div key={item.img} className={styles.gridItem}>
                <img src={brut} alt=""/>
              </div>
            ))
          )}
        </div>
      </Container>
    </section>
  )
}

export default Press
