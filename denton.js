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

  document.addEventListener("DOMContentLoaded", function() {
    var checkbox = document.getElementById("toggleCheckbox");
    var pageIndicator = document.getElementById("pageIndicator");

     // Function to update page indicator text based on checkbox state
     function updatePageIndicator() {
        if (checkbox.checked) {
            pageIndicator.textContent = "";
        } else {
            pageIndicator.textContent = "";
        }
    }

    // Initial update of page indicator text based on checkbox state
    updatePageIndicator();

    checkbox.addEventListener("change", function() {
        if (this.checked) {
            window.location.href = "dentonInteractive.html"; // Redirect to index.html if checkbox is checked
        } else {
            window.location.href = "dentonList.html"; // Redirect to other_page.html if checkbox is unchecked
        }
    });
});
