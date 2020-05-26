import React, { useRef, useState, useEffect } from 'react'
import styles from './style.module.scss'
import './style.scss'

const Panel = ({ label, content, activeTab, index, activateTab }) => {
  const [height, setHeight] = useState(0)
  const panelRef = useRef(null)

  const isActive = activeTab === index;
  const innerStyle = {
    height:  `${isActive ? height : 0}px`
  }

  useEffect(() => {
		window.setTimeout(() => {
      const el = panelRef.current
			const newHeight = el.querySelector(`.${styles.inner}`).scrollHeight
			setHeight(newHeight)
		}, 333)
  })

  return (
    <div ref={panelRef} className={styles.panel}
      role="tabpanel"
      aria-expanded={ isActive }>
      <button className={styles.label}
        role="tab"
        onClick={ activateTab }>
        {label}
      </button>
      <div className={styles.inner}
        style={ innerStyle }
        aria-hidden={ !isActive }>
        <p className={styles.content}>
          <div className={styles.text}>
            {content}
          </div>
        </p>
      </div>
    </div>
  )
}

const Accordion = ({ panels }) => {
  const [activeTab, setActiveTab] = useState(0)

	const activateTab = index => {
    const newActiveTab = activeTab === index ? -1 : index
    setActiveTab(newActiveTab)
	}

  return (
    <div className={styles.accordion} role="tablist">
      {panels.map((panel, index) =>
        <Panel
          key={ index }
          activeTab={ activeTab }
          index={ index }
          { ...panel }
          activateTab={ () => { activateTab(index) } }
        />
      )}
    </div>
  )
}

export default Accordion

// const panels = [
// 	{
// 		label: 'Seriously, Don\'t Use Icon Fonts',
// 		content: 'Icons are everywhere. These "little miracle workers" (as John Hicks described them) help us reinforce meaning in the interfaces we design and build. Their popularity in web design has never been greater; the conciseness and versatility of pictograms in particular make them a lovely fit for displays large and small. But icons on the web have had their fair share of challenges.',
// 	},
// 	{
// 		label: 'Screen Readers Actually Read That Stuff',
// 		content: 'Most assistive devices will read aloud text inserted via CSS, and many of the Unicode characters icon fonts depend on are no exception. Best-case scenario, your "favorite" icon gets read aloud as "black favorite star." Worse-case scenario, it\'s read as "unpronounceable" or skipped entirely.',
// 	},	
// 	{
// 		label: 'They Fail Poorly and Often',
// 		content: 'When your icon font fails, the browser treats it like any other font and replaces it with a fallback. Best-case scenario, you\'ve chosen your fallback characters carefully and something weird-looking but communicative still loads. Worse-case scenario (and far more often), the user sees something completely incongruous, usually the dreaded "missing character" glyph.',
// 	},
// 	{
// 		label: 'They\'re a Nightmare if You\'re Dyslexic',
// 		content: 'Many dyslexic people find it helpful to swap out a website\'s typeface for something like OpenDyslexic. But icon fonts get replaced as well, which makes for a frustratingly broken experience.',
// 	},
// 	{
// 		label: 'There\'s Already a Better Way',
// 		content: 'SVG is awesome for icons! It\'s a vector image format with optional support for CSS, JavaScript, reusability, accessibility and a bunch more. It was made for this sort of thing.'
// 	},
// ];
