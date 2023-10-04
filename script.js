//call Elements
const nameInput = document.getElementById("name");
const passInput = document.getElementById("psw");
const loginButton = document.getElementById("loginbtn");
const logoutButton = document.getElementById("logoutbtn");
//let logout button hidden
document.getElementById("logoutbtn").style.visibility = "hidden";
//create user name and password
const keyName = "Sara";
const keyPassword = "qwe123";


/*add click function to login button and validation of values.
When user loggedin let login button hidden and logout button visible*/
loginButton.addEventListener("click", function(){
 if (nameInput.value == keyName && passInput.value == keyPassword) {
  localStorage.setItem("loggedIn", nameInput.value);
  document.getElementById("loginbtn").style.visibility = "hidden";
  document.getElementById("logoutbtn").style.visibility = "visible";
  loggedIn();
  document.getElementById("retry").style.visibility = "hidden";
  document.getElementById("error").style.visibility = "hidden";
  
  
 }
 else {
  /*otherwise appear a wrong message to login again*/
  document.getElementById("error").innerHTML = "<br> <p>Lösenordet eller användarnamnet är felaktigt, gärna försök igen</p>";
  document.getElementById("error").style.color = "red";

 /*create new element(retry)
 and give it function to don't replay more than one time*/

  if(!document.getElementById("retry")){
   const retryBtn = document.createElement ("button");
   retryBtn.id = "retry";
   retryBtn.textContent = "Försöka Igen";
   retryBtn.addEventListener("click", () => {
    error.textContent = "";
    nameInput.value = "";
    passInput.value = "";
    retryBtn.style.display = "none";
   });
   error.appendChild(retryBtn);
  }
  
  //-----------------------------------------------
  //create button to try login again
  // let formTag = document.querySelector("form");
  // let btnAgain = document.createElement("button");
  // let btnAgainText = document.createTextNode("Försöka Igen");
  // btnAgain.appendChild(btnAgainText);
  // formTag.appendChild(btnAgain);
  //---------------------------------------------
 }
})


//add click function to logout button
logoutButton.addEventListener("click", function() {
 localStorage.clear();
 location.reload();
})

//create function to start all functions
function start() {
 if (checkLoggedin() == null) {
  loggedOut();
 }
 else {
  loggedIn();
 }
}

//create function to checking about loggedin
function checkLoggedin() {
 return localStorage.getItem("loggedIn");
}

//create logout function
function loggedOut() {
 const loginForm = document.querySelector("form");
 loginForm.classList.remove("hidden");
 
 
}


//create login function
function loggedIn() {
 logoutButton.classList.remove("hidden");
 const loginForm = document.querySelector("form");
 loginForm.classList.add("hidden");

 //2-appear welcome text to user and stay login
 const welcomeText = document.createTextNode("Välkommen" + localStorage.getItem("loggedIn") + ", du är nu inloggad");
 const textP = document.getElementById("hello");
 textP.appendChild(welcomeText);

//3-hidden all element in login form except logout button
 document.getElementById("labelName").style.visibility = "hidden";
 document.getElementById("labelpass").style.visibility = "hidden";
 document.getElementById("name").style.visibility = "hidden";
 document.getElementById("psw").style.visibility = "hidden";
 document.getElementById("loginbtn").style.visibility = "hidden";
 document.getElementById("logoutbtn").style.visibility = "visible";
}
start();
