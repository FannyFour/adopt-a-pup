var k = 5;
var moreZip = "";
//Array that will hold youtube iframe with breed vids index will match breed value in dropdown
var breedVids = ['<iframe width="360" height="203" src="https://www.youtube.com/embed/ohnkNMFSnAc" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/d3IwYck7zgo" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/1yWd6_gF5OQ" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/BeSHBdmlv1g" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/nNB99tp2vO8" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/tufBXaoUNM8" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/si562RMZWOQ" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/8VsiqOwhD_0" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/J831a2X9uT4" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/GxeUqyim-2g" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/59ZjA7TSNaQ" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/fLRWPpTnF3I" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/cYvN_lRldH4" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/yYwAJrAdUbY" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/onquT6s3X-s" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/W7bCll0DT-c" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/dHX2xul3WEk" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/4LcctY44cj4" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/R3J5JLy-Unw" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/wQT-zTYaT2E" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/bUurb0_5cXU" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/Tdxqr20jS68" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/n7cXZ_HXz4A" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/XXzZwEauNng" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/89TCWc7eDvY" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/xJlyQaMzTE4" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/aAOYe3SjMYE" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/e00BzdF5LYA" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/CnYod263R7Q" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/UTvrm47oUNU" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/R72NjafeB7U" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/M-uDiky1EKU" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/_clKz2FOomI" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/o2Rho_GMclQ" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/pHJ8JRHAFlE" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/x2CaouIp1kE" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/TDTel6mKDks" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/DDaBJOMdOsY" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/efeBXgQUJIY" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/Qp_IYiSvP3c" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/0cj81wHmfXc" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/2-lpq0V02oU" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/Jzrh05NTEGc" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/ChHt23BA8I0" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/4xIra4xAkb8" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/OhweLJJFr18" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/l4QXSKoARYA" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/0NTSP_UX9Xw" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/X4mupT2AIsM" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/6Bg9XTPsz4Y" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/mFJyJayx1GM" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/cirvuQUfU6k" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/Y8i0FZ01pGI" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/95coGW386n8" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/t_nVJ8Qmo3o" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/v1stD0KbtvI" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/7ZYJGBw0Z5Y" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/74mx2OWM6mE" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/Q7uRZoFs5AE" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/ShRP4S8-lkY" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/A9f157h5oWw" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/kI4EbABtJQ0" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/FQr-gp2Af7Q" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/A1KuNfSCcW8" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/cN5CNIUXGI4" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/YF8wvUqZfHs" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/vH-uQY-iZe0" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/MusYxiKiKrI" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/ooK_VY3nA4w" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/5Dq_AmTKQlE" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/tLWcMrDTny8" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/XwWoYElh4lI" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/FSsW34_zQvE" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/kvJWumK34AI" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/onaC07R0oVE" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/Dnpz8fSVuOI" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/zEn4WXXhKmQ" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/6ifSudReeuM" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/c_xTYVxqkg8" frameborder="0" allowfullscreen></iframe>',
    '<iframe width="360" height="203" src="https://www.youtube.com/embed/WkYvtVo2BO8" frameborder="0" allowfullscreen></iframe>'


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
//JS Code to reset button for results
// $("#rmSearch").on("click", function(){
//   $("#thisOne").empty();
//   $("#thisOne").addClass("z-depth-5 flow-text");
//   $("#thisOne").text("You removed the search results!");
// });

//this function will add the more button
//<a class="btn waves-effect waves-light z-depth-1" type="submit" id="more">More</a>
function addMoreButton() {
  var a = $("<a>"); 

  a.addClass("btn waves-effect waves-light z-depth-1 moreButtonClick");

  a.attr("type", "submit");

  a.attr("id", "more");

  a.text("More")

  $("#moreButton").append(a)
  
}

//this function runs the petfinder APi and prints results to html
function petFinder() {

  //reset the results to 5
  k = 5;

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
  moreZip = $("#zip").val().trim();
  
  
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

          for (var i = 0; i < k; i++) {
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
  addMoreButton();
}
//this function will populate more results to what ever the k value is 
function petFinderMore() {

  // This line allows us to take advantage of the HTML "submit" property
  // This way we can hit enter on the keyboard and it registers the search
  // (in addition to clicks).
  event.preventDefault();

  //increment k by for more results
  k = (k+ 5);

  //clear the div
 
  $("#petfinderInfo").empty();

  //remove shadow from containing div

  $("#thisOne").removeClass("z-depth-5 flow-text");

  
  
  var queryURL = 'https://api.petfinder.com/pet.find?key=2aafed70ee17e42be9c99843a588487b&animal=dog&location=' + moreZip + '&format=json&callback=?';

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


          for (var i = 0; i < k; i++) {
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


           }
        });
    };
  
}
//a click to more button add more results
$(document).on("click", "#more", petFinderMore);
$("#more").on("click", function(event) {
  //increases the k value by 5 giving 5 more results
  k = (k+ 5);
  console.log("button works");
  petFinderMore();
});

$("#search").on("click", function(event) {
  petFinder();
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

