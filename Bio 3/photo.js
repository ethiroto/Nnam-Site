var bioImg = $('.bio-img');

const randomNumber = Math.floor(Math.random() * 10) + 1; 

bioImg.html(`<img src="assets/tape-${randomNumber}.png" alt=""></img>`)

var currentImg = randomNumber;



function swapPhoto() {
  // Fade out the current image
  bioImg.find('img').fadeOut(500, function() {
    // Once fade-out is complete, change the image source and fade it in
    currentImg++;
    if (currentImg > 10) {
      currentImg = 1;
    }
    $(this).attr('src', `assets/tape-${currentImg}.png`).fadeIn(700);
  });
}

setInterval(swapPhoto, 4000); // Change every 4 seconds (adjust as needed)
