### 🍭 It's Like Lodash get with the 💪 of Typescript

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

#### 

## Installation
`npm install @datorama/ts-safe-access --save`

- `get(object, getFn[, defaultValue])` - Gets the value at path of object. If the resolved value is `undefined`, the defaultValue is returned in its place.

```js
const data = {its: {really: {really: {really: {nested : undefined}}}}, b: {}};
const result = get(data, data => data.its.really.really.really.nested, 'defaultValue');
```

- `has(object, getFn)` - Checks if path is a direct property of object.

```js
const data = {its: {really: {really: {}}, b: {}};
const result = has(data, data => data.its.really.really.really.nested);

expect(result).toEqual(false);
```


