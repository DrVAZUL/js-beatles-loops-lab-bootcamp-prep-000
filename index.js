function theBeatlesPlay(arrayMusic, arrayIns) {
  var array = new Array()
  for(var y = 0; y < arrayMusic.length; y++) {
      array.push(`${arrayMusic[y]} plays ${arrayIns[y]}`)
    }
    return array
  }

function johnLennonFacts(arrayFacts) {
var newFacts = new Array()
  var x = 0
   while(x < arrayFacts.length) {
    newFacts.push(`${arrayFacts[x]}!!!`)
    x++
  }
    return newFacts
  }
