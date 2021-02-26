import React from 'react'
import Toolbox from '../ui/Toolbox'
import InputSlider from '../ui/InputSlider'
import { useSelector, useDispatch } from 'react-redux'
import { setNumshadows } from './numshadowsSlice'

export function ShadowsControl() {
  const numShadows = useSelector((state) => state.numshadows.value)
  const dispatch = useDispatch()

  return (
    <Toolbox label="Shadows number" counter={numShadows}>
      <InputSlider
        callback={(num) => dispatch(setNumshadows(num))}
        value={numShadows}
        max={10}
        min={1}
      />
    </Toolbox>
  )
}

export default ShadowsControl
