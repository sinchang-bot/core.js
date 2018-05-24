
function parseToMany(v) {
  const s = v.toString()
  const arr = s.split('.')
  let s1 = ''
  const s2 = reverse(arr[0])
  s2.split('').forEach((item, index) => {
    if (index % 3 === 0 && index !== 0) {
      s1 += ','
    }
    s1 += item
  })
  return reverse(s1) + (arr[1] ? '.' + arr[1] : '')
}

function reverse(str) {
  return str.split('').reverse().join('')
}

console.assert(parseToMany(1234.56) === '1,234.56')
console.assert(parseToMany(123456789) === '123,456,789')
console.assert(parseToMany(1087654.321) === '1,087,654.321')