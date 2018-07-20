// Business Logic
Function Player(name,score,total) {
    this.name=name
    this.score=score
    this.total=total
} 





// User Interface Logic
$(document).ready(function(){  // jquery to run after the html is fully ran
    $("#startbutton").click(function(event){ //jQuery to hold values submitted when button is clicked
        alert("working");

        var playerOne = $("#player1name").val() // Reasign Player Names to new var
        var playerTwo = $("#player2name").val() 

    })

    $("#P1name").append("")
})