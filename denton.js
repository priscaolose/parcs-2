document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", fetchParkData);

    const toggleButton = document.getElementById("toggleButton");
    toggleButton.addEventListener("click", toggleView);
});

function fetchParkData() {
    const zipCode = document.getElementById('zipCodeInput').value;
    const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual Google Maps API key
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=park&key=${apiKey}&location=${zipCode}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayParkData(data.results);
        })
        .catch(error => {
            console.error('Error fetching park data:', error);
            displayErrorMessage();
        });
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

function displayErrorMessage() {
    const parkList = document.getElementById('parkList');
    parkList.innerHTML = 'Error fetching park data. Please try again later.';
}

function toggleView() {
    const listView = document.getElementById("listView");
    const interactiveView = document.getElementById("interactiveView");
    const toggleButton = document.getElementById("toggleButton");

    if (listView.style.display === "none") {
        listView.style.display = "block";
        interactiveView.style.display = "none";
        toggleButton.innerText = "Interactive View";
    } else {
        listView.style.display = "none";
        interactiveView.style.display = "block";
        toggleButton.innerText = "List View";
    }
}
