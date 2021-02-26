import { createSlice } from '@reduxjs/toolkit'

export const numshadowsSlice = createSlice({
  name: 'numshadows',
  initialState: {
    value: 6,
  },
  reducers: {
    SET_NUM_SHADOWS: (state, action) => {
      state.value = action.payload
    },
  },
})

export function totalNumShadowsSelector(state) {
  return state.numshadows.value
}

export const { SET_NUM_SHADOWS } = numshadowsSlice.actions
export default numshadowsSlice.reducer
