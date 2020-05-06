import React from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'
import Link from '../../elements/Link'

// styles
import styles from './style.module.scss'
import typography from '../../../styles/imports/typography.module.scss'

const Footer = () => (
  <section className={styles.footer}>
    <Container>
      <h3 className={typography.h3}>Smatch</h3>
      <div data-appear="slide-up" className={styles.container}>
        <div className={classNames(styles.row, styles.social)}>
          <div className={styles.line}>
            <Link to="/">
              <span><img src="/images/RS/instagram.svg" alt=""/></span>
              <span>Instagram</span>
            </Link>
          </div>
          <div className={styles.line}>
            <Link to="/">
              <span><img src="/images/RS/snapchat.svg" alt=""/></span>
              <span>Snapchat</span>
            </Link>
          </div>
          <div className={styles.line}>
            <Link to="/">
              <span><img src="/images/RS/twitter.svg" alt=""/></span>
              <span>Twitter</span>
            </Link>
          </div>
          <div className={styles.line}>
            <Link to="/">
              <span><img src="/images/RS/tiktok.svg" alt=""/></span>
              <span>TikTok</span>
            </Link>
          </div>
          <div className={styles.line}>
            <Link to="/">
              <span><img src="/images/RS/youtube.svg" alt=""/></span>
              <span>Youtube</span>
            </Link>
          </div>
        </div>
        <div className={styles.row}>
          <p className={styles.lineTitle}>A propos</p>
          <div className={styles.line}>
            <Link to="/">Concept</Link>
          </div>
          <div className={styles.line}>
            <Link to="/">Qui sommes-nous ?</Link>
          </div>
          <div className={styles.line}>
            <Link to="/">Magazine</Link>
          </div>
          <div className={styles.line}>
            <Link to="/">Mentions Légales</Link>
          </div>
          <div className={styles.line}>
            <Link to="/">CGU</Link>
          </div>
          <div className={styles.line}>
            <Link to="/">Politique de confidentialité</Link>
          </div>
          <div className={styles.line}>
            <Link to="/">FAQ</Link>
          </div>
        </div>
        <div className={styles.row}>
          <p className={styles.lineTitle}>Nous rencontrer</p>
          <div className={styles.line}>
            <p>Contact</p>
          </div>
          <div className={styles.line}>
            <p>Adresse</p>
          </div>
          <div className={styles.line}>
            <Link to="/">27 bis rue du Progrès</Link>
          </div>
          <div className={styles.line}>
            <Link to="/">93100 Montreuil, France</Link>
          </div>
        </div>
        <div className={styles.row}>
          <p className={styles.lineTitle}>Newsletter</p>
          <div className={styles.line}>
            <p>Recevez gratuitement nos conseils et actualités destinés aux lycéens et étudiants.</p>
          </div>
          <div className={styles.input}>
            <input type="text" placeholder="Votre adresse mail"/>
            <input type="submit" value="Valider"/>
          </div>
        </div>
      </div>
    </Container>
  </section>
)

export default Footer
