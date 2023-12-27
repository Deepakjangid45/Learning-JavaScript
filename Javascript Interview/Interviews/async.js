//.1
// async -> sare kam shuru kro jis ka phle a gye uska ans de do kam rukna nhi chye

// fetch("https://jsonplaceholder.typicode.com/users");

// let ans = new Promise(function (res, rej) {
//   let n = Math.floor(Math.random() * 10);
//   if (n < 5) {
//     return res();
//   } else {
//     return rej();
//   }
// });
// ans
//   .then(function () {
//     console.log("Below");
//   })
//   .catch(function (err) {
//     console.log("err");
//   });

//.2

// let ans = new Promise(function (res, rej) {
//   return "sabse phle apne ghar jao";
// });
// let p2 = ans.then(function (data) {
//   console.log(data);
//   return new Promise(function (res, rej) {
//     return res("GATE KHLO OR LAGO");
//   });
// });

// p2.then(function (data) {
//   console.log(data);
//   return new Promise(function (res, rej) {
//     return res("khna pako khna kaho");
//   });
// });

// p2.then(function (data) {
//   console.log(data);
//   return new Promise(function (res, rej) {
//     return res("Bursh kro");
//   });
// });
// p2.then(function (data) {
//   console.log(data);
//   return new Promise(function (res, rej) {
//     return res("SO javo");
//   });
// }).catch(function (err) {
//   console.log("errr");
// });

//.3 asycn await

// async function ab() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then(function (raw) {
//       return raw.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// }

// ab()

async function ab() {
  let raw = await fetch("https://jsonplaceholder.typicode.com/users");
  let ans = await raw.json();
  console.log(ans);
}
ab();
