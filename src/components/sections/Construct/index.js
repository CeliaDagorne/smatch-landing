import React from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'
import Link from '../../elements/Link'

// styles
import styles from './style.module.scss'
import typography from '../../../styles/imports/typography.module.scss'

const Construct = () => {
  const titleClass = classNames(styles.title, typography.h2)

  return (
    <section className={styles.section}>
      <Container>
        <div>
          <div className={styles.wrapper} data-appear="slide-up">
            <h2 className={titleClass}>
              Prêt.e à construire ton futur ?
            </h2>
            <Link to="https://smatch.netlify.app/inscription" button>C’est parti !</Link>
            <div className={styles.footer}>
              <p>
                <span><img src="/images/validate.svg" alt=""/></span>
                100% gratuit
              </p>
              <p>
                <span><img src="/images/validate.svg" alt=""/></span>
                Garantie sans stress
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Construct
