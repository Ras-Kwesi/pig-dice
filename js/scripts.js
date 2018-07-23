// Business Logic
function Player(score,turn,total) {  //Constructor for both players
    this.score=score
    this.turn=turn
    this.total=total
}; 

var throwDice = function randomNum(max) { // Produce a random number representative of a thrown dice
    return Math.floor(6 * Math.random()) + 1;
}

Player.prototype.newTurnScore = function () {
    return this.turn = 0;
}



//The score of the current play number per player
Player.prototype.newTurnScore = function () {
    return this.turn = 0;
}



Player.prototype.turnScore = function (){
    if (this.score === 1) {
        this.turn ===0; 
        alert("Oops, you rolled a 1, better luck next round! Click hold to see you point total")
        alert("On to the next Player")
    }
    else {
        this.turn += this.score;
    }
}

Player.prototype.storedTurnScore = function() {  //The holds total of the turn that may or may not be added to total value
    if (this.turn ===0) {
        this.turnScore=0;
    }
    else {
        this.turnScore += this.turn;
    }
}



Player.prototype.totalScore = function() {  //The total score of the Player
    if (this.storedTurn ===0) {
        this.total= 0;
    }
    else {
        this.total += this.turn;
        alert("i add after this")
    }
}

Player.prototype.champion = function (){
    if (this.total >=100) {
        alert("Congratulations, you have won the game!!")
    }
}

var Player1 = new Player(0,0,0)
var Player2 = new Player(0,0,0)
 
// User Interface Logic
$(document).ready(function(){  // jquery to run after the html is fully ran
    $("#startbutton").click(function(event){ //jQuery to hold values submitted when button is clicked

        var playerOne = $("#player1name").val() // Reasign Player Names to new var
        var playerTwo = $("#player2name").val() 

        $("#P1name").text(playerOne) // Display Player names at the HTML selesctor position
        $("#P2name").text(playerTwo)

        $(".intro").hide();  // Hides introduction
        $(".gamepagetop").show(); // Displays Console
    })

    $("#P1roll").click(function(event){ 
        Player1.score = throwDice()
        
         
        
        $("#P1score").text(Player1.score);

        //var p1turnstring = parseInt(p1number) + throwdice()
        Player1.turnScore()
    
        $("#P1turn").text(Player1.turn);

        console.log(Player1.turn)
        
        
        
    });

    
    $("#P1hold").click(function(event) {
        Player1.totalScore()
        
        alert("Your turn score is:" + Player1.total +  "         --            On to the Player 2")

        $("#P1return").text(Player1.total);

        Player1.newTurnScore()
        $("#P1turn").text(Player1.turn);
    });


    $("#P2roll").click(function(event){
        Player2.score= throwDice();
        $("#P2score").text(Player2.score);
        

        Player2.turnScore()
    
        $("#P2turn").text(Player2.turn );
    });
    
    $("#P2hold").click(function(event) {
        Player2.totalScore()
        
        alert("Your turn score is:" + Player2.total +  "         --            On to the Player 2")

        $("#P2return").text(Player2.total);

        Player2.newTurnScore()

        $("#P2turn").empty(Player2.turn )
    });

})