
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
    //document.querySelector(".hamburger").classList.add("open");  
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
 
  document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector("#registerform");
    const uFname = document.getElementById("UFname");
    const uLname = document.getElementById("ULname");
    const UEmail = document.getElementById("UEmail");
    const upassword = document.getElementById("Upassword");
    const errorMessage = document.querySelector("p");
  
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();

        console.log("username", uFname.value);
        console.log("username", uLname.value);
        console.log("username", UEmail.value);
        console.log("Upassword", upassword.value);
        console.log("form ID", form.id);
        let errorMessages = [];

        // Check each field and push corresponding error messages into the array
        if (uFname.value === "") {
            errorMessages.push("First name is required");
        }
        if (uLname.value === "") {
            errorMessages.push("Last name is required");
        }
        if (UEmail.value === "") {
            errorMessages.push("Email is required");
        }
        if (upassword.value === "") {
            errorMessages.push("Password is required");
        }
        
        // Display all error messages together
        if (errorMessages.length > 0) {
            errorMessage.textContent = errorMessages.join(", ");
            console.log("Errors:", errorMessages.join(", "));
        }

        else{
          console.log("content loaded successfully");
          errorMessage.textContent = ""; 
          window.location.href = "dentonList.html";
        }
    });
  });