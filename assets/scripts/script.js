/*eslint-env browser*/

var card = document.getElementById("card"),
    pageTop = document.getElementById("top"),
    timer = document.getElementById("timer");


var index = 0,
    qCount = 0,
    selection = '',
    score = 0,
    high_scores = [];


//var allQs = [
//    /*Question 1*/
//        ["Commonly used data types do NOT include:", "strings", "booleans", "alerts", "numbers", "alerts"],
//    /*Question 2*/
//        ["The condition in an if/else statement is enclosed with:", "quotes", "curly braces", "parenthesis", "square brackets", "parenthesis"],
//    /*Question 3*/
//        ["Arrays in JavaScript can be used to store ___", "numbers and strings", "booleans", "other arrays", "all of the above", "all of the above"],
//    /*Question 4*/
//        ["String values must be enclosed within ___ when being assigned to variables.", "commas", "curly braces", "quotes", "parenthesis", "quotes"],
//    /*Question 5*/
//        ["A very useful tool used during development and debugging for printing content to the debugger is: ", "JavaScript", "terminal/bash", "for loops", "console.log", "console.log"]
//],
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
],


    messageP = document.createElement("p"),
    answersL = document.createElement("ul"),
    li1 = document.createElement("li"),
    li2 = document.createElement("li"),
    li3 = document.createElement("li"),
    li4 = document.createElement("li"),
    questionResult = document.createElement("p");
var submit_button = document.createElement("button");
submit_button.innerHTML = "Submit";

messageP.className = "message",
    answersL.className = "choices",
    li1.className = "choice",
    li2.className = "choice",
    li3.className = "choice",
    li4.className = "choice";

// add a click event listener to each choice and pass the question number and the choice selected
li1.addEventListener("click", checkAnswer1);
li2.addEventListener("click", checkAnswer2);
li3.addEventListener("click", checkAnswer3);
li4.addEventListener("click", checkAnswer4);
submit_button.addEventListener("click", submit_score);


var secondsLeft = 5;

function startQuiz() {
    displayQuestions();
    setTime();

}

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        timer.textContent = "Time: " + secondsLeft;
        if (secondsLeft == 0) {
            clearInterval(timerInterval);
            endOfQuiz();
        }
        secondsLeft--;
    }, 1000);
}

function displayQuestions() {
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
    answersL.appendChild(li1);
    answersL.appendChild(li2);
    answersL.appendChild(li3);
    answersL.appendChild(li4);

}

function checkAnswer1() {
    console.log("Test 1");
    // index is the question number and selection is the choice the user selected
    if (allQs[index].answer == allQs[index].options[0]) {
        questionResult.textContent = "Correct!";
        score++;
    } else {
        questionResult.textContent = "Incorrect!";
    }
    index++;
    card.appendChild(questionResult);
    displayQuestions();
}

function checkAnswer2() {
    console.log("Test 2");
    // index is the question number and selection is the choice the user selected
    if (allQs[index].answer == allQs[index].options[1]) {
        questionResult.textContent = "Correct!";
        score++;
    } else {
        questionResult.textContent = "Incorrect!";
    }
    index++;
    card.appendChild(questionResult);
    displayQuestions();
}

function checkAnswer3() {
    console.log("Test 3");
    // index is the question number and selection is the choice the user selected
    if (allQs[index].answer == allQs[index].options[2]) {
        questionResult.textContent = "Correct!";
        score++;
    } else {
        questionResult.textContent = "Incorrect!";
    }
    index++;
    card.appendChild(questionResult);
    displayQuestions();
}

function checkAnswer4() {
    console.log("Test 4");
    // index is the question number and selection is the choice the user selected
    if (allQs[index].answer == allQs[index].options[3]) {
        questionResult.textContent = "Correct!";
        score++;
    } else {
        questionResult.textContent = "Incorrect!";
    }
    index++;
    card.appendChild(questionResult);
    displayQuestions();
}

function endOfQuiz() {
    card.removeChild(messageP);
    card.removeChild(answersL);
    card.removeChild(questionResult);
    var all_done = document.createElement("p");
    all_done.innerHTML = "All done!<br>Your score is " + score;
    card.appendChild(all_done);
    var form = document.createElement("form");
    card.appendChild(form);
    var initials_input = document.createElement("input");
    initials_input.setAttribute("type", "text");
    form.appendChild(initials_input);
    form.appendChild(submit_button);
}

function submit_score(){
    
}

startQuiz();
