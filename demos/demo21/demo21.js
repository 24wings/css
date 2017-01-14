$(function() {
    $('.fangdajing').mousemove(function(ev) {
        var src = $('.fangdajing .big').attr('src');
        var $small = $('.small');
        var offset = $('.big').offset();
        // 相对大图左上角的位置
        var relativeX = ev.pageX - offset.left;
        var relativeY = ev.pageY - offset.top;
        console.log(relativeX, relativeY);
        $small.css({
            position: 'absolute',
            left: ev.pageX - offset.left - ($small.width() / 2) + 'px',
            top: ev.pageY - offset.top - ($small.height() / 2) + 'px',
            backgroundImage: 'url(' + src + ')',
            backgroundSize: 'cover',
            backgroundClip: (relativeX - ($small.width() / 2)) + 'px  ' + (relativeY - ($small.height() / 2)) + 'px '

        });
        console.log((relativeX - ($small.width() / 2)) + 'px  ' + (relativeY - ($small.height() / 2)) + 'px ');
        $('.fangdajing  .small').show();
    });
});