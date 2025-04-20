// * Declaration Function *
function getSum(a, b) {
  return a + b;
}
const result = getSum(10, 11);
console.log(result); // 21
// *--------------------------------------*

// * Expression Function *
const getSub = function (x, y) {
  return x - y;
};
console.log(getSub(2, 1)); // 1
// *--------------------------------------*

// * Arrow Function *
const getDiv = (a, b) => a / b;
let div = getDiv(10, 5);
console.log("🚀 ~ div:", div); // 2
// *--------------------------------------*

function getScore() {
  var num1 = 10,
    num2 = 20;

  function add() {
    return num1 + num2;
  }
  return add();
}
let res = getScore();
console.log(res); // 30
// *--------------------------------------*

// * Default Parameters *
function getInfo(name = "An", age = "20") {
  //   console.log(`My name is ${name} and My age is ${age}`);
  return `My name is ${name} and My age is ${age}`;
}
// getInfo("Vinh");
console.log(getInfo("Momy"));
// *--------------------------------------*

