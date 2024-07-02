const palindromes = function (string) {
  /*let removedSpaces = string.replace(/\s/g, "").split("");
  console.log(removedSpaces);*/
  let splitedString = string
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s/g, "")
    .split("");
  let reversedSplitedString = string
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s/g, "")
    .split("")
    .reverse();
    console.log(splitedString);
    console.log(reversedSplitedString)

  for (let i = 0; i < splitedString.length; i++) {
    if (reversedSplitedString[i] !== splitedString[i]) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
};

palindromes("Animal loots foliated detail of stool lamina.");

// Do not edit below this line
module.exports = palindromes;
