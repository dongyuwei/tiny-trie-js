class Node {
  constructor() {
    this.value = null;
    this.children = {
      /* Char: Node */
    };
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
    node.isWord = true;
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
    return node;
  }

  keysWithPrefix(prefix) {
    const node = this.find(prefix);
    if (!node) {
      return [];
    }
    const result = [];
    this.traverse(node, prefix.split(""), result);
    return result
      .map(chars => {
        return chars.join("");
      })
      .sort();
  }

  traverse(root, prefix, result) {
    if (root.isWord) {
      result.push([...prefix]); //clone the Array
    }
    for (const char in root.children) {
      const child = root.children[char];
      prefix.push(char);
      this.traverse(child, prefix, result);
      prefix.pop();
    }
  }
}

module.exports = Trie;
