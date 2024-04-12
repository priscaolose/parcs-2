
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
  /*
  const form = document.querySelector("#signup-form");
  const ufname = document.getElementById("uFirstname");
  const uLname = document.getElementById("uLname");
  const uemail = document.getElementById("uemail");
  const upassowrd = document.getElementById("upassword");
  const para = document.querySelector("p");
  console.log("Users name is",ufname);
    if(form!=null){
        console.log("form is not empty");
    }
    else{
        console.log("form is empty");
    }

  form.addEventListener("submit", (e) => {
    console.log("it got in here")
    if (uname.value === "" || upassowrd.value === ""||ufname==""||upassowrd=="") {
      e.preventDefault();
      para.textContent = "You need to fill out all the required fields";
    }
    else {
        window.location.href = "ParksViewPage.html";
    }   

  });
  */
  document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code goes here

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
  
        if (uFname.value === "" || uLname.value === ""|| UEmail.value==""||upassword.value=="")
        {
            if(uFname.value==""){
              errorMessage.textContent = "Email is required";
                console.log("First name is required");
            }
            if(uLname.value==""){
                errorMessage.textContent = "Email is required";
                  console.log("Last name is required");
              }

            if(upassword.value==""){
              console.log("Userpassword is required");
              errorMessage.textContent = "Password is required";
            }
            if(UEmail.value==""){
                errorMessage.textContent = "Email is required";
                  console.log("Last name is required");
              }
        }

        else{
          console.log("content loaded successfully");
          errorMessage.textContent = ""; // Clear any previous error messages
          window.location.href = "denton.html";
        }
    });
  });