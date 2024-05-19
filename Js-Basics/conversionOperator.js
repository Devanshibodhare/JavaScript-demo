let score = "123"
//console.log(typeof(score)); //datatype -> string
//typecasting means converting one datatype into another datatype

let ValueNumber = Number(score);
console.log(typeof(ValueNumber));
console.log(ValueNumber);  //outpuut is NaN

//"22" => 22
//"123abc" => NaN
//true=>1; false=>0

let isLoggedIn = "Devanshi"

let stringNumber = String(someNumber)
//no point of typecasting string var to string var again
//console.log(stringNumber);
// console.log(typeof(stringNumber));

                    /*   OPERATIONS   */

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**2);

let str1 = "Devanshi"
let str2 = "Bodhare"
let fullName = str1 + " " + str2
console.log(fullName);

console.log("1" + 2);
console.log("1"+2+2+"5");
console.log("1"+(2+2)+"5");