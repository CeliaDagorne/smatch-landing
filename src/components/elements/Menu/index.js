import React from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'
import Link from '../../elements/Link'

// styles
import styles from './style.module.scss'
import typography from '../../../styles/imports/typography.module.scss'

const Menu = () => (
  <div data-menu className={classNames(styles.menu, typography.body)}>
    <Container>
      <div className={styles.container}>
        <Link to="/">S'inscrire</Link>
        <Link to="/">Se connecter</Link>
        <div className={styles.fixedButton}>
          <Link to="/" button dark>S’inscrire</Link>
        </div>
      </div>
    </Container>
  </div>
)

export default Menu
