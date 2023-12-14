// Chapter#1
alert ("Chapter#1")


// Chapter#2
var nationality;
nationality = "Pakistani";


// Chapter#3
var weight = 150;
weight + 50 ;

console.log (weight+50)

var originalNum = 25;
var numToBeAdd = 25;
var newNum = originalNum + numToBeAdd;

console.log (newNum);


// Chapter#5
var popularNum = 2 + 2;
console.log (popularNum + 5);

console.log (5 - 2);

console.log (5 * 2);

console.log (100 / 20);


// Chapter#6
var num = 10;
num++;

console.log(num);

var num2 = 10;
num2--;
console.log(num2);


// Chapter#7
var totalCost = 1 + 3 * 4;
console.log (totalCost);

var totalCost2 = 1 + (3 * 4);
console.log (totalCost2);

var totalCost3 = (1 + 3) * 4;
console.log (totalCost3);

var results = (2 * 4) * 4 + 2;
console.log (results);


// Chapter#8
var message = "Thanks";
alert (message);

var userName = "Huzaifa" ;
alert("Thanks," + userName + "!");


// Chapter#9
// var question = "Your Name?";
// var defaultAnswer = "Human";
// var spec = prompt (question,defaultAnswer);
// var spec = prompt("Your species?", "human");
var numberOfCats = prompt("How many cats?");
var tooManyCats = numberOfCats + 1;

// if statment chapter 10 chapter 11 chapter 12 chapter 13 chapter 14

// == , === equal to condition
// != , !== not equal to 
// > greater than
// < less than
// <= less tha equal than
// >= graeter tha equal than

// var a = 10
// if (a != 11) {
//     console.log("Condition True")
// }

// var a = 10
// if (a == 10) {
//     console.log("Condition True")
// }
// var a = 10
// if (a < 11) {
//     console.log("Condition True")
// }
// var a = 10
// if (a > 9) {
//     console.log("Condition True")
// }
// var a = 10
// if (a <= 11) {
//     console.log("Condition True")
// }
// var a = 10
// if (a >= 50) {
//     console.log("Condition True")
// }


// var age = 15;
// var studentCard = true;

// if (age >= 18){
//     console.log("Allow");
// } else if (studentCard == true) {
//     console.log("Allow on student card");
// }else {
//     console.log("Not allow");
// }


// var  age = 15;
// var cnic = true;
// var studentCard = false;

// if (age >=18 || cnic == true || studentCard == true) {
//     console.log("Allow")
// }else {
//     console.log("Not allow")
// }


//  chapter 15 arrey

var a = "A";
var b = "B";

var arr = ["A","B","C"];
console.log(arr[2], arr[0]);

arr [3] = "D";
arr [4] = "E";
console.log(arr);

// arr.push("E"); //last me value add krne k liye
// arr.pop(); //last value ko hide krta hai
// console.log(arr);

// arr.shift(); //first value ko hide krta hai
// arr.unshift("1"); //first value add krny k liye
// console.log(arr);

// var a = arr.slice(1,4); //sequance se apni mrzi ki value leny k liye
// console.log(a);

var a = arr.splice (0,2,"1","2","3")
// arr.splice(0,2); // arrey se koi bi line delete krne k liye
console.log (a);
console.log (arr);




