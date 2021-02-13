# Code-quiz

Live URL (not live):https://jrekse.github.io/Coding-quiz

This project is a timed, 5 question quiz with a time penalty for incorrect answers. 
Your points are displayed as you go and your score will be logged to the local storage along with your initials. 
This score can be viewed at any time by clicking "view highscore".

Technology
This project focuses mainly on Web API's, which were difficult to figure out for me personally
I also used the DOM method rather than jQuery because it makes more sense to me
The framework used to style this app was Bootstrap

The code below shows how the questionOne function changes the HTML and logs correct and incorrect answers

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

The event listeners call both the display for the next question and (if the answer is wrong) a function called wrongAnswer, this function is shown below


            function wrongAnswer(){
                counter = counter - 10;
            };

the variable counter is the value that displays the time you have left before the quiz restarts, so when you click the wrong answer 10 seconds are removed from the time. The counter function is shown below


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

the function go is called when the start quiz button is pressed. with counter = 75 on a global scope, it can be accessed anywhere. this creates an interval function that subtracts one from counter, checks if its greater than 0, grabs the html element with the id "count" then makes the value = counter. there is an if counter = 0 it clears the interval and calls a function called youLost shown below

            function youLost(){
                alert("You ran out of time!!");
                window.location.reload();
            };

when youLost is called, the used is given an alert saying they have ran out of time, when the user presses ok the quiz will reset to the start page and reset the timer. If you finish the quiz before you run out of time, a function called finalPage is called as shown below

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
                    var playerInput = prompt("Initials:");
                    var setScore = '"' + playerInput + '"' + " : " + righto + "/5";
                    localStorage.setItem(response, setScore);
                    window.location.reload();
                });
                
            };

after completing question five, a variable is made to represent your score, and a display with your score is made with a submit button below it.
this is done by removing all but one of the previous buttons. once submit is pressed the user will be prompted to give initials, then it logs both name and score to local storage and reloads the quiz.