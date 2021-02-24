import React, { useEffect, useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { round } from '../../utils'

const useStyles = makeStyles({
  shadowsWrapper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: "'PT Mono', monospace",
    height: '100vh',
    justifyContent: 'space-around',
    width: '100%',
  },
  controlsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    minWidth: '200px',
  },
  w: {
    color: 'red',
  },
  boxStyles: (props) => ({
    alignItems: 'center',
    backgroundColor: props.bgcolor,
    borderRadius: '6px',
    color: 'rgb(148, 166, 184)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    lineHeight: '25px',
    minHeight: '240px',
    // width: "40%",
    minWidth: '200px',
    padding: '1em 2em',
    whiteSpace: 'pre',
    '& span': {
      color: 'rgb(36, 109, 245)',
      fontWeight: 'bold',
    },
  }),
})

/**
 The simple Div element that will receive the drop shadows
 */
const Shadows = (props) => {
  const { alphas, numShadows, vDistances, blurs, reversed } = props
  const classes = useStyles(props)
  const shadowBoxRef = useRef(null)
  const [shadows, setShadows] = useState('none')
  const [formattedShadows, setFormattedShadows] = useState('none')

  useEffect(() => {
    let layers = ''
    let formattedLayers = ''
    const clonedAlphas = [...alphas]

    if (reversed) clonedAlphas.reverse()

    for (let i = 0; i < numShadows; i++) {
      const a = round(clonedAlphas[i], 3)
      const v = round(vDistances[i], 2)
      const b = round(blurs[i], 2)
      const endline = i === numShadows - 1 ? '' : ',\n'
      layers += `0 ${v}px ${b}px rgba(0, 0, 0, ${a})${endline}`
      formattedLayers += `0 <span>${v}</span>px <span>${b}</span>px rgba(0, 0, 0, <span>${a}</span>)${endline}`

      setShadows(layers + ';')
      setFormattedShadows(formattedLayers + ';')
    }
  }, [numShadows, alphas, vDistances, blurs, reversed])

  return (
    <>
      <style>
        {`.shadows {
          box-shadow: ${shadows}
        }`}
      </style>
      <div className={classes.shadowsWrapper}>
        <div ref={shadowBoxRef} className={`${classes.boxStyles} shadows`}>
          <p>box-shadow:</p>
          <p dangerouslySetInnerHTML={{ __html: formattedShadows }} />
        </div>
      </div>
    </>
  )
}

export default Shadows
