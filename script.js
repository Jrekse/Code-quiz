//Global Variables -------------------------------------------------------------------------------------------------------------------------------------------
var testFunc = 69;
var highscore = 0;
var time = 0;
var correct = true;

//Query selectors
var startQuiz = document.querySelector("#start-btn"),
display = document.querySelector("#quiz-time-count");
var quizBody = document.querySelector("#quizBody");
var btnBody = document.querySelector("#buttons");
var quizContent = document.querySelector("#content");

document.querySelectorAll

//Question responses
var questionOneArray = ["strings", "booleans", "alerts", "numbers"];

//HTML Elements
var br1 = document.createElement("BR");
var br2 = document.createElement("BR");
var br3 = document.createElement("BR");
var br4 = document.createElement("BR");
var br5= document.createElement("BR");
var br6 = document.createElement("BR");
var br7 = document.createElement("BR");
var br8 = document.createElement("BR");
var div = document.createElement("DIV");
var question = document.createElement("H3");
var quizBtnOne = document.createElement("BUTTON");
var quizBtnTwo = document.createElement("BUTTON");
var quizBtnThree = document.createElement("BUTTON");
var quizBtnFour = document.createElement("BUTTON");

//set HTML classes
quizBtnOne.setAttribute("class", "btn btn-outline-info");
quizBtnTwo.setAttribute("class", "btn btn-outline-info");
quizBtnThree.setAttribute("class", "btn btn-outline-info");
quizBtnFour.setAttribute("class", "btn btn-outline-info");

//Questions
var questionOneText = document.createTextNode("Common used data types DO NOT include:");


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

    //Sets button values
    quizBtnOne.textContent = questionOneArray[0];
    quizBtnTwo.textContent = questionOneArray[1];
    quizBtnThree.textContent = questionOneArray[2];
    quizBtnFour.textContent = questionOneArray[3];
    
    //sets question value
    question.append(questionOneText);
    quizBody.replaceChild(question, quizContent);

    //creates buttons
    btnBody.append(div);
    div.append(quizBtnOne);
    div.append(br1);
    div.append(br2);
    div.append(quizBtnTwo);
    div.append(br3);
    div.append(br4)
    div.append(quizBtnThree);
    div.append(br5);
    div.append(br6);
    div.append(quizBtnFour);

    //Calculates Score
    quizBtnOne.addEventListener("click", function(){
        correct !== true;
        console.log(correct);
    })

};


    





