// 1 Convert Celsius to Fahrenheit
// function convertCtoF(celsius) {
//     let fahrenheit = celsius * 9/5 + 32;
//     return fahrenheit;
//   }
// convertCtoF(30);

//2 Reverse a String
// function reverseString(str) {
//     let reverseStr = [];
//     for(let i = str.length - 1; i>= 0; i--){
//         reverseStr+=str[i]
//     }
//     return reverseStr;
//   }
//  console.log(reverseString("hello"));

// function reverseString(str) {
//     return str
//       .split("")
//       .reverse()
//       .join("");
// }

//3 Factorialize a Number
// function factorialize(num) {
//     let fctrNum = 1;
//     for(let i = 1; i<=num; i++){
//       fctrNum *= i;
//     }
//     return fctrNum;
//   }
// console.log(factorialize(5));

// function factorialize(num) {
//     if (num === 0) {
//       return 1;
//     }
//     return num * factorialize(num - 1);
//   }
  
// factorialize(5);

//4 Find the Longest Word in a String
// function findLongestWordLength(str) {
//     let splittedStr = str.split(" ");
//     let max = 0;
//     for(let i = 0; i < splittedStr.length; i++){
//         if(splittedStr[i].length>max){
//             max = splittedStr[i].length;
//         }
//     }
//     return max;
// }
// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// 5 Return Largest Numbers in Arrays
// function largestOfFour(arr) {
//     const results = [];
//     for (let i = 0; i < arr.length; i++) {
//       let largestNumber = arr[i][0];
//       for (let j = 1; j < arr[i].length; j++) {
//         if (arr[i][j] > largestNumber) {
//           largestNumber = arr[i][j];
//         }
//       }
//       results.push(largestNumber);
//     }
  
//     return results;
//   }

// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// 6 Confirm the Ending - no endWith()
// function confirmEnding(str, target) {
//     let lengthTarget = target.length;
//     let endingStr = str.slice(-lengthTarget)
//     return endingStr == target;
//   }
  
// console.log(confirmEnding("Bastian", "n"));

// 7 Repeat a String Repeat a String - no repeat()
// function repeatStringNumTimes(str, num) {
//     let newStr = '';
//     for(let i = 0; i < num; i++){
//         newStr+=str;
//     }
//     return newStr;
// }
  
// console.log(repeatStringNumTimes("abc", 3));

// 8 Truncate a String
// function truncateString(str, num) {
//     let newStr = '';
//     if(str.length > num){
//       newStr = str.slice(0,num) + '...'
//     }else{
//         return str
//     }
//     return newStr
//   }
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

// 9 Finders Keepers
// function findElement(arr, func) {
//     return arr.find(func);
//   }
// findElement([1, 2, 3, 4], num => num % 2 === 0);

// 10 Boo who
// function booWho(bool) {
//     if(typeof bool == 'boolean'){
//       return true
//     }else{
//       return false
//     }
//   }
// console.log(booWho(null));

// 11 Title Case a Sentence
// function titleCase(str) {
//     const newTitle = str.split(" ");
//     const updatedTitle = [];
//     for (let st in newTitle) {
//         updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
//     }
//     return updatedTitle.join(" ");
// }
// console.log(titleCase("I'm a little tea pot"));

// 12 Slice and Splice
// function frankenSplice(arr1, arr2, n) {
//     let localArr = arr2.slice();
//     localArr.splice(n, 0, ...arr1);
//     return localArr;
//   }
// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// 13 Falsy Bouncer
// function bouncer(arr) {
//     let newArr = [];
//     for(let i = 0; i <= arr.length; i++){
//         if(arr[i]){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
//   }
  
// console.log(bouncer([7, "ate", "", false, 9]));

// 14 Where do I Belong
// function getIndexToIns(arr, num) {
//     return arr
//       .concat(num)
//       .sort((a, b) => a - b)
//       .indexOf(num);
//   }
  
//   getIndexToIns([1, 3, 4], 2);

// 15 Mutations
// function mutation(arr) {
//     let count = 0
//     const test = arr[1].toLowerCase();
//     const target = arr[0].toLowerCase();
//     for (let i = 0; i < test.length; i++) {
//       if (target.indexOf(test[i]) < 0){
//         return false;
//       }else{
//         count+=1
//       }
//     }
//     return count == test.length
    
//   }
// console.log(mutation(["hello", "hey"]));

// 16 Chunky Monke
// function chunkArrayInGroups(arr, size) {
//     const newArr = [];
//     for (let i = 0; i < arr.length; i += size) {
//       newArr.push(arr.slice(i, i + size));
//       console.log(newArr)
//     }
//     return newArr;
// }
//  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
