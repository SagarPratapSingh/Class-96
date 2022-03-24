//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDqAue-EvYSvvIgCHF2cp3oFKY1lwUKecE",
      authDomain: "kwitter-2a4dc.firebaseapp.com",
      databaseURL: "https://kwitter-2a4dc-default-rtdb.firebaseio.com",
      projectId: "kwitter-2a4dc",
      storageBucket: "kwitter-2a4dc.appspot.com",
      messagingSenderId: "657987380575",
      appId: "1:657987380575:web:a5b61dba8075fc4577c2ea"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}