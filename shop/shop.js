exitBtn=$('.x-btn');
shopPopup=$('#shop-popup');
shopItem=$('.shop-item');

exitBtn.on('click',function(){
    shopPopup.css('visibility','hidden');
});

shopItem.on('click', function(){
    console.log('shop item clicked');
    shopPopup.css('visibility','visible');
})
