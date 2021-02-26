import { configureStore } from '@reduxjs/toolkit'
import numshadowsReducer from '../components/shadowsControl/numshadowsSlice'
import alphasReducer from '../components/opacityControl/alphasSlice'
import vdistancesReducer from '../components/vdistanceControl/vdistancesSlice'
import blursReducer from '../components/blurControl/blursSlice'
import spreadReducer from '../components/spreadControl/spreadSlice'

export default configureStore({
  reducer: {
    alphas: alphasReducer,
    numshadows: numshadowsReducer,
    vdistances: vdistancesReducer,
    blurs: blursReducer,
    spread: spreadReducer,
  },
})
