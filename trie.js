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
      node.char = char;
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
    _traverse(node, prefix.split(""), result);
    return result.sort();
  }

  serialize() {
    const stack = [];
    _serialize(this.root, stack);
    return stack.join("");
  }

  deserialize(serialized) {
    serialized = serialized.split("");
    const length = serialized.length;
    const trie = new Trie();
    const words = [];
    const word = [];
    let index = 0;
    while (index < length) {
      const char = serialized[index];
      switch (char) {
        case EndFlag:
          words.push(word.join(""));
          break;
        case PopOpetator:
          word.pop();
          break;
        default:
          word.push(char);
          break;
      }
      index++;
    }
    words.forEach(w => {
      trie.insert(w);
    });
    return trie;
  }
}

function _traverse(node, prefixStack, result) {
  if (node.isWord) {
    result.push(prefixStack.join(""));
  }
  for (const char in node.children) {
    const child = node.children[char];
    prefixStack.push(char);
    _traverse(child, prefixStack, result);
    prefixStack.pop();
  }
}

const EndFlag = "$";
const PopOpetator = ")";
function _serialize(node, stack) {
  stack.push(node.char);
  if (node.isWord) {
    stack.push(EndFlag);
  }
  for (const char in node.children) {
    const child = node.children[char];
    _serialize(child, stack);
    stack.push(PopOpetator);
  }
}

module.exports = Trie;
