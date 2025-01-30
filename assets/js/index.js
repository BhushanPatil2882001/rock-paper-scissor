let user_score = document.getElementById("user");
let computer_score = document.getElementById("computer");
let draw = document.getElementById("draw")
let user_result = document.getElementById("result-user")
let computer_result = document.getElementById("result-computer")
let available = document.getElementById("available")

user_score.value = 0;
computer_score.value = 0;
draw.value = 0;
available.value = 10;

choices = {
    1: "rock",
    2: "paper",
    3: "scissor"
}

function play(userChoice){
    if (available.value >= 1){
        let computer_choice = Math.ceil(Math.random()*3)
    
        if(userChoice == computer_choice){
            draw.value = parseInt(draw.value) + 1;
            user_result.value = choices[userChoice]
            computer_result.value = choices[computer_choice]
            available.value -= 1;
        }
        else if((userChoice == 1 && computer_choice == 3) || (userChoice == 2 && computer_choice == 1) || (userChoice == 3 && computer_choice == 2)){
            user_score.value = parseInt(user_score.value) + 1;
            user_result.value = choices[userChoice]
            computer_result.value = choices[computer_choice]
            available.value -= 1
    
        }
        else if((userChoice == 3 && computer_choice == 1) || (userChoice == 1 && computer_choice == 2) || (userChoice == 2 && computer_choice == 3)){
            computer_score.value = parseInt(computer_score.value)+1;
            user_result.value = choices[userChoice]
            computer_result.value = choices[computer_choice]
            available.value -= 1
        }
    }
    else{
        win_lose_board();
    }
}

function win_lose_board(){
    if(user_score.value > computer_score.value){
        alert("You Won Boy/Girl!");
    }
    if(user_score.value < computer_score.value){
        alert("You Lost Looser!");
    }
    if (draw.value > user_score.value && draw.value > computer_score.value){
        alert("DRAW!")
    }
}

function reset(){
    user_score.value = 0;
    computer_score.value = 0;
    draw.value = 0;
    user_result.value = "";
    computer_result.value = "";
    available.value = 10;
}



