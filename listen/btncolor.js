function getPredominantColor(imgElement) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var width = imgElement.width;
    var height = imgElement.height;
    canvas.width = width;
    canvas.height = height;

    context.drawImage(imgElement, 0, 0, width, height);
    
    var data = context.getImageData(0, 0, width, height).data;
    var colorMap = {};
    var mostFrequentColor = '';
    var maxCount = 0;

    for (var i = 0; i < data.length; i += 4) {
        var color = data[i] + ',' + data[i + 1] + ',' + data[i + 2];
        colorMap[color] = (colorMap[color] || 0) + 1;

        if (colorMap[color] > maxCount) {
            maxCount = colorMap[color];
            mostFrequentColor = color;
        }
    }

    return mostFrequentColor;
}

var img = document.getElementById('myImage');
img.onload = function() {
    var predominantColor = getPredominantColor(img);
    console.log('Predominant Color:', predominantColor);
};
