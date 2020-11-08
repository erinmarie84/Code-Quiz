    var startButton = document.getElementById('startBtn');
    var questionText = document.getElementById('question');
    var questionIndex = 0
    var buttonAText = document.getElementById("btnA");
    var buttonBText = document.getElementById("btnB");
    var buttonCText = document.getElementById("btnC");
    var buttonDText = document.getElementById("btnD");
    
    var answerContainer = document.getElementById('answerButtons');
    var scoreOutput = document.getElementById('userScore');
    var score = 0
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    
    
    startButton.addEventListener('click', startGame);
    var questionCounter = 0
    
    var questionArray = [{
        question: 'What does HTML stand for?',
        answers: {
            choicea: 'Hyper Texting Markup Language',
            choiceb: 'Hyper Text Markup Language',
            choicec: 'Hyper Talk Marking Language',
            choiced: 'Hello To Mother Land',
        },
        correctAnswer: 'Hyper Text Markup Language',
    },
    {
        question: 'How do you call a function?',
        answers: {
            choicea: 'Using { } brackets',
            choiceb: 'Using [ ] brackets',
            choicec: 'Just call it on the phone',
            choiced: 'You do not actually call functions',
        },
        correctAnswer: 'Using { } brackets',
    },
    {
        question: 'What does CSS stand for?',
        answers: {
            choicea: 'Cascading Single Sheets',
            choiceb: 'Cascading Style Sheets',
            choicec: 'Cascading Styling Sheet',
            choiced: 'Cannot Style Sheep',
        },
        correctAnswer: 'Cascading Style Sheets',
    },
    {
        question: 'What do you use to declare an array?',
        answers: {
            choicea: '{ }',
            choiceb: ' " " ',
            choicec: '[ ]',
            choiced: '``',
        },
        correctAnswer: '[ ]',
    
    },
    {
        question: 'Which is the proper way to use camel case?',
        answers: {
            choicea: 'CamelCase',
            choiceb: 'Camel-Case',
            choicec: 'Camel_Case',
            choiced: 'camelCase',
        },
        correctAnswer: 'camelCase',
    
    },
    {
        question: 'What do you call a flock of crows?',
        answers: {
            choicea: 'Murder',
            choiceb: 'Craven',
            choicec: 'Creepy',
            choiced: 'Flock, duh',
        },
        correctAnswer: 'Murder',
        
    
    }];
    
    
    //Displays question on question card, and answer buttons
    function displayQuestion() {
    
    
        var question = questionArray[questionIndex].question;
        questionText.innerHTML = question;
    
        var buttonA = questionArray[questionIndex].answers.choicea;
        buttonAText.innerHTML = buttonA;
    
        var buttonB = questionArray[questionIndex].answers.choiceb;
        buttonBText.innerHTML = buttonB;
    
        var buttonC = questionArray[questionIndex].answers.choicec;
        buttonCText.innerHTML = buttonC;
    
        var buttonD = questionArray[questionIndex].answers.choiced;
        buttonDText.innerHTML = buttonD;
    }

    function startGame() {
        displayQuestion()
        timer()
    }
    
    // Timer function
    var timeTotal = 30;
    function timer() {
        var setTimer = setInterval(function () {
    
            document.getElementById('timeLeft').innerHTML = `Time Left: ${timeTotal}`
            if (timeTotal <= 0) {
                clearInterval(setTimer)
                document.getElementById('timeLeft').innerHTML = `Time's Up! Your score is ${score}`;
                saveButton();
            } else {
                timeTotal--
            }
        }, 1000);
    }
    
    
    
     answerContainer.addEventListener("click", getUserChoice);
    
    function getUserChoice(event) {
        
        var userChoice = event.target.textContent;
        
        showResults(userChoice);
    }
    
    //Function to call once the timer has run out
    function showResults(userChoice) {
        answerContainer = document.getElementById('answer-buttons');
    
    
        // Conditional to decide of userChoice === questionArray[i].answers.correctAnswer
        if (userChoice === questionArray[questionIndex].correctAnswer) {
            questionIndex++
            score++;
            displayQuestion();
    
            document.getElementById('userScore').innerHTML = `Score: ${score}`
        } else {
            questionIndex++ //Increase question Index to go to the next question
            timeTotal--
            displayQuestion()
        }
    
    
    
    };
    // New table to pop-up when time is up, quiz card hides
    var table = document.getElementById('highScoreTable');
    function saveButton() {
    
        var userName = prompt('What is your name?');
        var hideClass = document.getElementById('highScoreContainer');
        hideClass.classList.remove('hide');
    
        var questionContainer = document.getElementById('questionContainer');
        questionContainer.classList.add('hide');
    
    //This group of code it to get the user name and score to populate on a table
        var highScoreEntry = (`${userName} : ${score}`)
        window.localStorage.setItem(`${userName}`, JSON.stringify(highScoreEntry));
    
    
        var li = document.createElement('li');
        var highStorage = window.localStorage.getItem(`${userName}`);
        li.append(highStorage);
    
    }