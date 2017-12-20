var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
}
else if (computerChoice <= 0.67) {
    computerChoice = "paper";
}
else {
    computerChoice = "scissors";
}

$(document).ready(function() {
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
    if(userChoice==computerChoice){
        console.log("It's A Tie")
    } else if (userChoice=="rock"&&computerChoice=="paper"){
        console.log("Computer Wins!")
    } else if (userChoice=="rock"&&computerChoice=="scissors"){
        console.log("User Wins!")
    } else if (userChoice=="paper"&&computerChoice=="scissors"){
        console.log("Computer Wins!")
    } else if (userChoice=="paper"&&computerChoice=="rock"){
        console.log("User Wins!")
    } else if (userChoice=="scissors"&&computerChoice=="paper"){
        console.log("User Wins!")
    } else if (userChoice=="scissors"&&computerChoice=="rock"){
        console.log("Computer Wins!")
    }
}