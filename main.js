//Grab inputs

var inputOne = document.querySelector ('#num_one');
var inputTwo = document.querySelector ('#num_two');

//calulate button

var calcBtn = document.querySelector('#calculateBtn');

//answer space


var answerField = document.querySelector('#answer');

//mulitplication part


function mulitplication (){
  var firstNum = Number(inputOne.value);
  var secondNum = Number (inputTwo.value);
  var product = firstNum * secondNum;

  answerField.innerHTML = product;

  };

  multipBtn.addEventListener('click', mulitplication);

 //addition part

function addition (){
  var firstNum = Number(inputOne.value);
  var secondNum = Number (inputTwo.value);
  var sum = firstNum + secondNum;

  answerField.innerHTML = sum;

  };


addBtn.addEventListener('click', addition);





