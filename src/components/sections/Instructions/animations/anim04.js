import React, { useEffect, useRef, useState } from 'react'
import Lottie from 'react-lottie'
import anim04 from './anim-04.json'

const Anim4 = ({ play }) => {

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: anim04
  }

  return (
    <Lottie
      options={defaultOptions}
      isStopped={!play}
      isPaused={!play}
    />
  )
}

export default Anim4
