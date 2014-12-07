//Michael Jones
//December 01, 2014
/**
 * Duel Fight Game - FINISHED
 * Date: 4/09/13

 Assignment 1
 Part 1/3 of series
*/

// self-executing function
(function(){

    console.log("FIGHT!!!"); // On screen button to start fight

    //player name
    var playerOneName = "Spiderman";   //Name of fighter one "Spiderman"
    var playerTwoName = "Batman";     //Name of fighter two "batman"

    //player damage
    var player1Damage = 20;   //player 1 damage
    var player2Damage = 20;   //player 2 damage

    //player health
    var playerOneHealth = 100;  //Player one starting health "100%"
    var playerTwoHealth = 100;  //Player two starting health "100%"

    //initiate round 
    var round=0; // this is the start of round one 

    function fight(){
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);  //start of fight input plyer name
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;   //varibale to calculate player one damage 
            var minDamage2 = player2Damage * .5;   //varibale to calculate player two damage 
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1); //calculates the damage of player one.
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2); //calculates the damage of player two.

            //inflict damage
            playerOneHealth-=f1; //check player one health 
            playerTwoHealth-=f2; //check player 2 health

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth); //prints on screen the players health

            //check for victor
            var result = winnerCheck();  //variable to check for winner of fight
            console.log(result);  //prints to console the result (winner)
            if (result==="no winner") //if no winner then game starts over.
            {
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

            } else{
                alert(result);
                break;
            };

          };
    };

    function winnerCheck(){   //funrion to check for a winner
        var result="no winner";
        if (playerOneHealth<1 && playerTwoHealth<1)  //variable to check if both fighers are below the minimum health.
        {
            result = "You Both Die";  //prints to console the result if both are below the minimum health
        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!" //prints to console player 2 result
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+" WINS!!!"  //prints to console player 1 result
        };
       return result;
    };

    /*******  The program gets started below *******/
    fight();

})();