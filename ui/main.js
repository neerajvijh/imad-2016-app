console.log('Loaded!');

// change the text
var element = document.getElementById('main-text');
element.innerHTML = "New Value";

//Move the image
var img = document.getElementById('nee');
var marginLeft = 0;

function moveRight(){
            marginLeft = marginLeft + 1;
            img.style.marginLeft = marginLeft + 'px';
            
}

img.onclick = function(){
    var interval = setInterval(moveRight, 50);

    
} ;
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