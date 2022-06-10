var started=false, lockanswer=false, questionnumber, optionname=[3], correctoption, second=10, totalscore=0, timestopped=false, totalcorrect=0;
var quiz=
 {
  question: ["🇦🇩", "🇦🇪", "🇦🇫", "🇦🇱", "🇦🇲", "🇦🇴", "🇦🇷", "🇦🇹", "🇦🇿", "🇧🇦","🇧🇧", "🇧🇩", "🇧🇪", "🇧🇭", "🇧🇮", "🇧🇳", "🇧🇷", "🇧🇸", "🇧🇹", "🇨🇦", "🇨🇱", "🇨🇳", "🇨🇵", "🇨🇺", "🇨🇾"], 
  answer: ["Andorra", "United Arab Emirate", "Afghanistan", "Albania", "Armenia", "Angola", "Argentina", "Austria", "Azerbaijan", "Bosnia Herzegovina","Barbados", "Bangladesh", "Belgium", "Bahrain", "Burundi", "Brunei Darussalam", "Brazil", "Bahamas", "Bhutan", "Canada", "Chile", "China", "France", "Cuba", "Cyprus"], 
 }; 
 var question=document.getElementById("question");
 var option=document.getElementsByClassName("option");
 var scorebox=document.getElementById("scorebox");
   

function start()
{
  started=true;
  changescreen("quizscreen");
  game();
}

function changescreen(target)
{
  var startscreen=document.getElementById("startscreen")
  var quizscreen=document.getElementById("quizscreen")
  var endscreen=document.getElementById("endscreen")
 
  if(target=="quizscreen")
  {
    startscreen.style.display="none"
    quizscreen.style.display="block"
  } 
  if(target=="endscreen")
  {
    quizscreen.style.display="none"
    endscreen.style.display="block"
  }
}

function game()
{
  randomizequestion();
  setquestion();
  //setInterval(timer, 1000); 
}

function randomizequestion()
{
  var correctAnswerExist;
  
  console.log("Randomizing Question...")
  
  questionnumber=Math.floor(Math.random() * quiz.question.length);
  console.log(questionnumber)
  
  for(i=0;i<4;i++)
  {
    optionname[i]=Math.floor(Math.random() * quiz.answer.length);
  } 
  
  for(i=0;i<4;i++)
  {
    for(j=0;j<4;j++)
    {
      if(optionname[i]==optionname[j] && j !=i)
      {
        console.log(optionname[0]+" "+optionname[1]+" "+optionname[2]+" "+optionname[3]);
        console.log("multiple option detected "+optionname[i]+"(option "+i+") is equal to "+optionname[j]+"(option "+j+")");
        randomizequestion();
      }
    }
  }  
  
  for(i=0;i<4;i++)
  {
    if(optionname[i]==questionnumber) 
    {
      correctoption=i;
      correctAnswerExist=true;
    }
  }
  
  if(!correctAnswerExist)
  {
  var a = Math.floor(Math.random() * 4);
  optionname[a]=questionnumber;
  correctoption=a;
  } 
} 

function setquestion()
{
  console.log(optionname[0]+" "+optionname[1]+" "+optionname[2]+" "+optionname[3]);
  
  scorebox.innerHTML=totalscore;
  question.innerHTML=quiz.question[questionnumber];
  for(i=0;i<4;i++)
  {
    option[i].innerHTML=quiz.answer[optionname[i]];
    option[i].style.backgroundColor="lightblue";
  }
  second=10;
  lockanswer=false;
  timestopped=false;
}

function timer()
{
  if(!timestopped)
  {
  second-=1;
  } 
  var timerbar=document.getElementById("timerbar")
  timerbar.innerHTML="Timer: "+second;
  if(second==0)
  {
    end();
  }
}

function checkanswer(useranswer)
{
  if(!lockanswer)
  {
   if(useranswer==correctoption)
   {
     option[useranswer].style.backgroundColor="green";
     totalscore+=100;
     totalscore+=second*10; 
     totalcorrect+=1;
     console.log("correct");
   }
   else
   {
     option[useranswer].style.backgroundColor="red";
     console.log("false");
     setTimeout(end, 2000)
   } 
   console.log("Option "+useranswer+" selected")
   lockanswer=true;
   timestopped=true;
   setTimeout(game, 2000);
  } 
}

function end()
{
  var result=document.getElementById("result")
  timestopped=true;
  result.innerHTML="Correct Answer(s): "+totalcorrect+"<br>Total score: "+totalscore;
  changescreen("endscreen");
}