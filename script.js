console.log('hello everyone');
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal_container');

open.addEventListener('click', () => {
	modal.classList.add('show');
});

close.addEventListener('click', () => {
	modal.classList.remove('show');
});


//rightans
var q1c1 = $('.q1c1');
var q2c2 = $('.q2c2');
var q3c3 = $('.q3c1');
var q4c4 = $('.q4c3');
var q5c5 = $('.q5c3');
var q6c6 = $('.q6c1');
var q7c7 = $('.q7c1');



var emptySpace = $('.emptySpace');


var nextQuestion1 = $('.nextQuestion1');
var nextQuestion2 = $('.nextQuestion2');
var nextQuestion3 = $('.nextQuestion3');
var nextQuestion4 = $('.nextQuestion4');
var nextQuestion5 = $('.nextQuestion5');
var nextQuestion6 = $('.nextQuestion6');
var nextQuestion7 = $('.nextQuestion7');


q1c1.on("click",rightAnswer1);
q2c2.on("click",rightAnswer2);
q3c3.on("click",rightAnswer3);
q4c4.on("click",rightAnswer4);
q5c5.on("click",rightAnswer5);
q6c6.on("click",rightAnswer6);
q7c7.on("click",rightAnswer7);
nextQuestion1.on("click",goToNext1)
nextQuestion2.on("click",goToNext2)
nextQuestion3.on("click",goToNext3)
nextQuestion4.on("click",goToNext4)
nextQuestion5.on("click",goToNext5)
nextQuestion6.on("click",goToNext6)


function rightAnswer1() {
	emptySpace.append(`<p> There is no right answer!!!! We are here to spread some more knowledge  </p>`);
};

function rightAnswer2() {
	emptySpace.append(`<p> Answer choice two is correct, human trafficking is modern day slavery that involves the use of force in sex trafficking
  </p>`);
};
function rightAnswer3() {
	emptySpace.append(`<p> Answer 1 is correct, traffickers often trick victims by using assault, threats, or manipulation into working under illegal and inhumane conditions.
  </p>`);
};
function rightAnswer4() {
	emptySpace.append(`<p> Answer 3, although human trafficking occurs everywhere and anyone can fall into it, low-income communities are more suspect to human trafficking due to the vulnerbility being one of the factors that human traffickers look for.
  </p>`);
};
function rightAnswer5() {
	emptySpace.append(`<p> All of the above, your voice is your most powerful weapon so use it :) 
  </p>`);
};
function rightAnswer6() {
	emptySpace.append(`<p> Answer 1 is correct, these are some of the indicators that someone is a trafficking victim 
  </p>`);
};
function rightAnswer7() {
	emptySpace.append(`<p> Glad you are excitedddd
  </p>`);
};

function goToNext1 () {
  location.href = "q2.html";
}
function goToNext2 () {
  location.href = "q3.html";
}
function goToNext3 () {
  location.href = "q4.html";
}
function goToNext4 () {
  location.href = "q5.html";
}
function goToNext5 () {
  location.href = "q6.html";
}
function goToNext6 () {
  location.href = "q7.html";
}

