import { createSlice } from '@reduxjs/toolkit'

export const spreadSlice = createSlice({
  name: 'spread',
  initialState: {
    value: 0,
  },
  reducers: {
    SET_SPREAD: (state, action) => {
      state.value = action.payload
    },
  },
})

export function spreadSelector(state) {
  return state.spread.value
}

export const { SET_SPREAD } = spreadSlice.actions
export default spreadSlice.reducer
