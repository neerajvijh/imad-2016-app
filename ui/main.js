console.log('Loaded!');

// change the text
var element = document.getElementById('main-text');
element.innerHTML = "New Value";

//Move the image
var img = document.getElementById('nee');
img.onClick = function(){
   
    img.style.maginLeft = '100px';
    
} ;