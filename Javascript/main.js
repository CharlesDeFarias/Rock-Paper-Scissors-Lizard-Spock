//Player v bot rock paper scissors lizard spock
//User clicks on a button/image representing their choice
//Randomized choice between options is returned by server
//Clicked choice is compared to randomized choice
//If user wins, result displayed in HTML and user point counter increased
//If user loses, result displayed in HTML and bot point counter increased
//Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors
const images= document.querySelectorAll('img');
let uScore = 0, bScore=0;
images.forEach((image) => {
  image.addEventListener("click", rpsls)
});
function rpsls(){
  uChoice = this.alt;
  botChoice();
  compare();
}
const botChoice = ()=>{
  bChoice = Math.round(Math.random()*5)
  if(bChoice<=1){
    bChoice="Rock"
  }else if(bChoice<=2){
    bChoice="Paper"
  }else if(bChoice<=3){
    bChoice="Scissors"
  }else if(bChoice<=4){
    bChoice="Lizard"
  }else{
    bChoice="Spock"
  }
  return bChoice
}
const compare = ()=>{
  let grab=document.querySelector('h2');
  if((uChoice==="Rock"&&(bChoice==="Scissors"||bChoice==="Lizard"))||
  (uChoice==="Paper"&&(bChoice==="Spock"||bChoice==="Rock"))||
  (uChoice==="Scissors"&&(bChoice==="Lizard"||bChoice==="Paper"))||
  (uChoice==="Lizard"&&(bChoice==="Spock"||bChoice==="Paper"))||
  (uChoice==="Spock"&&(bChoice==="Rock"||bChoice==="Scissors"))){
    grab.innerText= "Wow, you win. Aren't you amazing? Winning a game of chance. Woooow."
    uScore += 1
    document.getElementById('uScore').innerText= uScore;
  }else if(uChoice===bChoice){
    grab.innerText= "It's a tie. Nobody wins. Everyone's disappointed. I'm sure you're used to that though."
  }else{
    grab.innerText= "Like always: you lose, loser. LOOOOSER."
    bScore += 1
    document.getElementById('bScore').innerText= bScore;
  }
}
