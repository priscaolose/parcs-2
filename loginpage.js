
function toggleNavigation() {
  var sidenav = document.getElementById("mySidenav");
  if (sidenav.style.width == "200px") {
    closeNav();
  } else {
    openNav();
  }
}
function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  document.getElementById("main").style.marginRight = "200px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
 // document.querySelector(".hamburger").classList.remove("open"); 
}

function togglePasswordVisibility(icon) {
  var inputField = icon.previousElementSibling;
  if (inputField.type === "password") {
      inputField.type = "text";
      icon.classList.remove("fa-lock");
      icon.classList.add("fa-unlock-alt");
  } 
  else {
      inputField.type = "password";
      icon.classList.remove("fa-unlock-alt");
      icon.classList.add("fa-lock");
  }
}
/*
const form = document.querySelector("#practiceform");
const uname = document.getElementById("uname");
const upassowrd = document.getElementById("upassword");

const para = document.querySelector("p");

console.log("username",uname);
console.log("Upassword",upassowrd);
console.log("form ID", form.id)

form.addEventListener("submit", (e) => {
  if (uname.value === "" || upassowrd.value === "") {
    e.preventDefault();
    para.textContent = "You need to fill in both names!";
  }
});

*/


document.addEventListener("DOMContentLoaded", function() {
  // Your JavaScript code goes here

  const form = document.querySelector("#practiceform");
  const uname = document.getElementById("Uname");
  const upassword = document.getElementById("Upassword");
  const  errorMessage = document.querySelector("p");


  form.addEventListener("submit", (e) => {
    e.preventDefault();

      console.log("username", uname.value);
      console.log("Upassword", upassword.value);
      console.log("form ID", form.id);

      if (uname.value === "" || upassword.value === "") {
          if(uname.value==""){
            errorMessage.textContent = "Email is required";
              console.log("Username is required");
          }
          if(upassword.value==""){
            console.log("Userpassword is required");
            errorMessage.textContent = "Password is required";

          }
      }
      else{
        console.log("content loaded successfully");
        errorMessage.textContent = ""; // Clear any previous error messages
        window.location.href = "denton.html";
      }
  });
});
