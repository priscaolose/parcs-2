const apiKey = 'pk.eyJ1IjoicHJpc2Nhb2xvc2UiLCJhIjoiY2x2MTNsN2FrMDBwODJqbjVkaHBmbDFpOCJ9.L_CJ3_ewqWvkIiQ__-mGCQ'

const map = L.map('map').setView([33.2148, -97.133064], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 19,
    id: 'mapbox/streets-v11', 
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(map);

//creating park icon for marker
const parkIcon = L.icon({
    iconUrl: 'pin.png',
    iconSize:     [30, 50], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

//Adding marker

const EurekaPmarker = L.marker([33.1767865, -97.1272346], {icon: parkIcon}).addTo(map);
const NorthLakesPmarker = L.marker([33.240883, -97.153856], {icon: parkIcon}).addTo(map);
const LakeForestPmarker = L.marker([33.157508, -97.117037], {icon: parkIcon}).addTo(map);
const MckennaParkmarker = L.marker([33.2202, -97.1599], {icon: parkIcon}).addTo(map);
const WheelerRidgePmarker = L.marker([33.1547, -97.0975], {icon: parkIcon}).addTo(map);
//const NLPmarker = L.marker([33.240883, -97.153856], {icon: parkIcon}).addTo(map);

//Ad// Park 1 - Eureka Park
let park1 = `
<div style="text-align:center">
    <a href="eureka.html">
        <img src="images/Eureka_Park.jpeg" alt="Eureka Park" width="100%" height="100">
    </a>
    <h4>Eureka Park</h4>
    <p>Location: <a href="https://www.google.com/maps/dir/?api=1&destination=506+Hobson+Ln%2C+Denton%2C+TX+76205" target="_blank">506 Hobson Ln, Denton, TX 76205</a></p>
    <p>Accessibility features:<br>
    <p style="background-color: white; border-radius: 50px; margin = 100px; font-weight:bold;">Parking: Yes</p>
    <p style="background-color: white; border-radius: 50px; margin = 100px; font-weight:bold;">Ramps: Yes</p>
    <p style="background-color: white; border-radius: 50px; margin = 100px; font-weight:bold;">Bathrooms: Yes</p>
    </p>
    <a href="eureka.html">Learn more</a>
</div>
`

// Park 2 - North Lakes Park
let park2 = `
<div style="text-align:center">
    <a href="nlp.html">
        <img width="100%" height="100" src="images/North_Lakes_Park.jpeg"/>
    </a>
    <h4>North Lakes Park</h4>
    <p>Location: <a href="https://www.google.com/maps/dir/?api=1&destination=Addison+Ave%2C+Denton%2C+TX+76201" target="_blank">Addison Ave, Denton, TX 76201</a></p>
    <p>Accessibility features:<br>
    <p style="background-color: white; border-radius: 50px; margin = 100px; font-weight:bold;">Parking: Yes</p>
    <p style="background-color: white; border-radius: 50px; margin = 100px; font-weight:bold;">Ramps: Yes</p>
    <p style="background-color: white; border-radius: 50px; margin = 100px; font-weight:bold;">Bathrooms: Yes</p>
    </p>
    <a href="nlp.html">Learn more</a>
</div>
`

// Park 3 - Lake Forest Park
let park3 = `
<div style="text-align:center">
    <a href="lakeForest.html">
        <img width="100%" height="100" src="images/lakeForest_park.jpeg"/>
    </a>
    <h4>Lake Forest Park</h4>
    <p>Location: <a href="https://www.google.com/maps/dir/?api=1&destination=4150+Keaton+Dr%2C+Denton%2C+TX+76210" target="_blank">4150 Keaton Dr, Denton, TX 76210</a></p>
    <p>Accessibility features:<br>
    <p style="background-color: white; border-radius: 50px; margin = 100px; font-weight:bold;">Parking: Yes</p>
    <p style="background-color: white; border-radius: 50px; margin = 100px; font-weight:bold;">Ramps: Yes</p>
    <p style="background-color: white; border-radius: 50px; margin = 100px; font-weight:bold;">Bathrooms: Yes</p>
    </p>
    <a href="lakeForest.html">Learn more</a>
</div>
`

// Park 4 - Mckenna Park
let park4 = `
<div style="text-align:center">
    <a href="mckenna.html">
        <img width="100%" height="100" src="images/mckennaPark.jpeg"/>
    </a>
    <h4>Mckenna Park</h4>
    <p>Location: <a href="https://www.google.com/maps/dir/?api=1&destination=2001+Old+Alton+Rd%2C+Denton%2C+TX+76210" target="_blank">2001 Old Alton Rd, Denton, TX 76210</a></p>
    <p>Accessibility features:<br>
    <p style="background-color: white; border-radius: 50px; margin = 100px; font-weight:bold;">Parking: Yes</p>
    <p style="background-color: white; border-radius: 50px; margin = 100px; font-weight:bold;">Ramps: Yes</p>
    <p style="background-color: white; border-radius: 50px; margin = 100px; font-weight:bold;">Bathrooms: Yes</p>
    </p>
    <a href="mckenna.html">Learn more</a>
</div>
`

// Park 5 - Wheeler Ridge Park
let park5 = `
<div style="text-align:center">
    <a href="wheeler.html">
        <img width="100%" height="100" src="images/Wheeler-ridge-park.jpeg"/>
    </a>
    <h4>Wheeler Ridge Park</h4>
    <p>Location: <a href="https://www.google.com/maps/dir/?api=1&destination=1022+E.+Wheeler+Ridge+Ave%2C+Denton%2C+TX+76205" target="_blank">1022 E. Wheeler Ridge Ave, Denton, TX 76205</a></p>
    <p>Accessibility features:<br>
    <p style="background-color: white; border-radius: 50px; margin = 100px; font-weight:bold;">Parking: Yes</p>
    <p style="background-color: white; border-radius: 50px; margin = 100px; font-weight:bold;">Ramps: Yes</p>
    <p style="background-color: white; border-radius: 50px; margin = 100px; font-weight:bold;">Bathrooms: Yes</p>
    </p>
    <a href="wheeler.html">Learn more</a>
</div>
`


EurekaPmarker.bindPopup(park1);
NorthLakesPmarker.bindPopup(park2);
LakeForestPmarker.bindPopup(park3);
MckennaParkmarker.bindPopup(park4);
WheelerRidgePmarker.bindPopup(park5);


// Add event listeners to show popups on mouseover
EurekaPmarker.on('mouseover', function(e){
    this.openPopup();
});
NorthLakesPmarker.on('mouseover', function(e){
    this.openPopup();
});
LakeForestPmarker.on('mouseover', function(e){
    this.openPopup();
});
MckennaParkmarker.on('mouseover', function(e){
    this.openPopup();
});
WheelerRidgePmarker.on('mouseover', function(e){
    this.openPopup();
});

var popup1 = L.popup({
    maxWidth: 650, // Adjust maxWidth as needed
    maxHeight: 100 // Adjust maxHeight as needed
  }).setContent(park1);

  var popup2 = L.popup({
    maxWidth: 300, // Adjust maxWidth as needed
    maxHeight: 200 // Adjust maxHeight as needed
  }).setContent(park2);

  var popup3 = L.popup({
    maxWidth: 300, // Adjust maxWidth as needed
    maxHeight: 200 // Adjust maxHeight as needed
  }).setContent(park3);

  var popup4 = L.popup({
    maxWidth: 300, // Adjust maxWidth as needed
    maxHeight: 200 // Adjust maxHeight as needed
  }).setContent(park4);

  var popup5 = L.popup({
    maxWidth: 300, // Adjust maxWidth as needed
    maxHeight: 200 // Adjust maxHeight as needed
  }).setContent(park5);
