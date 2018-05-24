// https://www.kirupa.com/html5/shuffling_array_js.htm
function shuffle(input) {
  for (var i = input.length - 1; i >= 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1))
    var itemAtIndex = input[randomIndex]

    input[randomIndex] = input[i]
    input[i] = itemAtIndex
  }
  return input
}

var tempArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(shuffle(tempArray))