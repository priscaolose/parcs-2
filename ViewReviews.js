
function toggleNavigation() {
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
  //document.querySelector(".hamburger").classList.add("open");  
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
 // document.querySelector(".hamburger").classList.remove("open"); 
}

document.addEventListener("DOMContentLoaded", function() {
  const ratingStars = [...document.getElementsByClassName("rating__star")];
  const ratingResult = document.querySelector(".rating__result");
/*
  // Function to print the rating result
  function printRatingResult(result, num = 0) {
      result.textContent = `${num}/5`;
  }
  */

  // Function to execute the rating functionality
  function executeRating(stars) {
      const starClassActive = "rating__star fa-solid fa-star";
      const starClassInactive = "rating__star fa-regular fa-star";

      stars.forEach((star, index) => {
          star.onclick = () => {
              if (star.className === starClassInactive) {
                  for (let i = index; i >= 0; i--) {
                      stars[i].className = starClassActive;
                  }
              } else {
                  for (let i = index; i < stars.length; i++) {
                      stars[i].className = starClassInactive;
                  }
              }
          };
      });
  }

  // Call the executeRating function with the rating stars
  executeRating(ratingStars);
});

/*
//two images one is an empty star
function executeRating(stars) {
  const starClassActive = "fa-solid fa-star";
  const starClassInactive = "fa-regular fa-star";

    star.onclick = () => {
      console.log("It got in here");

      if (star.classList.contains(starClassInactive)) {
        console.log("It got in here");
        for (let i = index; i >= 0; i--) {
          stars.add("fa-solid fa-star");
          stars.remove("fa-regular fa-star");
        }
        //printRatingResult(result, index + 1);
      } else {
        for (let i = index; i < stars.length; i++) {
          console.log("It got in here");
          stars[i].classList.remove("fa-solid fa-star");
          stars[i].classList.add("fa-regular fa-star");
        }
       // printRatingResult(result, index);
      }
    };
}



*/
/*function toggleStar(star) {
  // Toggle the 'fa-star' and 'fa-star-filled' classes for the clicked star
  star.classList.toggle('fa-star');
  star.classList.toggle('fa-star-filled');

  // Loop through previous siblings to toggle their classes accordingly
  var prevStar = star.previousElementSibling;
  while (prevStar) {
    prevStar.classList.toggle('fa-star');
    prevStar.classList.toggle('fa-star-filled');
    prevStar = prevStar.previousElementSibling;
  }

  // Loop through next siblings to toggle their classes accordingly
  var nextStar = star.nextElementSibling;
  while (nextStar) {
    nextStar.classList.remove('fa-star-filled');
    nextStar.classList.add('fa-star');
    nextStar = nextStar.nextElementSibling;
  }
}
*/
document.addEventListener("DOMContentLoaded", function() {
function handleFileInput(event) {
  console.log("it got in here");
  var files = event.target.files;
  var preview = document.getElementById('preview');
  
  // Clear any existing content
  preview.innerHTML = '';

  // Loop through all selected files
  for (var i = 0; i < files.length; i++) {
      var file = files[i];
      const fsize = files.item(i).size;
      const fileSizeMB = Math.round((fsize / 1024));

       // Check if file size is greater than 1 MB
       if (fileSizeMB > 1024) {
        console.log(`File '${file.name}' exceeds the size limit.`);
        continue; // Skip processing this file
    }

      // Only process image files
      if (!file.type.match('image.*')) {
          continue;
      }

      var imgContainer = document.createElement('div');
      imgContainer.style.marginBottom = '20px'; // Spacing between each image container

      var img = document.createElement('img');
      img.src = URL.createObjectURL(file);
      img.style.height = '100px';
      img.style.display = 'block'; // Ensure the image is displayed in a block to put it on a new line
      img.style.marginBottom = '10px';

      var fileInfo = document.createElement('p');
      fileInfo.textContent = `File Name: ${file.name}, Size: ${file.size} bytes`;
      fileInfo.style.fontSize = '14px';
      fileInfo.style.marginTop = '0';

      // Append the image and file info to the container
      imgContainer.appendChild(img);
      imgContainer.appendChild(fileInfo);

      // Append the container to the preview div
      preview.appendChild(imgContainer);
  }

  // New code to display file information
  var fileInfo = `
      <p>File Name: ${files[0].name}</p>
      <p>File Size: ${files[0].size} bytes</p>
  `;
  document.getElementById('fileInfo').innerHTML = fileInfo;
}

document.getElementById('fileInput').addEventListener('change', handleFileInput);

});