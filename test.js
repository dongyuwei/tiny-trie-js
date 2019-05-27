const Trie = require("./trie.js");

function test() {
  const trie = new Trie();
  trie.insert("foo", 1);
  trie.insert("foobar", "fb");

  console.assert(trie.find("foobar") === "fb", 'trie.find("foobar") === fb');
  console.assert(trie.find("foo") === 1, 'trie.find("foo") === 1');
  console.assert(trie.find("bar") == null, 'trie.find("bar") == null');
}

test();
