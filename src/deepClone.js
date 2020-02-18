class DeepCloner {
  constructor() {
   // 用于检测环用
    this.cache = []
  }

  clone(source) {
    if (source instanceof Object) {
      const cacheDist = this.getCache(source)
      if (cacheDist) {
        // 有缓存则返回缓存
        return cacheDist
      } else {
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
        } else if (source instanceof RegExp) {
          dist = new RegExp(source.source, source.flags)
        } else if (source instanceof Date) {
          dist = new Date(source)
        } else {
          dist = new Object()
        }
        // 这里必须要在 deppClone 递归之前保存 cache 
        // 不然会一直 deepClone 而保存不了
        this.cache.push([source, dist])
        for(let key in source) {
          // 不考虑 __proto__ 上的
          if (source.hasOwnProperty(key)) {
            // 因为不只是一层，所以这里要用递归
            dist[key] = this.clone(source[key])
          }
        }
        return dist
      }
    }
    return source
  }

  getCache(source) {
    for(let i = 0; i < this.cache.length; i++) {
      // [[souce, dist], ...]
      if (this.cache[i][0] === source) {
        return this.cache[i][1] // return dist
      }
    }
    return undefined
  }
}

module.exports = DeepCloner