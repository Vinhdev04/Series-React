// Cho trước mảng infoArr, hãy viết hàm arrToObj để chuyển array thành object.
const obj = arrToObj([
    ['name', 'Son Dang'], 
    ['age', 21], 
    ['address', 'Ha Noi']
 ]);
console.log(obj);

// cách 1: sử dụng reduce
function arrToObj(arr) {
    return arr.reduce((obj,[key,value])=> {
        obj[key] = value;
        return obj;
    },{})
}

// cách 2 sử dụng vòng lặp
function arrToObj(arr) {
    const result = {};
    for (let i = 0; i < arr.length; i++) {
        const [key, value] = arr[i];
        result[key] = value;
    }
    return result;
}

// Cách 3: Dùng Object.fromEntries() (cách ngắn gọn nhất - ES2019+)
function arrToObj(arr) {
    return Object.fromEntries(arr);
}

// cách 4: Dùng for...of kết hợp destructuring
function arrToObj(arr) {
    const result = {};
    for (const [key, value] of arr) {
        result[key] = value;
    }
    return result;
}