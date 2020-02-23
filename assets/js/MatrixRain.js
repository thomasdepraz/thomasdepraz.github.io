var c = document.getElementById('c');
var cxt = c.getContext("2d");

c.width = c.parentElement.offsetWidth;
c.height = c.parentElement.offsetHeight;
c.style.position = "absolute";
c.style.zIndex = "0";


var letters = "アカサタナハマヤャラワガザダバパイキシチニヒミリヰギジヂビピウクスツヌフムユュルグズヅブプエケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
letters = letters.split("");

var font_size =15;
var columns = c.width/font_size; 

var drops = [];

for(var x=0 ; x < columns ; x++){ //x offset
  drops[x]=1;
}

function draw(){
  cxt.fillStyle="rgba(0,0,0,0.2)"; //fade on each frame
  cxt.fillRect(c.width,c.height,-c.width,-c.height);
  
  cxt.fillStyle = "#3cff";//text color
  cxt.font = font_size + 'px arial';
  
  
  for(var i= 0 ; i < columns ; i++){
    var text = letters[Math.floor(Math.random()*letters.length)];
    cxt.fillText(text,i*font_size,drops[i]*font_size);
    
    if(drops[i]*font_size > c.height && Math.random() > 0.975)
      drops[i] = 0 + getRandomInt(4);
    
    //increment y coordinate
    drops[i]++;
}
  
}
//Random Method
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
setInterval(draw,33);