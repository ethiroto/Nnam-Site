scroller=$('#art-scroller');
popup=$('#popup');
xBtn=$('.x-btn');

artArray=['1','2','3'];

artCount=artArray.length;

function numberToString(number){
    const numberToWords={
        '1':'one',
        '2':'two',
        '3': 'three',
        '4':'four',
        '5':'five',
        }
    return numberToWords[number];
};

function addArt(){
    for (i in artArray){
        scroller.append(`<div class="art-container ${numberToString(artArray[i])}"><img src="art/${artArray[i]}.jpg"></div>`);
    };
}

function clearFront(){
    $('#art-scroller>div:lt('+artCount+')').remove();
}

function clearImage(){
    $('#art-scroller>div:lt(1)').html('<img src=""></div>');
}

addArt();
var interval = setInterval(addArt, 5000);

var interval2 =setInterval(clearFront, 7000);

setTimeout(function() {
    setInterval(clearImage, 5000);
}, 40000);


function attachClickHandler(index) {
    var artClass = numberToString(artArray[index]);
    $('#art-scroller').on('click', `.${artClass}`, function() {
        console.log(`button ${artArray[index]} was clicked`);
        popup.html(`<div class="header-container">
        <div class="x-btn-container">
            <div class="x-btn">&times;</div>
        </div>
        </div>
        <h2 class="popup-title"> Song #${artArray[index]}</h2>
    <img class="popup-img" src="art/${artArray[index]}.jpg" alt="">
        <a class="stream-link" href="https://linktr.ee/nnamnnam" target="_blank">
        Stream
        </a>
        <a class="stream-link" href="../shop/index.html">Purchase</a>
        <div class="hiro-audio">
    <audio src="music/${parseInt(index)+1}.mp3"></audio>
    </div>`);

        // Now that the .hiro-audio div is part of the popup's HTML, we find it and initialize
        var newAudioPlayer = popup.find('.hiro-audio');
        initializeAudioPlayer(newAudioPlayer);
        popup.css('visibility','visible');
    });
}

for (let i in artArray) {
    attachClickHandler(i);
}

popup.on('click', '.x-btn', function(){
    popup.css('visibility', 'hidden');
    //So that the audio can be stopped (this just stops all sitewide audio)
    Howler.stop();
});

scroller.on('click', function(){
        //So that the audio can be stopped (this just stops all sitewide audio)
    Howler.stop();
});











