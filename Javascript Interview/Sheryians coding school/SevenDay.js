function abcd() {
  let x = 12;
  return function () {
    console.log(x);
  };
}

let ans = abcd();
ans();
