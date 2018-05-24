let url = 'http://example.com?user=sinchang&id=1c&id=23&city=%E5%8C%97%E4%BA%AC&enable'

function parseParam(url) {
  const arr1 = url.split('?')[1]
  const arr2 = arr1.split('&')
  const ret = {}
  arr2.forEach(item => {
    const arr3 = item.split('=')
    if (ret[arr3[0]]) {
      const v1 = ret[arr3[0]]
      const v2 = arr3[1]
      ret[arr3[0]] = [Number(...v1), Number(v2)]
    } else {
      ret[arr3[0]] = arr3[1] ? decodeURIComponent(arr3[1]) : true
    }
  })
  return ret
}

console.log(parseParam(url))