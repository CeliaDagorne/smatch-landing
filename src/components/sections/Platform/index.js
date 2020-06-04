import React, { useRef, useEffect } from 'react'
import classNames from 'classnames'
import Container from '../../elements/Container'
import Link from '../../elements/Link'
import Matter from 'matter-js'

// styles
import styles from './style.module.scss'
import typography from '../../../styles/imports/typography.module.scss'

// images
import window from '../../../assets/images/window.svg'

const Platform = ({ appeared }) => {
  const titleClass = classNames(styles.title, typography.h2)
  const bodyTextClass = classNames(styles.textBody, typography.body)
  const isMobile = document.body.offsetWidth <= 920

  const canvasWidth = isMobile ? document.body.offsetWidth - 50 : 530
  const canvasHeight = isMobile ? canvasWidth * 1.28 : 640

  const scene = useRef(null)

  const getCoordinate = e => {
    const cursor = document.querySelector('[data-cursor]')
    cursor.style.top = `${e.clientY - 20}px`
    cursor.style.left = `${e.clientX - 30}px`
  }

  const showCursor = () => {
    document.querySelector('[data-cursor]').style.opacity = 1;
    document.querySelector('[data-cursor]').style.visibility = 'visible';
  }

  const hideCursor = () => {
    document.querySelector('[data-cursor]').style.opacity = 0;
    document.querySelector('[data-cursor]').style.visibility = 'hidden';
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
      let rect = Bodies.rectangle(100, 130, 180, 180, { restitution: 0.5, render: {
        fillStyle: '#4ABC86'
      }})
      let triangle = Bodies.polygon(265, 130, 3, 140, { restitution: 0.5, render: {
        fillStyle: '#FFB4C8'
      }})

      if (isMobile) {
        document.querySelector('[data-appear="visual"]').style.height = `${canvasHeight}px`

        ball = Bodies.circle(100, 20, 40, { restitution: 0.5, render: {
          fillStyle: '#F8CA36'
        }})
        rect = Bodies.rectangle(100, 130, 120, 120, { restitution: 0.5, render: {
          fillStyle: '#4ABC86'
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

      const addCircle = function () {
        const colorsArray = ['#4ABC86', '#F8CA36', '#FFB4C8']
        const shapeArray = ['triangle', 'rectangle', 'circle']
        const randomIndex = Math.floor(Math.random() * colorsArray.length)

        switch (shapeArray[randomIndex]) {
          case 'triangle':
            return Bodies.polygon(Math.random() * 400 + 30, 40, 3, 80, { restitution: 0.5, render: {
              fillStyle: colorsArray[Math.floor(Math.random() * colorsArray.length)]
            }})
          case 'rectangle':
            return Bodies.rectangle(Math.random() * 400 + 30, 30, 80, 80, { restitution: 0.5, render: {
              fillStyle: colorsArray[Math.floor(Math.random() * colorsArray.length)]
            }})
          case 'circle':
            return Bodies.circle(Math.random() * 400 + 30, 30, 60, { restitution: 0.5, render: {
              fillStyle: colorsArray[Math.floor(Math.random() * colorsArray.length)]
            }})
          default:
            return Bodies.circle(Math.random() * 400 + 30, 80, 80, { restitution: 0.5, render: {
              fillStyle: colorsArray[Math.floor(Math.random() * colorsArray.length)]
            }})
        }
      }

      scene.current.addEventListener('click', () => {
        World.add(engine.world, addCircle())
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
        <h2 data-appear="single-up" className={titleClass}>La plateforme unique pour ton futur</h2>
        <div className={styles.wrapper}>
          <div data-appear="visual" className={styles.visual}>
            <img src={window} alt=""/>
            <div className={styles.canvas} ref={scene} />
            {/* <div className={styles.circle}/>
            <div className={styles.triangle}/>
            <div className={styles.rectangle}/> */}
          </div>
          <div data-appear="slide-up" className={styles.content}>
            <h3 className={typography.h3}>
              Des tests efficaces et un algorithme conçu pour toi.
            </h3>
            <p className={bodyTextClass}>
              Smatch scanne, compile et analyse l’ensemble de tes caractéristiques et tes envies pour aboutir à un vaste horizon d’opportunités - que tu en connaisses l’intitulé ou pas. Smatch te permet d'obtenir un résultat personnalisé.<br/>
              La plateforme te guide et te fournit toutes les clés pour mener à bien ton choix d'orientation.
            </p>
            <div className={styles.line} />
            <div className={styles.testimonial}>
              <p className={typography.bodySmall}>
                “Notre algorithme a été conçu et développé par les meilleurs développeuses et développeurs de La Montreuil Valley ”
              </p>
              <p className={styles.label}><span>Marjorie F,</span> Product Owner</p>
            </div>
            <Link to="https://smatch.netlify.app/inscription" button>Faire le test</Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Platform
