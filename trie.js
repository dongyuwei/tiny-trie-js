class Node {
  constructor() {
    this.value = null;
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(key, value = null) {
    const length = key.length;
    let node = this.root;
    for (let i = 0; i < length; i++) {
      const char = key.charAt(i);
      if (!node.children[char]) {
        node.children[char] = new Node();
      }
      node = node.children[char];
    }
    node.value = value;
  }

  find(key) {
    const length = key.length;
    let node = this.root;
    for (let i = 0; i < length; i++) {
      const char = key.charAt(i);
      if (node.children[char]) {
        node = node.children[char];
      } else {
        return null;
      }
    }
    return node.value;
  }
}

module.exports = Trie;
