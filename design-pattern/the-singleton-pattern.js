var SingleTonTester = (function() {
  function SingleTon(options) {
    options = options || {}
    this.name = 'SingleTonTester'
    this.pointX = options.pointX || 6
    this.pointY = options.pointY || 10
  }

  var instance

  var _static = {
    name: 'SingleTonTester',
    getInstance: function(options) {
      if (instance === undefined) {
        instance = new SingleTon(options)
      }
      return instance
    }
  }

  return _static
})()


var singleTonTest = SingleTonTester.getInstance({
  pointX: 5
})

console.log(singleTonTest.pointX) // 5