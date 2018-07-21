// Business Logic
function Player(score,turn,total) {  //Constructor for both players
    this.score=score
    this.turn=turn
    this.total=total
}; 

var throwdice = function randomnum(max) { // Produce a random number representative of a thrown dice
    return Math.floor(6 * Math.random()) + 1;
}




//The score of the current play number per player

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
    if (this.turnscore ===1) {
        this.total=0;
    }
    else {
        this.total += this.turn;
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
        Player1.score = throwdice()
        
         
        
        $("#P1score").text(Player1.score);

        //var p1turnstring = parseInt(p1number) + throwdice()
        Player1.turnscore()
    
        $("#P1turn").text(Player1.turn);
        
        
        
    });

    
    $("#P1hold").click(function(event) {
        Player1.totalscore()
        
        console.log(Player1.total)

        $("#P1return").text(Player1.total);
    });


    $("#P2roll").click(function(event){
        Player2.score= throwdice();
        $("#P2score").text(Player2.score);
        

        Player2.turnscore()
    
        $("#P2turn").text(Player2.turn );
    });
    

})