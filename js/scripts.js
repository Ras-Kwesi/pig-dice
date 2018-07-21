// Business Logic
function Player(score,turn,total) {  //Constructor for both players
    this.score=score
    this.turn=turn
    this.total=total
}; 

var throwdice = function randomnum(max) { // Produce a random number representative of a thrown dice
    return Math.floor(6 * Math.random()) + 1;
}







//this.turn += this.score   //The score of the current play number per player

Player.prototype.turnscore = function (){
    if (this.score === 1) {
        this.turn ===0;
        alert("Oops, you rolled a 1, better luck next round!")
    }
    else {
        this.turn += this.score;
    }
}


Player.prototype.totalscore = function() {  //The total score of the Player
    return this.turnscore + this.total
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
        Player1.score = throwdice()
        
         
        
        $("#P1score").text(Player1.score);

        //var p1turnstring = parseInt(p1number) + throwdice()
        Player1.turnscore()
    
        $("#P1turn").text(Player1.turn);
        
    });

    $("#P2roll").click(function(event){
        var p2number= throwdice();
        $("#P2score").text(p2number);
        
    });
    

})