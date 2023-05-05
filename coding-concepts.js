// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Charlie 2023"
//console.log(cohort.split(""))

// a) Your answer: The output will be "C", "h", "a", "r", "l", "i", "e", "", "2", "0", "2", "3"
// b) Verify and explain: It returned the string as an array with [], which I did not include. .split returns a string as an array with each index seperated.

// --------------------2) What will this log?

const greeter = (name) => {
   `Hello, ${name}!`
}
//console.log(greeter("LEARN Student"))

// a) Your answer: The output will not be complete; the functin is missing a return command, so it will not know to return the string that states "Hello, LEARN Student" as indicated by the input value in line 21. 
// b) Verify and explain: The output was "undefined". The function recognized that there was a value, but it was not 'instructed' to return the value that was in the console.log. The 'name' parameter helod the place where the input should go, once the function is called on to return the value of the parameter. I added 'return' on line 18 to verify and the output was 'Hello, LEARN Student!'

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
//console.log(multipliedByTwo)

// a) Your answer: The output will be an array where every number at each index will be multiplied by 2. The .map function will return the same length of an array, which will then iterate through the array. At each index, the number parameter will take th value and mulitply it by 2.
// b) Verify and explain: The output was [ 8, 10, 12, 14, 16 ]. Each index in the array was multiplied by 2. 

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
//console.log(onlyOdds)

// a) Your answer: I think it is one of two answers. If the '!== 0' means that the number divisible by 2 is not equal to 0, the output will be an array that only has the odd numbers of the array in it. [11, 13, 15]. The .filter built-in method will take a subset of the array, enter the index value in the number parameter. However, I also think that it might have to be 'number % 2 !==1' to produce an odd numbered array. 
// b) Verify and explain: The output is [ 11, 13, 15 ]. So the 'number % 2 !==0' is correct for finding a value that is uneven. This will provide a Boolean data type that states whether the operand finds the value to be not equal to zero. If it is not equal to zero, the value is false, if it is equal to zero it is true. The .filter method will remove all true values and return the array with the false values.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
//console.log(myCodingSkills.languages[0])

// a) Your answer: The output here will be languages: JavaScript. In the console.log the function is called on to return the values that are located within the object of 'languages' and within languages, the first index is 0, meaning JavaScript is at 0. 
// b) Verify and explain: The output was JavaScript! The exact path needs to be mapped out to the object.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Charlie"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: The output will be undefined. The 'new' LEARN will need to reflect .cohort, in order to ensure the new value knows where it needs to go.
// b) Verify and explain: Learn { student: 'George', cohort: 'Charlie', year: 2023 } is the output. So, the updated class reflects the string value of 'George' replacing the string value of 'Charlie'. Because the values are alike, the 'new' value was put in as a replacement.
