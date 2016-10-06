//counter code

var button = document.getElementById('counter');
var counter =0;
button.onclick = function(){
  
  //Create a requst object
  var request = new XMLHttpRequest();
  
  //capture the response and store it in variable
  request.onreadystatechange = function (){
      if(request.getReadyState === XMLHttpRequest.DONE){
      //Take some action
      if(request.status === 200 ){
         var counter = request.responseText;
         var span = document.getElementById('count');
         span.innerHTML = counter.toString();
         
      }
      
  }
  
  //rander the variable in correct span

 };
 //Make the request
 request.open('GET','http://neerajvijh.imad.hasura-app.io/counter', true);
 request.send(null);

};