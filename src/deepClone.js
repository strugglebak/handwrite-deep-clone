function deepClone(source) {
  if (source instanceof Object) {
    // 如果是对象则把这个对象里面的每个 key 对应的 value 进行深拷贝
    if (source instanceof Array) { // Array 是 Object 的子类型 
      const dist = new Array()
      for(let key in source) {
        // 因为不只是一层，所以这里要用递归
        dist[key] = deepClone(source[key])
      }
      return dist
    } else {
      const dist = new Object()
      for(let key in source) {
        // 因为不只是一层，所以这里要用递归
        dist[key] = deepClone(source[key])
      }
      return dist
    }
  }
  return source
}

module.exports = deepClone