// prompt("This ")
var choice1 = prompt("Please type the first number you would like to use in the calculation")
var choice2 = prompt("Please type the second number you would like to use below")

var option = prompt("Would you like to add(1), subtract(2), divide(3) or multiply(4), please enter a number.")

if (option == 1) {
  var answerSum = Number(choice1) + Number(choice2);
  prompt("The answer is " + answerSum);
} else if (option == 2) {
  var answerSubtract = Number(choice1) - Number(choice2);
  prompt("The answer is " + answerSubtract)
} else if (option == 3) {
  var answerDivide = Number(choice1) / Number(choice2);
  prompt("The answer is " + answerDivide)
} else if (option == 4) {
  var answerMultiply = Number(choice1) * Number(choice2);
  prompt("The answer is " + answerMultiply)
}
