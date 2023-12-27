const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
  let response = await fetch(URL);
  let data = await response.json();
  console.log(data[0].text);
  factPara.innerText = data[1].text;
};

// function getFacts() {
//   fetch(URL)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       factPara.innerText = data[2].text;
//     });
// }

btn.addEventListener("click", getFacts);
// getFacts();
