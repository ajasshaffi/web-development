
const score=JSON.parse(localStorage.getItem('score')) || 
  {
    wins: 0,
    losses: 0,
    ties:0
  };

  function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `wins:  ${score.wins},  losses:  ${score.losses},  ties:  ${score.ties}`;
  }


function playMove(playerMove){
  let result='';
  const computerMove=cMove();
  if (playerMove==='Scissors'){
        if(computerMove=== 'Scissors')
        {
          result='Tie!'
        }
      else if(computerMove=== 'Rock')
        {
          result=' You lose!';
        }
      else if(computerMove === 'Paper')
        {
          result= 'You won!'
        }
    }
  else if(playerMove==='Rock'){
    if(computerMove=== 'Rock')
      {
        result='Tie!'
      }
    else if(computerMove=== 'Paper')
      {
        result=' You lose!';
      }
    else if(computerMove === 'Scissors')
      {
        result= 'You won!'
      }
  }
  else{
    if(computerMove=== 'Paper')
      {
        result='Tie!'
      }
    else if(computerMove=== 'Scissors')
      {
        result=' You lose!';
      }
    else if(computerMove === 'Rock')
      {
        result= 'You won!'
      }
  }
  if(result === 'You won!')
  {
    score.wins++;
  }
  else if (result===' You lose!')
  {
    score.losses++;
  }
  else if(result==='Tie!'){
    score.ties++;
  }
  localStorage.setItem("score",JSON.stringify(score));
  updateScoreElement();
  document.querySelector('.js-result').innerHTML = `${result}\n`;
  document.querySelector('.js-moves').innerHTML = `You picked ${playerMove}.computer picked ${computerMove}`;
}

let isAutoPlaying=false;
let intervalId;

function autoPlay() {

  if(!isAutoPlaying) {
    intervalId = setInterval(function(){
      const playerMove=cMove();
      playMove(playerMove);
      
    },1000);
    isAutoPlaying=true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying=false;
  }

 
}

function cMove(){
  const randomNumber = Math.random();
if (randomNumber>=0 && randomNumber < 1/3)
  {
    computerMove= 'Rock';
  }
else if (randomNumber> 1/3 && randomNumber < 2/3)
{
    computerMove= 'Paper';
}
else {
    computerMove= 'Scissors';
}
return computerMove;
}


function reset(){
  score.wins=0;
  score.losses=0;
  score.ties=0;
  localStorage.removeItem('score');
  updateScoreElement();
}
