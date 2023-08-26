const account_ID = 14453;
let account_Email="viditagarwal@gmail.com";
var account_Password="123456";
account_City= "Jaipur";

let accountstate;

//account_ID=2 // not allowed

account_Email ="user2@gmail.com";
account_Password ="15554";
account_City= "moradabad";

// console.log(account_ID);
// console.log(account_Email);
// console.log(account_Password);
// console.log(account_City);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([account_Email, account_Password, account_City, accountstate]);