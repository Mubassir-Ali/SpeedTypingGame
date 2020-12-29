window.addEventListener('load',init)


// words Array
const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];

  // Global variables
let time =10;
let score=0;
let isPlaying;

//DOM Elements
const seconds =document.getElementById('seconds')
const currentWord=document.getElementById('current-word');
const inputWord=document.getElementById('input-word');
const message=document.getElementById('message');
const timeDisplay=document.getElementById('time');
const scoreDisplay=document.getElementById('score');

//initilize Game
function init(){
  
  // load words from array
  showWord(words);
  
  // match inputWord
  inputWord.addEventListener('input', startMatch);

  //Call countdown every second
  setInterval(countdown, 1000);

   //Check game status
   setInterval(checkStatus,50);
}

//Start match
function startMatch(){
  if(matchWord()){
    isPlaying=true;
    time=11;
    showWord(words)
    inputWord.value='';
    score++;
 
  }

  scoreDisplay.innerHTML=score;

}


// Match currentWord to wordInput
function matchWord(){
  if(inputWord.value===currentWord.innerHTML){
    message.innerHTML="Correct";
    return true;
  }
  else{
    message.innerHTML='';
    return false;
  }
}

function showWord(words){
  //Generate Random Array Index
  const randomIndex=Math.floor(Math.random()*words.length);

  //Output Random words
  currentWord.innerHTML=words[randomIndex];

 
}

function countdown(){
  //make sure your time is not run out
  if(time>0){
   
    time--;
  }
  else if(time===0){
    // Game is over
   // message.innerHTML="Game is over";
    isPlaying=false;
  }
 timeDisplay.innerHTML=time;
}

function checkStatus(){
  if(!isPlaying && time===0){
    message.innerHTML="Game is over"
  }
}