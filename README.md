# tiny-trie-ts

Simple [trie](https://en.wikipedia.org/wiki/Trie) data structure implemented in TypeScript.

## Test

`pnpm test`

## API

```js
const { Trie } = require('tiny-trie-ts');
const trie = new Trie();
```

1. `trie.insert(key, value);`
2. `trie.find(key);`
3. `trie.keysWithPrefix(prefix);`
4. `trie.serialize();`
5. `trie.deserialize(serialized);`

The `serialize` and `deserialize` algorithm is variant of [serialize-deserialize-n-ary-tree](https://www.geeksforgeeks.org/serialize-deserialize-n-ary-tree/)
