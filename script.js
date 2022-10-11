//hidden logout button
document.getElementById("logoutbtn").style.visibility = "hidden";
 
function myFunction() {
 let name = document.getElementById("name").value;
 let psw = document.getElementById("psw").value;
 //here save user input in localStorage
 localStorage.setItem("name","Sara");
 localStorage.setItem("psw","qwe123");
 /*here use if-sats so if user login with correct name and password,
 get greeted message*/
 if (name === "Sara" && psw === "qwe123") {
  document.getElementById("hello").innerHTML = "<p>Välkommen, du är nu inloggad</p>";
  //visibility buttons
  document.getElementById("loginbtn").style.visibility = "hidden";
  document.getElementById("logoutbtn").style.visibility = "visible";
 }
 else {
  /*otherwise appear a message to login again*/
  document.getElementById("hello").innerHTML = "<p>Lösenordet eller användarnamnet är felaktigt, gärna försök igen</p> <br>"
  //create button
  let formTag = document.querySelector("form");
  let btnAgain = document.createElement("button");
  let btnAgainText = document.createTextNode("Försöka Igen");
  btnAgain.appendChild(btnAgainText);
  formTag.appendChild(btnAgain);
 }
}
//logout when user click in logout button
logoutUrl = "./index.html"
function idLogout() {
 window.location = logoutUrl;
}




