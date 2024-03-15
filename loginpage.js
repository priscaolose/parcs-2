
document.getElementById("hamburger").addEventListener("click", function() {
  document.getElementById("nav").classList.toggle("open");
});

function closeNav() {
  document.getElementById("nav").classList.remove("open");
}
