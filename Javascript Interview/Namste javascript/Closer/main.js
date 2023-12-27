const AB = 5;
const outerFun = (a) => {
    let b = 10;
    const innerFun = () => {
        let sum = a + b+AB;
        console.log(`the sum of two number is ${sum}`)
    }
    innerFun();
    // return innerFun;
}

outerFun(5);

// let inner = outerFun(5);
// console.dir(inner);
// console.log(inner)
// inner();