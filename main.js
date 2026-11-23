// // we are going to practice some basics 

// let age = prompt("What is your age? ")

// alert(`You are ${age} years old`)


// we are going to build a small gussing game to refresh our memory 

let num = 14;
let attempt = 3;
let win = false;

while (attempt > 0){
    let user_num = Number(prompt("what is your number? "));

    if (user_num<num){
        console.log("too low");
        attempt = attempt - 1;
       
    }
    else if(user_num > num){
        console.log("too big");
        attempt = attempt - 1;
        
    }
    else{
        console.log("you are correct");
        win = true;
        break;
    }
}

if (win){
    console.log("You have won")

}

else{
    console.log("You have lost ")
}


