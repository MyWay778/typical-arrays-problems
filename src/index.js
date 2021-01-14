
exports.min = function min (array) {
  if (!array || !array.length) {
    return 0
  }
  let minValue = array[0] 
  for (let i = 0; i < array.length; i++) {
    if (minValue > array[i]) {
      minValue = array[i]
    }
  }
  return minValue
}

exports.max = function max (array) {
  if (array && array.length) {
    return Math.max(...array)
  }
  return 0;
}

exports.avg = function avg (array) {
  if (array && array.length) {
    return array.reduce((sum, current) => sum + current ) / array.length
  }
  return 0;
}
