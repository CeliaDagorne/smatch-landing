import React from 'react'
import Container from '../../elements/Container'
import Link from '../../elements/Link'

// styles
import styles from './style.module.scss'
import typography from '../../../styles/imports/typography.module.scss'

const Footer = () => (
  <section className={styles.footer}>
    <Container>
      <h3 className={typography.h3}>Smatch</h3>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.line}>
            <Link to="/">
              <span><img src="" alt=""/></span>
              Instagram
            </Link>
          </div>
          <div className={styles.line}>
            <Link to="/">
              <span><img src="" alt=""/></span>
              Snapchat
            </Link>
          </div>
          <div className={styles.line}>
            <Link to="/">
              <span><img src="" alt=""/></span>
              Twitter
            </Link>
          </div>
          <div className={styles.line}>
            <Link to="/">
              <span><img src="" alt=""/></span>
              TikTok
            </Link>
          </div>
          <div className={styles.line}>
            <Link to="/">
              <span><img src="" alt=""/></span>
              Youtube
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
