// Business Logic
function Player(name,score,total) {
    this.name=name
    this.score=score
    this.total=total
}; 

var throwdice = function() {
    return Math.floor(6 * Math.random()) + 1;
}

Player.prototype.currentrole = function() {
    return throwdice()
}

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

    $("#P1roll").click(event) {
        var p1number= throwdice();
        $("#P1score").text(p1number);
        var p1all= 
    }

   
})