// Cách 1: export sau khi khai báo

function showName(myName) {
  console.log(`My name is ${myName}`);
}
export { showName };

// Cách 2: export ngay khi khai báo
export function showAge(age) {
  console.log(`My age is ${age}`);
}


export var myHeight = 20;
export function helloWorld() {
    console.log("Hello....");
}

let grade = "22DTHG9";
export default grade;


let count = 100;
// export default count; // ❌ một module chỉ export default 1
