// let obj = {
//   name: "deepak",
//   display: function () {
//     console.log(this.name);
//   },
// };

// let obj2 = {
//   name: "MS Dhoni",
// };

// obj.display.call(obj2);

//.2
// const clusm = (nums1, num2) => {
//   for (let i = 1; i <= 10; i++) {}
//   return nums1 * num2;
// };

// console.time("First Call");
// console.log(clusm(10, 10));
// console.time("last");

//.3
// function cache(fn) {
//     const cache = {};

//     return function(...args) {
//       const key = JSON.stringify(args);

//       if (!cache[key]) {
//         cache[key] = fn(...args);
//       }

//       return cache[key];
//     };
//   }

//.4 output quastion event Loop

// console.log("a");
// setTimeout(() => {
//   console.log("set");
// }, 0);

// Promise.resolve(() => console.log("pro")).then((res) => res());
// console.log("b");

//.5 curring

// function add(a) {
//   return function (b) {
//     return function () {
//       return a + b;
//     };
//   };
// }

// console.log(add(5)(2)());

//.5
// function add(a) {
//   return function (b) {
//     if (b) {
//       return add(a + b);
//     }
//     return a;
//   };
// }

// console.log(add(5)(2)(4)(8)());

//.6 imlement this code

// const calc = {
//   total: 0,
//   add(a) {
//     this.total += a;
//     return this;
//   },

//   multiplay(a) {
//     this.multiplay *= a;
//     return this;
//   },
//   subtract(a) {
//     this.multiplay -= a;
//     return this;
//   },
// };

// const result = calc.add(10).multiplay(5).subtract(30).add(10);
// console.log(result.total);

//.7 defrance map and forEach foreach modifay the orignal array
// const arr = [2, 5, 3, 4, 7];
// const result = arr.map(function (ar) {
//   return ar + 2;
// });
// console.log(result);

//.8

// console.log(typeof null);
// console.log(typeof undefined);

//.9 event elegactions

// document.querySelector("#product").addEventListener("click", (event) => {
//   console.log(event);
//   if (event.target.tagName == "LI") {
//     window.location.href += "#" + event.target.id;
//   }
// });

//.10 array flat method

// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6, [7, 8], 9],
//   [10, 11],
// ];
// // let flatarray = [].concat(...arr);
// // console.log(flatarray);
// console.log(arr.flat(2))

//.11 show yout Project

//.12 settime out quation output
// function a() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// a();

//.13

// function addFive(a) {
//   return a + 5;
// }
// function substractTwo(a) {
//   return a - 2;
// }
// function multiFour(a) {
//   return a * 4;
// }

// const compose=()=>{

// }

//.14
