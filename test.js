const assert = require("assert");
const Trie = require("./trie.js");

function test() {
  const trie = new Trie();
  trie.insert("abf", "11");
  trie.insert("ab", "111");
  trie.insert("ac", "22");
  trie.insert("ad", "33");
  trie.insert("ade", "44");
  trie.insert("foo", "ff");
  trie.insert("foobar", "fb");
  trie.insert("bar", "bb");
  trie.insert("测验", "");
  trie.insert("测试", "");

  assert.equal(trie.find("foo").value, "ff");
  assert.equal(trie.find("bar").value, "bb");
  assert.equal(trie.find("fb"), null);

  assert.deepEqual(trie.keysWithPrefix("a"), ["ab", "abf", "ac", "ad", "ade"]);
  assert.deepEqual(trie.keysWithPrefix("foo"), ["foo", "foobar"]);
  assert.deepEqual(trie.keysWithPrefix("hhhhhhh"), []);
  assert.deepEqual(trie.keysWithPrefix("测"), ["测试", "测验"]);

  const serialized = "ab$f$))c$)d$e$)))foo$bar$))))))bar$)))测验$)试$))";
  assert.equal(trie.serialize(), serialized);

  const trie2 = trie.deserialize(serialized);
  assert.equal(trie2.serialize(), serialized);
}
setImmediate(test);
