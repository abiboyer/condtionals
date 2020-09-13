var wrapperEle = document.body.querySelector(".wrapper");

var prompter = prompt("Input a number.")
var number1=number(prompt("Input a number."))
if(isNaN==prompter){
  wrapperEle.innerHTML="Statement is false, please input valid number.";
}
 var prompter = prompt("Input an operator.")
 var number2=operator(prompt("Input a operator."))
 if("+,-,*,/,%,**,++,--"==prompter){
  wrapperEle.innerHTML="Statement is false, please input valid operator.";
 }
var prompter = promptt("Input a second number")
var number3=number(prompt("Input a second number."))
if(isNaN==prompter){
  wrapperEle.innerHTML="Statement is false, please input valid number.";
}
var answer=number1number2number3