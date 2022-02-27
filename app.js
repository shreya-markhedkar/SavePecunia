var die=0;
var pos=1;
var xp=0;
var xp1=0;
var happ=0;
var happ1=0;
var money=0;
var money1=0;
var myWindow = window.open("", "_self");
//rolling
  function roll(){
  
  var element=document.getElementById("dieroll");
  die = Math.floor(Math.random() * 6) + 1;
  element.src = "images/Die_" + die + ".png";
  document.getElementById("dieinfo").innerHTML=die;
  pos=pos+die;
  result(); 
  
  document.getElementById(`infotext`).innerHTML=act[pos-1];
  document.getElementById(`square${pos}`).style.backgroundColor='red';
  
    document.getElementById('btnyes').onclick=function(){
       xp1=parseInt(document.getElementById(`square${pos}-xp`).innerHTML);
       xp=xp+xp1;
      happ1=parseInt(document.getElementById(`square${pos}-happy`).innerHTML);
      happ=happ+happ1;
      money1=parseInt(document.getElementById(`square${pos}-money`).innerHTML);
      money=money+money1
      document.getElementById("xpsum").innerHTML=xp;
      document.getElementById("happysum").innerHTML=happ;
      document.getElementById("moneysum").innerHTML=money;
    
    }
    
    
}

//goti

//infotext


//win loose
function result() {
  if (pos>=48){
    if(xp>50){
    if(happ>50){
      if(money>100){
        alert('Woaahhh! you won!! Thats amazing!nLearn about financial planning at our homepage!');
      }
    }
  }
  return alert('Aww better luck next time :)\nLearn about financial planning at our homepage to get tips on winning!');
  }
  return true;
}


//activities
const act=[
  "Start! Don’t forget to have a Financial Plan!",
  "Mowing your Grandma’s Lawn!",
  "Attend your friend, Jacob’s Party!",
  "Attend Wizarding School for a week straight!",
  "Pecunian women need instant hair-dos! Help them!",
  "Attend your little sis, Persephone’s Wedding!",
  "Help clean Pecunia’s streets with magic! ",
  "Work as a Showman at the Circus!",
  "Go on a vacation to Atlantis!",
  "Annual Pecunia Lottery at home!",
  "Find your sister’s dog - Cerberus! He’s always a-head of you!",
  "Buy a Sasuke Plushy after binging Naruto!",
  "Work part-time as a Street Magician!",
  "Help Pecunia’s grandmoms need help crossing the street!",
  "Eat Fuzzlepuff Chocolates instead of lunch!",
  "Complete your pending Shapeshifting course!",
  "Teach the Mayor’s daughter your magical ways!",
  "Go on a Dragon Riding trip with your buddies!",
  "Host a revision session in the Art of Spells! ",
  "Read your fate!",
  "Attend a Taylor Swift Concert!",
  "Publish your book, Spell-tacular!",
  "Wizarding Tour! Woohoo!",
  "Wizarding All Stars Match - You are a Referee!",
  "Win a prize for narrating cheesy Wizarding puns at the Carnival!",
  "Organize a Sponsored Magical Tree Planting Drive!",
  "Defeat Demon King’s Commander!",
  "Build a Wizarding School in Pecunia!",
  "Do Wizarding Jobs around Pecunia",
  "Palm-reading time!",
  "Go on a Sky Cruise across the world!",
  "Undertake the tedious task of teaching Magic",
  "Relax at home for the day",
  "Rally up Wizards to form an Attack Plan",
  "Take a break - Attend the Carnival",
  "Eat Cheesy Bacon Omelets all day!",
  "Slay the Demon King’s Sidekick, Mania!",
  "Finally finish attaining your Wizarding PhD.!",
  "Drink bottomless Chocolate and Oreo Milkshakes!",
  "Fate Storm yet again in Pecunia!",
  "Slay the Demon King’s Major, Igniosus!",
  "Slay the Demon King’s General, Lucifer!",
  "Slay the Demon King’s Lieutenant, Impendiosus!",
  "Marry the Princess Buttercup!",
  "Rally neighbouring countries to help you!",
  "Get a Promotion to Assistant (to the) Regional Wizard!",
  "Slay the Demon King’s",
  "Slay the Demon King, Prodigious!"
  
]



// function modal(x) {
//   window.onload = function(){ 
//   // Get the modal
// var modal = document.getElementById("myModal");
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
// // When the user clicks the button, open the modal 
// modal.style.display = "block";
    
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
// };
// }

