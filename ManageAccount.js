
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
  