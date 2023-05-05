// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// Pseudo code:

// a) Create a test with expect statements for each of the variables provided.

//const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
//const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.


//________________________________________________________________________________________

// --------------------1) Create a function that takes an object as an argument and decides if the number inside it is evenly divisible by three or not.

// Pseudo code:
//input: 3 objects, object1, object2, object3
//output: a statement that states whether the number value in the object is divisible by 3
//process: create a function and run a test using the red-green-refactor implementation on it to ensure the function has a good failure; once it does, create a higher order function using conditional statements to take the input, ask if it is divisible by 3; if it is or isn't, the output will have the expected statement

// a) Create a test with expect statements for each of the variables provided.

//const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"

//RED
// describe("object1", () => {
//     it("returns number if divisible by 3", () => {
//         expect(object1()).toEqual("15 is divisible by three")
//     })
// })

//good failure
// FAIL  ./jest.test.js
// object1
//   ✕ returns statement if number is divisible by 3

// ● object1 › returns statement if number is divisible by 3

//   ReferenceError: yes is not defined

//     4 | describe("object1", () => {
//     5 |     it("returns statement if number is divisible by 3", () => {
//   > 6 |         expect(object1(yes)).toEqual("15 is divisible by three")
//       |                        ^
//     7 |         expect(object1(no).toEqual("it is not divisible by three"))
//     8 |     })
//     9 | })

//     at Object.yes (jest.test.js:6:24)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.137 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.



//const object2 = { number: 0 }
// Expected output: "0 is divisible by three"


//RED
// describe("object2", () => {
//     it("returns number if divisible by 3", () => {
//         expect(object2()).toEqual("0 is divisible by three")
//     })
// })

//Good Failure
// FAIL  ./jest.test.js
// object2
//   ✕ returns statement if number is divisible by 3 (1 ms)

// ● object2 › returns statement if number is divisible by 3

//   ReferenceError: yes is not defined

//     4 | describe("object2", () => {
//     5 |     it("returns statement if number is divisible by 3", () => {
//   > 6 |         expect(object2(yes)).toEqual("0 is divisible by three")
//       |                        ^
//     7 |         expect(object2(no).toEqual("0 is not divisible by three"))
//     8 |     })
//     9 | })

//     at Object.yes (jest.test.js:6:24)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.16 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.



//const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

//RED
// describe("object3", () => {
//     it("returns number if divisible by 3", () => {
//         expect(object3()).toEqual("-7 is not divisible by three")
//     })
// })

//good failure
// FAIL  ./jest.test.js
// object3
//   ✕ returns statement if number is divisible by 3

// ● object3 › returns statement if number is divisible by 3

//   ReferenceError: yes is not defined

//     3 | describe("object3", () => {
//     4 |     it("returns statement if number is divisible by 3", () => {
//   > 5 |         expect(object3(yes)).toEqual("-7 is divisible by three")
//       |                        ^
//     6 |         expect(object3(no).toEqual("-7 is not divisible by three"))
//     7 |     })
//     8 | })

//     at Object.yes (jest.test.js:5:24)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.158 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.


//______________________________________________

// b) Create the function that makes the test pass

//PseudoCode:
//Create a test that passes utilizing the test code that failed in a "good" way
//output - a passing function using the information that was given
//Process: Created test that failed successfully. When creating a new "working" test, filled out input and matched variables to get the return of 15 being % by 3. Could not get the test to run in jest.test.js. Stated that the code must contain a test. 


//GREEN
//pseudocode:
//input: number
//ouput: number that is divisible by 3 or not
//function name: divide15
//use conditional statement to prove if 15 is divisible by 3 and provide the proper output for either the yes or no
//return: if yes, 15 is divisible by three, if no try again

// const divide15 = (number) => {
//     if(divide15 % 3) {
//         return "15 is divisible by three"
//     } else {
//         return "Try Again"
//     }
// }
// FAIL  ./code-challenges.test.js
//   ● Test suite failed to run

//     Your test suite must contain at least one test.

//GREEN
//pseudocode:
//input: number
//ouput: number that is divisible by 3 or not
//function name: divide0
//use conditional statement to prove if 0 is divisible by 3 and provide the proper output for either the yes or no
//return: if yes, 0 is divisible by three, if no try again

// const divide0 = (number) => {
//     if(divide0 % 3) {
//         return "0 is divisible by three"
//     } else {
//         return "Try Again"
//     }
// }
// FAIL  ./code-challenges.test.js
//   ● Test suite failed to run

//  Your test suite must contain at least one test.

//GREEN
//pseudocode:
//input: number
//ouput: number that is divisible by -7 or not
//function name: divideNot
//use conditional statement to prove if 15 is divisible by 3 and provide the proper output for either the yes or no
//return: if yes, -7 is divisible by three, if no try again

// const divideNot = (number) => {
//     if(divideNot % 3) {
//         return "-7 is divisible by three"
//     } else {
//         return "Try Again"
//     }
// }
// FAIL  ./code-challenges.test.js
//   ● Test suite failed to run

//  Your test suite must contain at least one test.

//Refactor: Once working green code is good to go, refactoring can be a part of the process to clean up the code for all three variables.

//__________________________________________________________________

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// Pseudo code:
//input: an array
//output: all the words in the array capitilized
//function name: randoNouns1 and randoNouns2
//process: created a jest test for both sets of arrays. Both came back with 2 failures, one good failure and on annotating the improper array placement (was just copied and pasted as a means of annotating the potential output.)

//RED
// describe("randoNouns", () => {
//  it("iterates across the array", () => {
//         expect(randoNouns()).toEqual("All words capitilized in the array of" ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
// })
// })

// FAIL  ./code-challenges.test.js
// ● randoNouns › iterates across the array

//   ReferenceError: randoNouns is not defined

//     219 | describe("randoNouns", () => {
//     220 |  it("iterates across the array", () => {
//   > 221 |         expect(randoNouns()).toEqual("All words capitilized in the array of" ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//         |         ^
//     222 | })
//     223 | })
//     224 |

//     at Object.expect (code-challenges.test.js:221:9)

// Test Suites: 2 failed, 2 total
// Tests:       2 failed, 2 total
// Snapshots:   0 total
// Time:        0.181 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.

//RED
// describe("randoNouns2", () => {
//     it("iterates across the array", () => {
//            expect(randoNouns()).toEqual("All words capitilized in the array of" ["Temperature", "Database", "Chopsticks", "Mango"])
//    })
//    })
//    FAIL  ./code-challenges.test.js
//    ● randoNouns2 › iterates across the array
 
//      ReferenceError: randoNouns is not defined
 
//        247 | describe("randoNouns2", () => {
//        248 |     it("iterates across the array", () => {
//      > 249 |            expect(randoNouns()).toEqual("All words capitilized in the array of" ["Temperature", "Database", "Chopsticks", "Mango"])
//            |            ^
//        250 |    })
//        251 |    })
//        252 |
 
//        at Object.expect (code-challenges.test.js:249:12)
 
//  Test Suites: 2 failed, 2 total
//  Tests:       2 failed, 2 total
//  Snapshots:   0 total
//  Time:        0.183 s, estimated 1 s
//  Ran all test suites.
//  error Command failed with exit code 1.



// b) Create the function that makes the test pass.
//PseudoCode
//input: randomNouns1, randomNouns2
//output: both arrays returned seperately with each index capitilized using the built in method of .toUpperCase.

//Tested, came back as array =  undefined. 
// FAIL  ./code-challenges.test.js
// ● Test suite failed to run

// ReferenceError: array is not defined

//   307 | }
//   308 |
// > 309 | console.log(array(randomNouns1))
//       |         ^
//   310 |
//   311 |
//   312 |

//   at Object.log (code-challenges.test.js:309:9)

// Test Suites: 2 failed, 2 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.208 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.

// const newCapital = (array) => {
//     return array.toUpperCase
// }

// console.log(array(randomNouns1))

// const newCapital2 = (array) => {
//     return array.toUpperCase
// }

// console.log(array(randomNouns2))


//test fail
// FAIL  ./code-challenges.test.js
// ● Test suite failed to run

// ReferenceError: array is not defined

//______________________________________________

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Pseudo code:

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

//PseudoCode
//input- describe, it, expect
//output: a good fail that states the variable is undefined
//function name: findOne, findZero, findTwo
//process: create a test function that will fail "good". Not sure how 

//RED
// describe("vowelTester1", () => {
//     it("turns into an array", () => 
//         expect(vowelTester1()).toEqual(1))
//     })

// - test fail successfully
// FAIL  ./code-challenges.test.js
// ● vowelTester1 › turns into an array

//   TypeError: vowelTester1 is not a function

//     369 | describe("vowelTester1", () => {
//     370 |     it("turns into an array", () => 
//   > 371 |         expect(vowelTester1()).toEqual(1))
//         |                ^
//     372 |     })
//     373 |
//     374 | // describe("vowelTester2", () => {

//     at Object.vowelTester1 (code-challenges.test.js:371:16)

// Test Suites: 2 failed, 2 total
// Tests:       2 failed, 2 total
// Snapshots:   0 total
// Time:        0.182 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.

// describe("vowelTester2", () => {
//     it("turns into an array", () => 
//         expect(vowelTester2()).toEqual(0))
//     })

    //test failed successfully
//     FAIL  ./code-challenges.test.js
//     ● vowelTester2 › turns into an array
  
//       TypeError: vowelTester2 is not a function
  
//         397 | describe("vowelTester2", () => {
//         398 |     it("turns into an array", () => 
//       > 399 |         expect(vowelTester2()).toEqual(0))
//             |                ^
//         400 |     })
//         401 |
//         402 | // describe("vowelTester3", () => {
  
//         at Object.vowelTester2 (code-challenges.test.js:399:16)
  
//   Test Suites: 2 failed, 2 total
//   Tests:       2 failed, 2 total
//   Snapshots:   0 total
//   Time:        0.182 s, estimated 1 s
//   Ran all test suites.
//   error Command failed with exit code 1.

// describe("vowelTester3", () => {
//     it("turns into an array", () => 
//         expect(vowelTester3()).toEqual(2))
//     })
//test failed successfully
//     FAIL  ./code-challenges.test.js
//     ● vowelTester3 › turns into an array
  
//       TypeError: vowelTester3 is not a function
  
//         425 | describe("vowelTester3", () => {
//         426 |     it("turns into an array", () => 
//       > 427 |         expect(vowelTester3()).toEqual(2))
//             |                ^
//         428 |     })
//         429 |
//         430 | // b) Create the function that makes the test pass.
  
//         at Object.vowelTester3 (code-challenges.test.js:427:16)
  
//   Test Suites: 2 failed, 2 total
//   Tests:       2 failed, 2 total
//   Snapshots:   0 total
//   Time:        0.184 s, estimated 1 s
//   Ran all test suites.
//   error Command failed with exit code 1.

// b) Create the function that makes the test pass.

//PseudoCode
//Input: vowelTester1, vowelTester2, vowelTester3
//ouput: number associated with the index
//process: create a function that turns the string into an array and find the index(?) associated with the exepected output, using the split() built in method (?). 

const newNum = (array) => {
    return vowelTester1.split()
}
console.log (array(1))

//Green
// FAIL  ./code-challenges.test.js
// ● Test suite failed to run

//   ReferenceError: array is not defined

//     460 |     return vowelTester1.split()
//     461 | }
//   > 462 | console.log (array(1))
//         |         ^

//     at Object.log (code-challenges.test.js:462:9)

// Test Suites: 2 failed, 2 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.18 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1