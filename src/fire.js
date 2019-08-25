import firebase from 'firebase';


var config={
    apiKey: "AIzaSyDho2uJEdCyVyUdk78FdAIkVE1nXT8StZQ",
    authDomain: "docs-91e5f.firebaseapp.com",
    databaseURL: "https://docs-91e5f.firebaseio.com",
    projectId: "docs-91e5f",
    storageBucket: "",
    messagingSenderId: "659297840979",
    appId: "1:659297840979:web:343a3ef447aeed1d"
  };

var fire=firebase.initializeApp(config)
export default fire;