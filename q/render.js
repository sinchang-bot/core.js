function render(tpl, data) {
  for (k in data) {
    const re = new RegExp(`{{\\s*${k}\\s*}}`, 'g')
    tpl = tpl.replace(re, data[k])
  }
 return tpl
}

const str = `hello {{name}}, I am {{age}}`

console.log(render(str, {
  name: 'jeff',
  age: 18
}))