document.write("JavaScript say Hello ");
document.write("Check site console");
console.log("Hi this is JavaScript")
console.error("This is error")
console.warn("This is warning")

var a = 5, b = 10;
var sum = a + b;
console.log(a + " + " + b + " = " + sum)
console.log("PI = " + Math.PI)
console.log("Minimum " + Math.min(7, 1, 2, 12, 23))

var num = 7;
console.log("Num = " + num)
if (num == 7) {
  console.log("Num = " + num + " and this true")
}
else console.log("Num != " + num + " and this false")

var num_2 = 5;

if (num == 7 && num_2 == 5) {
  console.log("num_1 = " + num + " and num_2 = " + num_2)
}
if (num == 7 || num_2 == 5) {
  console.log("num_1 = " + num + " or num_2 = " + num_2)
}

var c = 3;
switch (c) {
  case 12: console.log("c = 12");
    break;
  case 7: console.log(("c = 7"));
    break;
  default:
    console.log("c != 12 and c != 7");
}

var array = [12, true, "Maxim", 4.5];
console.log(array);

var matrix = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9]
];
console.log(matrix);

alert("Hi");
confirm("Are you the best?")
prompt("How old are you?")
