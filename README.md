# commonform-alex
Critique contracts in [Common Form](https://github.com/commonform) for insensitive language using [Alex](https://github.com/wooorm/alex).

```javascript
var annotator = require('./index')
var assert = require('assert');

assert.deepEqual(
  annotator({ content: [ 'The boogeyman wrote all changes to the master server. Thus, the slaves were read-only copies of master. But not to worry, he was a cripple.' ] }),
  [ { message: '\"boogeyman\" may be insensitive, use \"boogey\" instead',
      level: "info",
      path: [ 'content', 0 ],
      source: 'alex',
      url: null },
    { message: '\"master\" / \"slaves\" may be insensitive, use \"primary\" / \"replica\" instead',
      level: "info",
      path: [ 'content', 0 ],
      source: 'alex',
      url: null },
    { message: '\"he\" may be insensitive, use \"they\", \"it\" instead',
      level: "info",
      path: [ 'content', 0 ],
      source: 'alex',
      url: null },
    { message: '\"cripple\" may be insensitive, use \"person with a limp\" instead',
      level: "info",
      path: [ 'content', 0 ],
      source: 'alex',
      url: null } ]);
```
