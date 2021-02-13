$(document).ready(function(){
    $('.element').click(function(event){
        var elem = event.currentTarget;
        var text = $(elem).find('.element-heading > h5').text().trim(" ");
        console.log(text);

        var parentElem = $(elem).closest('.main-slide');
        $(parentElem).hide();
        var nxtElem = $(parentElem).next();
        $(nxtElem).show();

        var position = $('.men-img').position().left;
        var windowWidth = $(window).width() * (10.8/100);
        position = position + windowWidth;

        $('.men-img').css('left', position+'px');
    });
});