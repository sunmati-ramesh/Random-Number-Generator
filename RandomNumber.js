var min;
var max;
var rand;
const text_display = document.getElementById('number');
const button = document.getElementById("generator");

document.getElementById("generator").onclick = function(){
   min = document.getElementById("min").value;
   //console.log(min);
  max = Number(document.getElementById("max").value)+1;
  console.log(max);
    rand = Math.floor(Math.random() * (max-min) + 1);
     text_display.textContent = rand;
    console.log(rand);
}


