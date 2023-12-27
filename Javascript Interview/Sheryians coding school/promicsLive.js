let ab = new Promise((hoga, nhiHoga) => {
  let rn = Math.floor(Math.random() * 10);
  if (rn < 5) {
    return hoga("ho gya");
  } else {
    return nhiHoga("Nhi hua Error aa gya");
  }
});

ab.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log("erro");
});
