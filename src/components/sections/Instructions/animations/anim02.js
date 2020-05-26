import React from 'react'
import Lottie from 'react-lottie'
import anim02 from './anim-02.json'

const Anim2 = ({ play }) => {

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: anim02
  }

  return (
    <Lottie
      options={defaultOptions}
      isStopped={!play}
      isPaused={!play}
    />
  )
}

export default Anim2
