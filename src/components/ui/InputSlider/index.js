import React from 'react'
import Slider from '@material-ui/core/Slider'
import { withStyles } from '@material-ui/core/styles'

const MySlider = withStyles({
  root: {
    color: 'rgb(36, 109, 245)',
    height: 6,
    marginBottom: '1em',
  },
  thumb: {
    backgroundColor: 'white',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
    height: 18,
    width: 18,
    marginTop: -6,
  },
  track: {
    height: 6,
    borderRadius: 3,
  },
  rail: {
    height: 6,
    borderRadius: 3,
  },
})(Slider)

const InputSlider = ({ min, max, callback, value, step }) => {
  const handleChange = (event, val) => {
    callback(val)
  }

  return (
    <MySlider
      onChange={handleChange}
      value={value}
      max={max}
      min={min}
      step={step}
    />
  )
}

InputSlider.defaultProps = {
  max: 100,
  min: 0,
}

export default InputSlider
