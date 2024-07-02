const reverseString = function(string) {
    let splitedStringArray = string.split("")
    /*console.log(splitedStringArray)
    console.log(splitedStringArray.reverse().join(""))*/
    return splitedStringArray.reverse().join("");
};

//reverseString("Hello there")

// Do not edit below this line
module.exports = reverseString;
