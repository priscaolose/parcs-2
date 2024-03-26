
/*
document.getElementById("hamburger").addEventListener("click", function() {
  document.getElementById("nav").classList.toggle("open");
});

function closeNav() {
  document.getElementById("nav").classList.remove("open");
}
*/
function toggleNav() {
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

/*
function bcrypt_encrypt(username, password) {
	bcrypt.genSalt(10, function(err, salt) {
		bcrypt.hash(password, salt, function(err, key) {
			console.log("bcrypt Store the salt: " + salt + " and hash: " + key)
			bcrypt_decrypt(password, salt, key)
		});
	});
}

*/
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

