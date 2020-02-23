consoleText(['Thomas Depraz-Depland'], 'text',  ['white'])
consoleText(['KATANA'], 'text2',  ['white'])

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];//set to white if undefined
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === words[0].length + 1 && waiting === false) 
    {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x; 
      }, 1000)
    } 
    else if (waiting === false) 
    {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120) //Character writing speed
  
  //Underscore Blink
  window.setInterval(function() {
    if (visible === true) 
    {
      con.className = 'console-underscore hidden'
      visible = false;
    }   
    else 
    {
      con.className = 'console-underscore'
      visible = true;
    }
  }, 400)
}
