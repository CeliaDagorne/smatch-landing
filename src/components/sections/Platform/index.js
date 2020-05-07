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
  const bodyTextClass = classNames(styles.textBody, typography.eyebrow)

  const scene = useRef(null)

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
          width: 530,
          height: 640,
          wireframes: false
        }
      })

      const ball = Bodies.circle(100, 20, 70, { restitution: 0.5, render: {
        fillStyle: '#F8CA36'
      }})
      const rect = Bodies.rectangle(100, 130, 180, 180, { restitution: 0.5, render: {
        fillStyle: '#4ABC86'
      }})
      const triangle = Bodies.polygon(265, 130, 3, 140, { restitution: 0.5, render: {
        fillStyle: '#FFB4C8'
      }})

      World.add(engine.world, [
        // walls
        Bodies.rectangle(200, 0, 600, 1, { isStatic: true, render: {
          fillStyle: 'transparent'
        } }),
        Bodies.rectangle(0, 640, 1100, 5, { isStatic: true, render: {
          fillStyle: 'transparent'
        } }),
        Bodies.rectangle(530, 300, 10, 670, { isStatic: true, render: {
          fillStyle: 'transparent'
        } }),
        Bodies.rectangle(0, 300, 1, 600, { isStatic: true, render: {
          fillStyle: 'transparent'
        } })
      ])

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
      console.log('appeared')
      World.add(engine.world, mouseConstraint)

      Engine.run(engine)
      Render.run(render)
    }
  }, [appeared])

  return (
    <section className={styles.section}>
      <Container>
        <h2 data-appear="single-left" className={titleClass}>La plateforme unique pour ton futur</h2>
        <div className={styles.wrapper}>
          <div  data-appear="visual" className={styles.visual}>
            <img src={window} alt=""/>
            <div className={styles.canvas} ref={scene} />
            {/* <div className={styles.circle}/>
            <div className={styles.triangle}/>
            <div className={styles.rectangle}/> */}
          </div>
          <div data-appear="slide-right" className={styles.content}>
            <h3 className={typography.h3}>
              Des tests efficaces et un algorithme conçu pour toi.
            </h3>
            <p className={bodyTextClass}>
              Smatch scanne, compile et analyse l’ensemble de tes caractéristiques et tes envies pour aboutir à un vaste horizon d’opportunités - que tu en connaisses l’intitulé ou pas. Smatch te permet d'obtenir un résultat personnalisé.<br/>
              La plateforme te guide et te fournit toutes les clés pour mener à bien ton choix d'orientation.
            </p>
            <div className={styles.line} />
            <div className={styles.testimonial}>
              <p className={typography.body}>
                “Notre algorithme a été conçu et développé par les meilleurs développeuses et développeurs de La Montreuil Valley ”
              </p>
              <p className={styles.label}><span>Marjorie F,</span> Product Owner</p>
            </div>
            <Link to="/" button>Faire le test</Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Platform
