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
    img.style.marginLeft = '100';
   

    
} ;