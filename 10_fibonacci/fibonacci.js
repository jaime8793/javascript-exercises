const fibonacci = function (integer) {
  console.log(typeof integer === "number");
  if (integer < 0) return "OOPS";
  if (integer === 0) return 0;
  let emptyArray = [0, 1];
  if (typeof integer === "number") {
    /*let sum1 = sum.reduce((partialSum, a) => partialSum + a, 0);*/
    for (i = 2; i <= integer; i++) {
      emptyArray.push(emptyArray[i - 2] + emptyArray[i - 1]);
      console.log(emptyArray);
    }
    return emptyArray[emptyArray.length - 1];
  } else if (typeof integer === "string") {
    let integer1 = Number(integer);
    for (i = 2; i <= integer1; i++) {
      emptyArray.push(emptyArray[i - 2] + emptyArray[i - 1]);
      console.log(emptyArray);
    }
    return emptyArray[emptyArray.length - 1];
  }
};
fibonacci("1");
// Do not edit below this line
module.exports = fibonacci;
