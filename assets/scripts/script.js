/*eslint-env browser*/

var qCard = document.getElementById("quiz-card"),
    pageTop = document.getElementById("top"),
    timer = document.getElementById("timer"),

    qCount = 0,
    index = '',
    selection = '';

var allQs = [
    /*Question 1*/
        ["Commonly used data types do NOT include:", "strings", "booleans", "alerts", "numbers", "alerts"],
    /*Question 2*/
        ["The condition in an if/else statement is enclosed with:", "quotes", "curly braces", "parenthesis", "square brackets", "parenthesis"],
    /*Question 3*/
        ["Arrays in JavaScript can be used to store ___", "numbers and strings", "booleans", "other arrays", "all of the above", "all of the above"],
    /*Question 4*/
        ["String values must be enclosed within ___ when being assigned to variables.", "commas", "curly braces", "quotes", "parenthesis", "quotes"],
    /*Question 5*/
        ["A very useful tool used during development and debugging for printing content to the debugger is: ", "JavaScript", "terminal/bash", "for loops", "console.log", "console.log"]
],


    messageP = document.createElement("p"),
    answersL = document.createElement("ul"),
    li1 = document.createElement("li"),
    li2 = document.createElement("li"),
    li3 = document.createElement("li"),
    li4 = document.createElement("li"),
    questionResult = document.createElement("p");

messageP.className = "message",
    answersL.className = "choices",
    li1.className = "choice",
    li2.className = "choice",
    li3.className = "choice",
    li4.className = "choice";

var secondsLeft = 60;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        timer.textContent = "Time: " + secondsLeft;

        if (qCount < allQs.length && secondsLeft % 12 == 0) {
            // Calls function to display question/message
            index = qCount;
            displayQuestion(qCount);
            qCount++;
        }

        if (secondsLeft == 0) {
            clearInterval(timerInterval);
            qCard.removeChild(messageP);
            qCard.removeChild(answersL);
        }
        secondsLeft--;
    }, 1000);
}

function displayQuestion(index) {
    messageP.textContent = allQs[index][0];
    // inserting the text from choices 1-4 onto the list items as choices to select
    li1.textContent = allQs[index][1];
    li2.textContent = allQs[index][2];
    li3.textContent = allQs[index][3];
    li4.textContent = allQs[index][4];
    // append the question and the answers to the qCard
    qCard.appendChild(messageP);
    qCard.appendChild(answersL);
    answersL.appendChild(li1);
    answersL.appendChild(li2);
    answersL.appendChild(li3);
    answersL.appendChild(li4);
    // add a click event listener to each choice and pass the question number and the choice selected
    li1.addEventListener("click", checkAnswer1);
    li2.addEventListener("click", checkAnswer2);
    li3.addEventListener("click", checkAnswer3);
    li4.addEventListener("click", checkAnswer4);
}

function checkAnswer1() {
    // index is the question number and selection is the choice the user selected
    if (allQs[index][5] == allQs[index][1]) {
        questionResult.textContent = "Correct!";
        qCard.appendChild(questionResult);
    } else {
        questionResult.textContent = "Incorrect!";
        qCard.appendChild(questionResult);
    }
}

function checkAnswer2() {
    // index is the question number and selection is the choice the user selected
    if (allQs[index][5] == allQs[index][2]) {
        questionResult.textContent = "Correct!";
        qCard.appendChild(questionResult);
    } else {
        questionResult.textContent = "Incorrect!";
        qCard.appendChild(questionResult);
    }
}

function checkAnswer3() {
    // index is the question number and selection is the choice the user selected
    if (allQs[index][5] == allQs[index][3]) {
        questionResult.textContent = "Correct!";
        qCard.appendChild(questionResult);
    } else {
        questionResult.textContent = "Incorrect!";
        qCard.appendChild(questionResult);
    }
}

function checkAnswer4() {
    // index is the question number and selection is the choice the user selected
    if (allQs[index][5] == allQs[index][4]) {
        questionResult.textContent = "Correct!";
        qCard.appendChild(questionResult);
    } else {
        questionResult.textContent = "Incorrect!";
        qCard.appendChild(questionResult);
    }
}


setTime();
