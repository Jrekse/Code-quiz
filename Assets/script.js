

//Global Variables -------------------------------------------------------------------------------------------------------------------------------------------
var testFunc = 69;
var highscore = 0;
var time = 0;
var right = 0;
var response;
var responseTwo;
var responseThree;
var counter = 75;

//Query selectors
var startQuiz = document.querySelector("#start-btn");
var quizBody = document.querySelector("#quizBody");
var btnBody = document.querySelector("#buttons");
var quizContent = document.querySelector("#content");
var highScore = document.querySelector("#view-hscore")

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
var finishDisplay = document.createElement("H4");

var question = document.createElement("H3");
var questionTwoHThree = document.createElement("H3");
var questionThreeHThree = document.createElement("H3");
var questionFourHThree = document.createElement("H3");
var questionFiveHThree = document.createElement("H3");
var quizBtnOne = document.createElement("BUTTON");
var quizBtnTwo = document.createElement("BUTTON");
var quizBtnThree = document.createElement("BUTTON");
var quizBtnFour = document.createElement("BUTTON");
var hScoreLi = document.createElement("LI");
var hScoreLiTwo = document.createElement("LI");
var hScoreLiThree = document.createElement("LI");

//set HTML classes
quizBtnOne.setAttribute("class", "btn btn-outline-info");
quizBtnTwo.setAttribute("class", "btn btn-outline-info");
quizBtnThree.setAttribute("class", "btn btn-outline-info");
quizBtnFour.setAttribute("class", "btn btn-outline-info");

//Questions
var questionOneText = document.createTextNode("Common used data types DO NOT include:");
var questionTwoText = document.createTextNode("The condition of an if/else statement is enclosed within...");
var questionThreeText = document.createTextNode("Arrays in JavaScript can be used to store...");
var questionFourText = document.createTextNode("String values must be enclosed within _____ when being assigned to variables");
var questionFiveText = document.createTextNode("A very useful tool used during debugging for printing content to the debugger is:");
var allDone = document.createTextNode("All Done!");



//Functions -------------------------------------------------------------------------------------------------------------------------------------------------

//Subtracts from timer
function wrongAnswer(){
    counter = counter - 10;
};

//Start quiz
startQuiz.addEventListener("click", function() {
    go();
    questionOne();
});
//Starts timer
function go(){
    (function(){
        setInterval(function() {
            counter--;
            if (counter >= 0) {
            span = document.getElementById("count");
            span.innerHTML = counter;
            }
            if (counter === 0) {
                clearInterval(counter);
                youLost();
            } 
        }, 1000);
    })();
}  

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
        wrongAnswer();
        scorehThree.append(right);
        score.replaceChild(scorehThree, scoreVal);
        return questionOne;
    })

    quizBtnTwo.addEventListener("click", function(){
        questionTwo();
        wrongAnswer();
        scorehThree.append(right);
        score.replaceChild(scorehThree, scoreVal);
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
        wrongAnswer();
        scorehThree.append(right);
        score.replaceChild(scorehThree, scoreVal);
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
        wrongAnswer();
        upScoreOne.append(right);
        score.replaceChild(upScoreOne, scorehThree);
        return questionTwo;
    })

    quizBtnTwo.addEventListener("click", function(){
        questionThree();
        wrongAnswer();
        upScoreOne.append(right);
        score.replaceChild(upScoreOne, scorehThree);
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
        wrongAnswer();
        upScoreOne.append(right);
        score.replaceChild(upScoreOne, scorehThree);
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
        wrongAnswer();
        upScoreTwo.append(right);
        score.replaceChild(upScoreTwo, upScoreOne);
        return questionThree;
    })

    quizBtnTwo.addEventListener("click", function(){
        questionFour();
        wrongAnswer();
        upScoreTwo.append(right);
        score.replaceChild(upScoreTwo, upScoreOne);
        return questionThree;
    })

    quizBtnThree.addEventListener("click", function(){
        questionFour();
        wrongAnswer();
        upScoreTwo.append(right);
        score.replaceChild(upScoreTwo, upScoreOne);
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
        wrongAnswer();
        upScoreThree.append(right);
        score.replaceChild(upScoreThree, upScoreTwo);
        return questionFour;
    })

    quizBtnTwo.addEventListener("click", function(){
        questionFive();
        wrongAnswer();
        upScoreThree.append(right);
        score.replaceChild(upScoreThree, upScoreTwo);
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
        wrongAnswer();
        upScoreThree.append(right);
        score.replaceChild(upScoreThree, upScoreTwo);
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
        wrongAnswer();
        upScoreFour.append(right);
        score.replaceChild(upScoreFour, upScoreThree)
        return questionFive;
    })

    quizBtnTwo.addEventListener("click", function(){
        finishPage();
        wrongAnswer();
        upScoreFour.append(right);
        score.replaceChild(upScoreFour, upScoreThree)
        return questionFive;
    })

    quizBtnThree.addEventListener("click", function(){
        finishPage();
        wrongAnswer();
        upScoreFour.append(right);
        score.replaceChild(upScoreFour, upScoreThree)
        return questionFive;
    })

    quizBtnFour.addEventListener("click", function(){
        finishPage();
        right++;
        upScoreFour.append(right);
        score.replaceChild(upScoreFour, upScoreThree);
        console.log(seconds);
    })
}

//shows final score, submits to highscores
function finishPage(){

    var righto = right +1;
    var submit = "Submit";
    var finalScore = document.createTextNode("You scored " + righto + "/5!");
    quizBtnOne.textContent = submit;
    quizBtnTwo.remove();
    quizBtnThree.remove();
    quizBtnFour.remove();

    finishTitle.append(allDone)
    quizBody.replaceChild(finishTitle, questionFiveHThree);

    finishDisplay.append(finalScore);
    finishTitle.appendChild(finishDisplay);

    btnBody.append(div);
    div.append(quizBtnOne);

    quizBtnOne.addEventListener("click", function(){
        var playerInput = prompt("Name:");
        
        
        var setScore = "" + playerInput + "" + " : " + righto + "/5";
        localStorage.setItem(response, setScore);
        
        window.location.reload();
    });
    
};

//refreshes page when you run out of time
function youLost(){
    alert("You ran out of time!!");
    window.location.reload();
};