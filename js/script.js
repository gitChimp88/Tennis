$(document).ready(function () {

   $('.blue').click(function tennis() {
 

  var player1 = 0;
  var player2 = 0;
  var scores = "Love - All / ";
  var deucecount = 0;
  var arr = ["Love - ", "Love / "];
  var totalscores = [];
  var eachround = [];
  
  for(var i = 1; i <= 30; i++) {
    var score = Math.round(Math.random() * 10); 
   
    
     //PLAYER 1
    if(score < 5) {
      player1 += 1;
     eachround.push("Player 1 scores");
       if(player1 == 1) {
        
       if(player1 > player2 || player1 < player2) {
         arr[0] = "15 - ";
         totalscores = totalscores + arr;
        } if(player1 == player2) {
          arr[0] = "15 - ";
          arr[1] = "All!,/ ";
          totalscores = totalscores + arr;
        } 
      } //score one nested if statement
      
        if(player1 == 2) {
          if(player1 > player2 && player2 == 1) {
          arr[0] = "30 - ";
          arr[1] = "15,/ ";
          totalscores = totalscores + arr;
        } if(player1 > player2 && player2 == 0) {
          arr[0] = "30 - ";
          totalscores = totalscores +arr;
        }
          if(player1 == player2) {
          arr[0] = "30 - ";
          arr[1] = "All!,/ ";
          totalscores = totalscores + arr;
        } if(player1 < player2) {
          arr[0] = "30 - ";
          totalscores = totalscores + arr;
        }
      } //score two nested if statement  
      
      if(player1 == 3 && player2 != 3) {
        if(player1 > player2 && player2 == 2) {
          arr[0] = "40 - ";
          arr[1] = "30,/ ";
          totalscores = totalscores + arr;
        } if(player1 > player2 && player2 != 2) { 
          arr[0] = "40 - ";
          totalscores = totalscores + arr;
        } 
          
      } // score three nested if statement 
      
      if(player1 == 3 && player2 == 3) {
        arr = "Deuce!,/ ";
        totalscores = totalscores + arr;
        deucecount = deucecount + 1;
      } else if(deucecount === 0 && player1 == 4) {
        arr = "   Player1 - Wins the Game!";
        totalscores = totalscores + arr;
        break;
      } else if(deucecount > 0 && player1 - player2 == 1) {
        arr = " Player1 - Advantage!,/";
        totalscores = totalscores + arr;
      } else if(deucecount > 0 && player1 > 3 && player1 == player2) {
        arr = " Deuce!,/ ";
        totalscores = totalscores + arr;
      } else if(deucecount > 0 && player1 - player2 == 2) {
        arr = "   Player1 - Wins the Game!";
        totalscores = totalscores + arr;
        break;
      }
      
      // PLAYER 2 
    } else if(score > 5 && score < 10) {
      player2 += 1;
      
      if(player2 == 1) {
        if(player2 > player1 || player2 < player1) {
         arr[1] = "15,/ ";
         totalscores = totalscores + arr;
        } if(player2 == player1) {
          arr[1] = "All!,/ ";
          totalscores = totalscores + arr;
        } 
      }// score one nested if statement 
      
      if(player2 == 2) {
        if(player2 > player1 || player2 < player1) {
          arr[1] = "30,/ ";
          totalscores = totalscores + arr;
        } if(player2 == player1) {
          arr[1] = "All!,/ ";
          totalscores = totalscores + arr;
        } 
    } // score 2 nested if statement 
     
      if(player2 == 3 && player1 != 3) {
        if(player2 > player1) {
          arr[1] = "40,/ ";
          totalscores = totalscores + arr;
        } if(player2 == player1) {
          arr[1] = "40,/ ";
          totalscores = totalscores + arr;
        }
      } // score3 nested
      
      if(player2 == 3 && player1 == 3) {
        arr = "Deuce!,/ ";
        totalscores = totalscores + arr;
        deucecount = deucecount + 1;
      } if(deucecount === 0 && player2 == 4) {
        arr = "   Player2 - Wins the Game!";
        totalscores = totalscores + arr;
        break;
      } else if(deucecount > 0 && player2 - player1 == 1) {
        arr = " Player2 - Advantage!,/";
        totalscores = totalscores + arr;
      } else if(deucecount > 0 && player2 > 3 && player2 == player1) {
        arr = " Deuce!,/ ";
        totalscores = totalscores + arr;
      } else if(deucecount > 0 && player2 - player1 == 2) {
        arr = "   Player2 - Wins the Game!";
        totalscores = totalscores + arr;
        break;
      }
    } // end of else if statement
  } // end of for loop.
  
  $(".scores").html("<p> Scores: " + scores + totalscores.replace(/,/g , " ") + "</p>");
  //return scores + totalscores;

          

});  // end of click function

}); // end of document.ready




