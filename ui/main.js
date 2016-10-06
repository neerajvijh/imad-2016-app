//counter code

var button = document.getElementById('counter');
var counter =0;
button.onclick = function(){
  
  //Create a requst object
  var request = new XMLHttpRequest();
  
  //capture the response and store it in variable
  request.onreadystatechange = function (){
      if (request.getReadyState === XMLHttpRequest.DONE) {
      //Take some action
      if (request.status === 200 ) {
         var counter = request.responseText;
         var span = document.getElementById('count');
         span.innerHTML = counter.toString();
         
      }
      
  }
  
  //rander the variable in correct span

 };
 
 //Make the request
  var nameInput = document.getElementById('name');
        var name1 = nameInput.value;
 request.open('GET','http://neerajvijh.imad.hasura-app.io/submit-name1?name1='+name1, true);
 request.send(null);
};

//Submit name
       
        var submit = document.getElementById('submit_btn');
        submit.onclick = function(){
            //Make a request to server & send the name
            
            //capture a list of names & render it as a list
            var names = request.responseText;
            names = JSON.parse(names);
            var list = '';
            for ( var i = 0; i < names.length; i++){
                list += '<li>' + names[i] + '</li>';
            }
            
            var ul = document.getElementById('namelist');
            ul.innerHTML = list;
        };