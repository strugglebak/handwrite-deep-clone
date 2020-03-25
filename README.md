# handwrite-deep-clone
手写深拷贝

几种拷贝方法

- `Object.assign`
浅拷贝

- `lodash.deepClone`
深拷贝

- 扩展操作符 `{...a}`
浅拷贝

## 使用场景

### 默认选项
在如下代码中，我们不希望 `defaultConfig` 被修改

```js
var config = $.extend({}, defaultConfig, initConfig)
```

所以如果不希望被修改，才会选择深拷贝

### 部分修改一些状态
比如 React 的 `useState` 这个 hooks

## 更好方案
- [immutable.js](https://github.com/immutable-js/immutable-j)
- [immer.js](https://github.com/immerjs/immer)
