
exports.min = function min (array) {
    if (array == undefined || array == null || array.length == 0) {
        return 0;
      }
  return Math.min(...array);
}

exports.max = function max (array) {
    if (array == undefined || array == null || array.length == 0) {
        return 0;
      }
  return Math.max(...array);
}

exports.avg = function avg (array) {
    if (array == undefined || array == null || array.length == 0) {
        return 0;
    }
    let sumOfArray = array.reduce((a,b) => a + b);
    let averageNumber = sumOfArray / array.length;
    return averageNumber;
}



