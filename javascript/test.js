// Factorial of a number
function fact(num) {
  if (num === 1) {
    return 1
  }
  return num * fact(num-1)
}

// Length of biggest word in a string
function longest(str) {
  const arr = str.split(' ')
  let aux = 0
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length > aux) {
      aux = arr[i].length
    }
  }
  return aux
}
//console.log(longest("My name is Lucas Terças"))

// Find the largest number in each array of arrays
function findLargest(arr) {
  let aux = []
  for(let i = 0; i < arr.length; i++) {
    let largest = 0;
    for(let j = 0; j < arr[i].length; j++) {
      largest = Math.max(...arr[i])
    }
    aux.push(largest)
  }
  return aux
}
/*
let arr =[[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]
console.log(findLargest(arr))
*/

// Check if str ends with target
function endsWith(str, target) {
  const size = target.length
  const sub = str.substring(str.length-size, str.length)
  console.log(target === sub)
}
//endsWith('Bastian', 'ian')

function repeatStr(str, num) {
  let aux = ""
  if (num > 0) {
    for(let i = 0; i < num; i++) {
      aux += str;
    }
  }
  return aux
}

function truncateString(str, num) {
  if (num < str.length) {
    let result = ""
    result = str.substring(0, num)
    result += "..."
    console.log(result)
  }
  console.log(str)
}
//truncateString('A-tisket a-tasket A green and yellow basket', 8)

function findElement(arr, func) {
  for(let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i]
    }
  }
  return undefined
}
//const result = findElement([1, 2, 3, 5, 9, 10], function(num) { return num % 2 === 0; })
//console.log(result)

function titleCase(str) {
  let arr = str.split(' ').map(w => {
    w = w.toLowerCase()
    const upper = w[0].toUpperCase()
    return upper + w.substring(1, w.length)
  }).join(' ')
  return arr
}
//console.log(titleCase('LUCAS DE MACEDO TERCAS'))

function splice(arr1, arr2, n) {
  let result = arr2.slice(n)
  result.unshift(...arr1)
  result.unshift(...arr2.slice(0, n))
  return result
}
//console.log(splice([1, 2, 3], [4, 5], 1)) // -> [4, 1, 2, 3, 5, 6]

function getIndexToIns(arr, num) {
  if (arr === []) {
    return 0;
  }
  arr.sort((a, b) => a-b)

  let result = 0
  for (let i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      result = i
    }
  }

  console.log(result)
}
//getIndexToIns([2, 20, 10], 19)


let globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  let aux = []
  aux = aux.concat([...globalArray])

  aux.sort((a, b) => a-b);
  console.log(aux);

  return aux
}

function palindromeChecker(word) {
  let regex = /[\W_]/
  word = word.split(regex).join('').toLowerCase()

  console.log("Treatment:", word)


  for(let i = 0; i < word.length/2; i++) {
    if (word[i] != word[word.length-i-1]) {
      return false
    }
  }

  return true
}
console.log(palindromeChecker("1 eye for of 1 eye."))

