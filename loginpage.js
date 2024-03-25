
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

