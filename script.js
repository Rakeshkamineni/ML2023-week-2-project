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
//greet function ended







//show main menu

function selectmenu(){
  intro();
  greet();
  document.write("<br><br>click the main menu<br><br> In main menu you'll find 3 choices <br>  1.Get the News<br>  2.get the time<br>    3.End the Bot<br>")

}
selectmenu();





//function for selecting main menu 

function myFunction() {
  var text;
  var fav = prompt("What's your choice?", "1");
  switch(fav) {
    case "2":
      var d = new Date();
      text = "time  :"+d;
      break;
      
    case "1":
      text = "here is the News <br>1.Econmy<br>2.Environment<br>3.Political <br>4.Industry<br>5.Science & Technology<br>6.flimyfocus<br>7.Sports <br>8.International<br>9.End the search<br>";
      break;
      
    case "3":
      text = "ok ! Thank You";
      break;
      
    default:
      text = "you have to choose between 1-3..";
  }
  document.getElementById("demo").innerHTML = text;
}

//function for selecting main menu (ended)










//get news function started

function ec(){
  var n;
  var op=prompt("seclect 1-9","1");
  switch(op){
    case "1":
       
      n= "Economy<br>1)India opposes binding commitments for eoss-border goods clearance<br>2)NITI Aayog beginasier crs groundwork on identifying more PSUs for sale<br>3)The story of Harshad Mehta and five ways it changed Dalal Street ";
      break;
      
    case "2":
      n="Environment<br>1) 500 volunteers fighting fire on Africa's tallest mountain<br> 2) Scientists return from Arctic with wealth of climate data";
      break;
      
     case "3":
      n="Political<br>1)No place for arrogance, breaking of promises in a ruler's life: Sonia Gandhi's Dussehra message<br>2) COVID-19: Recovery rate touches 90%; only 8.5% of total caseload active in India";
      break;
      
     case "4":
      n="Industry<br> 1)JK Cement looks to improve H2 growth numbers on higher demand, capacity <br>2)Hitachi ABB Power Grids India wins Rs 100-cr order from HPCL Rajasthan Refinery";
      break;
      
     case "5":
      n="Science & Technology<br>1)Cisco looks to make hay as data bill may bring in deals from government, banks<br> 2)India to allow foreign companies too to make and launch satellites";
      break;
      
     case "6":
      n="flimyfocus<br> 1) #UdtaPunjab: Hrithik feels the movie shows predicament Indian films face <br>2)Akshay Kumar admits there is a drug problem in Bollywood; says entire industry cannot be blamed for deeds of a few";
      break;
      
     case "7":
      n="Sports<br> 1)Virat Kohli becomes third Indian to hit 200 sixes in IPL<br>2) Australia batswoman Grace Harris takes inspiration from Dhoni, wants to be a finisher like him";
      break;
      
     case "8":
      n="International<br> 1)View: New visas limits would be a self-inflicted wound for the US<br>2) Thailand protestors vow fresh protests after PM refuses to resign";
      break;
      
     case "9":
      n="End the search";
      break;
      
     default :
      n="Invalid";
  }
  document.getElementById("demo1").innerHTML = n;
}

// getnews function ended

