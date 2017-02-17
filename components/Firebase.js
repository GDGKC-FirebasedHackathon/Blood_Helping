const firebase =  require('firebase')
var config = {
    apiKey: "AIzaSyDWXqALcGY_smPxdFWHmTNamqL2Q3J-Ez4",
    authDomain: "blood-helping.firebaseapp.com",
    databaseURL: "https://blood-helping.firebaseio.com",
    storageBucket: "blood-helping.appspot.com",
    messagingSenderId: "644861213051"

};
export default firebaseApp = firebase.initializeApp(config);
