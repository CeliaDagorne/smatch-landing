import React from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'
import Link from '../../elements/Link'

// styles
import styles from './style.module.scss'
import typography from '../../../styles/imports/typography.module.scss'

const Menu = () => (
  <section className={classNames(styles.menu, typography.body)}>
    <Container>
      <div className={styles.container}>
        <Link to="/">S'inscrire</Link>
        <div className={styles.wrapper}>
          <Link to="/">Se connecter</Link>
          <Link to="/" button dark>S’inscrire</Link>
        </div>
      </div>
    </Container>
  </section>
)

export default Menu
