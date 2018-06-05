const { log } = require('../utils')

function Garget(name, color) {
  this.name = name
  this.color = color
  this.whatAreYou = function () {
    return `I am a ${this.color} ${this.name}`
  }
}

Garget.prototype.price = 100
Garget.prototype.rating = 3
Garget.prototype.getInfo = function () {
  return `Rating: ${this.rating}, Price: ${this.price}`
}

window.newToy = new Garget('webcam', 'black')

log(newToy.name)
log(newToy.rating) // 3
log(newToy.constructor === Garget) // true
log(newToy.constructor.prototype.rating) // 3
log(newToy.__proto__ === newToy.constructor.prototype) //  true

/**
 * 检查当前对象是否是另一个对象的原型
 */
log(Garget.prototype.isPrototypeOf(newToy)) // true

/**
 * 获取某个对象的原型
 */
log(Object.getPrototypeOf(newToy))

/**
 * 该方法会对所以非内建对象属性返回 true，如果调用的是来自原型链上的某个对象，那么该对象的属性是可枚举的
 */
log(newToy.propertyIsEnumerable('name')) // true
log(newToy.propertyIsEnumerable(constructor)) // false
log(newToy.propertyIsEnumerable('price')) // false
log(newToy.constructor.prototype.propertyIsEnumerable('price')) // true
