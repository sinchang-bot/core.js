/**
 * 1、原型链继承（不推荐）
 * 2、借用构造函数继承（不推荐）
 * 3、组合继承
 * 4、原型式继承 Object.create()
 * 5、寄生式继承
 * 6、寄生组合式继承
 * 7、es6 class 继承
 */

 const { log } = require('../utils')

 // 组合继承 - 最常用的继承方式
function SuperType(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}

SuperType.prototype.sayName = function () {
  log(this.name)
}

function SubType(name, age) {
  SuperType.call(this, name)
  this.age = age
}

// 继承方法
SubType.prototype = new SuperType()
SubType.prototype.constructor = SubType
SubType.prototype.sayAge = function () {
  log(this.age)
}

const instance1 = new SubType('JEFF', '18')
instance1.colors.push('black') // ['red', 'blue', 'green', 'black]
log(instance1.colors)
instance1.sayAge() // 18
instance1.sayName() // JEFF

// 寄生组合式继承 - 引用类型最理想的继承范式
function inheritPrototype(subType, superType) {
  var prototype = Object(superType.prototype)
  prototype.constructor = subType
  subType.prototype = prototype
}

// class 继承
class Person {
  constructor(name) {
    this.name = name
  }

  sayName() {
    log(this.name)
  }
}

class Child extends Person {
  constructor(name, age) {
    super(name)
    this.age = age
  }

  sayAge() {
    log(this.age)
  }

  static sayHello() {
    log('hello')
  }
}

const child1 = new Child('sinchang', '19')
log(child1.name) // sinchang
log(child1.age) // 19
child1.sayAge() // 19
child1.sayName() // sinchang
child1.sayHello() // throw error: is not a function