//.1 revarse Eachw word of sentance
// let str = "hello world"
// let res = str.split(" ").map(function (e) {
//     return e.split("").reverse().join("")
// })
// console.log(res)

//.2 chek if an object array or not

// function chekArray(elem) {
//     return Array.isArray(elem)
// }
// console.log(chekArray([]))
// console.log(chekArray({}))

//.3 how to empty an array in javascript

// let arr = [1, 2, 3, 4, 5]
// arr.length=0;
// console.log(arr)

//.4 how to check is it Integer
// let a = 5;
// if (a % 1 === 0) {
//     console.log("is Interger")
// } else {
//     console.log("not Interger")
// }

//.5 duplicte the array as a same array
// function duplicte(arr) {
//     return arr.concat(arr);
// }
// console.log(duplicte([1, 2, 3]))

//.6 revarse a number

// function revarsekaro(num) {
//     Number(num.toString().split("").reverse().join(""))
// }
// console.log(revarsekaro(12))

//.7 palndrome or not
// function isPlandrome(str) {
//     let revarsed = str.split("").reverse().join("");
//     if (revarsed == str) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isPlandrome("deep"))


//.8 sort leatter in string

// function aplbabetorder(str) {
//     return str.split("").sort().join("");
// }
// console.log(aplbabetorder("deepak"))

//.9 first latter in uppercase

// function capital(str) {
//   let ar=  str.split(" ").map(function (e) {
//         e.charAt(0).toUpeerCase() + e.subString(1);
//     })
//     return ar
// }
// console.log(capital("deep"))


//.10 chek proptry
let a = { a: 10 }
console.log(a.ha)