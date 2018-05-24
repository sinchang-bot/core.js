function binData(obj, func) {
  for (let k in obj) {
    Object.defineProperty(obj, k, {
      set(value) {
        console.log(`${k}值变成${value}`)
      }
    });
  }
}

const obj = {
  key1: 2,
  key2: 3
}

binData(obj)

obj.key1 = 2
obj.key2 = 2