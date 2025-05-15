let name = "Tailwind CSS"
let version = "3.0.0"
const course = {
    name,version,
    getVersion(){return version}
}
console.log(course);
console.log(course.getVersion());

let courseName = 'name'
let courseVersion = 'version'
const course2 = {
    [courseName]: "JavaScript",
    [courseVersion]: "ES6",
}
console.log(
    course2
);
