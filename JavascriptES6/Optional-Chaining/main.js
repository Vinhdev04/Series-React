// # Optional Chaining (?.)
const user = {};
console.log(user.address); // Output: undefined
// console.log(user.address.street); // ❌Output:  error "cannot read property street of undefined"

// # How to fix it?
console.log(user.address ? user.address.street : undefined) // Output: undefined
console.log(user?.address?.street) // ✅ Output: undefined
// # Default Value with Operator (??)
console.log(user?.address?.street??"Attributes - NotDefined") // ✅ Output: Attributes - NotDefined

// # Other variant: ?.() and ?.[]
// ?.() -> is used to call a function that may not exist
let acountAdmin = {
    printer(){
        console.log("I am administrator");
    }
}
let acountGuest ={};
console.log(acountAdmin.printer());
// console.log(acountGuest.printer()); // ❌ Output: error "acountGuest.printer is not a function"
console.log(acountGuest.printer?.()); // ✅ Output: undefined

// ?.[] -> is used to access a property that may not exist (only read and delete)
let key = "name"
const user1 = {
    name: "John"
}

const user2 = null;
console.log(user1?.[key]); // ✅ Output: John
console.log(user2?.[key]); // ✅ Output: undefined
