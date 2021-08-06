import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: '99%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'rgb(73, 100, 128)',
    fontSize: '0.8em',
    fontWeight: 500,
    left: '20px',
    margin: 0,
    padding: 0,
    position: 'absolute',
    top: '20px',
    '& h1': {
      fontSize: '1.17em',
      fontWeight: 700,
      lineHeight: 0.85
    },
    '& p': {
      // padding: 0,
      // margin: '0.3em 0',
      // lineHeight: 0.17
    },
    '& a, a:visited': {
      color: 'rgb(49, 140, 252)',
      textDecoration: 'none'
    }
  },
  icon: {
    lineHeight: 0,
    marginTop: '-5px',
    marginRight: '2rem'
  }
})

function AppHeader() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h1>Smooth Shadow Generator</h1>
      <p>
        A shameless exercise, React reengineering of{' '}
        <a href="https://brumm.af/shadows">brumm.af's original</a>.{' '}
      </p>
      <p className={classes.icon}>
        <a href="https://github.com/TheRegge/react-smooth-shadows">
          <GitHubIcon />
        </a>
      </p>
    </div>
  )
}

export default AppHeader
