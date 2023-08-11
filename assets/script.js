// QUERY SELECTOR for main cards
var game = document.querySelector("#Game_Container");
var quiz_page = document.querySelector("#quiz_Page");
var hsPageSubmission = document.querySelector("#high_score_SUBMISSION");
var hspage = document.querySelector('#high_score_page');

// QUERY SELECTOR FOR SPECIFIC FUNC
var initialInput = document.querySelector("#Initials");

// Start Quiz
var startQuiz = document.querySelector(".start-button");

// Timer
var timer;
var timerStart = document.querySelector("time-left");
var timerStop = false;

// Keeping track of score
var finalScore = document.querySelector("#finalScore");
var score = 0;
var questionNumber = 0;

// Query Selector for questions, right or wrong answers
var questionSelection = document.querySelector("questions");
var answerSelection = document.querySelector("answers");
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
            c:"‘This’ keyword refers to the object from where it was called.",
            d:"This creates a timer for a function."
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
            d: "Alert Box, Prompt Box, and Confirm Box.`",
        }
    }


]


document.addEventListener("click",)



