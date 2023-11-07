var firebaseConfig = {
    apiKey: "AIzaSyDMt1Kovli0E9CMQhO4X0vYD1h8yRD--ck",
    authDomain: "teste1-be144.firebaseapp.com",
    databaseURL: "https://teste1-be144-default-rtdb.firebaseio.com",
    projectId: "teste1-be144",
    storageBucket: "teste1-be144.appspot.com",
    messagingSenderId: "336798902299",
    appId: "1:336798902299:web:235562555448cf5ec8f0be",
    measurementId: "G-8YNQ10V19C"
  };
  firebase.initializeApp(firebaseConfig);


  function send()
  {
    mensagem = document.getElementById("msg").value;
    firebase.database().ref(roomName).push({
        name:userName,
        message:msg,
        like:0
    });
    document.getElementById("msg").value = "";
  }
