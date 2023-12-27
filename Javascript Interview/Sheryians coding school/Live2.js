// iffe, asynchrnous synchronous

// cricate private varibales
// (function () {
//   console.log("hello world");
// })();

//.2

// let ans = (function () {
//   let a = 12;
//   return {
//     getter: function () {
//       console.log(a);
//     },
//     setter: function (parm) {
//       a = parm;
//     },
//   };
// })();

// ans.setter(10);
// ans.getter();

//.1
console.log("1");
console.log("2");
setTimeout(() => {
  console.log("3");
}, 2000);
console.log("4");
