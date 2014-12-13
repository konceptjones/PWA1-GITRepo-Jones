//Michael Jones
//December 13, 2014

/**
 Assignment 3: Duel 3
 Part 3/3 of series
*/

// self-executing function
//test
function fight(){

    console.log ("*** Fight  **");

var fighter1_txt = document.querySelector("#ww").querySelector("p");
var fighter2_txt = document.querySelector("#bw").querySelector("p");
var round_txt = document.querySelector("h5");
var button = document.getElementById("fight_btn");

console.log()
//set your click event
button.addEventlistener("click", fight, false);
//DONT USE >> BUTTON.ONCLICK 

//CREATE ARRAY OF OBJECTS FOR 2 FIGHTERS
var fighters = [
{
    name:"Wonder Woman",
    damage:20,
    health:100,
},
{
    name:"Black Widow",
    damage:20,
    health:100,

}];

var round = 1;

//INITIALIZE DOM innerHTML text for top of HTML page
round_txt.innerHTML = "Click FIGHT BUTTON to Start";
fighter1_txt.innerHTML = fighters[0].name +":  "+ fighters[0].health;
fighter2_txt.innerHTML = fighters[1].name +":  "+ fighters[1].health;

  function fight(){

}
};