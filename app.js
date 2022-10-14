const prompt = require("prompt-sync")()
console.log("Welcome to fit4dev App")
const user =prompt(`welcome to fit4dev App once again, Please enter your name : `)
//console.log("")
console.log(`thanks for inputing your name ${user}, Good Day`);
//our goal
//console.log("")
while(true){
    let goal =parseInt( prompt("please enter your set GOAL for today : "));
    let entry = prompt("click Y to continue or R to reset your goal , Otherwise click Q to quit the app : ").toUpperCase();
    if(entry === "Q"){
        console.log(` WOW .... it really saddens me to see you go ${user}!!`);
        break;
    }else if(entry === "R"){
        console.log(`do you wanna reset your GOAL ${user}? ....Go Ahead`);
        continue;
    }else if(entry=== "Y"){
        while(true){
            console.log(`Your set exercise GOAL is ${goal}minutes !`);
        let start = parseInt(prompt(` to make it more easier , we are going to break it in segments .how long do you want to jog for : `));
        if(start >= goal){
            console.log("Your start goal can't be equal to your set GOAL ");
            // continue;
        }
        else if(goal === 0 || goal <= 0){
            console.log(`congratulations ${user} , you have met your set GOAL for today`)
            break;
        }
        else{
            console.log(`congrats`)
         }
        goal = goal - start;
         console.log(`awesome ${user} ..... you have ${goal}mins left , let's do this`);
         break;
        
        }
    }
    break;

}