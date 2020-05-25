import React, { useEffect, useRef, useState } from 'react'
import Lottie from 'react-lottie'
import anim01 from './anim-01.json'

const Anim1 = () => {

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: anim01
  }

  return (
    <Lottie options={defaultOptions}
/>
  )
}

export default Anim1
