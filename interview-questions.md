# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A parameter is the place where a value, index or array will go. An arguement is the values that fill that parameter.

Researched answer: A parameter is the variable name that holds a place in a function where the arguement is the actual or "real" value that is declaredinto the function when the function is in action or "called". The arguement value will be "assigned" to the parameter.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: .map takes three predefinied parameters: value, index and array. Any one of the three parameters are required, however you may as many parameters as you'd like. 

Researched answer: The value parameter is required, while the index and array are not, but can be added. They all represent the current value/index/array of the element. When using the array in the parameter, it allows .map to look foward or backwards through the array.

3. What is the difference between map and filter?

Your answer: The .map mehtod will iterate across the entirety of the index of an array. It will also return the original length of an array. It simply allows the functions to perform across the array and output the full length. 
The .filter method will iterate across an array as well, but depending on the callback of the function, will output a subset of the array.

Researched answer: The .map method creates a new array after the function runs with the return of the function. Whatever the function/user decides to do the .map method will allow the values in the array to be manipulated, returning in an entirely new array. The original length of the original array is kept and added to the new one.

The .fitler method also creates a new array with returned values after a specific function is called, however it is just a subset of the values from the original array. Typically, the user will identify values in an array that have a common characteristic, such as a number, and return the values of the same characteristic in a new array, as a subset.

1. What is iteration?

Your answer: Iteration is when a method moves through an entire array.

Researched answer: When we want to utilize a function or bit of code for each value in an array or object or other collection, we go through each individual value of an array, etc. to apply the code. This will occur from left to right and move sequentially.  

1. What is the difference between a function and a method?

Your answer: The function is the 'instructions' so to speak. It gives us the actionable requirements for the data/values that are input into it.
A method is a function within an object, so it will only provide the actionable course through a the previously dicated objects, vs the whole function.

Researched answer: A function performs an action from written code. It includes parameters, and is encased in curly brackets. Within the parameters, the function receives values/indexes/arrays in the form of arguements. 

Objects are like functions, however they are an object property that "has function value". It is essentially an action (function) that can occur on an object, and paraentheses don't always have to be used.

Both functions and objects have to be called upon by their name.

6. STRETCH: What is hoisting in JavaScript?

Your answer: I believe hoisting to be the updating of new information into a class, such as utilizing the key word 'new'. For example, to hoist new values into a class, you would need to ex. const newVar = new Learn("new value here")

Researched answer:

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Component: A function that is independent and reusable bit of code that contain JavaScript logic and return a markup that goes to the browser. It also needs to start with an uppercase letter in PascalCase. Overall it will breakup the UI pieces into smaller independent ones.

2. Spread operator: This looks like ' ... ' and allows coders to copy all/part of an array or object. If there are lots of values/inputs for an object or an array, this will allow the coder to quickly get through typing the object/array out.

3. React state: Since everything in React is a component, React state is the variable that will dictate how the data in a component "renders and behaves". If data is in a state variable, it is called a logic componenet. If it is not, it's called a display component. The state of a component can also be static or dynamic, that utilizes different methods in either area that are built-in and assist users with manipulating the data and functional componenets within React.

4. React props: React props, or properties, allow the coder to share information between componenets, especially ones that are nested within one another (parent componenet passes it down). The information includes data and behaviors. Props are only passed in one direction

5. DOM events: DOM, which stands for Document Object Model, are interactions via the website user over the elements of the page. Everything from the keyboard to mouse interactions are tracked by DOM events. These events can be correlated to software reactions to the user on the otherside.
