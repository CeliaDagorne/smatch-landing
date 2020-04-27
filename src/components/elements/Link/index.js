import React from 'react'
import classNames from 'classnames'

// styles
import styles from './style.module.scss'
import typography from '../../../styles/imports/typography.module.scss'

const Link = ({ button, to, innerRef, children, dark }) => {
  const style = classNames({ [styles.button]: button }, typography.button, { [styles.dark]: dark })

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

export default Link
