const studRollno = 123
let studEmail = "abc@gmail.com"
var studPasswd = "college"
studCity = "Mumbai"
let studState;

// studRollno = 1   //this is not allowed
// console.log(studRollno);
studEmail = "xyz@gmail.com"
studPasswd = "2323423@676"
studCity = "Pune"

// console.log(studPasswd);

console.table([studRollno,studEmail,studPasswd,studCity,studState])

/*
Prefer not to use var
bcoz of issue in block scope & functional scope
*/