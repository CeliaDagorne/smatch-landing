import React, { useRef, useEffect } from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'
import Matter from 'matter-js'

// styles
import styles from './style.module.scss'
import typography from '../../../../styles/imports/typography.module.scss'

// images
import window from '../../../../assets/images/window-large.svg'

const SchoolPlatform = ({ appeared }) => {
  const titleClass = classNames(styles.title, typography.h2)
  const bodyTextClass = classNames(styles.textBody, typography.h3)
  const isMobile = document.body.offsetWidth <= 920

  const canvasWidth = isMobile ? document.body.offsetWidth - 50 : 530
  const canvasHeight = isMobile ? canvasWidth * 1.28 : 470

  const scene = useRef(null)

  const getCoordinate = e => {
    const cursor = document.querySelector('[data-cursor]')
    cursor.style.top = `${e.clientY - 20}px`
    cursor.style.left = `${e.clientX - 30}px`
  }

  const showCursor = () => {
    document.querySelector('[data-cursor]').style.opacity = 1;
  }

  const hideCursor = () => {
    document.querySelector('[data-cursor]').style.opacity = 0;
  }

  useEffect(() => {
    scene.current.addEventListener('mousemove', getCoordinate)
    scene.current.addEventListener('mouseenter', showCursor)
    scene.current.addEventListener('mouseleave', hideCursor)

    return () => {
      scene.current.removeEventListener('mousemove', getCoordinate)
      scene.current.removeEventListener('mouseenter', showCursor)
      scene.current.removeEventListener('mouseleave', hideCursor)
    }
  }, [])

  useEffect(() => {
    const Engine = Matter.Engine
    const Render = Matter.Render
    const World = Matter.World
    const Bodies = Matter.Bodies
    const Mouse = Matter.Mouse
    const MouseConstraint = Matter.MouseConstraint


    if (appeared) {
      const engine = Engine.create({
        // positionIterations: 20
      })

      const render = Render.create({
        element: scene.current,
        engine: engine,
        options: {
          background: 'transparent',
          width: canvasWidth,
          height: canvasHeight,
          wireframes: false
        }
      })

      let ball = Bodies.circle(100, 20, 70, { restitution: 0.5, render: {
        fillStyle: '#F8CA36'
      }})
      let rect = Bodies.rectangle(100, 130, 66, 66, { restitution: 0.5, render: {
        fillStyle: '#3E66D7'
      }})
      let triangle = Bodies.polygon(265, 130, 3, 140, { restitution: 0.5, render: {
        fillStyle: '#FFB4C8'
      }})

      if (isMobile) {
        ball = Bodies.circle(100, 20, 40, { restitution: 0.5, render: {
          fillStyle: '#F8CA36'
        }})
        rect = Bodies.rectangle(100, 130, 50, 50, { restitution: 0.5, render: {
          fillStyle: '#3E66D7'
        }})
        triangle = Bodies.polygon(265, 130, 3, 70, { restitution: 0.5, render: {
          fillStyle: '#FFB4C8'
        }})
      }

      const topWall = Bodies.rectangle(200, 0, canvasHeight, 10, { isStatic: true, render: {
        fillStyle: 'none'
      } })
      const bottomWall = Bodies.rectangle(0, canvasHeight, 1100, 5, { isStatic: true, render: {
        fillStyle: 'none'
      } })
      const rightWall = Bodies.rectangle(canvasWidth, 300, 10, 670, { isStatic: true, render: {
        fillStyle: 'none'
      } })
      const leftWall = Bodies.rectangle(0, 300, 10, 670, { isStatic: true, render: {
        fillStyle: 'none'
      } })
      World.add(engine.world, [topWall, bottomWall, rightWall, leftWall])

      // add mouse control
      const mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      })

      World.add(engine.world, [ball, rect, triangle])
      World.add(engine.world, mouseConstraint)

      Engine.run(engine)
      Render.run(render)
    }
  }, [appeared])

  return (
    <section className={styles.section}>
      <Container>
        <h2 data-appear="single-left" className={titleClass}>
          Offrez<br/>
          un outil<br/>
          d’orientation intelligent
        </h2>
        <div className={styles.wrapper}>
          <div  data-appear="visual" className={styles.visual}>
            <img src={window} alt=""/>
            <div className={styles.canvas} ref={scene} />
          </div>
          <div data-appear="slide-right" className={styles.content}>
            <h3 className={bodyTextClass}>
              Notre mission est de préparer les étudiants à comprendre, à contribuer et à réussir dans une société en mutation rapide. Grâce à la technologie Smatch, les lycéens peuvent apprendre à se connaître, et ainsi chercher des parcours d’orientation qui leur correspondent, tout en gardant toutes leurs options ouvertes.
            </h3>
            <div className={styles.line} />
            <div className={styles.testimonial}>
              <p className={typography.body}>
                “Nous voulons renverser le sytème d’orientation actuel en créant un outil accessible pour tous les étudiants.”
              </p>
              <p className={styles.label}><span>Marjorie F,</span> Product Owner</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SchoolPlatform
