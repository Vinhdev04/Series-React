// import file from main.js
import { showName } from "./main.js";
import { showAge } from "./main.js";

// import by export default
import grade from "./main.js";

// import and use all file
import * as allName from "./main.js";

// callback
showName("Vinh");
showAge("20");
console.log(`My class is ${grade}`);

console.log(allName);
allName.helloWorld();
