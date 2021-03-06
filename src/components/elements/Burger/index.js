import React, { useRef } from 'react'
import classNames from 'classnames'
import Link from '../Link'

// styles
import styles from './style.module.scss'

const Burger = ({ school }) => {
  const style = classNames({ [styles.school]: school })
  const burger = useRef(null)
  const menu = useRef(null)

  const toggle = () => {
    const title = document.querySelector('[data-title]')
    burger.current.classList.toggle(styles.active)
    menu.current.classList.toggle(styles.open)

    if (menu.current.classList.contains(styles.open)) {
      title.style.filter = 'brightness(0) invert(1)'
    } else {
      title.style.filter = 'none'
    }
  }

  return (
    <div className={style}>
      <div className={styles.wrap}>
        <div ref={burger} onClick={toggle} className={styles.burger}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div ref={menu} className={styles.menu}>
        <nav>
          <ul>
            <li className={styles.item}>
              <Link extraClassName={!school ? styles.active : null} to="/">Étudiants</Link>
            </li>
            <li className={styles.item}>
              <Link extraClassName={school ? styles.active : null} to="/ecoles">Écoles</Link>
            </li>
            <li className={styles.item}>
              <Link to="https://smatch.netlify.app/inscription" href="">Smatch.fr</Link>
            </li>
            <li className={styles.item}>
              <Link to="https://smatch.netlify.app/inscription" href="">S’inscrire</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Burger
