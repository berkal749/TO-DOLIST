var button = document.getElementById("bu");
button.addEventListener("click", fofo);

var swap = document.getElementById("dark-mode");
swap.addEventListener("click", dark_out);
isDarkMode = true;
function dark_out() {
    const themeStylesheet = document.getElementById("themeStylesheet");
    const newTheme = isDarkMode ? "style.css" : "styledark.css";
    
    themeStylesheet.href = newTheme;
    isDarkMode = !isDarkMode;
   
    
const mode = document.getElementById("dark-mode");

 const newtxt =    isDarkMode ? "Light-Mode" : "Dark-Mode" ;
 mode.innerText=newtxt; 
  
    
    
}

let i = 1;

function fofo() {
  var input = document.getElementById("input");
  var div1;
  var div;
  var button;
  div1 = document.createElement("div");
  div = document.createElement("div");
  button = document.createElement("button");
  div.innerText = input.value;
  div.addEventListener("click",shock);
  function shock(){
    div.setAttribute("id","usefull");


  }
  button.innerText = "X";

  div1.appendChild(div);
  div1.appendChild(button);

  var location = document.getElementById("container-calc");
  location.appendChild(div1);
  div.setAttribute("id", "useless");
  div1.setAttribute("class", "use-container");
  let id = "div" + i+1;
  let score = document.getElementById("score");
  score.innerText = i;
  button.addEventListener("click", dodo);
  function dodo() {
    let v = score.innerText;
    score.innerText = v - 1;
    location.removeChild(div1);
    
  

    
  }
  i++;
}


window.setInterval((function(){
   var start = Date.now();
   var textNode = document.createTextNode('0');
   document.getElementById('timer').appendChild(textNode);
   return function() {
        textNode.data = Math.floor((Date.now()-start)/1000);
        };
   }()), 1000);