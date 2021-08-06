import React, { useEffect, useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { getAllShadows } from './shadowsSelector'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const useStyles = makeStyles({
  boxStyles: props => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',

    color: 'rgb(148, 166, 184)',
    backgroundColor: props.bgcolor,

    borderRadius: '6px',
    marginTop: '6em',
    marginBottom: '5em',
    minHeight: '240px',
    width: '40%',
    minWidth: '480px',
    padding: '2em',

    '& .value': {
      color: 'rgb(36, 109, 245)',
      fontWeight: 'bold'
    },

    '& .code': {
      fontFamily: "'PT Mono', monospace",
      lineHeight: '25px',
      whiteSpace: 'break-spaces'
    }
  }),
  copy: {
    paddingTop: '2.4em',
    fontSize: '0.8em',
    alignSelf: 'flex-end',
    cursor: 'pointer',
    transition: 'color 200ms',
    '&:hover': {
      color: '#444'
    }
  },
  copied: {
    color: 'orange',
    '&:hover': {
      color: 'darkorange'
    }
  }
})

/**
 The simple Div element that will receive the drop shadows
 */
export function Shadows(props) {
  const classes = useStyles(props)
  const shadowBoxRef = useRef(null)

  const shadows = useSelector(state => getAllShadows(state))
  const shadowsStyles = `box-shadow: ${shadows.styles}`

  const [clipboard, setClipboard] = useState({
    value: shadowsStyles,
    copied: false
  })

  useEffect(() => {
    setClipboard({ value: `box-shadow: ${shadows.styles}`, copied: false })
  }, [shadows])

  return (
    <>
      <style>
        {`.shadows {
          ${shadowsStyles}
        }`}
      </style>

      <div ref={shadowBoxRef} className={`${classes.boxStyles} shadows`}>
        <p className="code">
          box-shadow:
          <br />
          <span dangerouslySetInnerHTML={{ __html: shadows.formatted }} />
        </p>

        <CopyToClipboard
          text={clipboard.value}
          onCopy={() => setClipboard({ copied: true })}
        >
          {clipboard.copied ? (
            <span className={`${classes.copy} ${classes.copied}`}>
              Copied! Make changes and copy again
            </span>
          ) : (
            <span className={classes.copy}>Copy to clipboard</span>
          )}
        </CopyToClipboard>
      </div>
    </>
  )
}

export default Shadows
