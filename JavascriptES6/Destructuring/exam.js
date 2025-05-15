

// Destructuring with Array
var arr =['Js', 'PHP', 'Java'];

// using default value
const [a,b,c,d='support'] = arr;
console.log(a,b,c,d);

// using rest operator
const [x,...y] = arr;
console.log(x);
console.log(y);

// destructuring with Object
var objX = {
    'name': "JS",
    'age': 21,
    children: {
        'name': "Son",
        'age': 22
    }
}
const {name, age} = objX;

const {name: oldName,age: oldAge,desc = "description", children: {name: childrenName, age: childrenAge}} = objX;
console.log("---------",oldName, oldAge, desc,childrenName, childrenAge);

// rest operator with function
function info (...args) {
    console.log(args);
}
info(1,2,3,4,5); // [1,2,3,4,5]

// using Set
const arrX = new Set(['Js', 'PHP', 'Java']);console.log(arrX);
arrX.add('Python');
arrX.add('Java'); // cannot add duplicate
console.log(arrX);
arrX.delete('PHP');
console.log(arrX);
arrX.has('PHP');
console.log(arrX.has('PHP'));  // false
console.log(arrX.size); // 3

for (const item of arrX) {
    console.log(item);
}

// using Map
const myMap = new Map([
    ['name', 'Son'],
    ['age', 21]
]);
console.log(myMap); 
console.log(myMap.get('name'));
console.log(myMap.get('age'));
console.log(myMap.has('name')); // true
for (const [key, value] of myMap) {
    console.log(key, value);
}
const obj = { name: 'Son', age: 21 };
const map = new Map(Object.entries(obj));
console.log(map);
