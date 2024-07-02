// const removeFromArray = function (arrays, ...extras) {
//     let newArray = extras
//     console.log(newArray)
//     for (let i = 0; i < extras.length; i++) {
//         console.log(extras[i]);

//         result = function checkElement(array) {
//             console.log(arrays)
//             //console.log(extras)
//             console.log(newArray[i])
//             //console.log(extras[i])
//          array !== newArray[i];
//         }
//         return array
//         console.log(result = arrays.filter(checkElement));
//     }
// };
// removeFromArray([12,22,33,43], 12,2)

// // Do not edit below this line
// module.exports = removeFromArray;

const removeFromArray = function (arrays, ...extras) {
  for (let i = 0; i < extras.length; i++) {
    let elementToRemove = extras[i];
    arrays = arrays.filter((arrayElement) => arrayElement !== elementToRemove);
  }
  console.log(arrays);
  return arrays;
};

removeFromArray([12, 22, 33, 43], 12, 2);

// Do not edit below this line
module.exports = removeFromArray;

