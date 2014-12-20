/**
 * Created Michael Jones
 * Class: PWA
 * Goal: Goal7
 * December 19, 2014
 */

 (function(){

 	//adding the person object to the global window
 	window.Person = Person;

 	//Jobs choices and actions for all the Person instances
 	Person.jobs = ["teacher", "farmer", "baker", "banker", "pilot"];
 	Person.actions = ["talking", "teaching", "eating", "playing", "working"];

 	function Person(name,row){
 		console.log ("Person Created: ", name);

 		this.name = name;

 		//action for each person randomly
 		this.job = Person.jobs[Math.floor(Math.random()*Person.jobs.length)];

 		this.row = row;

 		//displays action
 		var id = document.getElementById("r"+this.row+"c3");
 		id.innerHTML=this.action;
    }


    //Update person method. This should occurs 30 times a second and 
    //randomly determines of the action changes for each person.

    Person.prototype.update = fucntion(){
    	if (Math.floor(Math.random()<.01)){
    		var i = Math.floor(Math.random()*Person.action.length);
    		this.action = Person.actions[i];
    		var id  = document.getElementById("r"+this.row+"c3");
    		id.innerHTML=this.action;
    	}}
