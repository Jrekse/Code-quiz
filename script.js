//Global Variables -------------------------------------------------------------------------------------------------------------------------------------------
var testFunc = 69;
var highscore = 0;
var time = 0;

//Query selectors
var startQuiz = document.querySelector("#start-btn"),
display = document.querySelector("#quiz-time-count");
var quizBody = document.querySelector("#quizBody");
var quizContent = document.querySelector("#content");
var buttonsDiv = document.querySelector("#buttons");

//Questions
var question = document.createElement("H3");
var quizBtn = document.createElement("BUTTON");
var btnList = document.createElement("UL");
var listItem = document.createElement("LI");
var questionOneText = document.createTextNode("Common used data types DO NOT include:");

//Question responses
var questionOneArray = ["strings", "booleans", "alerts", "numbers"];


//Functions -------------------------------------------------------------------------------------------------------------------------------------------------


//Start quiz
startQuiz.addEventListener("click", function() {
    var tenMinutes = 60 * 10;
    startTime(tenMinutes, display);
    questionOne();
});

//Starts timer
function startTime(duration, display) {
    var timer = duration, seconds;
    setInterval(function(){
        seconds = parseInt(timer % 75, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
};

//Displays the first question
function questionOne(){

    question.append(questionOneText);
    quizBody.replaceChild(question, quizContent);
 

    for (i = 0; i < questionOneArray.length; i++){
        var cB = questionOneArray[i] + "<br>";
        console.log(cB);
    }
    
    buttonsDiv.appendChild = cB;
    

};


    





