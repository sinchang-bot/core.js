var inner

var F = function() {
  var b = 'local'
  var N = function() {
    return b
  }

  inner = N
}

F()

console.log(inner()) // local