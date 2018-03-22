var a = 'global'

var F = function() {
  var b = 'local'
  var N = function() {
    var c = 'inner'
    return b
  }

  return N
}

var inner = F()

console.log(inner()) // local