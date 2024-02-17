var img = new Image();
img.crossOrigin = "Anonymous";
img.onload = function() {
    var colorThief = new ColorThief();
    var color = colorThief.getColor(img);
    console.log(color);
};
img.src = '../listen/art/1.jpg';