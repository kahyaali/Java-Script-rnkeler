

/*java script quiz uygulama çalışması*/

/*constructor ürettik ve bu constructor'dan 3 tane soru türettik */

function Question(text,choices,answer)
{
    this.text=text;
    this.choices=choices;
    this.answer=answer;
}


/*question prototype */
Question.prototype.checkAnswer=function(_answer)
{
    return this.answer === _answer; /*true yada false döner */
}

/*quiz constructor */
function Quiz(questions)
{
  this.questions=questions;
  this.score=0; /*score bilgisini tutacak */
  this.questionsIndex=0;
}

/*quiz prototype */
Quiz.prototype.getQuestion=function()
{
    /*yeni soruyu getiriyor */
  return this.questions[this.questionsIndex];
}

/*quiz IsFinish */
Quiz.prototype.Isfinish=function()
{
    return this.questions.length===this.questionsIndex; /* questions questionIndex değerine eşit ise sorular bitmiş demektir true değer döner*/
}

/*quiz guess quiz tahmin  */
Quiz.prototype.tahmin=function(answer)
{
    var question=this.getQuestion();
    if(question.checkAnswer(answer))
    {
        this.score++;
    }
    this.questionsIndex++;
}



var q1=new Question('favori programın nedir',['c sharp','java','pyhton','asp.net'],'java');
var q2=new Question('favori dilin nedir',['c sharp','visual studio','visual code','nodejs'],'javascript');
var q3=new Question('en populer yazılım dili hangisi',['c sharp','java','java script','pyhon'],'pyhton');
var q4=new Question('en sevdiğiniz araba markası',['bmw','audi','porche','mitsubishi'],'mitsubishi');


var questions=[q1,q2,q3,q4];



/*start quiz */
var quiz=new Quiz(questions);

loadQuestion();

function loadQuestion()
{
    if(quiz.Isfinish()) /*sorular bitti ise showScore() metodunu çağırıp scoru gösteriyoruz */
    {
        showScore();
    }
    else
    {
        var question=quiz.getQuestion();
        var secim=question.choices;
        /*id değeri question olan h etiketini seçiyoruz seçiyoruz
        h etiketinin text alanına gelen soruyu yazıyoruz */
        document.querySelector('#question').textContent=question.text;

        for(let i=0;i<secim.length;i++)
        {
            var element=document.querySelector('#choise'+i); /*choise0 choise1 diye span id değerleri 0 1 2 değerleri i'den gelecek */
            element.innerHTML=secim[i];

            guess('btn'+i,secim[i]);
        }

        showProgress();
    }
     
}

function guess(id,tahmin)
{
  var btn=document.getElementById(id); /*bize gelen id değeri ile direkt butona ulaşabiliriz */
  btn.onclick=function()
  {
    quiz.tahmin(tahmin); /*tahmin değerini tahmin fonksiyonuna gönderiyoruz*/
    loadQuestion(); /*yeni soruyu yüklemesi için çalıştırdık */
  }
}

function showScore()
{
  var html=`<h2>Score</h2><h4>${quiz.score}</h4>`;
  document.querySelector('.card-body').innerHTML=html;
}

function showProgress()
{
    var toplamsoru=quiz.questions.length;
    var siradakisoru=quiz.questionsIndex+1;
    document.querySelector('#progress').innerHTML='Soru '+siradakisoru + ' of ' + toplamsoru;
}

