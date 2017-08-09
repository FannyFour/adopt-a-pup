
//Array that will hold youtube iframe with breed vids index will match breed value in dropdown
var breedVids = ['<iframe width="360" height="203" src="https://www.youtube.com/embed/ohnkNMFSnAc" frameborder="0" allowfullscreen></iframe>',
'<iframe width="360" height="203" src="https://www.youtube.com/embed/d3IwYck7zgo" frameborder="0" allowfullscreen></iframe>',
'<iframe width="360" height="203" src="https://www.youtube.com/embed/1yWd6_gF5OQ" frameborder="0" allowfullscreen></iframe>',
'<iframe width="360" height="203" src="https://www.youtube.com/embed/BeSHBdmlv1g" frameborder="0" allowfullscreen></iframe>']

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
          //jquery of the div that holds the dropdown
           var breedDiv = $("#breedNames");
           //selcting the dog name out the array that we created
           var dogName = data[i];
           //creating a new dropdown choice adding the attribute of a value that will
           //coincide with the video array
           var newChoice = $("<option>").attr("value", i);
           //adding the name of the breed to the html that will be in the dropdown
           newChoice.html(dogName);
           //appending it to the div
           breedDiv.append(newChoice);
          
      }
    });

    // Create a function that will call the vides and the parameter is the index of the array
      function video(breed) {
      var htmlVid = breedVids[breed];
      $("#breedVideos").append(htmlVid);
      
  }

  //Calling the function to test

  video(0);





    //code that initializes the dropdown in the html

       $(document).ready(function() {
    $('select').material_select();
  });