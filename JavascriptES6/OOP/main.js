// * Khởi tạo object *
const infoUser = {
  name: "Vinh",
  age: 20,
  address: "HCM",
  "gender-X": "Nam",

  // * phương thức *
  showInfo() {
    // * truy xuất bằng keyword "this" *
    return this.age;
  },
};

// * Truy xuất object *
console.log(infoUser);
console.log(infoUser.name); // Vinh
console.log(infoUser.showInfo()); // 20
console.log(infoUser["gender-X"]); // Nam

// * Class *
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  show() {
    console.log(this.name); // Nam
  }
}
console.log(User);
const user01 = new User("Phạm Công Vinh", 20, "pcv.fed@gmail.com");
const user02 = new User("Mạc Văn Khoa", 70, "logphan@gmail.com");
console.log(user01);
console.log(user01.email); // pcv.fed@gmail.com
