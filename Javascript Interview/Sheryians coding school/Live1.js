//.1 array - forEach map filter
// hof function jo khud k ander function mage

//.1.1
// let a = [1, 2, "3", 4];
// let sum = 0;
// a.forEach(function (val) {
//   if (typeof val !== "string") {
//     sum = sum + val;
//   }
// });
// console.log(sum);

//.1.2
// let arr = [];
// for (let i = 0; i < 10; i++) {
//   arr.push(function () {
//     setTimeout(function () {
//       console.log(i);
//     }, 2000);
//   });
// }
// for (let i = 0; i < 10; i++) {
//   arr[i]();
// }

//.1.3

// console.log("1");
// console.log("2");
// console.log("3");
// setTimeout(() => {
//   console.log("4");
// }, 1000);
// console.log("5");

//.1.4

// setTimeout(() => {
//         console.log("deepak")
// }, 1000);

//.1.5
//.1.6
//.1.7

// let arr = [
//   { name: "rohit", age: 24 },
//   { name: "Gill", age: 21 },
//   { name: "Kholi", age: 24 },
// ];
// let ans = arr.map(function (val) {
//   return val.name;
// });
// console.log(ans)

// let arr = [1, 2, 3, 4, 5, 6];
// let ans = arr.filter(function (val) {
//   if (val % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(ans)

// let arr = [
//   "rohit",
//   "Gill",
//   "kholi",
//   "iyear",
//   "KL",
//   "Sky",
//   "jadeja",
//   "shami",
//   "bumra",
//   "siraj",
//   "kuldeep",
// ];

// let ans = arr.filter(function (val) {
//   return !val.includes("a");
// });
// console.log(ans);

// do se jyda bar aa arha ho

let arr = [
  "rohit",
  "Gill",
  "kholi",
  "iyear",
  "KL",
  "Sky",
  "jadeja",
  "shami",
  "bumra",
  "siraj",
  "kuldeep",
];
let ans = arr.filter(function (val) {
  if (val.split("a").length <= 2) {
    return true;
  }
});
console.log(ans)

//.2 object - access loop

//.3 This call aplay bind
//.4  how you bild logic
