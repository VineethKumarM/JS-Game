let squris = document.querySelectorAll('.squirell');
let nets = document.querySelectorAll('.net')
let score = document.querySelector('#score')
function randHole() {
	return Math.floor(Math.random()*9) ;
}
var points = 0;
function addPoints(idx) {
	document.getElementById(idx).classList.add('net-active');
	points++;
}
let nIntervId;
let timeID;

function starter() {
	score.innerHTML = "Game playtime is 2 mins";
	startGame();
	timeID = setTimeout(() => {
		stopGame();
	}, 2*60*1000);
}

function startGame() {
  if (!nIntervId) {
	points = 0;
	squris.forEach(div => {
		div.classList.toggle('hide',true);
	});
	nets.forEach(net => {
		net.classList.toggle('hide',true)
	});
	nIntervId = setInterval(function() {
		showUp();

	}, 2500);
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
	}, 1400)
}

function stopGame() {
	if(nIntervId) {
		clearInterval(nIntervId);
		score.innerText = `You caught ${points} squirrels! Try again to catch more`;
		nIntervId = null;
		points = 0; 
		clearTimeout(timeID);
	} else {
		alert('please start the game');
	}
	
}

document.getElementById("start").addEventListener("click", starter);
document.getElementById("stop").addEventListener("click", stopGame);
