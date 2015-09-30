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

//division part

function divide (){
  var firstNum = Number(inputOne.value);
  var secondNum = Number (inputTwo.value);
  var quotient = firstNum / secondNum;

  answerField.innerHTML = quotient;

  };

  divBtn.addEventListener('click', divide);


//subtraction part

  function subtraction (){
    var firstNum =Number(inputOne.value);
    var secondNum = Number (inputTwo.value);
    var difference = firstNum - secondNum;

    answerField.innerHTML = difference;

  }

  subBtn.addEventListener('click', subtraction);
