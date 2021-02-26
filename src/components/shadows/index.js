import React, { useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { getAllShadows } from './shadowsSelector'

const useStyles = makeStyles({
  boxStyles: (props) => ({
    alignItems: 'center',
    backgroundColor: props.bgcolor,
    borderRadius: '6px',
    color: 'rgb(148, 166, 184)',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: "'PT Mono', monospace",
    justifyContent: 'center',
    lineHeight: '25px',
    marginTop: '-14vh',
    minHeight: '240px',
    width: '40%',
    minWidth: '200px',
    padding: '1em 2em',
    whiteSpace: 'pre',
    '& .value': {
      color: 'rgb(36, 109, 245)',
      fontWeight: 'bold',
    },
  }),
})

/**
 The simple Div element that will receive the drop shadows
 */
export function Shadows(props) {
  const classes = useStyles(props)
  const shadowBoxRef = useRef(null)

  const shadows = useSelector((state) => getAllShadows(state))

  // useEffect(() => {
  //   let layers = ''
  //   let formattedLayers = ''
  //   const clonedAlphas = [...alphas]

  //   if (reversed) clonedAlphas.reverse()

  //   for (let i = 0; i < numShadows; i++) {
  //     const a = round(clonedAlphas[i], 3)
  //     const v = round(vDistances[i], 2)
  //     const b = round(blurs[i], 2)
  //     const endline = i === numShadows - 1 ? '' : ',\n'
  //     layers += `0 ${v}px ${b}px rgba(0, 0, 0, ${a})${endline}`
  //     formattedLayers += `0 <span>${v}</span>px <span>${b}</span>px rgba(0, 0, 0, <span>${a}</span>)${endline}`

  //     setShadows(layers + ';')
  //     setFormattedShadows(formattedLayers + ';')
  //   }
  // }, [numShadows, alphas, vDistances, blurs, reversed])

  return (
    <>
      <style>
        {`.shadows {
          box-shadow: ${shadows.styles}
        }`}
      </style>

      <div ref={shadowBoxRef} className={`${classes.boxStyles} shadows`}>
        <p>
          box-shadow:
          <br />
          <span dangerouslySetInnerHTML={{ __html: shadows.formatted }} />
        </p>
      </div>
    </>
  )
}

export default Shadows
