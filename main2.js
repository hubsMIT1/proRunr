var score = 0;
var highscore = 0;
//var highscore = localStorage.getItem("myscore"); 
var audio1 = new Audio('/proRunr/audio1.wav')
var over1 = new Audio('/proRunr/over.wav')



var up = document.querySelector('.ceiling1');
var down = document.querySelector('.ground1');
var box = document.querySelector('.box');
var hole1 = document.querySelector('.hole1');
var hole2 = document.querySelector('.hole2');
var box1 = document.querySelector('.box1');
var check  = document.querySelector('h2');

var scr = document.querySelector('.end1'); 
var up1 = document.querySelector('.up1');
var down1 = document.querySelector('.down1');



var time1 =  3  
var time2 = 4
//Math.floor(Math.random()* (1*2-1)+1);
hole1.style.setProperty('--animation-time',time1+'s');

 //Math.floor(Math.random()* (1*2-1)+1);
hole2.style.setProperty('--animation-time2',time2+'s');
/*




function setProperty(duration) {

hole1.style.setProperty('--animation-time', duration +'s');
}

function changeAnimationTime() {
var animationDuration = 3;

// Math.floor(Math.random()*(3*4-3)+3) + 1;
setProperty(animationDuration);
}
setInterval(changeAnimationTime, 1000);


function setProperty2(duration2) {
hole2.style.setProperty('--animation-time', duration +'s');
}

function changeAnimationTime2() {
var animationDuration = Math.random();
setProperty(animationDuration);
}

setInterval(changeAnimationTime2, 2000);
/*
function dur1(duration){
hole1.style.setProperty('--animation-time',duration+'s');
} 
setInterval(()  =>  {

var anidur = Math.random();
dur1(anidur);
}, 20000);

function dur2(duration2){
hole2.style.setProperty('--animation-time2',duration2+'s');
} 
setInterval(()  =>  {

var anidur2 = Math.random();
dur2(anidur2);
}, 30000);
*/

/*
up.ontouchstart = function () {
box = document.querySelector('.box');
box.style.top = 248 +'px'
//box.classList.add('doUp');
}
//setTimeout()()(() => {
down.ontouchstart = function () {

box = document.querySelector('.box');
//box.innerHTML = up.style.bottom
box.style.top = 470+'px';
}*/

//box.classList.remove('doDown');
//},20000);
setInterval(() => {
/*function reload() {
reload = location.reload();

*/
bx = parseInt(window.getComputedStyle(box,null).getPropertyValue('left'));
by = parseInt(window.getComputedStyle(box,null).getPropertyValue('top'));
bw = parseInt(window.getComputedStyle(box,null).getPropertyValue('border-bottom'));
bh = parseInt(window.getComputedStyle(box,null).getPropertyValue('border-height'));


h1x = parseInt(window.getComputedStyle(hole1,null).getPropertyValue('left'));
h2x = parseInt(window.getComputedStyle(hole2,null).getPropertyValue('left'));

h1y = parseInt(window.getComputedStyle(hole1,null).getPropertyValue('top'));
h2y = parseInt(window.getComputedStyle(hole2,null).getPropertyValue('top'));


x1 = Math.abs((bx+bw)-h1x) ; //dist b/w hole1 and box in x dir;

x2 = Math.abs((bx+bw)-h2x) ; 

y1 = Math.abs(by-h1y) ;
y2 = Math.abs((by)-h2y) ;
bon = Math.abs(h1x-h2x); // its making difficult some time i will think best way 
console.log(h2y)
//function check1() {
//check.innerHTML = bx+' ' + by + ' ' + bw +' ' + bh + ' ' + ' '+ h1x + ' ' + h2x + ' ' + h1y + ' ' + h2y + ' ' + x1 + " " + x2 + " " + y1 + " " + y2 +" " + h1x;


if((x1 < 10 && y1 == 208) && bon > 40|| (x2 < 10 && y2 == 328) && bon > 40) {
btnS = document.querySelector('.btnS');
btnS.style.visibility = 'visible'

btn = document.querySelector('.btn');
btn.style.visibility= 'visible';

hole1.classList.remove('moving1');
box.classList.remove('box1');

hole2.classList.remove('moving2');

up.classList.remove('ceiling1'); 
down.classList.remove('ground1'); 
over1.play();

}

else if( (h1x < 8  && h1x > 1) || (h2x>1&& h2x< 8)) {
//setInterval(() => {
score  += 1; 
getscore(score);
audio1.play();
} 





//}, 2000); 

/*
//var mydiv = document.getElementsById('mydiv');
up.addEventListener('mousemove', myMoveHandler, false);
up.addEventListener('touchmove', function (e) {
// stop touch event
e.stopPropagation();
e.preventDefault();
box1.style.top = 200+'px'
box.classList.add('doUp');
box1.style.transform = 'rotate(180deg)';
// translate to mouse event
var clkEvt = document.createEvent('MouseEvent');
clkEvt.initMouseEvent('mousemove', true, true, window, e.detail, 
e.touches[0].screenX, e.touches[0].screenY, 
e.touches[0].clientX, e.touches[0].clientY, 
false, false, false, false, 
0, null);
mydiv.dispatchEvent(clkEvt);

// or just handle touch event
myMoveHandler(e);
}, false);
*/

//var mydiv = document.getElementsById('mydiv');
/*down.addEventListener('mousemove', myMoveHandler, false);
down.addEventListener('touchmove', function (e) {
// stop touch event
e.stopPropagation();
e.preventDefault();

box.classList.add("doDown");

box1.style.top = (440)+'px';
box1.style.transform = 'rotate(0deg)';

// translate to mouse event
var clkEvt = document.createEvent('MouseEvent');
clkEvt.initMouseEvent('mousemove', true, true, window, e.detail, 
e.touches[0].screenX, e.touches[0].screenY, 
e.touches[0].clientX, e.touches[0].clientY, 
false, false, false, false, 
0, null);
mydiv.dispatchEvent(clkEvt);

// or just handle touch event
myMoveHandler(e);
}, false);

*/
/*if("touchstart",touchdevice)*/
else{
if(by==328){
window.addEventListener('click',() =>  {

//box = document.querySelector('.box1');
box1.style.top = 208+'px'
box.classList.add('doUp');
box1.style.transform = 'rotate(180deg)';
});
 }
//getscore(score);
//setTimeout(() => {
 else if(by==208) {
window.addEventListener('click',() =>{
//console.log("ram");

//box = document.querySelector('box');
//box.innerHTML = up.style.bottom
box.classList.add("doDown");

box1.style.top = (328)+'px';
box1.style.transform = 'rotate(0deg)';
});
 }

//var up1 = document.querySelector('.up1');
//var down1 = document.querySelector('.down1');
up1.addEventListener('click',()=> {
console.log("kam kr na");
//box = document.querySelector('.box1');
box1.style.top = 208+'px'
//box.classList.add('doUp');
box1.style.transform = 'rotate(180deg)';
});
//getscore(score);
//setTimeout(() => {
down1.addEventListener('click',()=> {
//console.log("ram");

//box = document.querySelector('box');
//box.innerHTML = up.style.bottom
//box.classList.add("doDown");

box1.style.top = (328)+'px';
box1.style.transform = 'rotate(0deg)';
});

hole1.style.setProperty('--animation-time',time1+'s');

 //Math.floor(Math.random()* (1*2-1)+1);
hole2.style.setProperty('--animation-time2',time2+'s');
time1 -= 10**(-22) ;
time2 -= 10**(-25) ;


// time1 = time1-2;
//time2 = time2-2;

}
//document.querySelector('.high').innerHTML = "highscosnndnmdre"; 

},10);
/* for( var i = 1; i <= score ; i++) {
time1 -= 1;
time2 -= 1;
}
*/


var highscore = localStorage.getItem("score"); 


function getscore(score) {
//mvar a = localStorage.setItem("sav",score);
check.innerHTML = "Score : " + score ;


//var highscore = localStorage.getItem("myscore"); 
//scr.innerHTML = "Your Score : " + highscore;
//var p =  highscore;

if(score >  highscore){

highscore = score ; 
}
//highscore = Math.max(score,highscore)
//document.querySelector('.high').innerHTML = highscore; 
localStorage.setItem("score",highscore);
//getscore(score); 



//document.querySelector('.high').innerHTML = "/"+ highscore; 

scr.innerHTML = "Your Score : " + score;
document.querySelector('.highS').innerHTML = " Best Score : "+ highscore;
document.querySelector('.high').innerHTML = " / "+highscore; 

}
