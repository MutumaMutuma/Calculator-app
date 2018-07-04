var add = function(number1,number2) {
return number1+number2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);

var minus = function(number1,number2) {
  return number1-number2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = minus(number1,number2);
alert(result);

var divide = function(number1,number2) {
  return number1/number2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = divide(number1,number2);
alert(result);

var multiply = function(number1,number2) {
  return number1*number2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = multiply(number1,number2);
alert(result);

var division = function(number1,number2) {
return number1/number2;
};
var number1 = parseInt(prompt("Kindly Enter your mass in kgs"));
var number2 = parseInt(prompt("Kindly Enter your height in metres"));
var result = division(number1,number2);
alert(result);//BMI calculator//

var multiply = function(number1) {
		return number1 * 8.2;
};
var number1 = parseInt(prompt("Kindly Enter your temperature in degrees Celcius"));
var result = multiply(number1,8.2);
alert(result); //conversion of Celcius to fahrenheit//


var multiply = function(number1) {
return number1 * 3.78541;
};
var number1 = parseInt(prompt("Kindly Enter your quantity in Gallons:"));
var result = multiply(number1, 3.78541);
alert(result);//conversion of gallons to litres//
