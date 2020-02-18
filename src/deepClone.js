function deepClone(source) {
  if (source instanceof Object) {
    // 如果是对象则把这个对象里面的每个 key 对应的 value 进行深拷贝
    // 因为不只是一层，所以这里要用递归
    const dist = new Object()
    for(let key in source) {
      dist[key] = deepClone(source[key])
    }
    return dist
  }
  return source
}

module.exports = deepClone