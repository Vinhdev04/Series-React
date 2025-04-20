let arr1 = [];
console.log("🚀 ~ arr1:", arr1);

let arr2 = [20, 100, 1, -10];
console.log("🚀 ~ arr2:", arr2);
console.log(arr2[0]); // 20

let arr3 = ["banana", "apple", "kiwi"];
console.log("🚀 ~ arr3:", arr3);

let arr4 = [1, 2, "Iphone", "Android", -3];
console.log("🚀 ~ arr4 :", arr4);
console.log(arr4[2]); //  Iphone

let arr5 = [11, 22, "Iphone", "Android", -13, true];
console.log("🚀 ~ arr5:", arr5);

let arr6 = [11, 22, "Iphone", "Android", -13, true, [-100, -200, 20]];
console.log("🚀 ~ arr6:", arr6);

const arr9 = [...arr6];
console.log("🚀 ~ arr9:", arr9);
console.log(arr9[6][1]); // -200

let arr7 = new Array(1, 2, 3, "once", false);
console.log("🚀 ~ arr7 :", arr7);

let arr8 = new Array(10);
console.log("🚀 ~ arr8:", arr8);
console.log(typeof arr8); // object

// *----------- Method -------------*
let arrX = ["Vinh", "Hà", "Khánh"];
arrX.push("Trà My");
console.log(arrX); // ["Vinh", "Hà", "Khánh", "Trà My" ]

arrX.pop();
console.log(arrX); // [ "Vinh", "Hà", "Khánh"]

arrX.unshift("Nhật An");
console.log(arrX); // ["Nhật An", "Vinh", "Hà", "Khánh"];

arrX.shift();
console.log(arrX); // ["Vinh", "Hà", "Khánh"];

const listItem = ["Cobe", "Masiu", "Jack", "Sure"];
console.log(listItem); // ["Cobe","Masiu","Jack","Sure"]

const newListItem = listItem.map((item, idx) => item.toUpperCase());
console.log(newListItem); // ['COBE', 'MASIU', 'JACK', 'SURE']

const listObj = newListItem.map((item, index) => ({
  name: item,
  index: index,
}));
console.log(listObj);

const fruits = ["Cam", "Xoài", "Dứa", "Kiwi"];
const res = fruits.findIndex((item) => {
  return item === "Dứa";
});

console.log(res); // 2 -> có và nằm ở vị trí index = 2
