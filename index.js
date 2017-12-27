
function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break
    }
    array[i] = changeValue
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue
    }
    array[i] = changeValue
  }
  return array

}

function findBy(array, findFn) {
  var debug
  for (let i = 0; i < array.length; i++) {
    debug = findFn
    print(findFn)
    if (array[i] === debug) {
      return (array[i])
      break
    }
    print(array[i])
  }
  return(null)
}
