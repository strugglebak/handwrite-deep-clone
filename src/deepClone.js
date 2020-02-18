function deepClone(source) {
  if (source instanceof Object) {
    // 如果是对象则把这个对象里面的每个 key 对应的 value 进行深拷贝
    // 是对象的子类型还有 Array|Function|Date|Regex|Set|Map
    let dist
    if (source instanceof Array) { // Array 是 Object 的子类型 
      dist = new Array()
    } else if (source instanceof Function) { // Function 是 Object 的子类型
      dist = function() {
        // 使用 eval(source.toString()) 这种方式不行
        return source.apply(this, arguments)
      }
    } else {
      dist = new Object()
    }

    for(let key in source) {
      // 因为不只是一层，所以这里要用递归
      dist[key] = deepClone(source[key])
    }
    return dist

  }
  return source
}

module.exports = deepClone