import React from 'react'
import Toolbox from '../ui/Toolbox'
import InputSlider from '../ui/InputSlider'
import InputCheckbox from '../ui/InputCheckbox'
import Bezier from '../bezier'
import { useSelector, useDispatch } from 'react-redux'
import {
  SET_FINAL_ALPHA,
  SET_ALPHA_CONTROL_POINTS,
  SET_REVERSE_ALPHAS,
} from './alphasSlice'

export function OpacityControl() {
  const finalOpacity = useSelector((state) => state.alphas.final)
  const numShadows = useSelector((state) => state.numshadows.value)
  const dispatch = useDispatch()

  return (
    <Toolbox label="Final opacity" counter={`${finalOpacity}`}>
      <InputSlider
        callback={(num) => dispatch(SET_FINAL_ALPHA(num))}
        max={1}
        step={0.01}
        min={0}
        value={finalOpacity}
      />
      <Bezier
        callback={(points) => dispatch(SET_ALPHA_CONTROL_POINTS(points))}
        easing="inout"
        finalValue={finalOpacity}
        observers={numShadows}
        strokeWidth={1.5}
        viewBoxHeight={40}
        viewBoxWidth={200}
      />
      <InputCheckbox
        aria-label="Checkbox reverse opacity"
        label="Reverse opacity"
        onChange={(e) => dispatch(SET_REVERSE_ALPHAS(e.target.checked))}
      />
    </Toolbox>
  )
}

export default OpacityControl
