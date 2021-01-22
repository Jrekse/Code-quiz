//Global Variables -------------------------------------------------------------------------------------------------------------------------------------------
document.writeln('<script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>');
var testFunc = 69;
var highscore = 0;
var time = 0;
var right = 0;

//Query selectors
var startQuiz = document.querySelector("#start-btn"),
display = document.querySelector("#quiz-time-count");
var quizBody = document.querySelector("#quizBody");
var btnBody = document.querySelector("#buttons");
var quizContent = document.querySelector("#content");

//score selector
var score = document.querySelector("#score-title");
var scoreVal = document.querySelector("#score");


//Question responses
var questionOneArray = ["strings", "booleans", "alerts", "numbers"];
var questionTwoArray = ["quotes", "curley brackets", "parenthesis", "square brackets"];
var questionThreeArray = ["Numbers and Strings","Other arrays","Booleons","All of the above"];
var questionFourArray = ["commas","curly brackets","quotes","paranthesis"];
var questionFiveArray = ["JavaScript", "terminal/ bash", "for loops", "console.log"];

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

var scorehThree = document.createElement("H3");
var upScoreOne = document.createElement("H3");
var upScoreTwo = document.createElement("H3");
var upScoreThree = document.createElement("H3");
var upScoreFour = document.createElement("H3");
var finishTitle = document.createElement("H2");

var question = document.createElement("H3");
var questionTwoHThree = document.createElement("H3");
var questionThreeHThree = document.createElement("H3");
var questionFourHThree = document.createElement("H3");
var questionFiveHThree = document.createElement("H3");
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
var questionTwoText = document.createTextNode("The condition of an if/else statement is enclosed within...")
var questionThreeText = document.createTextNode("Arrays in JavaScript can be used to store...")
var questionFourText = document.createTextNode("String values must be enclosed within _____ when being assigned to variables");
var questionFiveText = document.createTextNode("A very useful tool used during debugging for printing content to the debugger is:")
var allDone = document.createTextNode("All Done!");


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
        questionTwo();
        return questionOne;
    })

    quizBtnTwo.addEventListener("click", function(){
        questionTwo();
        return questionOne;
    })

    quizBtnThree.addEventListener("click", function(){
        questionTwo();
        right++;
        scorehThree.append(right);
        score.replaceChild(scorehThree, scoreVal);
        return questionOne;
    })

    quizBtnFour.addEventListener("click", function(){
        questionTwo();
        return questionOne;
    })

};

function questionTwo(){

    //sets button values
    quizBtnOne.textContent = questionTwoArray[0];
    quizBtnTwo.textContent = questionTwoArray[1];
    quizBtnThree.textContent = questionTwoArray[2];
    quizBtnFour.textContent = questionTwoArray[3];

    //sets question value
    questionTwoHThree.append(questionTwoText);
    quizBody.replaceChild(questionTwoHThree, question);

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
        questionThree();
        return questionTwo;
    })

    quizBtnTwo.addEventListener("click", function(){
        questionThree();
        return questionTwo;
    })

    quizBtnThree.addEventListener("click", function(){
        questionThree();
        right++;
        upScoreOne.append(right);
        score.replaceChild(upScoreOne, scorehThree);
        return questionTwo;
    })

    quizBtnFour.addEventListener("click", function(){
        questionThree();
        return questionTwo;
    })
};

function questionThree(){
    //sets button values
    quizBtnOne.textContent = questionThreeArray[0];
    quizBtnTwo.textContent = questionThreeArray[1];
    quizBtnThree.textContent = questionThreeArray[2];
    quizBtnFour.textContent = questionThreeArray[3];

    //sets question value
    questionThreeHThree.append(questionThreeText);
    quizBody.replaceChild(questionThreeHThree, questionTwoHThree);

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
        questionFour();
        return questionThree;
    })

    quizBtnTwo.addEventListener("click", function(){
        questionFour();
        return questionThree;
    })

    quizBtnThree.addEventListener("click", function(){
        questionFour();
        return questionThree;
    })

    quizBtnFour.addEventListener("click", function(){
        questionFour();
        right++;
        upScoreTwo.append(right);
        score.replaceChild(upScoreTwo, upScoreOne);
        return questionThree;
    })
};

function questionFour(){
    //sets button values
    quizBtnOne.textContent = questionFourArray[0];
    quizBtnTwo.textContent = questionFourArray[1];
    quizBtnThree.textContent = questionFourArray[2];
    quizBtnFour.textContent = questionFourArray[3];

    //sets question value
    questionFourHThree.append(questionFourText);
    quizBody.replaceChild(questionFourHThree, questionThreeHThree);
    

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
        questionFive();
        return questionFour;
    })

    quizBtnTwo.addEventListener("click", function(){
        questionFive();
        return questionFour;
    })

    quizBtnThree.addEventListener("click", function(){
        questionFive();
        right++;
        upScoreThree.append(right);
        score.replaceChild(upScoreThree, upScoreTwo);
        return questionFour;
    })

    quizBtnFour.addEventListener("click", function(){
        questionFive();
        return questionFour;
    })
}

function questionFive(){
    //sets button values
    quizBtnOne.textContent = questionFiveArray[0];
    quizBtnTwo.textContent = questionFiveArray[1];
    quizBtnThree.textContent = questionFiveArray[2];
    quizBtnFour.textContent = questionFiveArray[3];

    //sets question value
    questionFiveHThree.append(questionFiveText);
    quizBody.replaceChild(questionFiveHThree, questionFourHThree);
    

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
        finishPage();
        return questionFive;
    })

    quizBtnTwo.addEventListener("click", function(){
        finishPage();
        return questionFive;
    })

    quizBtnThree.addEventListener("click", function(){
        finishPage();
        return questionFive;
    })

    quizBtnFour.addEventListener("click", function(){
        finishPage();
        right++;
        upScoreFour.append(right);
        score.replaceChild(upScoreFour, upScoreThree);
        return questionFive;
    })
}
    
function finishPage(){

    var submit = "Submit";

    finishTitle.append(allDone)
    quizBody.replaceChild(finishTitle, questionFiveHThree);

    quizBtnOne.textContent = submit;
    quizBtnTwo.remove();
    quizBtnThree.remove();
    quizBtnFour.remove();

    btnBody.append(div);
    div.append(quizBtnOne);
    div.append(br1);
    div.append(br2);

    
    
}




