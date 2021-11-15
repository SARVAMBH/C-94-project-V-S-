var firebaseConfig = {
    apiKey: "AIzaSyBpv3d7EjZNBru2CDt9ssagUqLDU5bJT8M",
    authDomain: "lets-chat-web-app-1a10e.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-1a10e-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-1a10e",
    storageBucket: "lets-chat-web-app-1a10e.appspot.com",
    messagingSenderId: "997907621054",
    appId: "1:997907621054:web:ff066cfd302645d7ba6aef"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addRoom()
  {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose : "adding user"   
      });
  }