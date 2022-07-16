/*eslint-env browser*/

/*------Create global variables------*/
var index,
    qCount = 0,
    selection = '',
    score = 0,
    high_scores_array = [],
    initials_array = [],
    seconds_left = 600,
    card = document.querySelector(".card"),
    page_top = document.querySelector(".top"),
    high_score_button = document.querySelector(".high-score-button"),
    timer = document.querySelector(".timer"),
    start_button = document.createElement("button"),
    welcome = document.createElement("p"),
    initials_input = document.createElement("input"),
    form = document.createElement("form"),
    all_done = document.createElement("p"),
    answersL = document.createElement("ul"),
    li1 = document.createElement("li"),
    li2 = document.createElement("li"),
    li3 = document.createElement("li"),
    li4 = document.createElement("li"),
    messageP = document.createElement("p"),
    questionResult = document.createElement("p"),
    submit_button = document.createElement("button"),
    home_button = document.createElement("button"),
    allQs = [
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

/*--- SET CLASSES AND ATTRIBUTES ---*/
messageP.className = "message";
welcome.innerHTML = "<h1 class='quiz-title'>Coding Quiz Challenge</h1><br>Try to answer the following code-related questions...";
start_button.innerHTML = "Start Quiz!";
start_button.setAttribute("class", "start-button");
home_button.innerHTML = "Home";
home_button.setAttribute("class", "home-button");
initials_input.setAttribute("type", "text");
initials_input.setAttribute("placeholder", "Enter your initials");
initials_input.setAttribute("class", "initials-input");
answersL.className = "choices";
li1.className = "choice";
li2.className = "choice";
li3.className = "choice";
li4.className = "choice";
submit_button.innerHTML = "Submit";
submit_button.setAttribute("class", "submit-button");
submit_button.addEventListener("click", submit_score);
start_button.addEventListener("click", startQuiz);


/*--- ADD EVENT LISTENERS ---*/
answersL.addEventListener("click", checkAnswer);
submit_button.addEventListener("click", submit_score);
high_score_button.addEventListener("click", view_high_scores);
home_button.addEventListener("click", onload);

function onload() {
    removeAllChildren(card);
    card.appendChild(welcome);
    card.appendChild(start_button);
}

function startQuiz(event) {
    questionResult.textContent = '';
    card.removeChild(welcome);
    card.removeChild(start_button);
    page_top.appendChild(timer);
    index = 0;
    setTime();
    displayQuestions();


}

function setTime(event) {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        timer.textContent = "Time: " + Math.floor(seconds_left / 10);
        if (seconds_left == 0) {
            clearInterval(timerInterval);
            return 1;
        }
        seconds_left--;
    }, 100);
}

/*   Display the questions and choices to the user   */
function displayQuestions(event) {
    messageP.textContent = allQs[index].question;

    answersL.appendChild(li1);
    answersL.appendChild(li2);
    answersL.appendChild(li3);
    answersL.appendChild(li4);

    /*   inserting the text from choices 1-4 onto the list items as choices to select   */
    li1.textContent = allQs[index].options[0];
    li2.textContent = allQs[index].options[1];
    li3.textContent = allQs[index].options[2];
    li4.textContent = allQs[index].options[3];
    /*   append the question and the answers to the card   */
    card.appendChild(messageP);
    card.appendChild(answersL);
    card.appendChild(questionResult);

}

/*   Check the answer of the user selection   */
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
    if (index < allQs.length) {
        displayQuestions();
    } else {
        endOfQuiz();
    }
}

/*   When the quiz is over, display a message, the score, and an area to submit initials   */
function endOfQuiz() {
    seconds_left = 0;
    messageP.innerHTML = "All done!<br>Your score is " + score;
    card.removeChild(answersL);
    card.appendChild(messageP);
    card.appendChild(form);
    form.appendChild(initials_input);
    form.appendChild(submit_button);
}

/*   Put the scores and initials into their respective arrays   */
function submit_score(event) {
    event.preventDefault();
    high_scores_array.push(score);
    initials_array.push(initials_input.value);
    removeAllChildren(card);
    onload();
}

/*   Coninutally removes all children from the card for a clean card   */
function removeAllChildren(p) {
    while (p.firstChild) {
        p.removeChild(p.firstChild);
    }
}

/*   Create and display a table for the high scores   */
function view_high_scores() {
    removeAllChildren(card);
    var table = document.createElement('table');
    var table_caption = document.createElement('caption');
    table_caption.textContent = "High Scores";
    table.append(table_caption);
    var header_row = document.createElement('tr');
    var table_head_1 = document.createElement('th');
    var table_head_2 = document.createElement('th');
    table_head_1.textContent = "Score";
    table_head_2.textContent = "Initials";
    header_row.append(table_head_1);
    header_row.append(table_head_2);
    table.append(header_row);
    /*   Iterate through the number of high scores and add a row and two columns with the score and initials   */
    for (var i = 0; i < high_scores_array.length; i++) {
        var row = document.createElement('tr');
        var col1 = document.createElement('td');
        var col2 = document.createElement('td');
        col1.textContent = high_scores_array[i];
        col2.textContent = initials_array[i];
        row.appendChild(col1);
        row.appendChild(col2);
        table.append(row);

    }
    card.appendChild(table);
    card.appendChild(home_button)

}

onload();
