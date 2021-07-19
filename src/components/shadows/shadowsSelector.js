import { createSelector } from '@reduxjs/toolkit'
import { totalNumShadowsSelector } from '../shadowsControl/numshadowsSlice'
import { allAlphasSelector } from '../opacityControl/alphasSlice'
import { reverseAlphasSelector } from '../opacityControl/alphasSlice'
import { allBlursSelector } from '../blurControl/blursSlice'
import { allVdistancesSelector } from '../vdistanceControl/vdistancesSlice'
import { spreadSelector } from '../spreadControl/spreadSlice'
import { round } from '../../utils'

export const getAllShadows = createSelector(
  totalNumShadowsSelector,
  allAlphasSelector,
  reverseAlphasSelector,
  allBlursSelector,
  allVdistancesSelector,
  spreadSelector,
  (numShadows, allAlphas, reverseAlphas, allBlurs, allVdistances, spread) => {
    let styles = ''
    let formatted = ''
    let cloneAlphas = [...allAlphas]

    if (reverseAlphas) {
      cloneAlphas.reverse()
    }

    for (let i = 0; i < numShadows; i++) {
      const a = round(cloneAlphas[i], 3)
      const v = round(allVdistances[i], 2)
      const b = round(allBlurs[i], 2)
      const s = spread ? ` ${spread}px` : ''
      const sf = spread ? ` <span class="value">${spread}px</span>` : ''
      const endline = i === numShadows - 1 ? '' : ',\n'
      const breakline = i === numShadows - 1 ? '' : ',<br />'
      styles += `0 ${v}px ${b}px${s} rgba(0, 0, 0, ${a})${endline}`
      formatted += `&nbsp; &nbsp;0 <span class="value">${v}</span>px <span class="value">${b}</span>px${sf} rgba(0, 0, 0, <span class="value">${a}</span>)${breakline}`
    }

    styles += ';'
    formatted += ';'

    return { styles, formatted }
  }
)
