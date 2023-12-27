// let p1 = new Promise(function (reslove, reject) {
//   let ab = true;
//   if (ab) {
//     return new Promise(function (reslove, reject) {
//       let name = "deepak";
//       if (name == "deepak") {
//         reslove("login");
//       } else {
//         reject("Login Failed");
//       }
//     });
//   } else {
//     reject("False");
//   }
// });

// p1.then(function (data) {
//   data
//     .then(function (res) {
//       console.log(res);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }).catch(function (error) {
//   console.log(error);
// });

//.2

// async function callAPi() {
//   let dee = await fetch("https://jsonplaceholder.typicode.com/users");
//   let ab = await dee.json();
//   console.log(ab);
// }

// callAPi();

//.3
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//.4
