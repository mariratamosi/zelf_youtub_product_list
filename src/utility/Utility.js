export const numFormatter = (num) => {
  if (num > 999 && num < 1000000) {
    return formatFloating(num / 1000) + "K" // convert to K for number from > 1000 < 1 million
  } else if (num >= 1000000) {
    return formatFloating(num / 1000000) + "M" // convert to M for number from > 1 million
  } else if (num < 900) {
    return num // if value < 1000, nothing to do
  }
}

const formatFloating = (num) => {
  if (Math.floor(num) === num) return num
  return num.toFixed(1)
}
