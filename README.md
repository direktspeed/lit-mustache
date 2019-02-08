# lit-mustache

[![Greenkeeper badge](https://badges.greenkeeper.io/direktspeed/lit-mustache.svg)](https://greenkeeper.io/)

## Usage
```js
const mustache = require('lit-mustache')
const template = (scope) => mustache`<p>{{name}}</p>`(scope)
```

## syntax highlighting for vscode
https://github.com/direktspeed/vscode-lit-mustache

## TODO
Will Work
mustache should have access to this as scope and so use its name
needs evaluation whats the this context when imported and used as function mustache and fat arrow
```js
const mustache = require('lit-mustache');
const template = (name) => mustache`<p>{{name}}</p>`;

```

need to add some more tests