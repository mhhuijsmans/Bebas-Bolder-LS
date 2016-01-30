var hours = ["twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
var minutes= ["o' clock", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty", "thirty-one", "thirty-two", "thirty-three", "thirty-four", "thirty-five", "thirty-six", "thirty-seven", "thirty-eight", "thirty-nine", "forty", "forty-one", "forty-two", "forty-three", "forty-four", "forty-five", "forty-six", "forty-seven", "forty-eight", "forty-nine", "fifty", "fifty-one", "fifty-two", "fifty-three", "fifty-four", "fifty-five", "fifty-six", "fifty-seven", "fifty-eight", "fifty-nine", "o' clock"];
function updateClock() {

var currentTime = new Date();
var currentHours = currentTime.getHours();
var currentMinutes = currentTime.getMinutes();

currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
currentHours = ( currentHours == 0 ) ? 12 : currentHours;

var timeofday;

if( currentTime.getHours() >=0  && currentTime.getHours() <= 5){
timeofday = "night"}
if( currentTime.getHours() >=6  && currentTime.getHours() <= 11){
timeofday = "morning"}
if( currentTime.getHours() >=12  && currentTime.getHours() <= 17){
timeofday = "afternoon"}
if( currentTime.getHours() >=18  && currentTime.getHours() <= 23){
timeofday = "evening"}

var preposition;

if( currentTime.getHours() >=0  && currentTime.getHours() <= 5){
preposition = "at"}
if( currentTime.getHours() >=6  && currentTime.getHours() <= 11){
preposition = "in the"}
if( currentTime.getHours() >=12  && currentTime.getHours() <= 17){
preposition = "in the"}
if( currentTime.getHours() >=18  && currentTime.getHours() <= 23){
preposition = "in the"}


document.getElementById("text2").innerHTML = hours[currentHours];
document.getElementById("text3").innerHTML = minutes[currentMinutes];
document.getElementById("text4").innerHTML = preposition;
document.getElementById("text5").innerHTML = timeofday;
document.getElementById("number").innerHTML = currentHours;

var txtcolor;
var txtopacity;
var nrcolor;
var nropacity;
var totalheight;

if (txtcolorman == ""){
txtcolor = txtcolorauto}
else {
txtcolor = txtcolorman}

if (txtopacityman == ""){
txtopacity = txtopacityauto}
else {
txtopacity = txtopacityman}

if (nrcolorman == ""){
nrcolor = nrcolorauto}
else {
nrcolor = nrcolorman}

if (nropacityman == ""){
nropacity = nropacityauto}
else {
nropacity = nropacityman}

if (heightman == ""){
totalheight = "0";}
else {
totalheight = heightman}

document.getElementById("textcontainer").style.color = "#"+txtcolor;
document.getElementById("textcontainer").style.opacity = txtopacity;
document.getElementById("number").style.color = "#"+nrcolor;
document.getElementById("number").style.opacity = nropacity;
document.getElementById("body").style.top = totalheight+"px";



if(document.getElementById("text2").innerHTML=="one"){
document.getElementById("text2").setAttribute("style", "left:-25px;");}

if(document.getElementById("text2").innerHTML=="two"){
document.getElementById("text2").setAttribute("style", "left:-10px;");}

if(document.getElementById("text2").innerHTML=="three"){
document.getElementById("text2").setAttribute("style", "left:-5px;");}

if(document.getElementById("text2").innerHTML=="four"){
document.getElementById("text2").setAttribute("style", "left:-30px;");}

if(document.getElementById("text2").innerHTML=="five"){
document.getElementById("text2").setAttribute("style", "left:-45px;");}

if(document.getElementById("text2").innerHTML=="six"){
document.getElementById("text2").setAttribute("style", "left:-47px;");}

if(document.getElementById("text2").innerHTML=="seven"){
document.getElementById("text2").setAttribute("style", "left:0px;");}

if(document.getElementById("text2").innerHTML=="eight"){
document.getElementById("text2").setAttribute("style", "left:-20px;");}

if(document.getElementById("text2").innerHTML=="nine"){
document.getElementById("text2").setAttribute("style", "left:-47px;");}

if(document.getElementById("text2").innerHTML=="ten"){
document.getElementById("text2").setAttribute("style", "left:-30px;");
document.getElementById("textcontainer").setAttribute("style", "left:-90px; color:#"+txtcolor+"; opacity:"+txtopacity+";");
document.getElementById("number").setAttribute("style", "letter-spacing:-40px; color:#"+nrcolor+"; opacity:"+nropacity+";");
}

if(document.getElementById("text2").innerHTML=="eleven"){
document.getElementById("text2").setAttribute("style", "letter-spacing:-5px;left:-30px;");
document.getElementById("number").setAttribute("style", "letter-spacing:-68px;left:5px; color:#"+nrcolor+"; opacity:"+nropacity+";");
}

if(document.getElementById("text2").innerHTML=="twelve"){
document.getElementById("text2").setAttribute("style", "letter-spacing:-5px;left:15px;");
document.getElementById("textcontainer").setAttribute("style", "left:-80px; color:#"+txtcolor+"; opacity:"+txtopacity+";");
document.getElementById("number").setAttribute("style", "letter-spacing:-35px;left:16px; color:#"+nrcolor+"; opacity:"+nropacity+";");
}




}

function init(){

updateClock();

setInterval("updateClock();", 1000);}



