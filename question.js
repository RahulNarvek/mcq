const questions = [
    {
        question: "Where is UC Browser related to?",
        answer: [
            {text: "India",correct: false},
            {text: "China",correct: true},
            {text: "America",correct: false},
            {text: "None",correct: false},
        ]
    },
    {
        question: " What is the full form of HTML?",
        answer: [
            {text: "Hyper Text Markup Language",correct: true},
            {text: "Hyper Text Markup Level",correct: false},
            {text: "High Text Markup Language",correct: false},
            {text: "None of these",correct: false},
        ]
    },
    {
        question: " What is the full form of ECS?",
        answer: [
            {text: "Electronic clearing system",correct: true},
            {text: "Electronic classic service",correct: false},
            {text: "Electronic clearing service",correct: false},
            {text: "None",correct: false},
        ]
    },
    {
        question: "What is the full form of SMTP?",
        answer: [
            {text: "simple mailing transfer protocol",correct: false},
            {text: "simple mail transfer protocol",correct: true},
            {text: "simple mail transaction protocol",correct: false},
            {text: "none of these",correct: false},
        ]
    },
    {
        question: "How many bytes in IPV6?",
        answer: [
            {text: "4",correct: false},
            {text: "8",correct: false},
            {text: "16",correct: true},
            {text: "10",correct: false},
        ]
    },
    {
        question: "How many bytes in ATM pin?",
        answer: [
            {text: "4",correct: true},
            {text: "5",correct: false},
            {text: "6",correct: false},
            {text: "8",correct: false},
        ]
    },
    {
        question: "How many digit in MMID?",
        answer: [
            {text: "11",correct: false},
            {text: "12",correct: false},
            {text: "7",correct: true},
            {text: "8",correct: false},
        ]
    },
    {
        question: "What is use Ctrl+V?",
        answer: [
            {text: "Copy",correct: false},
            {text: "Paste special",correct: true},
            {text: "Undo",correct: false},
            {text: "Paste",correct: false},
        ]
    },
    {
        question: "What is the full form of B2C",
        answer: [
            {text: "Basic to Customer",correct: false},
            {text: "Business to Customer",correct: true},
            {text: "Business to Code",correct: false},
            {text: "None",correct: false},
        ]
    },
    {
        question: "What will be the shortcut key of Save As in impress?",
        answer: [
            {text: "Ctrl+Shift+S",correct: true},
            {text: "Ctrl+S",correct: false},
            {text: "F11",correct: false},
            {text: "F7",correct: false},
        ]
    },
    {
        question: "When was the IMPS service started",
        answer: [
            {text: "22 nov 2015",correct: false},
            {text: "22 nov 2014",correct: false},
            {text: "22 nov 2011",correct: false},
            {text: "22 nov 2010",correct: true},
        ]
    },
    {
        question: "Which is the non-impact printer of the following?",
        answer: [
            {text: "Drum",correct: false},
            {text: "Dot Matrix",correct: false},
            {text: "Daisy whell",correct: false},
            {text: "Thermal",correct: true},
        ]
    },
    {
        question: "What is the maximum payment you can make?",
        answer: [
            {text: "50 thousand",correct: false},
            {text: "1 lakh",correct: true},
            {text: "2 lakh",correct: false},
            {text: "10 thousand",correct: false},
        ]
    },
    {
        question: "In which generation AI was introduced?",
        answer: [
            {text: "1st Gen",correct: false},
            {text: "2nd Gen",correct: false},
            {text: "4th Gen",correct: false},
            {text: "5th Gen",correct: true},
        ]
    },
    {
        question: "What is not included in Net Banking?",
        answer: [
            {text: "IMPS",correct: false},
            {text: "NEFT",correct: false},
            {text: "RTGS",correct: false},
            {text: "Cheque",correct: true},
        ]
    },
    {
        question: " What is Whatsapp?",
        answer: [
            {text: "Instant Messaging",correct: true},
            {text: "E-mail service",correct: false},
            {text: "E-commerce",correct: false},
            {text: "none",correct: false},
        ]
    },
    {
        question: " Which is the shortcut key to open a new tab in browser?",
        answer: [
            {text: "Ctrl+F",correct: false},
            {text: "Ctrl+T",correct: true},
            {text: "Ctrl+w",correct: false},
            {text: "None",correct: false},
        ]
    },
    {
        question: " Who did the initial develpoment of the Internet?",
        answer: [
            {text: "Microsoft",correct: false},
            {text: "Google",correct: false},
            {text: "ARPANET",correct: true},
            {text: "none",correct: false},
        ]
    },
    {
        question: " What is the full form of UTP?",
        answer: [
            {text: "Unshielded Twisted Pair Cable",correct: true},
            {text: "Unique Twisted Pair Cable",correct: false},
            {text: "Unified Twisted Pair Cable",correct: false},
            {text: "none",correct: false},
        ]
    },
    {
        question: " In which generation was the largest computer?",
        answer: [
            {text: "First",correct: true},
            {text: "Secound",correct: false},
            {text: "Third",correct: false},
            {text: "Fourth",correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);  
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Better Luck Next Time!...";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})


startQuiz();