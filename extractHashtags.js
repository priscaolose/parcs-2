function extractHashtags() {
    var review = document.getElementById("review").textContent;
    var regex = /#[a-zA-Z0-9_]+/g;
    var hashtags = review.match(regex);
    

    var hashtagsContainer = document.getElementById("hashtags");
    hashtagsContainer.innerHTML = ""; 
    
    if (hashtags !== null) {
        hashtags.forEach(function(tag) {
            var tagElement = document.createElement("a");
            tagElement.href = "#" + tag.substring(1); 
            tagElement.textContent = tag;
            tagElement.classList.add("hashtag");
            hashtagsContainer.appendChild(tagElement);
            hashtagsContainer.appendChild(document.createTextNode(" "));
        });
    }
}
//window.onload = extractHashtags;