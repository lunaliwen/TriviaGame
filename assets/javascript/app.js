var number;
var t;
var i = 0;
var j = 0;
var right = 0;
var wrong = 0;
var unanswered = 0;
//  Variable that will hold our interval ID when we execute
//  the "start" function
var intervalId;

var questions = ["Name the largest freshwater lake in the world?", "Where would you find the Sea of Tranquility?",
  "What item of clothing was named after its Scottish inventor?", "What kind of weapon is a falchion?"];

var rightanswers = ["Lake Superior", "The Moon", "A Mackintosh", "A sword"];

var wronganswers = ["Titicaca Lake", "The Dead Sea", "The Great Lakes", "Jupiter", "Mars", "Venus", "A sleeveless hoodie", " Cropped vests", "The scoodie", "antiaircraft gun", "Big Bertha", "Panzerfaust"];

$(document).ready(function () {
  //When clicked start button, a question with four choices show up
  //Time start counting down from 60 seconds
  $("#start").on("click", start);

  function start() {
    $("#start").remove();
    $("#triviacontent").html(" ");
    $("#triviacontent").append("<div id='question'></div>");
    $("#triviacontent").append("<div id='incorrect'></div>");
    $("#triviacontent").append("<div id='correct'></div>");
   
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    number = 50;

    $("#question").html("<p>"+ questions[i] + "<p>");
    $("#incorrect").html("<button>"+ wronganswers[j]+"</buttton> <br>"+ "<button>"+ wronganswers[j+1]+"</buttton> <br>"+ "<button>"+ wronganswers[j+2]+"</buttton>");
    $("#correct").html("<button>"+ rightanswers[i]+"</button>");

    $("#incorrect").on("click", incorrect);
    $("#correct").on("click", correct);
  }

  //  The decrement function.
  function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#show-number").html("<h2>Time remaining: " + number + "seconds </h2>");


    //  Once number hits zero...
    if (number === 0) {

      //  ...run the stop function.
      stop();

    }
  }

  function stop() {
    clearInterval(intervalId);
    intervalId = setInterval(decrease, 1000);
    t = 3;

    $("#show-number").html("<h2>Time is up!<h2>");
    $("#triviacontent").html("<h3> The correct answer was:" +" "+ rightanswers[i] +"</h3>");
    i++;
    j=j+3;
    unanswered ++;

    //All question answered; time stops counting down
  if (i === 4) {
    clearInterval(intervalId);

     //Button: "Start over?", when clicked it goes to the first question again
  $("#triviacontent").empty();

    //will show the number of correct/incorrect/unanswered questions
    $("#triviacontent").html("<p> Correct:"+ right + "<p>"+"<p> Incorrect:"+ wrong + "<p>" + "<p> Unanswered:"+ unanswered + "<p>" ); 

    $("#triviacontent").append("<button id='again'> Start Over?</button>");
    i = 0;

    $("#again").on("click", start);
  }

  }
  //When the wrong answer is clicked, showing the right answer; "Nope"
  //the remaining time stops counting down; after 10 seconds it moves on to the next question

  function incorrect(){
    clearInterval(intervalId);
    intervalId = setInterval(decrease, 1000);
    t = 3;

    $("#show-number").html("<h2>Time remaining: " + number + "seconds </h2>");
    $("#triviacontent").html("<h3> You are wrong. </h3>" +"<h3>The correct answer was:" +" " + rightanswers[i]+"</h3>");

    i++;
    j=j+3;
    wrong ++;

    //All question answered; time stops counting down
  if (i === 4) {
    clearInterval(intervalId);

      //Button: "Start over?", when clicked it goes to the first question again
  $("#triviacontent").empty();

  //will show the number of correct/incorrect/unanswered questions
  $("#triviacontent").html("<p> Correct:"+ right + "<p>"+"<p> Incorrect:"+ wrong + "<p>" + "<p> Unanswered:"+ unanswered + "<p>" ); 
  
  $("#triviacontent").append("<button id='again'> Start Over?</button>");

    i = 0;

    $("#again").on("click", start);
  }

  }

  //  The decrement function.
  function decrease() {

    //  Decrease number by one.
    t--;

    //  Once t hits zero...
    if (t === 0 && i !== 4) {

      //  ...run the start function.
      start();

    }
  }

  //When the right answer is clicked. It shows"correct!"
  //the remaining time stops counting down; after 5 seconds, it moves to the next question

  function correct(){
    clearInterval(intervalId);
    intervalId = setInterval(decrease, 1000);
    t = 3;

    $("#show-number").html("<h2>Time remaining: " + number + "seconds </h2>");
    $("#triviacontent").html("<h3>Correct!</h3>");

    i++;
    j=j+3;
    right ++;

    //All question answered; time stops counting down
  if (i === 4) {
    clearInterval(intervalId);

      //Button: "Start over?", when clicked it goes to the first question again
  $("#triviacontent").empty();

  //will show the number of correct/incorrect/unanswered questions
  $("#triviacontent").html("<p> Correct:"+ right + "<p>"+"<p> Incorrect:"+ wrong + "<p>" + "<p> Unanswered:"+ unanswered + "<p>" ); 
  
  $("#triviacontent").append("<button id='again'> Start Over?</button>");

    i = 0;

    $("#again").on("click", start);
  }

  }

  
  
  
});
