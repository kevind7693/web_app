var firebaseConfig = {
    apiKey: "AIzaSyDbJ7PqCB5GHs75f_AGWNEOwh0iOxyZlds",
    authDomain: "web-app-f75cb.firebaseapp.com",
    projectId: "web-app-f75cb",
    storageBucket: "web-app-f75cb.appspot.com",
    messagingSenderId: "81339442761",
    appId: "1:81339442761:web:509abf204fbf7b963ac198",
    measurementId: "G-EM83QFZMTD"
  };
  
  
firebase.initializeApp(firebaseConfig);
   
var database = firebase.database()

function save(){
    var name = document.getElementById('name').value
    var screen_time = document.getElementById('screen_time').value
    var age = document.getElementById('age').value
    
    database.ref('users/' + name).set({
        name : name,
        screen_time : screen_time,
        age : age
    })
    
    alert('Saved')
}
   