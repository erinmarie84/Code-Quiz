//Create a variable that connects with the startBtn in the HTML
var startButton = document.getElementById('startBtn');
var questionText = document.getElementById('question');
var buttonOne = document.getElementById('btn1');
var buttonTwo = document.getElementById('btn2');
var buttonThree = document.getElementById('btn3');

var currentQuestion = 0;
var timer = document.getElementById('timer')
//Create a variable that shows how many seconds the user has 
var countDown = 30;
//var totalTime = myQuestions.length * countDown;
//var timerId;


    //set interval here


//function timeTracker(){
    //decrease total time by one
    //timer.innerHTML = countDown;
    
    // once total time gets to zero stop game 
    
startButton.addEventListener('click', startGame);

//startButton.addEventListener('click', function () {
    function timer() {
        var time = setInterval(function () {

            if (countDown < 1) {
                clearInterval(time);
                timer = document.getElementById('timer').innerHTML = 'Times Up';
            } else {
                countDown--;
            }

        }, 1000)

    }
    //timer();

    

    

    //User chooses A,B, or C and when user clicks on answer the computer recognizes which answer is chosen. If answer is correct prompts user correct. If answer is wrong deducts 10 seconds from timer. Moves on to next question. When game is over user should be able to save initials and score and re-start game if user chooses. 


    function nextQuestion() {
        var question = myQuestions[currentQuestion].question;
         questionText.innerHTML = question;
        console.log(questionText);

         var btn1 = myQuestions[currentQuestion].answers.choicea;
         buttonOne.innerHTML = btn1;

         var btn2 = myQuestions[currentQuestion].answers.choiceb;
         buttonTwo.innerHTML = btn2;

         var btn3 = myQuestions[currentQuestion].answers.choicec;
         buttonThree.innerHTML = btn3;
    };

        var myQuestions = [{

            question: 'What does HTML stand for?',
            answers: {
                choicea: 'Hello To Mother Language',
                choiceb: 'Hyper Texting Marks Language',
                choicec: 'Hyper Text Markup Language'
            },

            correctAnswer: 'c'
        },
        {
            question: 'What does CSS stand for?',
            answers: {
                choicea: 'Crappy Styling Sorter',
                choiceb: 'Cascading Style Sheets',
                choicec: 'Cascading Single Sheets'
            },

            correctAnswer: 'b'
        },
        {
            question: 'What is a function?',
            answers: {
                choicea: 'It is used to assign variables to values',
                choiceb: 'A block of code that performs a task',
                choicec: 'Used for storing and manipulating text'
            },

            correctAnswer: 'b'
        }
    ];

    function startGame() {
        nextQuestion()
    }

    











