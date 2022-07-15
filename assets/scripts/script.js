/*eslint-env browser*/

/*------Create all stand-alone global variables------*/
var index = 0,
    qCount = 0,
    selection = '',
    score = 0,
    high_scores = [],
    seconds_left = 600;

/*------CREATE and APPEND PAGE TOP ELEMENTS------*/
var body = document.querySelector("body"),
    card = document.createElement("section"),
    page_top = document.createElement("section"),
    high_score_button = document.createElement("button"),
    timer = document.createElement("p");
timer.setAttribute("class", "timer");
card.setAttribute("class", "card");
page_top.setAttribute("class", "top");
high_score_button.setAttribute("class", "high-score-button");
high_score_button.innerHTML = "View High Scores";


/*------APPEND page_top card TO BODY------*/
body.appendChild(page_top);
page_top.appendChild(high_score_button);
body.appendChild(card);



var welcome = document.createElement("p");
welcome.innerHTML = "<h1 class='quiz-title'>Coding Quiz Challenge</h1><br>Try to answer the following code-related questions...";
var start_button = document.createElement("button");
start_button.innerHTML = "Start Quiz!";
start_button.setAttribute("class", "start-button");
start_button.addEventListener("click", startQuiz);


var initials_input = document.createElement("input");
initials_input.setAttribute("type", "text");
initials_input.setAttribute("placeholder", "Enter your initials");
initials_input.setAttribute("class", "initials-input");
var form = document.createElement("form");

var all_done = document.createElement("p");






var messageP = document.createElement("p"),
    answersL = document.createElement("ul"),
    li1 = document.createElement("li"),
    li2 = document.createElement("li"),
    li3 = document.createElement("li"),
    li4 = document.createElement("li");
answersL.appendChild(li1);
answersL.appendChild(li2);
answersL.appendChild(li3);
answersL.appendChild(li4);
var questionResult = document.createElement("p"),
    submit_button = document.createElement("button");
submit_button.innerHTML = "Submit";
submit_button.setAttribute("class", "submit-button");
submit_button.addEventListener("click", submit_score);

var allQs = [
    {
        question_number: 1,
        question: "Commonly used data types do NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"

    },
    {
        question_number: 2,
        question: "The condition in an if/else statement is enclosed with:",
        options: ["quotes", "curly braces", "parenthesis", "square brackets"],
        answer: "parenthesis"

    },
    {
        question_number: 3,
        question: "Arrays in JavaScript can be used to store ___",
        options: ["numbers and strings", "booleans", "other arrays", "all of the above"],
        answer: "all of the above"


    },
    {
        question_number: 4,
        question: "String values must be enclosed within ___ when being assigned to variables.",
        options: ["commas", "curly braces", "quotes", "parenthesis"],
        answer: "quotes"

    },
    {
        question_number: 5,
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    },
];




messageP.className = "message",
    answersL.className = "choices",
    li1.className = "choice",
    li2.className = "choice",
    li3.className = "choice",
    li4.className = "choice";

// add a click event listener to each choice and pass the question number and the choice selected
answersL.addEventListener("click", checkAnswer);
submit_button.addEventListener("click", submit_score);

function onload() {
    card.appendChild(welcome);
    card.appendChild(start_button);
}

function startQuiz(event) {
    card.removeChild(welcome);
    card.removeChild(start_button);
    page_top.appendChild(timer);
    setTime();
    displayQuestions();
    

}

function setTime(event) {
    //timer.textContent = "Time: " + ((seconds_left+1)/ 10);
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        timer.textContent = "Time: " + Math.floor(seconds_left/10);
        if (seconds_left == 0) {
            clearInterval(timerInterval);
            return 1;
        }
        seconds_left--;
    }, 100);
}

function displayQuestions(event) {
    if (index == allQs.length) {
        endOfQuiz();
    }
    messageP.textContent = allQs[index].question;
    // inserting the text from choices 1-4 onto the list items as choices to select
    li1.textContent = allQs[index].options[0];
    li2.textContent = allQs[index].options[1];
    li3.textContent = allQs[index].options[2];
    li4.textContent = allQs[index].options[3];
    // append the question and the answers to the card
    card.appendChild(messageP);
    card.appendChild(answersL);
    card.appendChild(questionResult);

}

function checkAnswer(event) {
    var selection = event.target.textContent;
    // index is the question number and selection is the choice the user selected
    if (allQs[index].answer == selection) {
        questionResult.textContent = "Correct!";
        score++;
    } else {
        questionResult.textContent = "Incorrect!";
        seconds_left = seconds_left - 30;
    }
    index++;
    displayQuestions();
}

function endOfQuiz() {
    seconds_left = 0;
    all_done.innerHTML = "All done!<br>Your score is " + score;
    card.removeChild(messageP);
    card.removeChild(answersL);
    card.removeChild(questionResult);
    card.appendChild(all_done);
    card.appendChild(form);
    form.appendChild(initials_input);
    form.appendChild(submit_button);
}

function submit_score(event) {
    event.preventDefault();
    var initials = initials_input.value;
    console.log(initials);
}

onload();
