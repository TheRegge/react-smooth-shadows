const Round = (num, decimals) => {
  let factor = 1
  while (decimals) {
    factor *= 10
    decimals--
  }

  return Math.round(num * factor) / factor
}
export default Round
