const apiKey = 'pk.eyJ1IjoicHJpc2Nhb2xvc2UiLCJhIjoiY2x2MTNsN2FrMDBwODJqbjVkaHBmbDFpOCJ9.L_CJ3_ewqWvkIiQ__-mGCQ'

const map = L.map('map').setView([33.2148, -97.133064], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 19,
    id: 'mapbox/streets-v11', 
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(map);

//creating park icon for marker
const parkIcon = L.icon({
    iconUrl: 'images/playground.png',

    iconSize:     [60, 80], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
//const parkIcon2 = L.icon({
    //iconUrl: 'images/nature.png',

    //iconSize:     [40, 50], // size of the icon
    //iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    //popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
//});

//Adding marker

const EurekaPmarker = L.marker([33.1767865, -97.1272346], {icon: parkIcon}).addTo(map);
const NorthLakesPmarker = L.marker([33.240883, -97.153856], {icon: parkIcon}).addTo(map);
const LakeForestPmarker = L.marker([33.157508, -97.117037], {icon: parkIcon}).addTo(map);
const MckennaParkmarker = L.marker([33.2202, -97.1599], {icon: parkIcon}).addTo(map);
const WheelerRidgePmarker = L.marker([33.1547, -97.0975], {icon: parkIcon}).addTo(map);
//const NLPmarker = L.marker([33.240883, -97.153856], {icon: parkIcon}).addTo(map);

//Adding pop up message to marker
let park1 = `
<div style="text-align:center">
    <a href="eureka.html">
        <img width="150" height="150" src="/images/Eureka_Park.jpeg"/>
    </a>
    <h4>Eureka Park</h4>
</div>
`

let park2 = `
<div style="text-align:center">
    <a href="nlp.html">
        <img width="150" height="150" src="/images/North_Lakes_Park.jpeg"/>
    </a>
    <h4>North Lakes Park</h4>
</div>
`

let park3 = `
<div style="text-align:center">
    <a href="lakeForest.html">
        <img width="150" height="150" src="/images/lakeForest_park.jpeg"/>
    </a>
    <h4>Lake Forest Park</h4>
</div>
`
let park4 = `
<div style="text-align:center">
    <a href="mckenna.html">
        <img width="150" height="150" src="/images/mckennaPark.jpeg"/>
    </a>
    <h4>Mckenna Park</h4>
</div>
`

let park5 = `
<div style="text-align:center">
    <a href="wheeler.html">
        <img width="150" height="150" src="images/Wheeler-ridge-park.jpeg"/>
    </a>
    <h4>Wheeler Ridge Park</h4>
</div>
`

EurekaPmarker.bindPopup(park1);
NorthLakesPmarker.bindPopup(park2);
LakeForestPmarker.bindPopup(park3);
MckennaParkmarker.bindPopup(park4);
WheelerRidgePmarker.bindPopup(park5);

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
            window.location.href = "dentonList.html"; // Redirect to index.html if checkbox is checked
        } else {
            window.location.href = "dentonInteractive.html"; // Redirect to other_page.html if checkbox is unchecked
        }
    });
});
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
  