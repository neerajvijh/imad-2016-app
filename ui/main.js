//counter code

var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
  
  //Make a request to counter end points
  //capture the response and store it in variable
  //rander the variable in correct span
  counter = counter +1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};