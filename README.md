# tiny-trie-js
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdongyuwei%2Ftiny-trie-js.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdongyuwei%2Ftiny-trie-js?ref=badge_shield)


Simple [trie](https://en.wikipedia.org/wiki/Trie) data structure implemented in JavaScript.

## Test

`npm test`

## API

```js
const Trie = require("tiny-trie-js");
const trie = new Trie();
```

1. `trie.insert(key, value);`
2. `trie.find(key);`
3. `trie.keysWithPrefix(prefix);`
4. `trie.serialize();`
5. `trie.deserialize(serialized);`

The `serialize` and `deserialize` algorithm is variant of [serialize-deserialize-n-ary-tree](https://www.geeksforgeeks.org/serialize-deserialize-n-ary-tree/)


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdongyuwei%2Ftiny-trie-js.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdongyuwei%2Ftiny-trie-js?ref=badge_large)