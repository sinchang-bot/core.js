// 事实上，每个函数都可以被认为是闭包，因为每个函数都在其作用域中维护了某种私有联系

function F(params) {
  var N = function() {
    return params
  }

  params++

  return N
}

var inner = F(123)

console.log(inner())  // 124