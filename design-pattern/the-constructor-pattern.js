// The three common ways to create new objects in JavaScript
// var newObject = {}
// var newObject = Object.create(Object.prototype)
// var newObject = new Object()

// Object.defineProperty
var person = Object.create(Object.prototype)

Object.defineProperty(person, 'name', {
  value: 'sinchang',
  writable: true,
  enumerable: true,
  configurable: true
})

// console.log(person) // { name: 'sinchang' }

Object.defineProperties(person, {
  name: {
    value: 'jeff',
    writable: true
  },
  age: {
    value: '18',
    writable: true
  }
})

console.log(person)

// Basic Constructors

function Car (model, year, miles) {
  this.model = model
  this.year = year
  this.miles = miles

  this.toString = function () {
    return this.model + ' has done ' + this.miles + ' miles'
  }
}

var civic = new Car('Honda Civic', 2008, 2000)

console.log(civic.toString()) // Honda Civic has done 2000 miles

// One is that it makes inheritance difficult and the other is that functions such as toString() are redefined for each of the new objects created using the Car constructor.

// Constructors With Prototypes

function Person (firstname, lastname, age) {
  this.firstname = firstname
  this.lastname = lastname
  this.age = age
}

Person.prototype.getEmail = function () {
  return this.firstname + '.' + this.lastname + '@gmail.com'
}

var person = new Person('jeff', 'wen', 18)

console.log(person.getEmail()) // jeff.wen@gmail.com