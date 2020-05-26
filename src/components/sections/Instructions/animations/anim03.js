import React, { useEffect, useRef, useState } from 'react'
import Lottie from 'react-lottie'
import anim03 from './anim-03.json'

const Anim3 = ({ play }) => {

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: anim03
  }

  return (
    <Lottie
      options={defaultOptions}
      isStopped={!play}
      isPaused={!play}
    />
  )
}

export default Anim3
