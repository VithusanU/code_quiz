// QUERY SELECTOR for main cards
var game = document.querySelector("#Game_Container");
var quiz_page = document.querySelector("#quiz_Page");
var hsPageSubmission = document.querySelector("#high_score_SUBMISSION");
var hspage = document.querySelector('#high_score_page');

// QUERY SELECTOR FOR SPECIFIC FUNC
var initialInput = document.querySelector("#Initials");
var clearScores = document.querySelector("#clearScores");
var submitScores = document.querySelector("#submitScore");
var vwhighscore = document.querySelector("#viewHigh");
var goBack = document.querySelector("#goBack");
var scoreList = document.querySelector("#scorelist");

//Query Selector for buttons
var buttons = document.querySelectorAll("button");

// Start Quiz
var startQuiz = document.querySelector(".start-button");

// Timer
var timer;
var timerStart = document.querySelector("#time_left");
var timerStop = false;

// Keeping track of score
var finalScore = document.querySelector("#finalScore");
var score = 0;
var questionNumber = 0;

// Query Selector for questions, right or wrong answers
var questionSelection = document.querySelector("#questions");
var answerSelection = document.querySelector("#answers");
var rightOrWrong = document.querySelector("#rightOrWrong");


var recordedscore = [[], []];


const quizQuestions = [
    {
        question: "What is HTML?",
        answers: {
            a: "A text-based approach to describing how content contained within an HTML file is structured",
            b: "Is the back-end of the project",
            c: "HTML stands for human trademarked marketing language",
            d: "HTML is an unordered list of objects"
        },
        correctAnswer: "a"
    },
    {
        question: "What is an HTML Tag?",
        answers: {
            a: "Is the container for all other HTML elements",
            b: "Is the container for all elements",
            c: "This defines the title for HTML tag",
            d: "These tags are not case-sensitive "
        },
        correctAnswer: "a"
    },
    {
        question: "What are Javascript datatypes?",
        answers: {
            a: "Number, Umbrellas, LED, and Undefined",
            b: "Boolean, Number, String, Object, and Undefined",
            c: "Java, Javascript, Python, and HTML",
            d: "Script, Unordered Lists, Windows, and Numbers"
        },
        correctAnswer: "b"
    },
    {
        question: "What is 'this' keyword in Javascript?",
        answers: {
            a: "It is a noun",
            b: "Explains what a function is",
            c: "This keyword refers to the object from where it was called.",
            d: "This creates a timer for a function."
        },
        correctAnswer: "c"
    },
    {
        question: "What is the === operator?",
        answers: {
            a: "This is the normal equality operator.",
            b: "This is the strict equality operator.",
            c: "This is the severe equality operator.",
            d: "This is not a operator."

        },
        correctAnswer: "b"
    },
    {
        question: "What are all the pop up boxes in Javascript?",
        answers: {
            a: "There are none.",
            b: "Prompt Box, Equality Box, Initial Box.",
            c: "Alert Box, View Box and Tune Box.",
            d: "Alert Box, Prompt Box, and Confirm Box.",
        },
        correctAnswer:  "d"
    }
]


function nextQuestion() {
    var nextQuestion = setInterval(function () {
        //count up for the questions 
        questionNumber++;

        clearButtons();

        if (questionNumber === quizQuestions.length) {
            submitScores();
            clearInterval(nextQuestion);
            return;
        }
        else {
            quizShow();
        }
        clearInterval(nextQuestion);
    }, 3000)

}


function scoreSubmission() {
    rightOrWrong.textContent = "";

    hsPageSubmission.setAttribute("style", "display:visible");
    quiz_page.setAttribute("style", "display:hidden");

    timerStop = true;
    timer = 0;

    finalScore.textContent = score;
}


// Handles the clearing of current OL to new OL on next question
function clearButtons() {
    var removeButtons = document.getElementById("answers");
    removeButtons.remove();
    var oldEm = document.createElement("ol");
    oldEm.setAttribute("id", "answers");
    quiz_page.appendChild(oldEm);
    answerSelection = document.querySelector("#answers");
}

function clearScoreList() {
    //removes the ol element containing the highscore values
    var removeHighscore = document.getElementById("scoreList");
    removeHighscore.remove();

    //recreate empty ol element
    var scoreOl = document.createElement("ol");
    scoreOl.setAttribute("id", "scoreList");
    hspage.insertBefore(scoreOl, hspage.children[1])
    scoreList = document.querySelector("#scoreList");
}


function quizShow() {
    if (questionNumber > quizQuestions.length) {
        clearButtons();
        return;
    }
    timerStop = false;
    //set the text to the current question
    questionSelection.textContent = quizQuestions[questionNumber].question;

    var buttonNumber = 0;
    for (answer in quizQuestions[questionNumber].answers) {
        //generate buttonNumber for comparison later
        buttonNumber++;

        var liElem = document.createElement("li");
        answerSelection.appendChild(liElem);
        answerSelection.setAttribute("style", "list-style: none;");
        answerSelection.setAttribute("class", "answerList");

        var button = document.createElement("button");
        button.setAttribute("value", buttonNumber);
        button.setAttribute("class", "answerButton");
        button.setAttribute("style", "width: 80%; list-style:none; padding-left:0; text-align: left; position:relative; left:5%");

        button.innerHTML = `${answer}: ${quizQuestions[questionNumber].answers[answer]}`;
        liElem.appendChild(button);
    }
    buttonNumber = 0; //reset buttonNumber value for the next iteration


    //event listener to check if answer clicked is correct 
    answerSelection.addEventListener("click", function (event) {
        var element = event.target;  //create variable to see which element is being clicked

        //disables all the answer buttons after clicked once 
        buttons = document.querySelectorAll('button');
        buttons.forEach((answerButton) => {
            if (answerButton.getAttribute("class") === "answerButton") {
                answerButton.setAttribute('disabled', 'true')
            }
        });

        const userAnswer = element.getAttribute('value') - 1;
        const abcd = ["a", "b", "c", "d"];

        //if the element clicked is a button do this 
        if (element.matches("button") === true) {
            //if the answer is correct do this 
            if (abcd[userAnswer] === quizQuestions[questionNumber].correctAnswer) {
                score++;

                rightOrWrong.textContent = "C O R R E C T"
                var correctClear = setInterval(function () {
                    rightOrWrong.textContent = ""
                    clearInterval(correctClear);
                }, 2000);

                nextQuestion();
            }
            else { //if the answer is incorrect do this 
                timer = timer - 10;

                rightOrWrong.textContent = "I N C O R R E C T"
                var wrongClear = setInterval(function () {
                    rightOrWrong.textContent = ""
                    clearInterval(wrongClear);
                }, 3000);
                nextQuestion();
            }
        }
    })

}


startQuiz.addEventListener("click", function () {
    clearScoreList();
    clearButtons();
    questionNumber = 0;
    score = 0;
    timer = 120;

    game.setAttribute("style", "display:none");

    quiz_page.setAttribute("style", "display:visible");

    nextQuestion();


    timerStart.textContent = timer;
    var timerCountdown = setInterval(function () {
        timer--;
        timerStart.textContent = timer;

        if (timer <= 0) {
            clearInterval(timerCountdown);
            scoreSubmission();

            quiz_page.setAttribute("style", "display:visible");
            hsPageSubmission.setAttribute("style", "display:visible");
        } else if (timerStop === true) {
            clearInterval(timerCountdown)
        }
    }, 1000)
})

// On score submission, an event clicker is placed so that score and initials are saved on click
submitScores.addEventListener("click", function (event) {
    event.preventDefault();

    if (initialInput.value === "") {
        alert("Please enter initials.")
        return;
    }
    recordedscore[0].push(initialInput.value.trim());
    recordedscore[1].push(score);

    localStorage.setItem("score", JSON.stringify(recordedscore));

    for (var index = 0; index < recordedscore[0].length; index++) {

        var showScores = document.createElement("li");

        showScores.textContent = '${recordedscore[0][index]} - ${recordedscore[1][index]}';

        scoreList.appendChild(showScores);
    }
    hsPageSubmission.setAttribute("style", "display:none");
    hspage.setAttribute("style", "display;visible");
})

clearScores.addEventListener("click", function (event) {
    clearScoreList();
    recordedscore = [[], []]
})

goBack.addEventListener("click", function (event) {
    game.setAttribute("style", "display:visible")
    highscorePage.setAttribute("style", "display:none");
})

vwhighscore.addEventListener("click", function (event) {
    event.preventDefault();
    timerStop = true;


    if (hsPageSubmission.getAttribute("display") === "visible" || highscorePage.getAttribute("display") === "visible") {
        return;
    }
    quiz_page.setAttribute("style", "display:none");
    game.setAttribute("style", "display:none");
    highscorePage.setAttribute("style", "display:visible");
})