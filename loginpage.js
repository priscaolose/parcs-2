
/* 
function openNav() {
  // <!-- document.getElementById("mySidepanel").style.width = "250px";-->
  let hamburger = document.getElementById("mySidepanel").stylewidth; // Get The Hamburger-Button
  }
  
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  } 
*/
/*
let nav = document.getElementById("nav"); // Get the Navigation
hamburger.onclick = ()=>{ // when you click the hamburger, the following function will be exec
nav.classList.toggle("open"); //you toggle the classList of the Navigation with the class "open"
};
*/
// JavaScript code goes here

document.getElementById("hamburger").addEventListener("click", function() {
  document.getElementById("nav").classList.toggle("open");
});

function closeNav() {
  document.getElementById("nav").classList.remove("open");
}
