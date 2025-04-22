let arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1 = [...arr1, 7, 8, 9, ...arr2];
console.log(arr1); // [1, 2, 3, 7, 8, 9, 4, 5, 6]

// arr1 = [...arr1, 7, 8, 9, arr2];
// const res = arr1.flat(...arr1);
// console.log(res); //  [1, 2, 3, 7, 8, 9, 4, 5, 6]

let user = {
  id: 1,
  name: "An",
  email: "pcv.fed@gmail.com",
  role: "user",
};

const update = {
  address: "HCM",
  favorite: "Coding",
  role: "admin",
};

console.log(user); // { id: 1, name: 'An', email: 'pcv.fed@gmail.com' ,role: 'user'}
user = { ...user, ...update };
console.log(user); // { id: 1, name: 'An', email: 'pcv.fed@gmail.com', address: 'HCM', favorite: 'Coding' ,role: 'admin'}
