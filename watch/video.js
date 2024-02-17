let mainVid=$('#main-video');
let curtain=$('.curtain-layer');
let videoRack=$('.videos');


let vidSize=('90vw');

$(window).resize(function(){
    if ($(window).width() < 850){
        vidSize=('90vw');
        windowAdjust();
    } else{
        vidSize=('50vw');
        windowAdjust();
    }
});




function windowAdjust(){
    mainVid.css('width',vidSize);
    mainVid.css('height', 'calc(' + vidSize + ' * 9 / 16)');
    $(window).resize();
};

function mainVidResize(){
    curtain.css('opacity', '0');
    videoRack.css('padding-top','50px');
    windowAdjust();
}

setTimeout(mainVidResize, 3000);


function stopTransitions(){
    mainVid.css('transition', 'none');
    curtain.css('transition', 'none');
}

function curtainZ(){
    curtain.css('z-index', '-1');
}

setTimeout(stopTransitions, 7000);
setTimeout(curtainZ, 4000);



