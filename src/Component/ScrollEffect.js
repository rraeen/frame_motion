// import { useScroll,animated, useSpring } from '@react-spring/web'
import React, { useState } from 'react'
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from 'framer-motion'
import { useEffect } from 'react'

function ScrollEffect() {
  const [pos, setPos] = useState(0)
  const [active, setactive] = useState(0)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress)

  useMotionValueEvent(scaleX, 'change', (latest) => {
    const postion = Math.floor(latest * 100)
    setPos(postion)
  })

  useEffect(() => {
    pos > -10 && pos < 25 && setactive(0)
    pos > 25 && pos < 50 && setactive(1)
    pos > 50 && pos < 75 && setactive(2)
    pos > 75 && pos < 110 && setactive(3)
  }, [pos])

  return (
    <>
      <div className="mainDiv">
        <div className="just-center">
          <h1 className={`textStroks-${active == 0 ? false : true} fs`}>
            WEBSITES
          </h1>
          <h1 className={`textStroks-${active == 1 ? false : true} fs`}>
            BRANDING
          </h1>
          <h1 className={`textStroks-${active == 2 ? false : true} fs`}>
            PRODUCT
          </h1>
          <h1 className={`textStroks-${active == 3 ? false : true} fs`}>
            CONTENT
          </h1>
        </div>
      </div>
      <div style={{ height: '300vh' }} className="just-center">
        <div className="bend just-center">
          {new Array(4).fill().map((_, i) => {
            return (
              <div key={i}>
                <div
                  className="rollImage"
                  style={{
                    transform: `scale(${i == active ?90:50}%)`,
                  }}
                >
                  <div className={`img${i}`}></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ScrollEffect
