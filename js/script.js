$(document).ready(function() {
    $(".gif").hide();
    console.log("ready!");
    $("#shoot").click(function() {
        var userChoice = $("#choice").val()
        var computerChoice = getComputerChoice()
        $("#userChoice").html(userChoice);
        $("#computerChoice").html(computerChoice);
        chooseWinner(userChoice, computerChoice)
    })
});

function getComputerChoice() {
    var x = 10;
    var options = ["rock", "paper", "scissors"];

    var index = Math.floor(Math.random() * 3);
    return options[index];
}

function chooseWinner(userChoice, computerChoice) {
    $(".gif").hide();
    if (userChoice == computerChoice) {
        console.log("It's A Tie")
        $("#tie").show();
    }
    else if (userChoice == "rock" && computerChoice == "paper") {
        console.log("Computer Wins!")
        $("#loser").show();
    }
    else if (userChoice == "rock" && computerChoice == "scissors") {
        console.log("User Wins!")
        $("#winner").show();
    }
    else if (userChoice == "paper" && computerChoice == "scissors") {
        console.log("Computer Wins!")
        $("#loser").show();
    }
    else if (userChoice == "paper" && computerChoice == "rock") {
        console.log("User Wins!")
        $("#winner").show();
    }
    else if (userChoice == "scissors" && computerChoice == "paper") {
        console.log("User Wins!")
        $("#winner").show();
    }
    else if (userChoice == "scissors" && computerChoice == "rock") {
        console.log("Computer Wins!")
        $("#loser").show();
    }
}
