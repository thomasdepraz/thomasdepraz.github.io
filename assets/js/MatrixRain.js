// Initialising the canvas
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting up the letters
var letters = 'アカサタナハマヤャラワガザダバパイキシチニヒミリヰギジヂビピウクスツヌフムユュルグズヅブプエケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
letters = letters.split('');

// Setting up the columns
var fontSize = 17,
    columns = canvas.width / fontSize;

//Random Method
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Setting up the drops
var drops = [];
for (var i = columns; i > 0 ; i--) {
  drops[i] = 1;
}

// Setting up the draw function
function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, .15)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  for (var i = 0; i < drops.length; i++) {
    //pick a random character
    var text = letters[Math.floor(Math.random() * letters.length)];
    
    ctx.fillStyle = '#0f0'; //This is the text color
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 20 + getRandomInt(4); //loop height variations
    }
  }
  
}

// Loop the animation
setInterval(draw, 33);