//Grab inputs

var inputOne = document.querySelector ('#num_one');
var inputTwo = document.querySelector ('#num_two');

//calulate button

var calcBtn = document.querySelector('#calculateBtn');

//answer space


var answerField = document.querySelector('#answer');



function addition (){
  var firstNum = Number(inputOne.value);
  var secondNum = Number (inputTwo.value);
  var sum = firstNum + secondNum;

  answerField.innerHTML = sum;

  };


calculateBtn.addEventListener('click', addition);





