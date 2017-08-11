	var config = {
    apiKey: "AIzaSyAGZY1pBy37wBlm_1mNpsqy4Gmi2qMpf3c",
    authDomain: "adopt-a-pup.firebaseapp.com",
    databaseURL: "https://adopt-a-pup.firebaseio.com",
    projectId: "adopt-a-pup",
    storageBucket: "",
    messagingSenderId: "961751920365"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

//initial values
var usernameInput = document.querySelector('#username');
var textInput = document.querySelector('#text');
var postButton = document.querySelector('#post');

postButton.addEventListener("click", function(){
	var msgUser = usernameInput.value;
	var msgText = textInput.value;
	database.push({userName:msgUser + "says" + text:msgText});
	textInput.value = "";
});