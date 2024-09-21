var mainVideo = $('#main-video');
let curtain = $('.curtain-layer');
let videoRack=$('.videos');


// Add 'small' class
mainVideo.addClass('small');

setTimeout(function() {
    mainVideo.removeClass('small').addClass('large'); // Then switch to 'large' after a delay
}, 50); // Delay in milliseconds (match this to your transition duration)

//Transition back to normal
setTimeout(function(){
    mainVideo.removeClass('large');
    curtainReveal();
    videoRack.css('padding-top','30px');
    mainVideo.css('transform', 'translateY(0px)')
    // Remove transition after it's done
    mainVideo.one('transitionend', function() {
        $(this).css('transition', 'none');
    });
//Change this to change how long it stays
}, 10000);

function curtainReveal(){
    curtain.css('opacity', 0);
    setTimeout(function() { curtain.css('z-index', -1); }, 8000);
};
