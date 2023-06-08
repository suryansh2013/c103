var firebaseConfig = {
    apiKey: "AIzaSyACwQpSpaPLzD-PBYwYpUJGVC9Nld9WluU",
    authDomain: "chat-app-7e1f5.firebaseapp.com",
    databaseURL: "https://chat-app-7e1f5-default-rtdb.firebaseio.com",
    projectId: "chat-app-7e1f5",
    storageBucket: "chat-app-7e1f5.appspot.com",
    messagingSenderId: "742754840209",
    appId: "1:742754840209:web:d7cff6ebda17272f9c9930"
};
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send() {
   msg = document.getElementById("msg").value;
   firebase.database().ref(room_name).push({
    name : user_name,
    message : msg,
    likes : 0
   })
   document.getElementById("msg").value = "";
}