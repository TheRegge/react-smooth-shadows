import React from 'react'
import Bezier from '../bezier'
import Toolbox from '../ui/Toolbox'
import InputSlider from '../ui/InputSlider'
import { useSelector, useDispatch } from 'react-redux'
import { SET_FINAL_BLUR, SET_BLUR_CONTROL_POINTS } from './blursSlice'

export function BlurControl() {
  const finalBlur = useSelector((state) => state.blurs.final)
  const numShadows = useSelector((state) => state.numshadows.value)
  const dispatch = useDispatch()

  return (
    <Toolbox label="Final blur strength" counter={`${finalBlur}px`}>
      <InputSlider
        callback={(num) => dispatch(SET_FINAL_BLUR(num))}
        value={finalBlur}
        min={0}
        max={500}
      />
      <Bezier
        callback={(points) => dispatch(SET_BLUR_CONTROL_POINTS(points))} //{setBlurs}
        easing="in"
        finalValue={finalBlur}
        observers={numShadows}
        strokeWidth={1.5}
        viewBoxHeight={50}
        viewBoxWidth={200}
      />
    </Toolbox>
  )
}
export default BlurControl
