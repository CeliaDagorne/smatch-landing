import React, { useEffect, useRef, useState } from 'react'
import Lottie from 'react-lottie'
import anim01 from './anim-01.json'

const Anim1 = ({ play }) => {

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: anim01
  }

  return (
    <Lottie
      options={defaultOptions}
      isStopped={!play}
      isPaused={!play}
    />
  )
}

export default Anim1
