// const arrya = document.querySelectorAll("button");
// // console.log(arrya);
// let string = "";
// arrya.forEach(function (elemets) {
//   elemets.addEventListener("click", function (e) {
//     console.log(e.target.innerText);
//   });
// });

//.1
const array = document.querySelectorAll("button");
// console.log(array);
let string = "";

array.forEach((element) =>
  element.addEventListener("click", (e) => {
    let targetNumber = e.target.innerText;
    // console.log(targetNumber);
    if (targetNumber === "c") {
      string = "";
      document.getElementById("screen").value = "";
    } else if (targetNumber === "=") {
      document.getElementById("screen").value = eval(string);
      //   console.log(string);
    } else {
      string += targetNumber;
      document.getElementById("screen").value = string;
    }
  })
);
