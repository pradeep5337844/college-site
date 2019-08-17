var firebaseConfig = {
    apiKey: "AIzaSyBsmyVf-JHCauaWGRbSbtvNbQLWtl1ZysU",
    authDomain: "reva-university-48219.firebaseapp.com",
    databaseURL: "https://reva-university-48219.firebaseio.com",
    projectId: "reva-university-48219",
    storageBucket: "reva-university-48219.appspot.com",
    messagingSenderId: "824131558623",
    appId: "1:824131558623:web:32c702fe97d9d039"
  };
firebase.initializeApp(firebaseConfig);


var messagesRef = firebase.database().ref('messages');

document.getElementById('register').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();
    
    
    var name = getInputVal('Username');
    var name = getInputVal('Phone');
     var name = getInputVal('Email');
     var name = getInputVal('Password');
     var name = getInputVal('Retypepassword');
    
    saveMessage(Username, Phone, Email, Password, Retypepassword);
    
    document.querySelector('.alert').style.display = 'block';
    
    setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);
    
    document.getElementById('register').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

function saveMessage(Username, phone, Email, Password, Retypepassword){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    Username:Username,
    Phone:Phone,
    Email:Email,
    Password:Password,
    Retypepassword:Retypepassword
  });
}