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


const pin = 1234
let attempt = 3
let balance = 1000
let login = false

while (attempt >0 && !login ){
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

    let action = Number(prompt("1. View balance\n2. Deposit money\n3.Withdraw money\n4.Exit"))
    if(action !== 1 && action !== 2 && action !== 3 && action !== 4) {
        console.log("Invalid option")
        return menu 
    } 
    else{
        return action
    }

}


function user_action(){
    let option = menu()

    if (option == 1){
        console.log(`This is your balance $${balance}`)
        user_action()

        }
        
    
    else if(option == 2 ){
        let deposit_amount= Number(prompt("how much do you want to deposit? "))

        if (isNaN(deposit_amount) || deposit_amount <= 0) {
            console.log("Invalid deposit");
            user_action();
        } 
        else {
            balance += deposit_amount
            console.log(`This is your balance $${balance}`)
            user_action();
        }

    }
    else if (option == 3){
        let withdraw_amt = Number(prompt("How much do u want to withdraw? "))


        if (isNaN(withdraw_amt)|| withdraw_amt<=0){
            console.log("Invalid amount")
            user_action()

        }

        else if (withdraw_amt > balance){
            console.log("Insufficient funds")
            user_action()

        }
        else{
            balance = balance - withdraw_amt
            console.log(`This is your balance $${balance}`)
            user_action()
        }
    
    }   

    else if (option == 4){
        ans = confirm("Do you really want to exit? ")
        if (ans){
            console.log("You have exited")
        }
        else{
            user_action()
        }
        
    }
    }

function login_status(){
    if (login) {
    console.log(`You have logged in already and your balance is $ ${balance}`)
    user_action()
    
}
    else{
        console.log('You have run out of attempts, try again later')
}
}


login_status()






