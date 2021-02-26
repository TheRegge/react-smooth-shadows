import { createSlice } from '@reduxjs/toolkit'
import { Bezier as Bezierjs } from 'bezier-js'

export const blursSlice = createSlice({
  name: 'blurs',
  initialState: {
    startPoint: { x: 1, y: 1 },
    controlPointStart: { x: 0, y: 0 },
    controlPointEnd: { x: 1, y: 1 },
    endPoint: { x: 0, y: 0 },
    final: 80,
  },
  reducers: {
    SET_BLUR_CONTROL_POINTS: (state, action) => {
      state.controlPointStart = {
        x: action.payload.controlPointStart.x,
        y: action.payload.controlPointStart.y,
      }
      state.controlPointEnd = {
        x: action.payload.controlPointEnd.x,
        y: action.payload.controlPointEnd.y,
      }
    },
    SET_FINAL_BLUR: (state, action) => {
      state.final = action.payload
    },
  },
})

export function finalBlurSelector(state) {
  return state.blurs.final
}

export function allBlursSelector(state) {
  const {
    startPoint: p0,
    controlPointStart: p1,
    controlPointEnd: p2,
    endPoint: p3,
    final: finalBlur,
  } = {
    ...state.blurs,
  }

  const curve = new Bezierjs(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y)
  let arr = []
  const num = state.numshadows.value

  for (let i = 1; i <= num; i++) {
    // Get point on curve between (1/num) and 1
    const point = curve.get(i / num)
    arr.push((1 - point.y) * finalBlur)
  }
  return arr
}

export const { SET_BLUR_CONTROL_POINTS, SET_FINAL_BLUR } = blursSlice.actions
export default blursSlice.reducer
