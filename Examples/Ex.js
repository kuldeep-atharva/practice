//  https://www.w3resource.com/javascript-exercises/
//
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

console.log(Object.keys(student));

delete student.rollno;

console.log(student);
console.log(Object.keys(student).length);

//
var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

//    console.log(library.map(item => `Author: ${item.author} /n Titile: ${item.title} \n Reading Status: ${item.readingStatus}`));

library.forEach((item) => {
  const book = ' " ' + item.title + '" by' + item.author;
  if (item.readingStatus === true) {
    console.log("already read" + book);
  } else {
    console.log("you still need to read" + item.author);
  }
});

//
//  const radius = 3;
//  const height = 5;

function cube(radius, height) {
  const equation = Math.PI * radius * radius * height;
  return equation.toFixed(4);
}
console.log(cube(3, 5));

// sort()
const Data = [6, 4, 0, 3, -2, 1];
console.log(Data.sort());

//
const str = "dog";
console.log(str.split(""));
const arr = [];

function subString(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      return arr.push(str.slice(i, j));
    }
  }
}
console.log(arr);

//clock
const date = new Date();
const hours = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();

function dateFn() {
  const dat = new Date();
  console.log(' "' + dat.toLocaleTimeString("it-IT") + '"');
}

// const set = () => {setInterval(dateFn, 1000)};
// setInterval(dateFn, 1000);

//
function area(radius) {
  const A = Math.PI * radius * radius;
  const P = Math.PI * 2 * radius;
  console.log(` Area: ${A.toFixed(2)}`);
  console.log(`Perimeter: ${P.toFixed(2)}`);
}

area(3);

//
var lib = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

//   const Ans =   lib.forEach(Object.keys(lib)).sort()
// console.log(Ans);

//
const s = "Hello World";

function last(s) {
  const string = s.trim();
  const lastWord = s.split(" ");
  // console.log(lastWord)
  return lastWord.length;
}
// console.log(last("Hello World"));

const str1 = ["1", "2", "3", "4"];
// console.log("x", str1.length)
// console.log(str1[3]);
// console.log(str1[str1.length - 2])

// function add(str1){
//     // console.log(str1.length);
//     const datax = str1[str1.length - 1]
//     const ans = parseInt(datax) + 1
//     // return str1.push();
//     return str1[str1.length - 1] = str1.push(ans)
// }

// console.log(add(str1))
// console.log(str1)

const str2 = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
function add(str2) {
  const first = BigInt(str2.join(""));
  console.log(first);
  const fn = (first + BigInt(1)).toString();
  console.log(fn);
  const last = fn.split("");
  console.log(last);
}

add(str2);

// reverse string
const strr = "w3resource";

console.log(strr.split("").reverse().join(""));

// leap year
function leapYear(n) {
  (n % 4 === 0 && n % 100 !== 0) || n % 400 === 0
    ? console.log("It is a leap Year")
    : console.log("It is not a leap Year");
}
leapYear(2018);

//

function isSunday() {
  for (let year = 2014; year <= 2050; year++) {
    const janDay = new Date(year, 0, 1).toLocaleDateString("en-US", {
      weekday: "long",
    });
    if (janDay === "Sunday") {
      console.log(`sunday january in ${year}`);
    }
  }
}
isSunday();

//F
function fahrenheit(c) {
  return 1.8 * c + 32;
}
console.log(fahrenheit(60));

//differnce
function checkNum(n) {
  if (n > 13) {
    const diff = n - 13;
    return 2 * diff;
  }
  if (n <= 13) {
    return 13 - n;
  }
}
console.log(checkNum(10));

//18
function check50(n1, n2) {
  if (n1 == 50 || n2 == 50) {
    console.log(n1, n2);
    return true;
  }
  if (n1 + n2 == 50) {
    return true;
  } else {
    return false;
  }
}
console.log(check50(25, 30));

//

// console.log(removestr.charAt(1))
function removestr(str, n) {
  return str.substring(0, n) + str.substring(n + 1, str.length);
}
console.log(removestr("w3resources", 1));
// removestr("w3resources", 1)

//
function checkS(ss) {
  const cc = ss.charAt(0);
  const cc1 = ss.charAt(1);

  if (cc === "P" && cc1 === "y") {
    return ss;
  } else {
    const newSs = "Py";
    return newSs.concat(ss);
  }
}

console.log(checkS("xthon"));

//
function delChar(n) {
  const string = "javaScript";
  return string.substring(0, n - 1) + string.substring(n, string.length);
}
console.log(delChar(2));

//
function swapLast(str) {
  if (str.length >= 1) {
    const str1 = str.split("");
    const first = str1[0];
    const last = str1[str.length - 1];
    str1[0] = last;
    str1[str.length - 1] = first;
    return str1.join("");
  } else {
    console.log("Enter more than one character");
  }
}
console.log(swapLast("Python"));

//add first char at front and back
function addFB(str) {
  const first = str.charAt(0);
  return first + str + first;
}
console.log(addFB("Swift"));

//
function multipleOf3n7(num) {
  return num % 3 === 0 ? true : num % 7 === 0 ? true : false;
}
console.log(multipleOf3n7(13));

//
function last3CharAddFB(str) {
  if (str.length >= 3) {
    const stringToAdd = str.substring(str.length - 3);
    console.log(stringToAdd);
    return stringToAdd + str + stringToAdd;
  }
}
console.log(last3CharAddFB("java"));

//
function checkFirst4Char(str) {
  const checkString = str.substring(0, 4);
  // if (checkString === "java"){
  //     return true;
  // }else{
  //     return false
  // }
  return checkString === "java";
}
console.log(checkFirst4Char("javaScript"));

//either of them in said range
function check_numbers(x, y) {
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
    return true;
  } else {
    return false;
  }
}
console.log(check_numbers(12, 101));
console.log(check_numbers(52, 80));
console.log(check_numbers(15, 99));

//
function checkStrAt4(str) {
  const checkStr = str.substring(4, 10);
  if (checkStr === "Script") {
    return str.substring(0, 4) + str.substring(10);
  } else {
    return str;
  }
}
console.log(checkStrAt4("javaScriptLearn"));

//
function largeNum(x, y, z) {
  // if(x > y && x<z){
  //     console.log("x is larger number")
  // }
  return x > y && x > z
    ? console.log("x is larger number")
    : y > x && y > z
    ? console.log("y is larger number")
    : z > x && z > y
    ? console.log("z is larger number")
    : console.log(" ");
}
largeNum(20, 8, 50);

//
function numLess100(x, y) {
  x > y && x < 100
    ? console.log("x is nearer to 100")
    : y > x && y < 100
    ? console.log("y is nearer to 100")
    : console.log("error");
}
numLess100(90, 60);

//
function checkLastDigit(x, y, z) {
  if (x % 10 === y % 10 && y % 10 === z % 10 && x % 10 === z % 10) {
    console.log(`last digit ${x % 10} is same for All`);
  } else {
    console.log("Last digit is not same for all");
  }
}
checkLastDigit(123, 523, 663);

// create new string with first 3 characters are in lower case |&| string length is less than 3 convert all the characters in upper case
function chnageStr(str) {
  if (str.length < 3) {
    return str.toUpperCase();
  } else {
    const first3Char = str.substring(0, 3).toLowerCase();
    return first3Char + str.substring(3);
  }
}
console.log(chnageStr("JaVaScript"));

//40. two given integers whether one of them is 8 or their sum or difference is 8.
function checkInt(x, y) {
  return x === 8 || y === 8 || x + y === 8;
}
console.log(checkInt(4, 4));

//41. if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.
function check3Num(x, y, z) {
  if (x == y && y == z) {
    return 30;
  }
  if (x == y || y == z) {
    return 40;
  } else {
    return 20;
  }
}
console.log(check3Num(2, 3, 5));

//42. given numbers are increasing in strict mode or in soft mode
function checkMode(x, y, z) {
  if (x < y && y < z) {
    console.log("strict mode");
  } else if (z > y) {
    console.log("soft mode");
  } else {
    console.log("undefined");
  }
}
checkMode(10, 15, 31);
checkMode(24, 22, 31);
checkMode(50, 21, 15);

//43. two or all of them have the same rightmost digit.
function checkRightDigit(x, y, z) {
  return (x%10 == y%10 || y%10 == z%10 || x%10 || z%10)
}
console.log(checkRightDigit(22, 32, 42));

//44. number is greater than or equal to 20 and less than one of the others
// function greaterNum(x, y, z) {
//   if ((x >= 20 || y >= 20 || z >= 20)) {

//   }
// }

//45. two given integer values and return true if one of the number is 15 or if their sum or difference is 15.
function check15(x, y) {
  return ((x === 15 || y === 15) || (x + y === 15) || (Math.abs(x -y) === 15))
}
console.log("cc", check15(40, 25));

//46. one of the number (not both) is multiple of 7 or 11
// function multipleOf7n11(x, y) {
//   return((x%7 == 0 || x%11 == 0) && (y%3 == 0 || y%11 === 0));
// }

// console.log(multipleOf7n11(14, 21));
// console.log(multipleOf7n11(14, 20));
// console.log(multipleOf7n11(16, 20));

//47. given number is presents in the range 40..10000.
function presentInt(n) {
  return (n >= 40 && n <= 10000)
}
console.log(presentInt(41))

//48. reverse a given string.
function revStr(str) {
  return str.split("").reverse().join("");
}
console.log(revStr("javaScript"))

//49. replace string with the character following it in the alphabet
// function replaceString(str) {
//   str.split("").map(item => )
// }
// console.log(replaceString("javascript"))


//50. "Write a JavaScript program to capitalize the first letter of each word of a given string."
// function capitalizeFirstLetter(str) {
//   const cc =  str.split(" ");
//   console.log(cc)
//   const dd = cc.map(item => {
//     const ee = (item.charAt(0).toUpperCase() + item.substring(1))
//     console.log((ee));
//   })
// console.log(dd)

// }
// (capitalizeFirstLetter("Write a JavaScript program to capitalize the first letter of each word of a given string."))

//51. number to hours and minutes
function numToTime(n) {
  const hours = Math.floor(n/60);
  const min = n % 60;
  console.log(hours + ":" + min)
}
numToTime(781);

//52. letters of a given string in alphabetical order
function strOrder(str) {
  return str.split("").sort().join("")
}
console.log(strOrder("Python"));

//53. regEx
function testStr(str){
  return (/a...b/).test(str) || (/b...a/).test(str)
}
console.log(testStr("Chainsbreak"));

//54 & 55 

//56. divide two positive numbers and return the result as string with properly formatted commas.
function divide2Val(x, y) {
  return Math.round(x/y).toString().split("")
}
console.log(divide2Val(800, 6))

//57  create a new string of specified copies (positive number) of a given string. 
function copies(str, n) {
  return (n>0)  ? str.repeat(n) : false;
}
console.log(copies("abc", 2))

//58
function copiesLast3Char(str) {
  if (str.length >= 3) {
    return  str.substring(str.length - 3).repeat(4)
  } else {
    console("error")
  }
}
console.log(copiesLast3Char("JavaScript"))

//59  extract the first half of a string of even length
function halfPrint(str) {
  return (str.length%2 === 0) ? str.substring(0, (str.length)/2) : str
}
console.log(halfPrint("JavaScript"))

//60. create a new string without the first and last character of a given string
function stringWithoutFB(str) {
  return str.substring(1, str.length-1)
}
console.log(stringWithoutFB("JavaScript"));

//61. concatenate two strings except their first character
function concat2Str(str1, str2) {
  return str1.substring(1) + str2.substring(1)
}
console.log(concat2Str("PHP","JS"));

//62.  move last three character to the start
function moveLast3Char(str) {
  return str.substring(str.length - 3) + str.substring(0,3)
}
console.log(moveLast3Char("Python"));

//63. middle three characters of a given string of odd length
function stringMiddle3Char(str) {
  return str.slice((str.length)/2 - 1, (str.length)/2 + 2)
}
console.log(stringMiddle3Char("Exercises"));

//64. concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string.
function concat2StrUpdate(str1, str2) {
  if (str1.length === str2.length) {
    return str1 + str2;
  } if (str1.length > str2.length) {
    return str1.substring((str1.length + str2.length)/2) + str2
  } if (str2.length > str1.length) {
    return str1 + str2.substring((str1.length + str2.length)/2) 
  }

}
console.log(concat2StrUpdate("Python", "Javascript"));

//65. string end with "Script". The string length must be greater or equal to 6. 
function stringEnd(str) {
  return (str.length >= 6) && (str.substring((str.length-6)) === "Script") ? true : false
}
console.log(stringEnd("Java Script"));

// const stri = "javaScript"
// console.log(stri.substring(stri.length-6))

//69. compute the sum of three elements of a given array of integers of length 3.
function sumArr(arr) {
  return arr.reduce((accu, curr) => accu + curr)
}
console.log(sumArr([1,2,3,4,5]));

//70. rotate array left
function rotateArrLeft(arr) {
  const first = arr.shift();
  console.log(arr);
  arr.push(first);
  return arr
}
console.log(rotateArrLeft([1,2,3,4,5]));

//71. end have 1
function check1nLast(arr) {
  return (arr[0] === 1 || arr[arr.length-1] === 1)
}
console.log(check1nLast([1,2,3,4,5]));

//72. first and last elements are equal of a given array
function sameArrFL(arr) {
  return arr.length >= 1 && arr[0] === arr[arr.length-1]
}
console.log(sameArrFL([1,2,3,4,1]));

//73. reverse the elements
console.log([1,2,3,4,5].reverse());

//74. find the larger value between the first or last and set all the other elements with that value
function largeNumInArr(arr) {
  return (arr[0] > arr[arr.length - 1]) ? arr.fill(arr[0]) : arr.fill(arr[arr.length - 1])
}
console.log(largeNumInArr([8,2,3,4,5]));

//75. create a new array taking the middle elements of the two arrays of integer
function midElementArr(arr1, arr2) {
  const newArr= [];
  if (arr1.length%2 !== 0 && arr2.length%2 !== 0) {
    newArr.push(arr1[Math.floor(arr1.length/2)]);
    newArr.push(arr1[Math.floor(arr2.length/2)]);
    console.log(newArr)
  } else {
    console.log("enter odd length of array")
  }
}
console.log(midElementArr([1,2,3,4,5], [1,2,3]));

//77.  an array of integers of length 2 contains 1 or 3.
function findInt(arr) {
  if (arr.find(elem => elem === 1)) {
    return true
  } else if (arr.find(elem => elem === 3)) {
    return true
  } else {
    return false;
  }
}
console.log(findInt([2,3,4,5]));

//78.  an array of integers should not contains 1 or 3.
function findIntNot(arr) {
  if (arr.find(elem => elem === 1)) {
    return false
  } else if (arr.find(elem => elem === 3)) {
    return false
  } else {
    return true;
  }
}
console.log(findIntNot([2,1,4,5]));

//80. swap the first and last elements of a given array of integers.
function swapArrFL(arr) {
  // const newArr = [];
  // newArr.push(arr.pop());
  // newArr.push(arr);
  // newArr.push(arr.shift());
  // return newArr.flat()

  [arr[0], arr[arr.length-1]] = [arr[arr.length-1], arr[0]];
  return arr
}
console.log(swapArrFL([2,3,4,5]));

//81. add two digits of a given positive integer of length two
function addTwoInt(n) {
  return n%10 + Math.floor(n/10)
}
console.log(addTwoInt(28));

//82. add two positive integers without carry.



//83. find the longest string from a given array of strings
function findLongStr(arr) {
//  const int =  arr.map(item => item.length);
 return arr.reduce((input, current) => input.length > current.length ? input : current);
}
console.log(findLongStr(["a","aaa","aa","aaaaa"]));

//84. replace each character of a given string by the next one in the English alphabet.
function replaceEachChar(str) {
  const ar = str.split("");
  // for (let i=0; i < str.length; i++) {
  //   ar[i] = String.fromCharCode(str.charCodeAt(i) + 1);
  // }
  //   return ar.join("").replace(/{/,"a");
  return ar.map(elem => String.fromCharCode(elem.charCodeAt()+1)).join("").replace(/{/, "a")
}
console.log(replaceEachChar("abcxyz"));

//85. 
function crossSum(arr) {
  // const first = [];
  // const last = [];
  // const output = [];
  // for (let i=0; i<arr.length; i++) {
  //   if(i%2 === 0){ 
  //     first.push(arr[i])
  //   } else {
  //     last.push(arr[i])
  //   }
  // }
  // output.push(first.reduce((accu,curr) => accu + curr));
  // output.push(last.reduce((accu,curr) => accu + curr));

  // return output

  const initial = [0,0];
  for (let i=0; i<arr.length; i++) {
    if (i%2) initial[1] += arr[i]
    else initial[0] += arr[i]
  }
  return initial
}
console.log(crossSum([2,1,4,5,6,9]));

//87. same array y swapping
// function sameArr(arr1, arr2) {
//   if (arr1.length === arr2.length) {
//     for (let i=0; i<arr1.length; i++) {
//       if(arr1[i] === arr2[i]){
//         return result = true
//       }
//     }
//     return result
//   }


// }
// console.log(sameArr([1,4,3], [1,2,3]))

//88.


//90. find the kth greatest element of a given array of integers
function nHigherValue(n) {
  const arr = [2,1,4,5,6,9];
  arr.sort();
  // console.log(arr)
  return arr[n-1]
}
console.log(nHigherValue(4));

//91.  find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order.)
function findMaxVal(arr) {
  for (let i=0; i<arr.length-1; i++) {
    arr[i] = arr[i] + arr[i+1]
  }
  return(Math.max(...arr.slice(0, -1)))
}
console.log(findMaxVal([2,1,4,5,6,9]));

//92. absolute difference
function findMaxValAbs(arr) {
  for (let i=0; i<arr.length-1; i++) {
    arr[i] = Math.abs(arr[i] - arr[i+1])
  }
  return (Math.max(...arr.slice(0, -1)))
}
console.log("cc", findMaxValAbs([1, 2, 3, 8, 9]));

//93.

//94. most repeated num
// function repeatedNum(arr) {
//   for (let i=0; i<arr.length; i++) {
//     arr[i] 
//   }
// }
// console.log(repeatedNum([9, 1, 2, 9, 3, 8, 8, 9]));

//95. replace all the numbers with a specified number of a given array of integers.  1 -> 7
function replaceVal(arr) {
 for (let i=0; i<arr.length; i++) {
  if (arr[i] === 1) {
    arr[i] = 7;
  }
 }
 return arr
}
console.log(replaceVal([1, 2, 3, 1, 8, 9]));

//96. compute the sum of absolute differences of consecutive numbers of a given array of integers.
function crossSumOfDiff(arr) {
  // for (let i=0; i<arr.length; i++) {
  //   arr[i] = Math.abs(arr[i] - arr[i+1]);
  // }
  // return arr.slice(0, -1).reduce((a, c) => a+c)
  var ans = 0;
  for (let i=1; i<arr.length; i++) {
    ans += Math.abs(arr[i] - arr[i-1])
    console.log(ans)
  }  
  return ans
}
console.log(crossSumOfDiff([1, 2, 3, 8, 9]));

//97. 

//98. minimum possible number of letters to make a given string written in the upper case or in the lower case.
function upprLowerCase(str) {
  var x=0;
  var y=0;
  for (let i=0; i<str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      x++;
    } else {
      y++;
    }
  }
  return (x>y) ? str.toUpperCase() : str.toLowerCase();
}
console.log(upprLowerCase("WRIte"));

