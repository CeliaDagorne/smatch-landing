import React from 'react'
import MediaQuery from 'react-responsive'

const smartphoneBreakpoint = 920
const tabletBreakpoint = 1168
const largeDesktop = 1600

export const LargeDesktop = props => {
  const { children } = props
  return <MediaQuery minWidth={largeDesktop + 1}>{children}</MediaQuery>
}

export const Desktop = props => {
  const { children } = props
  return <MediaQuery maxWidth={largeDesktop}>{children}</MediaQuery>
}

export const Tablet = props => {
  const { children } = props
  return <MediaQuery maxWidth={tabletBreakpoint}>{children}</MediaQuery>
}

export const Smartphone = props => {
  const { children } = props
  return <MediaQuery maxWidth={smartphoneBreakpoint}>{children}</MediaQuery>
}

export const AboveTablet = props => {
  const { children } = props
  return <MediaQuery minWidth={tabletBreakpoint + 1}>{children}</MediaQuery>
}

export const AboveSmartphone = props => {
  const { children } = props
  return <MediaQuery minWidth={smartphoneBreakpoint + 1}>{children}</MediaQuery>
}
