const leapYears = function (year) {
  //console.log(!(year % 4));

  //if (!(year % 400) && !(year % 100)) return true;
  //if (year % 4 && year % 100) return false;
  if (!(year % 4)) {
    if (!(year % 100)) {
      if (!(year % 400)) {
        return true;
      } else {
          return false
      }
    } else if (!(year % 4)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }

  //if (year % 4) return false;
};
leapYears(1996);

// Do not edit below this line
module.exports = leapYears;
