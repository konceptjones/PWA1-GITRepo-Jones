//Michael Jones
//December 13, 2014

/**
 Assignment 3: Duel 3
 Part 3/3 of series
*/

// self-executing function
(function fight(){

    console.log ("*** Fight  **");

//DOM Pieces Define
var fighter1_txt = document.querySelector("#ww").querySelector("p"); //fighter one Wonder Woman
var fighter2_txt = document.querySelector("#bw").querySelector("p"); //fighter two Black Widow
var round_txt = document.querySelector("h5"); //pulling info from html
var button = document.getElementById("fight_btn"); //fight button

console.log("ok so far");

//Event Button
button.addEventlistener("click", fight, false);
//DONT USE >> BUTTON.ONCLICK 

//Fighter array documented
var fighters = [
{
    name:"Wonder Woman",
    damage:20,
    health:100
},
{
    name:"Black Widow",
    damage:20,
    health:100

}];

var round = 1;

//INITIALIZE DOM innerHTML 
round_txt.innerHTML = "Click FIGHT BUTTON to Start!";
fighter1_txt.innerHTML = fighters[0].name +":  "+ fighters[0].health; //declaration of fighter one health
fighter2_txt.innerHTML = fighters[1].name +":  "+ fighters[1].health; //declaration of fighter two health

//Create "FIGHT" FUNCTION
function fight(){

//Alert (fighters [0].name+":"+fighters[0].health+"  *START*)
fighter1_txt.innerHTML = fighter[0].name +":    "+fighters[0].health;
fighter2_txt.innerHTML = fighter[0].name +":    "+fighters[1].health;

//determine damage
var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage*.5); // calculation to determine fighter one damage
var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage*.5); // calculation to determine fighter two damage

//inflict damage
fighters[0].health-=f1;
fighters[1].health-=f2;

console.log(fighters[0].health, fighters[1].health);

//check winner
var result = winnerCheck();
console.log(result);

round_txt.innerHTML = "ROUND #" + round + "Results:";
round++;
if (results=== "no winner")
{
    fighter1_txt.innerHTML = fighters[0].name +":   " + fighters[0].health;
    fighter2_txt.innerHTML = fighters[1].name +":   " + fighters[1].health;

} else{
    fighter1_txt.innerHTML = result;
    fighter2_txt.innerHTML = "";
}


button.removeEventListener("click", fight, false);


//button.onclick = "return false";
document.querySelector('.buttonblue').innerHTML = 'DONE!!!';
}

}


function winnerCheck(){
    var result = "no winner";
    if (fighters[0].health < 1 && fighters[1].health < 1)
    {
         result = "You Both Die - GAME OVER!";
    }    else if (fighters[0].health < 1){
         result = fighters[1].name + "WINS!!!"
    }     else if (fighters[1].health <1)
    {
    result = fighters[0].name + "WINS!!!"
}
return results;
}


})();

