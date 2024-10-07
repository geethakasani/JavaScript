//Conditional Statements
//conditional statements that allow you to control the flow of your code based on specific conditions
//if
//esle
//else if 
//switch cases
//trinary

//if
// The if statement executes a block of code if the specified condition is true.

// if (condition) {
//     code to be executed if condition is true
// }
if (10 > 5) {
    console.log("10 is greater than 5");
}


// Else Statement
// The else statement executes a block of code if the condition in the if statement is false.
// if (condition) {
//     code to be executed if condition is true
// } else {
//     code to be executed if condition is false
// }

if ("cat" === "dog") {
    console.log("They are the same");
} else {
    console.log("They are different");
}
// Else If Statement
// The else if statement allows you to specify a new condition to test if the previous conditions were false.

// if (condition1) {
//     code if condition1 is true
// } else if (condition2) {
//    code if condition2 is true
// } else {
//     code if both conditions are false
// }

let hour = 15;
if (hour < 12) {
    console.log("Good morning");
} else if (hour < 18) {
    console.log("Good day");
} else {
    console.log("Good evening");
}

// 4. Switch Statement
// The switch statement evaluates an expression and executes the corresponding case based on its value, which can be more efficient for multiple conditions.

// switch (expression) {
//     case value1:
//         code to be executed if expression === value1
//         break;
//     case value2:
//         code to be executed if expression === value2
//         break;
//     default:
//         code to be executed if expression doesn't match any case
// }


let fruit = "apple";
switch (fruit) {
    case "banana":
        console.log("Banana is yellow.");
        break;
    case "apple":
        console.log("Apple is red.");
        break;
    case "grapes":
      console.log("green")
    default:
        console.log("Unknown fruit.");
}

// 5. Ternary Operator
// The ternary operator provides a shorthand way to write simple if-else statements.

// condition ? exprIfTrue : exprIfFalse;


let age = 20;
let beverage = (age >= 21) ? "Beer" : "Juice";
console.log(beverage);

//Array 

let arr=[[1.2],["a","b"]]
console.log(arr)
console.log(arr[1][1])

arr[1][1]=3
console.log(arr)
console.log(arr.length)
let fruits=["apple","grapes","banana"]
//push()	Adds one or more elements to the end of an array	
fruits.push("orange");
console.log(fruits)

// pop()	Removes the last element from an array	
fruits.pop();
console.log(fruits)

// shift()	Removes the first element from an array	
fruits.shift();
console.log(fruits)

// unshift()	Adds one or more elements to the beginning of an array	
fruits.unshift("strawberry","watermelon");
console.log(fruits)

// slice()	Returns a shallow copy of a portion of an array	
let citrus = fruits.slice(1,4);
console.log(citrus)

// splice()	Changes the contents of an array by removing or replacing elements	
//splice(str,delet,add);

fruits.splice(1, 1, "kiwi",'pear')
console.log(fruits)
//concat()	Merges two or more arrays and returns a new array	
let allFruits = fruits.concat(citrus);
console.log(allFruits)

// map()	Creates a new array with the results of calling a function on every element in the original array	
let lengths = fruits.map(fruit => fruit.length);
console.log(lengths)
// forEach()	Executes a provided function once for each array element
// iterating over the elements of an array. It allows you to execute a provided function once for each element in the array
fruits.forEach(fruit => console.log(fruit));
// join()	Joins all elements of an array into a string	
let fruitString = fruits.join("-");
console.log(fruitString)


//Use filter() to select specific elements based on a condition.
let num=[1,2,3,4,5,6,7]
let even=num.filter(n=>n%2==0);
  console.log(even)
//Use map() to transform each element in the array.
let square=num.map(n=>n**3)
console.log(square)
//forEach
let total = 0;

num.forEach((num) => {
    total += num;
});

console.log(total); 

//reduce
let s=num.reduce((acc,CurrentValue)=>{
  return acc+CurrentValue
},0)
console.log(s)

