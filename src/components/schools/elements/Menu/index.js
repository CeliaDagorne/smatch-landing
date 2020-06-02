import React from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'
import Link from '../../elements/Link'

// styles
import styles from './style.module.scss'
import typography from '../../../../styles/imports/typography.module.scss'

const Menu = () => (
  <div data-menu className={classNames(styles.menu, typography.bodySmall)}>
    <Container>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Link to="/">Étudiants</Link>
          <Link to="/ecoles">Écoles</Link>
        </div>
        <Link to="https://smatch.netlify.app/inscription">Accéder à smatch.fr</Link>
        <div data-subscribe className={styles.fixedButton}>
          <Link to="https://smatch.netlify.app/contact" button dark>Nous contacter</Link>
        </div>
      </div>
    </Container>
  </div>
)

export default Menu
