user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome!" + user_name; 
var firebaseConfig = {
      apiKey: "AIzaSyA-5ULYoa9HDFCQ19GT_IL6RHXKl9ZzgR8",
      authDomain: "kwitter-a02b6.firebaseapp.com",
      databaseURL: "https://kwitter-a02b6-default-rtdb.firebaseio.com",
      projectId: "kwitter-a02b6",
      storageBucket: "kwitter-a02b6.appspot.com",
      messagingSenderId: "415917857283",
      appId: "1:415917857283:web:93b28635431c66df9c4c36"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name -" + Room_names);
       row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location = "kwitter.html";
}

