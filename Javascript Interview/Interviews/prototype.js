// let user = {
//   getfullName: function () {
//     return this.name + " " + this.lastName;
//   },

//   getAge: function () {
//     let age = new Date().getFullYear() - this.birth;
//     return age;
//   },
// };

// let student = {
//   name: "Virat",
//   lastName: "Kholi",
//   birth: 2000,
// };

// let tecaher = {
//   name: "MS",
//   lastName: "Dhoni",
//   birth: 1990,
// };

// tecaher.__proto__ = user;
// student.__proto__ = user;

// console.log(student.getfullName());
// console.log(tecaher.getAge());

//.2 Coder or chye

// let hereoPower = {
//   thor: "hammmer",
//   spiderMan: "Jump",

//   getSpiderPower: function () {
//     console.log(`${this.spiderMan}`)
//   }
// }

// let myHero = ["Thor", "iron Man"]

// Object.prototype.deepak = function () {
//   console.log("deepak is present in all object")
// }

// Array.prototype.heyDeepak = function () {
//   console.log(`Deepak Say Hello`)
// }

// // hereoPower.deepak();
// myHero.heyDeepak();