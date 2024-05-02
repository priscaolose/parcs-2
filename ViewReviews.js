
function toggleNavigation() 
{
  var sidenav = document.getElementById("mySidenav");
  if (sidenav.style.width == "200px") {
    closeNav();
  } else {
    openNav();
  }
}

function openNav()
{
  document.getElementById("mySidenav").style.width = "200px";
  document.getElementById("main").style.marginRight = "200px";
  //document.querySelector(".hamburger").classList.add("open");  
}

function closeNav() 
{
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
 // document.querySelector(".hamburger").classList.remove("open"); 
}

document.addEventListener("DOMContentLoaded", function() {
  const ratingStars = [...document.getElementsByClassName("rating__star")];
  const ratingResult = document.querySelector(".rating__result");


  // Function to execute the rating functionality
  function executeRating(stars) {
      const starClassActive = "rating__star fa-solid fa-star";
      const starClassInactive = "rating__star fa-regular fa-star";

      stars.forEach((star, index) => {
          star.onclick = () => {
            console.log("Index is ", index);
            const parentId = star.parentNode.parentNode.id; // Get the ID of the parent ManageParkRatingOptions
            console.log("Parent ID",parentId);
            console.log("double the parent ID",parentId*5);
            parentIdDiff = (parentId*5)-1;
            console.log("Parent ID after subtraction",parentIdDiff)
            //do index-4 up until what the current index is i
            if (star.className === starClassInactive)
             {
                  let startindex = parentIdDiff-4
                  for (let i = startindex; i <=index; i++) 
                  {
                      stars[i].className = starClassActive;
                  }
              } 
              else {
                // Define the upper and lower boundaries for deselection
                let border1 = (parentId - 1) * 5;
                let border2 = parentId * 5 - 1;
                let startindex = index;
            
                // Iterate through the stars starting from the next index
                while (startindex < border2) {
                    // Increment the startindex if the next star is active
                    if (stars[startindex + 1].className === starClassActive) {
                        startindex++; 
                    } else {
                        // Break the loop if the next star is inactive
                        break;
                    }
                }
            
                // Deselect stars based on the determined startindex
                for (let i = startindex; i >= index; i--) {
                    if (stars[i].className === starClassActive && i >= border1) {
                        stars[i].className = starClassInactive;
                    } else {
                        // If a star doesn't meet the condition, exit the loop
                        break;
                    }
                }
            }
            

          };
      });
  }
  // Call the executeRating function with the rating stars
  executeRating(ratingStars);
});

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


// JavaScript function to show the pop-up message and clear the content
function submitReview() {
  // Show the pop-up message
  var popup = document.getElementById("popupMessage");
  popup.style.display = "block";

  // Clear the content after a delay (e.g., 2 seconds)
  setTimeout(function() 
  {
      // Hide the pop-up message
      popup.style.display = "none";

      // Clear the content of the page
  }, 2000); // Adjust the delay as needed (2000 milliseconds = 2 seconds)
  clearContent();

}

// JavaScript function to clear the content of the page
function clearContent() {
  console.log("It got in here")
  // Clear the preview div
  var preview = document.getElementById('preview');
  preview.innerHTML = '';

  // Clear the file info
  //document.getElementById('fileInfo').innerHTML = '';

  // Clear the text input
  var textInput = document.querySelector('.box');
  textInput.value = '';

  // Clear the radio buttons
  var radioButtons = document.querySelectorAll('input[name="choice-radio"]');
  radioButtons.forEach(function(button) {
      button.checked = false;
  });

  // Clear the star ratings
  var stars = document.querySelectorAll('.rating__star');
  stars.forEach(function(star) {
      star.classList.remove('fa-solid');
      star.classList.add('fa-regular');
  });
}
