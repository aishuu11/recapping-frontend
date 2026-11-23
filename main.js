// // // we are going to practice some basics 

// // let age = prompt("What is your age? ")

// // alert(`You are ${age} years old`)


// // we are going to build a small gussing game to refresh our memory 

// let num = 14;
// let attempt = 3;
// let win = false;

// while (attempt > 0){
//     let user_num = Number(prompt("what is your number? "));

//     if (user_num<num){
//         console.log("too low");
//         attempt = attempt - 1;
       
//     }
//     else if(user_num > num){
//         console.log("too big");
//         attempt = attempt - 1;
        
//     }
//     else{
//         console.log("you are correct");
//         win = true;
//         break;
//     }
// }

// if (win){
//     console.log("You have won")

// }

// else{
//     console.log("You have lost ")
// }

// we are going to create a mini atm project 


let pin = 1234
let attempt = 3
let balance = 1000
let login = false

while (attempt >0 & login!= true ){
    let user_pin = Number(prompt("What is your pin number? "))
    if (user_pin != pin)
    {
        console.log("Wrong pin! ")
        attempt = attempt -1 
        

    }
    else{
        console.log(`Correct pin!` )
        login = true
    }

}


function menu(){

    console.log(
        "1. View balance,2. Deposit money, 3.Withdraw money"
    )
    
    let action = Number(prompt("what do u wish to do" ))
    return action

}

function user_action(){
    let option = menu()

    if (option == 1){
        console.log(`This is your balance $${balance}`)}
    
    else if(option == 2 ){
        let deposit_amount= Number(prompt("how much do you want to depost? "))
        balance = balance + deposit_amount
        console.log(`You now have $${balance} in your account`)
    }
    else {
        let withdraw_amt = Number(prompt("How much do u want to withdraw? "))
        if (withdraw_amt < 0 || withdraw_amt > balance){
            console.log("Insufficient funds in bank ")
        }
        else{
            balance = balance - withdraw_amt
            console.log(`This is your balance $${balance}`)
        }
    }   
    }


if (login) {
    console.log(`You have logged in already and your balance is $ ${balance}`)
    user_action()
}
else{
    console.log('You have run out of attempts, try again later')
}





