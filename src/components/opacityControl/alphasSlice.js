import { createSlice } from '@reduxjs/toolkit'
import { Bezier as Bezierjs } from 'bezier-js'

export const alphasSlice = createSlice({
  name: 'alphas',
  initialState: {
    startPoint: { x: 1, y: 1 },
    controlPointStart: { x: 0, y: 0 },
    controlPointEnd: { x: 1, y: 1 },
    endPoint: { x: 0, y: 0 },
    final: 0.08,
    reverseAlphas: false,
  },
  reducers: {
    SET_ALPHA_CONTROL_POINTS: (state, action) => {
      state.controlPointStart = {
        x: action.payload.controlPointStart.x,
        y: action.payload.controlPointStart.y,
      }
      state.controlPointEnd = {
        x: action.payload.controlPointEnd.x,
        y: action.payload.controlPointEnd.y,
      }
    },
    SET_FINAL_ALPHA: (state, action) => {
      state.final = action.payload
    },
    SET_REVERSE_ALPHAS: (state, action) => {
      state.reverseAlphas = action.payload
    },
  },
})

export function finalAlphaSelector(state) {
  return state.alphas.final
}

export function reverseAlphasSelector(state) {
  return state.alphas.reverseAlphas
}

export function allAlphasSelector(state) {
  const {
    startPoint: p0,
    controlPointStart: p1,
    controlPointEnd: p2,
    endPoint: p3,
    final: finalAlpha,
  } = {
    ...state.alphas,
  }

  const curve = new Bezierjs(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y)
  let arr = []
  const num = state.numshadows.value

  for (let i = 1; i <= num; i++) {
    // Get point on curve between (1/num) and 1
    const point = curve.get(i / num)
    arr.push((1 - point.y) * finalAlpha)
  }
  return arr
}

export const {
  SET_ALPHA_CONTROL_POINTS,
  SET_FINAL_ALPHA,
  SET_REVERSE_ALPHAS,
} = alphasSlice.actions

export default alphasSlice.reducer
