let homeScoreEl = document.getElementById("homescore");
let awayScoreEl = document.getElementById("awayscore");
let resultEl = document.getElementById("result-info");

let homeTeamScore = 0;
let awayTeamScore = 0;
let result = "Lets Go!";

function scoreBtnOne() {
  homeTeamScore++;
  homeScoreEl.innerText = homeTeamScore;
}

function scoreBtnTwo() {
  homeTeamScore += 2;
  homeScoreEl.innerText = homeTeamScore;
}

function scoreBtnThree() {
  homeTeamScore += 3;
  homeScoreEl.innerText = homeTeamScore;
}

function scoreBtnFour() {
  awayTeamScore++;
  awayScoreEl.innerText = awayTeamScore;
}

function scoreBtnFive() {
  awayTeamScore += 2;
  awayScoreEl.innerText = awayTeamScore;
}

function scoreBtnSix() {
  awayTeamScore += 3;
  awayScoreEl.innerText = awayTeamScore;
}

function resetBtn() {
  homeTeamScore = 0;
  awayTeamScore = 0;
  homeScoreEl.innerText = homeTeamScore;
  awayScoreEl.innerText = awayTeamScore;
}
