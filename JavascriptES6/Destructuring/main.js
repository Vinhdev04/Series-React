const user = ["Vinh", "An", "Lofi", "Double"];
console.log(user); // ["Vinh", "An", "Lofi", "Double"]

// *destructuring - array*
const [user01, user02, user03, user04] = user;
console.log(user01, user02, user03, user04); // ["Vinh", "An", "Lofi", "Double"]

const obj = {
  name: "Kaka",
  email: "pcv.fed@gmail.com",
  address: "hcm",
  job: ["FE", "BE", "FT"],
};
console.log(obj); // { name: 'Kaka', email: 'pcv.fed@gmail.com', address: 'hcm' }
console.log(obj.name); // Kaka
console.log(obj.email); // pcv.fed@gmail.com
console.log(obj.address); // 'hcm'

// *destructuring - object*
const { name, email, address, job } = obj;
console.log(name, email, address, job); // [ 'Kaka', 'pcv.fed@gmail.com', 'hcm' ]

// *destructuring - bỏ qua phần tử ko cần thiết*
const info = ["age", "height", "width"];
const [age, height, width, IQ = "100"] = info;
console.log(info);
console.log(height);
console.log(width);

// *destructuring - thiết lập giá trị mặc định*
console.log(age); // undefined
console.log(IQ); // 100

// *destructuring - với rest parameter*
const log = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [num0, ...rest] = log;
console.log(num0); // 1
console.log(rest); // 2, 3, 4, 5, 6, 7, 8, 9

const content = {
  size: 20,
  graduation: "HKT",
  music: "BBT",
};
const { size, ...restX } = content;
console.log(size); // 20
console.log(restX); //  { graduation: 'HKT', music: 'BBT' }

const infoUser = {
  username: "pcv",
  position: "student",
};

const { username, position } = infoUser;
console.log(infoUser); // { username: 'pcv', position: 'student' }

// *destructuring - đổi tên biến*
const { username: user_Name, position: post } = infoUser;
console.log(infoUser); // { username: 'pcv', position: 'student' }
console.log(user_Name); // 'pcv'
console.log(post); // 'student'

// *destructuring - thiết lập giá trị mặc định*
const { username: nameFirst, position: postFirst, gender = "Male" } = infoUser;
console.log(infoUser); // { username: 'pcv', position: 'student' }
console.log(nameFirst); // 'pcv'
console.log(postFirst); // 'student'
console.log(gender); // Male

// *destructuring - với rest parameter*
const { username: nameInfo, ...restInfo } = infoUser;
console.log(nameInfo); // pcv
console.log(restInfo); //   position: "student"
