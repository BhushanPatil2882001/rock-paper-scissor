let user_score = document.getElementById("user");
let computer_score = document.getElementById("computer");
let draw = document.getElementById("draw")
let user_result = document.getElementById("result-user")
let computer_result = document.getElementById("result-computer")

user_score.value = 0;
computer_score.value = 0;
draw.value = 0;

choices = {
    1: "rock",
    2: "paper",
    3: "scissor"
}

function play(userChoice){
    let computer_choice = Math.ceil(Math.random()*3)

    if(userChoice == computer_choice){
        draw.value = parseInt(draw.value) + 1;
        user_result.value = choices[userChoice]
        computer_result.value = choices[computer_choice]
    }
    else if((userChoice == 1 && computer_choice == 3) || (userChoice == 2 && computer_choice == 1) || (userChoice == 3 && computer_choice == 2)){
        user_score.value = parseInt(user_score.value) + 1;
        user_result.value = choices[userChoice]
        computer_result.value = choices[computer_choice]

    }
    else if((userChoice == 3 && computer_choice == 1) || (userChoice == 1 && computer_choice == 2) || (userChoice == 2 && computer_choice == 3)){
        computer_score.value = parseInt(computer_score.value)+1;
        user_result.value = choices[userChoice]
        computer_result.value = choices[computer_choice]
    }
}



