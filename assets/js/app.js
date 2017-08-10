
//Array that will hold youtube iframe with breed vids index will match breed value in dropdown
var breedVids = ['<iframe width="360" height="203" src="https://www.youtube.com/embed/ohnkNMFSnAc" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/d3IwYck7zgo" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/1yWd6_gF5OQ" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/BeSHBdmlv1g" frameborder="0" allowfullscreen></iframe>'
]

//Create an empty array that will hold dog breed that are returned from an API call
var data = []

//API URL
var queryURL = "https://dog.ceo/api/breeds/list/all"

//AJAX CALL
$.ajax({
    url: queryURL,
    method: "GET"
}).done(function (response) {
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
        // Adding a class
        newChoice.addClass("breedChoice");
        //adding the name of the breed to the html that will be in the dropdown
        newChoice.html(dogName);
        //appending it to the div
        breedDiv.append(newChoice);

         $(document).ready(function() {
            $('select').material_select();
  });
        

    }
});

// Create a function that will call the vides and the parameter is the index of the array
function video(breed) {
    var htmlVid = breedVids[breed];
    $("#breedVideos").html(htmlVid);

}



//code that initializes the dropdown in the html

$(document).ready(function () {
    $('select').material_select();
});

//This code will take the value from the breed based on selection
$("#breedNames").on("change", function() {
    
    var breedVal = $(this).val();
    console.log(breedVal);
    video(breedVal);
});

//petApiCodeJon

$("#search").on("click", function(event) {
  // This line allows us to take advantage of the HTML "submit" property
  // This way we can hit enter on the keyboard and it registers the search
  // (in addition to clicks).
  event.preventDefault();

  //clear the div
 
$("#petfinderInfo").empty();


  // Grabbing text the user typed into the search input
  var zip = $("#zip").val().trim();
  //var zip = 27608;
  
  var queryURL = 'http://api.petfinder.com/pet.find?key=2aafed70ee17e42be9c99843a588487b&animal=dog&location=' + zip + '&format=json&callback=?';

  var divCounter = 0;

  // Then we will pass the final queryURL and the number of results to
  // include to the runQuery function
  runQuery(queryURL);

  

    function runQuery(queryURL){

      //http://api.petfinder.com/subsystem.method

      //http://api.petfinder.com/my.method?key=12345&arg1=foo

        $.ajax({
          url: queryURL,
          method: "GET",
          dataType: "json",
          //data: {}
        }).done(function(response) {

          console.log(response);

          for (var i = 0; i < 5; i++) {

            divCounter++;

            var infoDiv = $("<div class='info'>");
            infoDiv.attr("id", "divNumber-" + divCounter);
            
            var photo = response.petfinder.pets.pet[i].media.photos.photo[3].$t;
            var pPhoto = $("<p>").html("<img src=" + photo +">");
            infoDiv.append(pPhoto);

            var name = response.petfinder.pets.pet[i].name.$t;
            var pName = $("<p>").html("<strong>Name: </strong>" + name);
            infoDiv.append(pName);

            // var breed = response.petfinder.pets.pet[i].breeds.breed[0].$t;
            // var pBreed = $("<p>").html("<strong>Breed: </strong>" + breed);
            // infoDiv.append(pBreed);

            var city = response.petfinder.pets.pet[i].contact.city.$t;
            var pCity = $("<p>").html("<strong>City: </strong>" + city);
            infoDiv.append(pCity);

            var email = response.petfinder.pets.pet[i].contact.email.$t;
            var pEmail = $("<p>").html("<strong>Email: </strong>" + email);
            infoDiv.append(pEmail);

            var description = response.petfinder.pets.pet[i].description.$t;
            var pDescription = $("<p>").html("<strong>Description: </strong>" + description);
            infoDiv.append(pDescription);

            $("#petfinderInfo").append(infoDiv);

            $("#zip").val("");
          }
        });
    };
});