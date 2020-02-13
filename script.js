function myAttack(){
  var youHit = Math.floor(Math.random()*3);
  var damageThisRound = Math.floor(Math.random()*10 + 1);
  var totalDamage = 0;
  var slaying = true;
  while(slaying) {
   if (youHit) {
    totalDamage += damageThisRound;
        document.getElementById("text1").innerHTML = "You hit for " + totalDamage + " damage!";
        if (totalDamage >=10){
     document.getElementById("text2").innerHTML = "The Dragin is dead! You win";
     
  }
  else if (totalDamage < 10) {
      document.getElementById("text2").innerHTML = totalDamage + " damage is not enough!";
      document.getElementById("text3").innerHTML = "";
       
        }
    slaying = false;
} 
else {
  document.getElementById("text1").innerHTML = "Try again";
  document.getElementById("text2").innerHTML = "Need more damage";
 
  slaying = false;
}}}

function myReset(){
  document.getElementById("text2").innerHTML = "Try again!";

 
}