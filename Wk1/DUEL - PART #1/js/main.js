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

    //var fighter1 = ["Spiderman", 20, 100];

    console.log("FIGHT!!!"); // On screen button to start fight

    //player name
    var fighter1 = ["Superman", 20, 100];   //Name of fighter one "Spiderman"
    var fighter2 = ["Batman", 20, 100];     //Name of fighter two "batman"



    //initiate round 
    var round=0; // this is the start of round one 

    function fight(){
        alert("Superman"+":"+[]+"  *START*  "+"Batman"+":"+[]);  //start of fight input plyer name
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = [20] * .5;   //varibale to calculate player one damage 
            var minDamage2 = [20] * .5;   //varibale to calculate player two damage 
            var f1 = Math.floor(Math.random()*(20-minDamage1)+minDamage1); //calculates the damage of player one.
            var f2 = Math.floor(Math.random()*(20-minDamage2)+minDamage2); //calculates the damage of player two.

            //inflict damage
            fighter1[20]-=f1; //check player one health 
            fighter2[20]-=f2; //check player 2 health

            console.log(fighter1+": "+playerOneHealth + " " + fighter2+":"+playerTwoHealth); //prints on screen the players health

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
        if ([20]<1 && [20]<1)  //variable to check if both fighers are below the minimum health.
        {
            result = "You Both Die";  //prints to console the result if both are below the minimum health
        } else if([20]<1){
            result =fighter1+" WINS!!!" //prints to console player 2 result
        } else if ([20]<1)
        {
            result = fighter2+" WINS!!!"  //prints to console player 1 result
        };
       return result;
    };

    /*******  The program gets started below *******/
    fight();

})();