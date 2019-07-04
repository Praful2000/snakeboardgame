var y = 1;
for(var i = 1 ; i<= 55 ; i++)
{
  if(y%10 == 0)
  {  document.querySelectorAll('h2')[y-1].innerHTML = y;
    for(var j = 0 ; j<=10; j++){
if(y==90)
{
  for(var k = 1 ; k<10 ; k++){
document.querySelectorAll('h2')[(y+10)-(k)].innerHTML = y+(k);
}
document.querySelectorAll('h2')[90].innerHTML = 100;
break;
}else{
document.querySelectorAll('h2')[(y+10)-(j)].innerHTML = y+(j); }}
                             y = y+11;  i++;}
  else {
document.querySelectorAll('h2')[y-1].innerHTML = y;
      y++; }}
var total = 0;
var total2 = 0;
var chaal = 0;

for(var i =0 ; i<100 ; i++)
{
  var x =  document.querySelectorAll('h2')[i].innerHTML ;
  if(x%2 == 0)
  {
    document.querySelectorAll('h2')[i].style.color = 'cyan';

  }
  else {
      document.querySelectorAll('h2')[i].style.color = 'red';

  }
}


$('#player1').click(function(){
if(chaal == 0){
  if(total>=1){
    for(var i =0 ; i<100 ; i++)
    {
      var x =  document.querySelectorAll('h2')[i].innerHTML ;
      if(x%2 == 0)
      {
        document.querySelectorAll('h2')[i].style.color = 'cyan';
        document.querySelectorAll('h2')[i].style.background = 'white';

      }
      else {
          document.querySelectorAll('h2')[i].style.color = 'red';
            document.querySelectorAll('h2')[i].style.background = 'white';
      }
    }
    for(var i = 0 ; i<100 ; i++)
    {
    var x =   document.querySelectorAll('h2')[i].innerHTML ;

    if("P1" == x)
    {
     document.querySelectorAll('h2')[i].innerHTML = total ;
    }
}
}
  num = Math.random()*6;
  num = Math.ceil(num);
  total = total + num;
  if(total > 100)
  {
      document.querySelector('h3').innerHTML = ("/////////////player 1 winsssss////");
      alert("match end");
  }
  document.querySelector('h3').innerHTML = ("Player 1 total "+total);

  for(var i = 0 ; i<100 ; i++)
  {
  var x =   document.querySelectorAll('h2')[i].innerHTML ;
 if(total == x)
 {
    document.querySelectorAll('h2')[i].style.color = 'white';
   document.querySelectorAll('h2')[i].innerHTML = "P1" ;
   document.querySelectorAll('h2')[i].style.background = 'black';
 }}
 if(total == 58)
 {
   snakebite();
 total = 38;
 for(var i = 0 ; i<100 ; i++)
 {
var x =   document.querySelectorAll('h2')[i].innerHTML ;
if(x == total){
  document.querySelectorAll('h2')[i].innerHTML = "P1" ;
}
}
 }
 if(total == 92)
 { snakebite();
 total = 9;
 for(var i = 0 ; i<100 ; i++)
 {
var x =   document.querySelectorAll('h2')[i].innerHTML ;
if(x == total){
  document.querySelectorAll('h2')[i].innerHTML = "P1" ;
}
if(x==92)
{
 document.querySelectorAll('h2')[i].innerHTML = 92;
}
}
}
 if(total == 77)
 { snakebite();
 total = 25;
 for(var i = 0 ; i<100 ; i++)
 {
var x =   document.querySelectorAll('h2')[i].innerHTML ;
if(x == total){
  document.querySelectorAll('h2')[i].innerHTML = "P1" ;
}
}
 }
 if(total == 28)
 {snakebite();
 total = 9;
 for(var i = 0 ; i<100 ; i++)
 {
var x =   document.querySelectorAll('h2')[i].innerHTML ;
if(x == total){
  document.querySelectorAll('h2')[i].innerHTML = "P1" ;
}
if(x==28)
{
 document.querySelectorAll('h2')[i].innerHTML = 28;
}

}
 }
 if(total == 80)
 {snakebite();
 total = 59;
 for(var i = 0 ; i<100 ; i++)
 {
var x =   document.querySelectorAll('h2')[i].innerHTML ;
if(x == total){
  document.querySelectorAll('h2')[i].innerHTML = "P1" ;
}
if(x==80)
{
 document.querySelectorAll('h2')[i].innerHTML = 80;
}
  }
}  chaal = 1;
}});
$('#player2').click(function(){
  if(chaal == 1){
  if(total2>=1){
    for(var i =0 ; i<100 ; i++)
    {
      var x =  document.querySelectorAll('h2')[i].innerHTML ;
      if(x%2 == 0)
      {
       document.querySelectorAll('h2')[i].style.color = 'cyan';

      }
      else {
          document.querySelectorAll('h2')[i].style.color = 'red';
      }
    }
    for(var i = 0 ; i<100 ; i++)
    {
    var x =   document.querySelectorAll('h2')[i].innerHTML ;
    if("P2" == x)
    {
     document.querySelectorAll('h2')[i].innerHTML = total2 ;
    }
}
}
if(total2 > 100)
{
    document.querySelector('h3').innerHTML = ("/////////Player 2 winsssssssssssssss///////");
}
  num1 = Math.random()*6;
  num1 = Math.ceil(num1);
  total2 = total2 + num1;
  document.querySelector('h3').innerHTML = ("Player 2 total "+total2);
  for(var i = 0 ; i<100 ; i++)
{
 var x = document.querySelectorAll('h2')[i].innerHTML ;
 if(total2 == x)
 {
   document.querySelectorAll('h2')[i].style.color = 'orange';
   document.querySelectorAll('h2')[i].innerHTML = "P2" ;
   document.querySelectorAll('h2')[i].style.background = 'green';
 }
}
  if(total2 == 58)
  { snakebite();
  total2 = 38;
  for(var i = 0 ; i<100 ; i++)
  {
 var x =   document.querySelectorAll('h2')[i].innerHTML ;
 if(x == total2){
   document.querySelectorAll('h2')[i].innerHTML = "P2" ;
}
}
  }

  if(total2 == 92)
  {
    snakebite();
  total2 = 9;
  for(var i = 0 ; i<100 ; i++)
  {
 var x =   document.querySelectorAll('h2')[i].innerHTML ;
 if(x == total2){
   document.querySelectorAll('h2')[i].innerHTML = "P2" ;
}
if(x==92)
{
  document.querySelectorAll('h2')[i].innerHTML = 92;
}


}
  }
  if(total2 == 77)
  {
    snakebite();
  total2 = 25;
  for(var i = 0 ; i<100 ; i++)
  {
 var x =   document.querySelectorAll('h2')[i].innerHTML ;
 if(x == total2){
   document.querySelectorAll('h2')[i].innerHTML = "P2" ;
}
}
  }
  if(total2 == 28)
  {
    snakebite();
  total2 = 9;
  for(var i = 0 ; i<100 ; i++)
  {
 var x =   document.querySelectorAll('h2')[i].innerHTML ;
 if(x == total2){
   document.querySelectorAll('h2')[i].innerHTML = "P2" ;
}
if(x==28)
{
  document.querySelectorAll('h2')[i].innerHTML = 28;
}

}
  }
  if(total2 == 80)
  {
    snakebite();
  total2 = 59;
  for(var i = 0 ; i<100 ; i++)
  {
 var x =   document.querySelectorAll('h2')[i].innerHTML ;
 if(x == total2){
   document.querySelectorAll('h2')[i].innerHTML = "P2" ;
}
if(x==80)
{
  document.querySelectorAll('h2')[i].innerHTML = 80;
}
}
  }
  chaal = 0;}
});

function snakebite()
{
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();
  setTimeout(function(){ alert('Snake-bit'); }, 2000);

}


 // var i = 10;
 //
 // var j = i+10;
 // var y = 10;
 //
 //
 //
 // document.querySelectorAll('h2')[19].innerHTML = (j-y);
