import React from 'react'
import classNames from 'classnames'

// styles
import styles from './style.module.scss'
import typography from '../../../styles/imports/typography.module.scss'

const Button = ({ to, innerRef, children }) => {

  const style = classNames(styles.button, typography.button)

  const handleKeypress = event => {
    if (event.key === 'Enter') {
      this.handleClick()
    }
  }

  const handleClick = () => {
    if (document.activeElement) {
      document.activeElement.blur()
    }
  }

  return (
    <a
      className={style}
      href={to}
      rel="noopener noreferrer"
      ref={innerRef}
      target="_blank"
      onClick={handleClick}
      onKeyPress={handleKeypress}
    >
      {children}
    </a>
  )
}

export default Button
