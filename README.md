# commonform-alex
Critique contracts in [Common Form](https://github.com/commonform) for insensitive language using [Alex](https://github.com/wooorm/alex).

```javascript
var annotator = require('./index')
var assert = require('assert');

// Single tests

assert.deepEqual(
  annotator({ content: [ 'Hey bro!' ] }),
  [ { message: '\"bro\" may be insensitive',
        level: "info",
        path: [ 'content', 0 ],
        source: 'commonform-alex',
        url: null } ] )

assert.deepEqual(
  annotator({ content: [ 'What does she think?' ] }),
  [ { message: '\"she\" may be insensitive',
        level: "info",
        path: [ 'content', 0 ],
        source: 'commonform-alex',
        url: null } ] )

// Double test

assert.deepEqual(
  annotator({ content: [ 'What does she think about the bro?' ] }),
  [ { message: '\"she\" may be insensitive',
        level: "info",
        path: [ 'content', 0 ],
        source: 'commonform-alex',
        url: null },
    { message: '\"bro\" may be insensitive',
          level: "info",
          path: [ 'content', 0 ],
          source: 'commonform-alex',
          url: null } ] )

// Exclusion test

assert.deepEqual(
  annotator({ content: [ 'Talking about paternity is acceptable in family law cases, so we allow it.' ] }),
  [ ] )

// Many test

assert.deepEqual(
  annotator({ content: [ 'The boogeyman wrote all changes to the master server. Thus, the slaves were read-only copies of master. But not to worry, he was a cripple.' ] }),
  [ { message: '\"he\" may be insensitive',
        level: "info",
        path: [ 'content', 0 ],
        source: 'commonform-alex',
        url: null },
    { message: '\"boogeyman\" may be insensitive',
      level: "info",
      path: [ 'content', 0 ],
      source: 'commonform-alex',
      url: null },
    { message: '\"cripple\" may be insensitive',
      level: "info",
      path: [ 'content', 0 ],
      source: 'commonform-alex',
      url: null },
    { message: '\"master\" may be insensitive',
      level: "info",
      path: [ 'content', 0 ],
      source: 'commonform-alex',
      url: null },
    { message: '\"slaves\" may be insensitive',
      level: "info",
      path: [ 'content', 0 ],
      source: 'commonform-alex',
      url: null } ]);
```
