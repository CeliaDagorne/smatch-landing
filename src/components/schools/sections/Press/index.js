import React from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'
import Link from '../../elements/Link'

// styles
import styles from './style.module.scss'
import typography from '../../../../styles/imports/typography.module.scss'

const SchoolPress = () => {
  const titleClass = classNames(styles.title, typography.h2)

  const content = [
    {
      "img": "konbini.svg",
      "link": "https://www.konbini.com/fr",
    },
    {
      "img": "brut.svg",
      "link": "https://www.brut.media/fr",
    },
    {
      "img": "loop.svg",
      "link": "https://loopsider.com/fr",
    },
    {
      "img": "france-tv.svg",
      "link": "https://www.france.tv/",
    },
    {
      "img": "slate.svg",
      "link": "http://www.slate.fr/",
    },
    {
      "img": "nova.svg",
      "link": "https://www.nova.fr/",
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

export default SchoolPress
