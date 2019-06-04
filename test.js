const assert = require("assert");
const Trie = require("./trie.js");

function test() {
  console.log(
    "The trie:",
    `
      a
      |
      b
     / \\
    c   d
    / \\
   d   e
  `
  );
  const trie = new Trie();
  trie.insert("abcd");
  trie.insert("abce");
  trie.insert("abc");
  trie.insert("abd");
  console.log("===", trie.keysWithPrefix("a"));

  //  [abcd, abce, abc, abd]
  // trie.insert("abf", "11");
  // trie.insert("ab", "111");
  // trie.insert("ac", "22");
  // trie.insert("ad", "33");
  // trie.insert("ade", "44");
  // trie.insert("foo", "ff");
  // trie.insert("foobar", "fb");
  // trie.insert("bar", "bb");
  // trie.insert("测验", "");
  // trie.insert("测试", "");

  // assert.equal(trie.find("foo").value, "ff");
  // assert.equal(trie.find("bar").value, "bb");
  // assert.equal(trie.find("fb"), null);

  // assert.deepEqual(trie.keysWithPrefix("a"), ["ab", "abf", "ac", "ad", "ade"]);
  // assert.deepEqual(trie.keysWithPrefix("foo"), ["foo", "foobar"]);
  // assert.deepEqual(trie.keysWithPrefix("hhhhhhh"), []);
  // assert.deepEqual(trie.keysWithPrefix("测"), ["测试", "测验"]);
}

test();
