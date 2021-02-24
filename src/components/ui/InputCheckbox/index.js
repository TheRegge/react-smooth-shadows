import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import Checkbox from '@material-ui/core/Checkbox'
import { makeStyles } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: 3,
    width: 16,
    height: 16,
    // boxShadow:
    //   "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: 'rgb(255, 255, 255)',
    '$root.Mui-focusVisible &': {
      // outline: "1px auto rgba(255, 255, 255, 0.3)",
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
      background: 'rgb(255, 255, 255)',
      boxShadow:
        'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: 'rgb(36, 109, 245)',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: 'rgb(86, 159, 255)',
    },
  },
})

const InputCheckbox = (props) => {
  const classes = useStyles()

  return (
    <FormControlLabel
      control={
        <Checkbox
          checkedIcon={
            <span className={clsx(classes.icon, classes.checkedIcon)} />
          }
          className={classes.root}
          color="default"
          disableRipple
          icon={<span className={classes.icon} />}
          {...props}
        />
      }
      label={props.label}
    />
  )
}

InputCheckbox.propTypes = {
  ariaLabel: PropTypes.string,
  callback: PropTypes.func,
  color: PropTypes.string,
  label: PropTypes.string,
}

export default InputCheckbox
