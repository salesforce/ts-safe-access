### 🍭 It's Like Lodash get with the 💪 of Typescript

[![Build Status](https://semaphoreci.com/api/v1/netanel7799/ts-safe-access/branches/master/badge.svg)](https://semaphoreci.com/netanel7799/ts-safe-access)
[![License](https://img.shields.io/dub/l/vibe-d.svg?style=flat-square)]()
[![Stars](https://img.shields.io/redmine/plugin/stars/redmine_xlsx_format_issue_exporter.svg?style=flat-square)]()

#### 

## Installation
`npm install @datorama/ts-safe-access --save`

## Usage

- `get(object, getFn[, defaultValue, excludeNull = false])` - Gets the value at path of object. If the resolved value is `undefined`, the defaultValue is returned in its place.  
- When `excludeNull` is set to true, if the resolved value is `null`, the defaultValue is returned in its place.


```js
const data = {its: {really: {really: {really: {nested : undefined}}}}, nested: {value: null}};
const result = get(data, data => data.its.really.really.really.nested, 'defaultValue');
```

- `has(object, getFn)` - Checks if path is a direct property of object.

```js
const data = {its: {really: {really: {}}, b: {}};
const result = has(data, data => data.its.really.really.really.nested);

expect(result).toEqual(false);
```


