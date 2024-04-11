// parks.js

document.addEventListener("DOMContentLoaded", function() {
    // Fetch park data and populate parkList div
    fetchParkData();
});

function fetchParkData() {
    // Make an AJAX request to fetch park data
    // Replace the URL with your backend endpoint or the URL for your Google Places API request
    fetch('/parks?zipcode=12345')
        .then(response => response.json())
        .then(data => {
            displayParkData(data);
        })
        .catch(error => console.error('Error:', error));
}

function displayParkData(parks) {
    const parkList = document.getElementById('parkList');
    parkList.innerHTML = ''; // Clear previous results

    if (parks.length === 0) {
        parkList.textContent = 'No parks found near you.';
    } else {
        const ul = document.createElement('ul');
        parks.forEach(park => {
            const li = document.createElement('li');
            li.textContent = park.name;
            ul.appendChild(li);
        });
        parkList.appendChild(ul);
    }
}
