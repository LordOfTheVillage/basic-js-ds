const { NotImplementedError } = require("../extensions/index.js")

const { ListNode } = require("../extensions/list-node.js")

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this._root = null
  }

  getUnderlyingList() {
    // console.log(this._root)
    return this._root
  }

  dequeue() {
    if (!this._root) return null
    let temp = this._root.value
    this._root = this._root.next
    return temp
    // let temp = this._root.value
    // if (this._root.next) this._root = this._root.next
    // else this._root = new ListNode(null)
    // return temp
  }
  enqueue(value) {
    const enqueueList = (node, value) => {
      if (!node) {
        const newNode = new ListNode(value)
        return newNode
      }
      if (node.value === value) return node
      node.next = enqueueList(node.next, value)
      return node
    }
    this._root = enqueueList(this._root, value)
    // this._root = enqueueList(this._root, value)
    // function enqueueList(node, value) {
    //   if (!node.value) {
    //     node.value = value
    //     return node
    //   }
    //   if (!node.next) {
    //     node.next = new ListNode(value)
    //     return node
    //   }
    //   node.next = enqueueList(node.next, value)
  }
}
// console.log("hello")
// console.log(new ListNode(null))
const queue = new Queue()
queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
console.log(queue.dequeue(), 5)
console.log(queue.dequeue(), 6)

// function Queue() {
//   this.queue = {};
//   this.tail = 0;
//   this.head = 0;
// }
// // Add an element to the end of the queue.
// Queue.prototype.enqueue = function(element) {
//   this.queue[this.tail++] = element;
// }
// // Delete the first element of the queue.
// Queue.prototype.dequeue = function() {
//   if (this.tail === this.head)
//       return undefined
//   var element = this.queue[this.head];
//   delete this.elements[this.head++];
//   return element;
// }

module.exports = {
  Queue,
}
