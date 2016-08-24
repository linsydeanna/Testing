function wordifier(number) {
  //given a number, make a string out of it.

var transforms = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety"
}

 if (transforms[number]) {
   return transforms[number];
 }

 var number = [],
     stringNumber = number.toString();

  for (var i = 0, len = stringNumber.length; i < len; i += 1) {
      number.push(+stringNumber.charAt(i));
  }

  String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
  };

  if (transforms[number]) {
    return transforms[number];
  } else if (number.length === 6){
    // 100000 = 1, 0, 0, 0, 0, 0
    var thousands = parseInt(number.splice(0, 3).join().replaceAll(",", ""));
    var rest = parseInt(number.join().replaceAll(",", ""));
    if (rest === 000) {
      return wordifier(thousands) + " thousand";
    } else {
      return wordifier(thousands) + " thousand " + wordifier(rest);
    }
  } else if (number.length === 5){
    // 10000 = 1, 0, 0, 0, 0
    var thousands = parseInt(number.splice(0, 2).join().replaceAll(",", ""));
    var rest = parseInt(number.join().replaceAll(",", ""));
    if (rest === 000) {
      return transforms[thousands] + " thousand";
    } else {
      return transforms[thousands] + " thousand " + wordifier(rest);
    }
  } else if (number.length === 4){
    // 1000 = 1, 0, 0, 0
    var thousands = number.splice(0, 1);
    var rest = parseInt(number.join().replaceAll(",", ""));
    // joins the last three digits and removes commas
    if (rest === 000) {
      // 1000, 2000, 3000, etc.
      return transforms[thousands] + " thousand";
      // all other numbers in the thousands
    } else {
      return transforms[thousands] + " thousand " + wordifier(rest);
    }
  } else if (number.length === 3){
    // 100 = 1, 0, 0
    var hundreds = number.splice(0, 1);
    var rest = parseInt(number.join().replaceAll(",", ""));
    // join the second two digits and removes the commas
    if (rest === 00) {
      // this line represents the hundreds
      return transforms[hundreds] + " hundred";
    } else {
      // this represents all the other numbers of the hundreds
      return transforms[hundreds] + " hundred " + wordifier(rest);
    }
  } else {
    // one through ten
    return transforms[number[0] * 10] + " " + transforms[number[1]];
  }
}
module.exports = wordifier;



// if(transforms[string]) {
//   return transforms[string]
// } else if(string.includes("hundred")) {
//   //breaking on four hundred eighty one
//   //if I could split on 'hundred', and feed part on the right
//   //to the other method...
//   var split = string.split(" hundred");
//   var hundreds = split[0]; //could be one, two, three, etc.
//   var theRest = split[1].trim(); //could be twelve, eighty eight, ''
//   if(theRest=== " "){
//     return transforms[hundreds] * 100
// } else {
//     return transforms[hundreds] * 100 + wordifier(theRest);
//   }
// } else if(string.includes("thousand")) {
//   var split = string.split(" thousand");
//   var thousands = split[0];
//   var theRest = split[1].trim();
//   if(theRest === " "){
//     return transforms[thousands] * 1000
//   } else {
//     return transforms[thousands] * 1000 + wordifier(theRest);
//   }
// } else {
//   var split = string.split(" ");
//   var tens = split[0];
//   var ones = split[1];
//   return transforms[tens] + transforms[ones]
// }
//
// };
