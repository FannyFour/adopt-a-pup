
//Array that will hold youtube iframe with breed vids index will match breed value in dropdown
var breedVids = ['<iframe width="360" height="203" src="https://www.youtube.com/embed/BeSHBdmlv1g" frameborder="0" allowfullscreen></iframe>']

//Create an empty array that will hold dog breed that are returned from an API call
var data = []

//API URL
var queryURL = "https://dog.ceo/api/breeds/list/all"

//AJAX CALL
   $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
        //console logging the response from the API
      console.log(response);
      //converting the JSON object to an array
      data = Object.keys(response.message);
      //Console log to check array is working
      console.log(data);
      console.log(data[3]);
      //Creating for loop that will populat the dropdow menu
      for (var i = 0; i < data.length; i++) {
           var breedDiv = $("#breedNames");
           var dogName = data[i];
           var newChoice = $("<option>").attr("value", i);
           newChoice.html(dogName);
           breedDiv.append(newChoice);
          
      }
    });