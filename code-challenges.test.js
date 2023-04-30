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

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.


//________________________________________________________________________________________

// --------------------1) Create a function that takes an object as an argument and decides if the number inside it is evenly divisible by three or not.

// Pseudo code:
//input: 3 objects, object1, object2, object3
//output: a statement that states whether the number value in the object is divisible by 3
//process: create a function and run a test using the red-green-refactor implementation on it to ensure the function has a good failure; once it does, create a higher order function using conditional statements to take the input, ask if it is divisible by 3; if it is or isn't, the output will have the expected statement

// a) Create a test with expect statements for each of the variables provided.

/const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"

// describe("object1", () => {
//     it("returns number if divisible by 3", () => {
//         expect(object1()).toEqual("15 is divisible by three")
//     })
// })
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


const object2 = { number: 0 }
// Expected output: "0 is divisible by three"

// describe("object2", () => {
//     it("returns number if divisible by 3", () => {
//         expect(object2()).toEqual("0 is divisible by three")
//     })
// })
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

const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// describe("object3", () => {
//     it("returns number if divisible by 3", () => {
//         expect(object3()).toEqual("-7 is not divisible by three")
//     })
// })

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

// b) Create the function that makes the test pass.

const firstNum = (object1) => {
    if(object1 (15 % 3 === "yes" )) {
        return "15 is divisible by three"
    } else if (object1 (15 % 3 === "no")) {
        return "try again"
    }
}
// describe("object1", () => {
//     it("returns statement if number is divisible by 3", () => {
//         expect(object1(yes)).toEqual("15 is divisible by three")
//         expect(object1(no).toEqual("15 is not divisible by three"))
//     })
// })


// const object2 = { number: 0 }

// describe("object3", () => {
//     it("returns statement if number is divisible by 3", () => {
//         expect(object2(yes)).toEqual("0 is divisible by three")
//         expect(object2(no).toEqual("0 is not divisible by three"))
//     })
// })


// const object3 = { number: -7 }

// describe("object3", () => {
//     it("returns statement if number is divisible by 3", () => {
//         expect(object3(yes)).toEqual("-7 is divisible by three")
//         expect(object3(no).toEqual("-7 is not divisible by three"))
//     })
// })









// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// Pseudo code:

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Pseudo code:

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.
