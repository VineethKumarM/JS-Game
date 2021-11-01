let squris = document.querySelectorAll('.squirell');
let score = document.querySelector('#score')
function randHole() {
	return Math.floor(Math.random()*7) ;
}
var points = 0;
function addPoints() {
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
	nIntervId = setInterval(function() {
		showUp();

	}, 2200);
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
	}, 1100)
}

function stopGame() {
	if(nIntervId) {
		clearInterval(nIntervId);
		// squris.forEach(div => {
		// 	div.classList.toggle('hide',true);
		// 	});
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
