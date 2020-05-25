import React, { useEffect, useRef, useState } from 'react'
import Lottie from 'react-lottie'
import anim01 from './anim-03.json'

const Anim3 = () => {

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

export default Anim3
