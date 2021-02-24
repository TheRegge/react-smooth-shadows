import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    backgroundColor: 'rgb(223, 230, 238)',
    borderRadius: '4px',
    color: 'rgb(49, 63, 78)',
    padding: '20px',
    marginBottom: '1em',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '1em',
  },
  label: {},
  counter: {
    backgroundColor: 'white',
    borderRadius: '3px',
    padding: '4px',
  },
})

const Toolbox = ({ label, counter, children }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <div className={classes.label}>{label || ''}</div>
        {counter && <div className={classes.counter}>{counter}</div>}
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Toolbox
