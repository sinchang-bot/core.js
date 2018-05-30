const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]

function quicksortBasic(array) {
  if(array.length < 2) {
    return array;
  }

  const pivot = array[0];
  const lesser = [];
  const greater = [];

  for(let i = 1; i < array.length; i++) {
    if(array[i] < pivot) {
      lesser.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return quicksortBasic(lesser).concat(pivot, quicksortBasic(greater));
}

console.log(quicksortBasic(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(array.sort(function(a, b) {
  return a - b
}))

const arr = [1,2,2,3]
console.log(arr.includes(2))
console.log([...new Set(arr)])

const ret = []

arr.forEach(item => {
  if (!ret.includes(item)) {
    ret.push(item)
  }
})

console.log(ret)