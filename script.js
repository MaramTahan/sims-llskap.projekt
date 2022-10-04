
function myFunction() {
 let name = document.getElementById("name").value;
 let psw = document.getElementById("psw").value;
 
 localStorage.setItem("name","Sara");
 localStorage.setItem("psw","qwe123");
 
 
 if (name === "Sara" && psw === "qwe123") {
  document.getElementById("hello").innerHTML = "<p>Välkommen, du är nu inloggad</p>";
  document.getElementById("button").style.visibility = "hidden";
 }
 else {
  document.getElementById("hello").innerHTML = "<p>Lösenordet eller användarnamnet är felaktigt, gärna försök igen</p>"
  let formTag = document.querySelector("form");
  let btnAgain = document.createElement("button");
  let btnAgainText = document.createTextNode("Försöka Igen");
  btnAgain.appendChild(btnAgainText);
  formTag.appendChild(btnAgain);
 }
}

logoutUrl = "./index.html"
function idLogout() {
 window.location = logoutUrl;
}
