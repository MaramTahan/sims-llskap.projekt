function myFunction() {
 let name = document.getElementById("name").value;
 let psw = document.getElementById("psw").value;
 
 //here save user input in localStorage
 localStorage.setItem('name',(name));
 localStorage.setItem('psw',(psw));
 
 /*here use if-sats so if user login with correct name and password,
 get greeted message*/
 if (name === "Sara" && psw === "qwe123") {
  document.getElementById("hello").innerHTML = "<p>Välkommen, du är nu inloggad</p>";
  
 }/*otherwise appear a message to login again*/ 
 else {
  document.getElementById("hello").innerHTML = "<p>Lösenordet eller användarnamnet är felaktigt, gärna försök igen</p>"
  location.reload();//empty user input
 }
}


//logout when user click in logout button
logoutUrl = "./index.html"
function idLogout() {
 window.location = logoutUrl;
}
