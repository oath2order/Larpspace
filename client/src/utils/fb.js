import firebase from "firebase";

firebase
  .initializeApp({
  apiKey: "AIzaSyAY6r5AhtB1lksOPR5pKklWLLvC7JNEcdg",
  authDomain: "larpspace.firebaseapp.com",
  databaseURL: "https://larpspace.firebaseio.com",
  projectId: "larpspace",
  storageBucket: "",
  messagingSenderId: "960498340766"
  })
  .auth()
  .setPersistence("local");

var auth = firebase.auth();

auth.onAuthStateChanged(function(user){
        setToken(user);
})

function deleteCookie() {
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function setCookie(cname, cvalue) {
  var d = new Date();
  d.setTime(d.getTime() + 60 * 1000 * 55);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires;
}

function setToken(user) {
  if (!user) {
    return Promise.resolve().then(deleteCookie());
  } else {
    return user.getIdToken().then(function (token) {
      setCookie("token", token);
      return user;
    });
  }
}

export default auth;