
//Array that will hold youtube iframe with breed vids index will match breed value in dropdown
var breedVids = ['<iframe width="360" height="203" src="https://www.youtube.com/embed/ohnkNMFSnAc" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/d3IwYck7zgo" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/1yWd6_gF5OQ" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/BeSHBdmlv1g" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/nNB99tp2vO8" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/tufBXaoUNM8" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/si562RMZWOQ?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/8VsiqOwhD_0?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/J831a2X9uT4?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/GxeUqyim-2g?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/59ZjA7TSNaQ?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/fLRWPpTnF3I?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/cYvN_lRldH4?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/yYwAJrAdUbY?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/onquT6s3X-s?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/W7bCll0DT-c?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/dHX2xul3WEk?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/4LcctY44cj4?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/R3J5JLy-Unw?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/wQT-zTYaT2E?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/bUurb0_5cXU?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/Tdxqr20jS68?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/n7cXZ_HXz4A?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/XXzZwEauNng?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/89TCWc7eDvY?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/xJlyQaMzTE4?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/aAOYe3SjMYE?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/e00BzdF5LYA?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>',


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
$("#rmSearch").on("click", function(){
  $("#thisOne").empty();
  $("#thisOne").addClass("z-depth-5 flow-text");
  $("#thisOne").text("You removed the search results!");
});


$("#search").on("click", function(event) {
  // This line allows us to take advantage of the HTML "submit" property
  // This way we can hit enter on the keyboard and it registers the search
  // (in addition to clicks).
  event.preventDefault();

  //clear the div
 
  $("#petfinderInfo").empty();

  //remove shadow from containing div

  $("#thisOne").removeClass("z-depth-5 flow-text");

  // Grabbing text the user typed into the search input
  var zip = $("#zip").val().trim();
  //var zip = 27608;
  
  var queryURL = 'https://api.petfinder.com/pet.find?key=2aafed70ee17e42be9c99843a588487b&animal=dog&location=' + zip + '&format=json&callback=?';

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
          //   var defaults = {
          //     email: {
          //       $t: ""
          //     },
          //     city: {
          //       $t: ""
          //     }
          //   };

            // var contact = Object.assign({}, defaults, response.petfinder.pets.pet[i].contact)

            divCounter++;

            var infoDiv = $("<div class='info'>");
            infoDiv.attr("id", "divNumber-" + divCounter);
            infoDiv.addClass("z-depth-5 flow-text");
            
            //Varifying a proper photo path in the returned object
            var photo;
            if (!response.petfinder.pets.pet[i].media ||
                !response.petfinder.pets.pet[i].media.photos ||
                !response.petfinder.pets.pet[i].media.photos.photo ||
                response.petfinder.pets.pet[i].media.photos.photo.length < 4 ||
                !response.petfinder.pets.pet[i].media.photos.photo[3].$t){
              photo = "https://i.pinimg.com/736x/48/cf/14/48cf14d08ceea5d4d3606a248303bdb6--how-to-draw-a-dog-face-drawing-stuff.jpg"
            } 
            else {
              photo = response.petfinder.pets.pet[i].media.photos.photo[3].$t;  
            }
            
            var pPhoto = $("<p>").html("<img src=" + photo +">");
            infoDiv.append(pPhoto);

            //Varifying a proper name path in the returned object
            var name;
            if (!response.petfinder.pets.pet[i].name ||
                !response.petfinder.pets.pet[i].name.$t){
              name = "No name available"
            } 
            else {
              name = response.petfinder.pets.pet[i].name.$t;
            }

            var pName = $("<p>").html("<strong>Name: </strong>" + name);
            infoDiv.append(pName);

            // var breed = response.petfinder.pets.pet[i].breeds.breed[0].$t;
            // var pBreed = $("<p>").html("<strong>Breed: </strong>" + breed);
            // infoDiv.append(pBreed);

            //Varifying a proper city path in the returned object
            var city;
            if (!response.petfinder.pets.pet[i].contact ||
                ! response.petfinder.pets.pet[i].contact.city ||
                !response.petfinder.pets.pet[i].contact.city.$t){
              city = "No City available"
            }
            else {
              city = response.petfinder.pets.pet[i].contact.city.$t;
            }
            
            var pCity = $("<p>").html("<strong>City: </strong>" + city);
            infoDiv.append(pCity);

            //Varifying a proper email path in the returned object
            var email;
            if (!response.petfinder.pets.pet[i].contact ||
                !response.petfinder.pets.pet[i].contact.email ||
                !response.petfinder.pets.pet[i].contact.email.$t){
              email = "No email available"
            }
            else {
              email = response.petfinder.pets.pet[i].contact.email.$t;
            }
            var pEmail = $("<p>").html("<strong>Email: </strong>" + email);
            infoDiv.append(pEmail);


            //Varifying a proper description path in the returned object
            var description;
            if (!response.petfinder.pets.pet[i].description ||
                !response.petfinder.pets.pet[i].description.$t){
              description = "No description available"
            }else {
              description = response.petfinder.pets.pet[i].description.$t;
            }
            
            var pDescription = $("<p>").html("<strong>Description: </strong>" + description);
            infoDiv.append(pDescription);

            $("#petfinderInfo").append(infoDiv);

            $("#zip").val("");

           }
        });
    };
});
//This is the firebase that stores the email
var config = {
    apiKey: "AIzaSyAGZY1pBy37wBlm_1mNpsqy4Gmi2qMpf3c",
    authDomain: "adopt-a-pup.firebaseapp.com",
    databaseURL: "https://adopt-a-pup.firebaseio.com",
    projectId: "adopt-a-pup",
    storageBucket: "adopt-a-pup.appspot.com",
    messagingSenderId: "961751920365"
  };
  firebase.initializeApp(config);

  var databaseEmail = firebase.database();
//This is the modal function for the email
  $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
//This is the onclick that will save the uses and email in the modal
  $("#subscribe").on("click", function(event){
    
      var emailAddress = $("#email").val().trim();
      var name = $("#userName").val().trim();
      
      databaseEmail.ref("emailList").push({
          email: emailAddress,
          name: name
      })
      $('#modal1').modal('close');
  });

//Initialize the js the creates the side navbar in mobile

$( document ).ready(function(){
    $(".button-collapse").sideNav();
})

// Create a variable to reference the database
    var database = firebase.database();
    // Initial Values
    var name = "";
    // var email = "";
    var comment = "";
    // Capture Button Click
    $("#add-user").on("click", function() {
      // Don't refresh the page!
      event.preventDefault();
      // YOUR TASK!!!
      // Code in the logic for storing and retrieving the most recent user.
      // Don't forget to provide initial data to your Firebase database.
      name = $("#name-input").val().trim();
      // email = $("#email-input").val().trim();
      comment = $("#comment-input").val().trim();
      database.ref().push({
        name: name,
        // email: email,
        comment: comment
      });
    });

        database.ref().orderByChild("dateAdded").limitToLast(15).on("child_added", function(snapshot){
      var sv = snapshot.val();
      $("#name-display").prepend("<span class='userClass'>" + sv.name + ": " + "</span>" + sv.comment + "<br><br>");
      // $("#email-display").append(sv.email);
      // $("#comment-display").append(sv.comment);
      console.log(sv);
    });

