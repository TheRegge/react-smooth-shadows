import { createSlice } from '@reduxjs/toolkit'

export const numshadowsSlice = createSlice({
  name: 'numshadows',
  initialState: {
    value: 6,
  },
  reducers: {
    setNumshadows: (state, action) => {
      state.value = action.payload
    },
  },
})

export function totalNumShadowsSelector(state) {
  return state.numshadows.value
}

export const { setNumshadows } = numshadowsSlice.actions
export default numshadowsSlice.reducer
