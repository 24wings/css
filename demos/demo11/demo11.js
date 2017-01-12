$(function() {
    // 所有轮播
    var $carouselItems = $('#carousel .item');
    var activeItem = 0;

    function carousel() {
        return setInterval(function() {
            // 超过轮播数量,自动重置
            if (activeItem === $carouselItems.length - 1) {
                $carouselItems.hide().first().show();
                $carouselItems.last().show();
                $($carouselItems.get(0)).css({ 'margin-left': '-600px' });
                $($carouselItems.get(0)).animate({ marginLeft: '0px' }, 500, function() {
                    $carouselItems.show();
                    activeItem++;
                });
            } else {
                activeItem = activeItem > $carouselItems.toArray().length - 2 ? 0 : ++activeItem;
                $($carouselItems.get(0)).animate({ marginLeft: '-' + activeItem * 600 + 'px' }, 500);

            }
        }, 1000);
    }

    var timmer = carousel();
    $('#carousel .navigation li').mouseenter(function() {
        // 鼠标进入,停止轮播
        clearInterval(timmer);
        // 移入小点点的下标
        var index = $('#carousel .navigation li').index($(this));
        $(this).addClass('active');
        activeItem = index;

        $($carouselItems.get(0)).animate({ marginLeft: '-' + activeItem * 600 + 'px' }, 500);
    }).mouseleave(function() {

    });


});