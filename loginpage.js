
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
  const form = document.querySelector("#loginform");
  const uname = document.getElementById("email").value;  
  const upassword = document.getElementById("password").value;
  const  errorMessage = document.querySelector("error-message").value;

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
        errorMessage.textContent = ""; 
        window.location.href = "dentonInteractive.html";
      }
  });
