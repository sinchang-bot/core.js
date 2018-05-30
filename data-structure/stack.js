/**
 * https://www.jianshu.com/p/eade026ffaf5
 * 栈（stack），它是一种运算受限的线性表,后进先出(LIFO)
 */

class Stack {
  constructor() {
    this.items = []
  }

  // 添加一个新元素到栈顶位置
  push(element) {
    this.items.push(element)
  }

  // 移除栈顶的元素，同时返回被移除的元素
  pop() {
    return this.items.pop()
  }

  // 返回栈顶的元素
  peek() {
    return this.items[this.items.length - 1]
  }

  // 判断栈中是否有元素
  isEmpty() {
    return !this.items.length
  }

  // 获取栈中元素的个数.
  size() {
    return this.items.length
  }
}

var stack = new Stack()

stack.push(1)
stack.push(9)
console.assert(stack.items.length === 2)
console.assert(stack.pop() === 9)
stack.push(7)
console.assert(stack.peek() === 7)
console.assert(stack.isEmpty() === false)
console.assert(stack.size() === 2)
