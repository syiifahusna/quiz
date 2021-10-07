//initilize mark
var marks = 0;

//btn
var btnStart = document.getElementById("link-start");
var btnScore = document.getElementById("link-score");

//inner html
var head = document.getElementById("quiz-head");
var body = document.getElementById("quiz-body");
var footer = document.getElementById("quiz-footer");
var next = document.getElementById("next");

//btn action
btnStart.addEventListener("click", function(){
    quizStart(1);
});

btnScore.addEventListener("click", function(){
    head.innerHTML = `<h1>You Past Score</h1>`;
    body.innerHTML =`<button type="button" class="btn" onclick="location.reload();">Go Back</button>`;
});

//question
const arrQuestion = [
    {
        "question":"What is the highest mountain in malaysia?",
        "answer1":"Mount Tahan",
        "answer2":"Mount Murud",
        "answer3":"Mount Kinabalu",
        "answer4":"Mount Raya",
        "correct":"Mount Kinabalu"
    },
    {
        "question":"Who painted the Mona Lisa?",
        "answer1":"Monet",
        "answer2":"Michelangelo",
        "answer3":"Picasso",
        "answer4":"Da Vinci",
        "correct":"Da Vinci"
    },
    {
        "question":"Which planet is closest to the sun?",
        "answer1":"Mars",
        "answer2":"Mercury",
        "answer3":"Neptune",
        "answer4":"Venus",
        "correct":"Mercury"
    },
    {
        "question":"Until 2021, How many prime minister that malaysia have?",
        "answer1":"9",
        "answer2":"8",
        "answer3":"7",
        "answer4":"6",
        "correct":"9"
    },
    {
        "question":"Who Created This quiz",
        "answer1":"Syifa",
        "answer2":"lily",
        "answer3":"zoey",
        "answer4":"husna",
        "correct":"Syifa"
    }
];

//========================function=============================
function quizStart(num){
    next.innerHTML = ``;
    footer.innerHTML = `Question <span id="qnum">`+num+`</span>/4`;
    num = num - 1;

    //load question
    if( num > (arrQuestion.length-1)){
        head.innerHTML =`<h1>You Finished The Quiz</h1><h3>You Answered `+ marks +` out of `+ arrQuestion.length +` correctly</h3>`;
        body.innerHTML =`<button type="button" class="btn" onclick="location.reload();">Menu</button>`;
        footer.innerHTML ="";
        next.innerHTML ="";
    }else{
        questionRound(arrQuestion[num]); 
    }
       
}

function questionRound(arrQuestion){

   let question = `<h3>`+ arrQuestion.question+`</h3>`;
   let answer1 = arrQuestion.answer1;
   let answer2 = arrQuestion.answer2;
   let answer3 = arrQuestion.answer3;
   let answer4 = arrQuestion.answer4;
   let correct = arrQuestion.correct;

   var arrAnswer = [answer1,answer2,answer3,answer4];

   let text ="";
   for(let i=0;i<arrAnswer.length;i++){
        text = text + `<button type="button" class="btn-answer">`+ arrAnswer[i] +`</button>`;    
   }

   //display question
   head.innerHTML= question;
   body.innerHTML = text;

   //btn answer action
   var btnAnswer = document.getElementsByClassName("btn-answer");
   for(let i =0; i<arrAnswer.length;i++){
            btnAnswer[i].addEventListener("click",function(){
            questionAnswer(btnAnswer[i],correct);
            //change the right answer color
            arrLocation = arrAnswer.indexOf(correct);
            btnAnswer[arrLocation].style.backgroundColor = "#0096c7";
        
       });
   }
   
}

//check answer
function questionAnswer(btnAnswer,correct){
    let useranswer = btnAnswer.innerHTML;
    
    //if answer match correct answer
    if(useranswer == correct){
        //change answer color
        btnAnswer.style.backgroundColor = "#0096c7";
        marks = marks + 1;
    }else{
        btnAnswer.style.backgroundColor = "#e63946";
        
    }

    next.innerHTML = '<button type="button" class="btn-next">Next</button>';

    //btn next action
    var btnNext = document.getElementsByClassName("btn-next");
    btnNext[0].addEventListener("click",function(){
        var  questionNumber = document.getElementById("qnum").innerHTML;
        num = parseInt(questionNumber);
        num = num + 1;
        console.log(num);
        quizStart(num);
    });
}







