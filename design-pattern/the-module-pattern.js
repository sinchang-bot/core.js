var basketModule = (function () {
  var basket = []

  
  function doSomethingPrivate() {
    //...
  }
 
  function doSomethingElsePrivate() {
    //...
  }

  return {
    addItem: function (v) {
      basket.push(v)
    },
    getItemCount() {
      return basket.length
    },
    doSomethinf: doSomethingPrivate,
    getTotal: function () {
      var q = this.getItemCount(),
          p = 0

      while (q--) {
        p += basket[q].price
      }

      return p
    }
  }
})()

basketModule.addItem({
  item: 'bread',
  price: 0.5
})

basketModule.addItem({
  item: 'butter',
  price: 0.8
})

console.log(basketModule.getItemCount())
console.log(basketModule.getTotal())
console.log(basketModule.basket) // undefined
console.log(basket) // throw error
