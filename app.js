let squris = document.querySelectorAll('.squirell');
let nets = document.querySelectorAll('.net')
let score = document.querySelector('#scoreCard')
let scoreB = document.querySelector('#scoreCard').querySelector('p');
function randHole() {
	return Math.floor(Math.random()*9) ;
}
var points = 0;
function addPoints(idx) {
	document.getElementById(idx).classList.add('net-active');
	points++;
	scoreB.innerText = `${points} catches`

}
let nIntervId;
let timeID;
const TIME_LIMIT = 2*60;
let timePassed = 0;
let timerInterval = null;
let timeLeft = TIME_LIMIT;
document.querySelector('#timeTag').innerHTML = `${formatTime(timeLeft)}`;

function starter() {
	startGame();
	startTimer();
	timeID = setTimeout(() => {
		stopGame();
	}, 2*60*1000);
}

function startGame() {
  if (!nIntervId) {
	points = 0;
	score.classList.remove('hide')
	scoreB.innerHTML = 'Game Started!'
	squris.forEach(div => {
		div.classList.toggle('hide',true);
	});
	nets.forEach(net => {
		net.classList.toggle('hide',true)
	});
	nIntervId = setInterval(function() {
		showUp();

	}, 1800);
  }
  else {
	  alert('complete the present game');
  }
}

function showUp() {

	let i = randHole();
	squris[i].classList.add("slideIn");
	setTimeout(function () {
		squris[i].classList.remove("slideIn");
		nets[i].classList.remove("net-active")
	}, 1200)
}

function stopGame() {
	if(nIntervId) {
		clearInterval(nIntervId);
		clearInterval(timerInterval);
		timeLeft = TIME_LIMIT;
		timePassed = 0;
		document.querySelector('#timeTag').innerHTML = "0:00";
		scoreB.innerText = `Your points are ${points}`;
		nIntervId = null;
		points = 0; 
		clearTimeout(timeID);
	} else {
		alert('please start the game');
	}
	
}

document.getElementById("start").addEventListener("click", starter);
document.getElementById("stop").addEventListener("click", stopGame);

//timer 

function formatTime(time) {
	const minutes = Math.floor(time / 60);
	let seconds = time % 60;
	if (seconds < 10) {
	  seconds = `0${seconds}`;
	}
	return `${minutes}:${seconds}`;
  }


function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("timeTag").innerHTML = formatTime(timeLeft);
  }, 1000);
}