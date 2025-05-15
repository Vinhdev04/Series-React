// Spread Operator
const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];
const res1 = [...arr1, ...arr2];
const res2 = arr1.concat(arr2);
console.log(res1); // ['a', 'b', 'c', 'd', 'e', 'f']
console.log(res2); // ['a', 'b', 'c', 'd', 'e', 'f']
res2.reverse();
console.log(res2); // ['f', 'e', 'd', 'c', 'b', 'a']
res2.sort().reverse();
console.log(res2

);
