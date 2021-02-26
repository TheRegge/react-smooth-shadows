import React from 'react'
import Toolbox from '../ui/Toolbox'
import InputSlider from '../ui/InputSlider'
import Bezier from '../bezier'
import { useSelector, useDispatch } from 'react-redux'
import {
  SET_FINAL_VDISTANCE,
  SET_VDISTANCE_CONTROL_POINTS,
} from './vdistancesSlice'

export function VdistanceControl() {
  const finalVdistance = useSelector((state) => state.vdistances.final)
  const numShadows = useSelector((state) => state.numshadows.value)
  const dispatch = useDispatch()
  return (
    <Toolbox label="Vertical distance" counter={`${finalVdistance}px`}>
      <InputSlider
        callback={(num) => dispatch(SET_FINAL_VDISTANCE(num))}
        value={finalVdistance}
        min={0}
        max={500}
      />
      <Bezier
        callback={(points) => dispatch(SET_VDISTANCE_CONTROL_POINTS(points))}
        easing="in"
        finalValue={finalVdistance}
        observers={numShadows}
        strokeWidth={1.5}
        viewBoxHeight={50}
        viewBoxWidth={200}
      />
    </Toolbox>
  )
}

export default VdistanceControl
