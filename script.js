function searchParks() {
    const zipCode = document.getElementById("zipCodeInput").value;
    const geocoder = new google.maps.Geocoder();
    
    geocoder.geocode({ address: zipCode }, (results, status) => {
        if (status === "OK" && results[0]) {
            window.location.href = "parks.html?zipcode=" + zipCode;
        } else {
            alert("Geocode was not successful for the following reason: " + status);
        }
    });
}

function redirectToParksPage(location) {
    const latitude = location.lat();
    const longitude = location.lng();
    window.location.href = `parks.html?lat=${latitude}&lng=${longitude}`;
}
