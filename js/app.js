// prompt("This ")
var freedom = "yes"

while (freedom == "yes") {

  var option = prompt("Would you like to add(1), subtract(2), divide(3) or multiply(4), if you would like more options please press enter.");
  // Added clearer options
  if (option == "") {
    var option = prompt("Would you like to  power(5) or square-root(6), please enter a number.");
  }

  var choice1 = prompt("Please type the first number you would like to use in the calculation");
  // Removes the 2nd number option from the sqrt
  if (option != 6) {
    var choice2 = prompt("Please type the second number you would like to use below");
  }
  
  if (option == 1) {
    var answerSum = Number(choice1) + Number(choice2);
    alert("The answer is " + answerSum);
  } else if (option == 2){
    var answerSubtract = Number(choice1) - Number(choice2);
    alert("The answer is " + answerSubtract)
  } else if (option == 3){
    var answerDivide = Number(choice1) / Number(choice2);
    alert("The answer is " + answerDivide)
  } else if (option == 4){
    var answerMultiply = Number(choice1) * Number(choice2);
    alert("The answer is " + answerMultiply)
  } else if (option == 5){
    var answerPower = Math.pow(Number(choice1), Number(choice2));
    alert("The answer is " + answerPower)
  } else if (option == 6){
    var answerSqrt = Math.sqrt(Number(choice1), Number(choice2));
    alert("The answer is " + answerSqrt)
  } else {
    var answerSum = Number(choice1) + Number(choice2);
    alert("The answer is " + answerSum + ", addition was chosen automatically as the operator option was left blank.");
  }
  freedom = prompt("Would you like to make another calculation (yes) or quit (no)")
}
