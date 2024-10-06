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

