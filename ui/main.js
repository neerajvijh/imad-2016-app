//counter code
var counter = 0;
var button = document.getElementById('counter');
button.onclick = function(){
  
  //Make a request to counter end points
  //capture the response and store it in variable
  //rander the variable in correct span
  counter = counter +1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};