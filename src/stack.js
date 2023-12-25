const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.item = [];
  }
  push(element) {
    this.item.push(element);
  }

  pop() {
    if (this.item.length === 0) {
      return undefined;
    }

    return this.item.pop();
  }

  peek() {
    if (this.item.length === 0) {
      return undefined;
    }
    return this.item[this.item.length - 1];
  }
}
const debug = new Stack();
debug.push(0);
// stack.push("word");
console.debug(debug.peek());

module.exports = {
  Stack,
};
