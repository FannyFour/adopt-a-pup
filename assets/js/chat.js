    var config = {
    apiKey: "AIzaSyAGZY1pBy37wBlm_1mNpsqy4Gmi2qMpf3c",
    authDomain: "adopt-a-pup.firebaseapp.com",
    databaseURL: "https://adopt-a-pup.firebaseio.com",
    projectId: "adopt-a-pup",
    storageBucket: "adopt-a-pup.appspot.com",
    messagingSenderId: "961751920365"
  };
    firebase.initializeApp(config);


var app = angular.module('chatApp', ['firebase']);

app.controller('ChatController', function($scope, $firebaseArray) {
    var ref = firebase.database().ref().child('messages');
    $scope.messages = $firebaseArray(ref);

    $scope.send = function() {
        $scope.messages.$add({
            message: $scope.messageText,
            date: Date.now()
        })
    }

})