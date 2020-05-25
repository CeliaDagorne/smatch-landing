import React, { useEffect, useRef, useState } from 'react'
import Lottie from 'react-lottie'
import anim01 from './anim-02.json'

const Anim2 = () => {

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

export default Anim2
