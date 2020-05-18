import React from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'

const Container = props => {
  const { children, extraClassName, innerRef, style } = props

  const classes = classNames(styles.container, extraClassName)

  return (
    <div ref={innerRef} className={classes} style={style}>
      {children}
    </div>
  )
}

export default React.forwardRef((props, ref) => <Container innerRef={ref} {...props} />)
