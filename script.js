$(document).ready(function(){

  var player = 1;

  $(".square").on("click", function(event){

    var squareSelected = $(this);

    if (squareSelected.hasClass("ex") || squareSelected.hasClass("oh")) {
      $(".scoreBoard").html("THIS SQUARE IS ALREADY SELECTED");
      $(".scoreBoard").css("background", "orange");
    } else {
      if (player ===1) {
        squareSelected.addClass("ex");
        $(".scoreBoard").html("NEXT: PLAYER 2's TURN");
        $(".scoreBoard").css("background", "#666");
        if(checkWin("ex")) {
          // alert("Congrats Player 1 wins!")
          $(".scoreBoard").html("PLAYER 1's WINS!!!");
          $(".scoreBoard").css("background", "red");
        } else {
          player +=1;
        }

      } else {
        squareSelected.addClass("oh");
        $(".scoreBoard").html("NEXT: PLAYER 1's TURN");
        $(".scoreBoard").css("background", "#666");
        if(checkWin("oh")) {
          // alert("Congrats Player 2 wins!")
          $(".scoreBoard").html("PLAYER 2's WINS!!!");
          $(".scoreBoard").css("background", "red", "font-size");
        } else {
          player -=1;
        }
      }
    }
  });

  function checkWin(symbol) {
    if($(".sq1").hasClass(symbol) && $(".sq2").hasClass(symbol) && $(".sq3").hasClass(symbol)) {
      return true;
    } else if($(".sq4").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq6").hasClass(symbol)) {
      return true;
    } else if($(".sq7").hasClass(symbol) && $(".sq8").hasClass(symbol) && $(".sq9").hasClass(symbol)) {
      return true;
    } else if($(".sq1").hasClass(symbol) && $(".sq4").hasClass(symbol) && $(".sq7").hasClass(symbol)) {
      return true;
    } else if($(".sq2").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq8").hasClass(symbol)) {
      return true;
    } else if($(".sq3").hasClass(symbol) && $(".sq6").hasClass(symbol) && $(".sq9").hasClass(symbol)) {
      return true;
    } else if($(".sq3").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq7").hasClass(symbol)) {
      return true;
    } else if($(".sq1").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq9").hasClass(symbol)) {
      return true;
    } else {
      return false;
    }
  }

  $("#reset").on("click", function(){
    $(".square").removeClass("ex");
    $(".square").removeClass("oh");
    $(".scoreBoard").html(" ");
    $(".scoreBoard").css("background", "#666");
  })
});
