let homeScoreEl = document.getElementById("homescore");
let awayScoreEl = document.getElementById("awayscore");
let resultEl = document.getElementById("resultinfo");

let homeTeamScore = 0;
let awayTeamScore = 0;

function compareResult() {
  if (homeTeamScore > awayTeamScore) {
    resultEl.innerText = "Man UTD Leading!";
  } else if (homeTeamScore < awayTeamScore) {
    resultEl.innerText = "Liverpool Leading!";
  } else if ((homeTeamScore === 0, awayTeamScore === 0)) {
    resultEl.innerText = "Let's GO!";
  } else {
    resultEl.innerText = "Its a Draw!";
  }
}

function scoreBtnOne() {
  homeTeamScore++;
  homeScoreEl.innerText = homeTeamScore;
  compareResult();
}

function scoreBtnTwo() {
  homeTeamScore += 2;
  homeScoreEl.innerText = homeTeamScore;
  compareResult();
}

function scoreBtnThree() {
  homeTeamScore += 3;
  homeScoreEl.innerText = homeTeamScore;
  compareResult();
}

function scoreBtnFour() {
  awayTeamScore++;
  awayScoreEl.innerText = awayTeamScore;
  compareResult();
}

function scoreBtnFive() {
  awayTeamScore += 2;
  awayScoreEl.innerText = awayTeamScore;
  compareResult();
}

function scoreBtnSix() {
  awayTeamScore += 3;
  awayScoreEl.innerText = awayTeamScore;
  compareResult();
}

function resetBtn() {
  homeTeamScore = 0;
  awayTeamScore = 0;
  homeScoreEl.innerText = homeTeamScore;
  awayScoreEl.innerText = awayTeamScore;
  compareResult();
}
