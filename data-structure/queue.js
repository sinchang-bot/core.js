/**
 * https://www.jianshu.com/p/ca1bb95ada76
 * 队列(Queue)，它是一种运算受限的线性表,先进先出(FIFO First In First Out)
 */

class Queue {
  constructor() {
    this.items = []
  }

  // 向队列尾部添加一个（或多个）新的项
  enqueue(element) {
    this.items.push(element)
  }

  // 移除队列的第一（即排在队列最前面的）项，并返回被移除的元素
  dequeue() {
    return this.items.shift()
  }

  // 返回队列中第一个元素——最先被添加，也将是最先被移除的元素
  front() {
    return this.items[0]
  }

  // 判断队列是否为空
  isEmpty() {
    return !this.items.length
  }

  // 返回队列包含的元素个数
  size() {
    return this.items.length
  }
}

var queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
console.assert(queue.items.length === 2)
console.assert(queue.dequeue() === 1)
console.assert(queue.front() === 2)
console.assert(queue.isEmpty() === false)
console.assert(queue.size() === 1)