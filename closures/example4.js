// 循环中的闭包

function F() {
  var arr = [], i

  for (i = 0; i < 3; i++) {
    arr[i] = function() {
      return i
    }
  }

  return arr
}

var arr = F()

console.log(arr[0]()) // 3
console.log(arr[1]()) // 3
console.log(arr[2]()) // 3

// 改写 使用 let 或者 

function F1() {
  var arr = [], i

  for (i = 0; i < 3; i++) {
    arr[i] = (function(x) {
      return function(){
        return x
      }
    })(i)
  }

  return arr
}

var arr1 = F1()

console.log(arr1[0]()) // 0
console.log(arr1[1]()) // 1
console.log(arr1[2]()) // 2
