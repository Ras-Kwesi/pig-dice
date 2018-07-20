// Business Logic
function Player(name,score,total) {  //Constructor for both players
    this.name=name
    this.score=score
    this.total=total
}; 

var throwdice = function RandomInt(max) { // Produce a random number representative of a thrown dice
    return Math.floor(Math.random() * Math.floor(6));
}


//var currentdice = function () {
    //return throwdice +=
//}

Player.prototype.currentrole = function() {  //The new random number
    return throwdice()
}

var Player1 = new Player()
var Player2 = new Player()
 
// User Interface Logic
$(document).ready(function(){  // jquery to run after the html is fully ran
    $("#startbutton").click(function(event){ //jQuery to hold values submitted when button is clicked
        alert("working");

        var playerOne = $("#player1name").val() // Reasign Player Names to new var
        var playerTwo = $("#player2name").val() 

        $("#P1name").text(playerOne)
        $("#P2name").text(playerTwo)

        $(".intro").hide();
    })

    $("#P1roll").click(function(event){
        var p1number= throwdice();
        $("#P1score").text(p1number);
        
    });

   alert(RandomInt())
})