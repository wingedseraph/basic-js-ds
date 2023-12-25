const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = this.addNode(this.rootNode, data);
  }

  addNode(node, data) {
    if (!node) {
      return new Node(data);
    }

    if (data < node.data) {
      node.left = this.addNode(node.left, data);
    } else if (data > node.data) {
      node.right = this.addNode(node.right, data);
    }

    return node;
  }

  has(data) {
    return this.search(this.rootNode, data) !== null;
  }

  find(data) {
    return this.search(this.rootNode, data);
  }

  search(node, data) {
    if (!node || node.data === data) {
      return node;
    }

    if (data < node.data) {
      return this.search(node.left, data);
    } else {
      return this.search(node.right, data);
    }
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (!node) {
      return null;
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
    } else {
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      }

      node.data = this.minValueNode(node.right).data;
      node.right = this.removeNode(node.right, node.data);
    }

    return node;
  }

  minValueNode(node) {
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current;
  }

  min() {
    const minNode = this.findMinNode(this.rootNode);
    return minNode ? minNode.data : null;
  }

  findMinNode(node) {
    if (!node) {
      return null;
    }

    let current = node;
    while (current.left) {
      current = current.left;
    }

    return current;
  }

  max() {
    const maxNode = this.findMaxNode(this.rootNode);
    return maxNode ? maxNode.data : null;
  }

  findMaxNode(node) {
    if (!node) {
      return null;
    }

    let current = node;
    while (current.right) {
      current = current.right;
    }

    return current;
  }
}

module.exports = {
  BinarySearchTree,
};
