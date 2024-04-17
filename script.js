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
   // document.querySelector(".hamburger").classList.remove("open"); 
  }

( function() {
    // Define an array of cities for autocomplete
    var cities = [
        "Denton",
        "Corinth",
        "Flowermound",
        // Add more cities as needed
    ];

    // Enable autocomplete on the city input field
    $( "#cityInput" ).autocomplete({
        source: cities
    });

    // Redirect to corresponding HTML page when Enter key is pressed
    $('#cityInput').keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){ // Check if Enter key is pressed
            var city = $('#cityInput').val().toLowerCase().replace(/\s/g, ''); // Get city input and format
            window.location.href = city + "List.html"; // Redirect to corresponding HTML page
        }
    });
} );
