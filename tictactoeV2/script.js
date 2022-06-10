var box=document.getElementsByClassName("box");

var totalTurn=10,fillLock=true,turn=0,nowTurn=0,ic=0,active=false,end=false;
var boxdata=[0,1,2,3,4,5,6,7,8];
var player=
{
  number: [1,2], 
  shape: ['X','O'], 
  score: [0,0]
}

boxlength=box.length;

//Fungsi fungsi untuk mengisi box    
function fill1()
{
    //Mengecek jika fillLock bernilai false
    if(!fillLock)
    {
    boxdata[0]=player.shape[nowTurn];
    box[0].innerHTML=player.shape[nowTurn]
    //mengembalikan nilai fillLock ke true
    fillLock=true;
    box[0].onclick=""
    }
}
function fill2()
{
    if(!fillLock)
    {
    boxdata[1]=player.shape[nowTurn];
    box[1].innerHTML=player.shape[nowTurn] 
    fillLock=true;
    box[1].onclick=""
    } 
}
function fill3()
{
    if(!fillLock)
    {
    boxdata[2]=player.shape[nowTurn];
    box[2].innerHTML=player.shape[nowTurn] 
    fillLock=true;
    box[2].onclick=""
    } 
}
function fill4()
{
    if(!fillLock)
    {
    boxdata[3]=player.shape[nowTurn];
    box[3].innerHTML=player.shape[nowTurn] 
    fillLock=true;
    box[3].onclick=""
    } 
}
function fill5()
{
    if(!fillLock)
    {
    boxdata[4]=player.shape[nowTurn];
    box[4].innerHTML=player.shape[nowTurn] 
    fillLock=true;
    box[4].onclick=""
    } 
}
function fill6()
{
    if(!fillLock)
    {
    boxdata[5]=player.shape[nowTurn];
    box[5].innerHTML=player.shape[nowTurn] 
    fillLock=true;
    box[5].onclick=""
    } 
}
function fill7()
{
    if(!fillLock)
    {
    boxdata[6]=player.shape[nowTurn];
    box[6].innerHTML=player.shape[nowTurn] 
    fillLock=true;
    box[6].onclick=""
    } 
}
function fill8()
{
    if(!fillLock)
    {
    boxdata[7]=player.shape[nowTurn];
    box[7].innerHTML=player.shape[nowTurn] 
    fillLock=true;
    box[7].onclick=""
    } 
}
function fill9()
{
    if(!fillLock)
    {
    boxdata[8]=player.shape[nowTurn];
    box[8].innerHTML=player.shape[nowTurn] 
    fillLock=true;
    box[8].onclick=""
    } 
}

function play()
{
  if (!end)
  {
    setInterval(game, 0)
  }
}

function game()
{
  scoring();
  var text=document.getElementById("textScreen")
  text.innerHTML="Turn "+turn+"<br>"+"Player "+player.shape[nowTurn]+"'s Turn"
  if (fillLock && turn<totalTurn)
  {
   turn++ 
   changeTurn();
   fillLock=false
  }
  else if (turn==totalTurn)
  {
    endScreen();
    end=true;
  }
  ic++
  debug();
}
function changeTurn()
{
  var j,i=turn%2
  if(i==0)
  {
    j=2
  }
  else
  {
    j=1;
  }
  nowTurn=j-1;
}

function scoring()
{
  player.score[nowTurn]=0;
  var b=player.shape[nowTurn];

  //Vertical
  for(a=0;a<3;a++)
  {
    if(boxdata[a]==b && boxdata[a+3]==b && boxdata[a+6]==b)
    {
      player.score[nowTurn]+=1;
    }
  }
  
  //Horizontal
  for(a=0 ;a<7;a+=3)
  {
    if(boxdata[a]==b && boxdata[a+1]==b && boxdata[a+2]==b)
    {
      player.score[nowTurn]+=1;
    }
  }
  
  //Diagonal
  if(boxdata[0]==b && boxdata[4]==b && boxdata[8]==b && boxdata[2]==b && boxdata[4]==b && boxdata[6]==b)
  {
    player.score[nowTurn]+=2;
  }
  else if(boxdata[0]==b && boxdata[4]==b && boxdata[8]==b || boxdata[2]==b && boxdata[4]==b && boxdata[6]==b)
  {
    player.score[nowTurn]+=1;
  }
}

function endScreen()
{
   var text=document.getElementById("textScreen") 
   if(player.score[0]>player.score[1])
   {
     text.innerHTML="Player X win"
   }
   else if(player.score[0]<player.score[1])
   {
     text.innerHTML="Player O win"
   }
   else if(player.score[0]==player.score[1])
   {
     text.innerHTML="Draw"
   }
}

function restart()
{
  var box=document.getElementsByClassName("box");
  turn=1;
  for(i=0;i<9;i++)
  {
    boxdata[i]="";
    box[i].innerHTML="";
  }
  box[0].onclick="fill1()"
  box[1].onclick="fill2()"
  box[2].onclick="fill3()"
  box[3].onclick="fill4()"
  box[4].onclick="fill5()"
  box[5].onclick="fill6()"
  box[6].onclick="fill7()"
  box[7].onclick="fill8()"
  box[8].onclick="fill9()"
  
  player.score[0]=0;
  player.score[1]=0;
  
  ic=0;
  end="false"
  console.log("Game restarted")
}

function debuginfo()
{
  var debugbox=document.getElementById("debugbox");
  var button=document.getElementById("debugbutton");
  if(!active)
  {
    debugbox.style.display="block";
    button.style.backgroundColor="green";
    active=true;
  }
  else if(active)
  {
    debugbox.style.display="none";
    button.style.backgroundColor="white";
    active=false;
  }
}
function debug()
{
  var debugbox=document.getElementById("debugbox")
  debugbox.innerHTML="Debug info: "+active+"<br>"+"Interval count: "+ic+"<br>"+"Turn: "+turn+"<br>"+"fillLock: "+fillLock+"<br>"+"Player "+(nowTurn+1)+"/"+player.shape[nowTurn]+"'s turn"+"<br>"+"Player 1/"+player.shape[0]+"'s score: "+player.score[0]+"<br>"+"Player 2/"+player.shape[1]+"'s score: "+player.score[1]+"<br>"+"Game ended: "+end;
}