import React from 'react'
import Toolbox from '../ui/Toolbox'
import InputSlider from '../ui/InputSlider'
import { useSelector, useDispatch } from 'react-redux'
import { SET_SPREAD } from './spreadSlice'

export function SpreadControl() {
  const spread = useSelector((state) => state.spread.value)
  const dispatch = useDispatch()

  return (
    <Toolbox label="Reduce spread" counter={`${spread}px`}>
      <InputSlider
        callback={(num) => dispatch(SET_SPREAD(num))}
        value={spread}
        max={0}
        min={-100}
      />
    </Toolbox>
  )
}

export default SpreadControl
