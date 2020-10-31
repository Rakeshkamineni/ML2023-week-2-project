//user introduction function 

function intro(){
var  name = window.prompt("Enter Your Name : ");
   document.write("<br>Hii "+name+" <br>");
}
//user intro function ended


//greet function according to time started

function greet(){
  var d= new Date()
  var h=d.getHours();
  if(h>=0 && h<12){
    document.write("<br>**Good Morning**");
  }
  else if(h>=12 && h<17){
    document.write("<br>**Good Afternoon**");
  }
  else if(h>=17 && h<22){
    document.write("<br>**Good Evening**");
  }
  else{
    document.write("<br>**It's high time**");
  } 
}
//greet function according to time ended
function selectmenu(){
  intro();
  greet();
}
selectmenu();
