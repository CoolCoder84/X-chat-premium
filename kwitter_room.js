
//ADD YOUR FIREBASE LINKS HERE
   // Your web app's Firebase configuration
   var firebaseConfig = {
    apiKey: "AIzaSyBTw5uTpIezG-OUPCnOLPY2VHT9DhKvOrI",
    authDomain: "social-media-ae843.firebaseapp.com",
    databaseURL: "https://social-media-ae843-default-rtdb.firebaseio.com",
    projectId: "social-media-ae843",
    storageBucket: "social-media-ae843.appspot.com",
    messagingSenderId: "47603871371",
    appId: "1:47603871371:web:ed2137290fc4069dd2ae8e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Welcome "+user_name+"!"; 

 function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";

}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}