const sumAll = function (integerOne, integerTwo) {
  let digitsArray = [];
  console.log(typeof integerOne);
  if (typeof integerOne === "number" && typeof integerTwo === "number") {
    if (integerOne > integerTwo) {
      let integerOneNew = integerTwo;
      let integerTwoNew = integerOne;
      if (integerOneNew >= 0 && integerTwoNew >= 0) {
        for (integerOneNew; integerOneNew <= integerTwoNew; integerOneNew++) {
          digitsArray.push(integerOneNew);
          //console.log(digitsArray)
          //
        }
        console.log(digitsArray);
        let addedUpNumber = 0;
        for (i = 0; i < digitsArray.length; i++) {
          addedUpNumber += digitsArray[i];
          //console.log(addedUpNumber)
        }
        //console.log(addedUpNumber)
        return addedUpNumber;
      }
    }
    if (integerOne >= 0 && integerTwo >= 0) {
      for (integerOne; integerOne <= integerTwo; integerOne++) {
        digitsArray.push(integerOne);
        //console.log(digitsArray)
        //
      }
      console.log(digitsArray);
      let addedUpNumber = 0;
      for (i = 0; i < digitsArray.length; i++) {
        addedUpNumber += digitsArray[i];
        //console.log(addedUpNumber)
      }
      //console.log(addedUpNumber)
      return addedUpNumber;
    } else {
      return "ERROR";
    }
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
sumAll(123, 4);
module.exports = sumAll;
