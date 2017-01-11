$(function() {
    var activeItem = 0;
    var $carouselItems = $('#carousel .item');
    var carouselLength = $carouselItems.toArray().length; //轮播条幅数

    // 轮播图,默认隐藏除第一个轮播外所有轮播
    $carouselItems.not(':first').hide();

    function carousel() {
        return setInterval(function() {
            // 拿到所有轮播
            $carouselItems.hide(); // 先隐藏所有轮播
            $($carouselItems.get(activeItem)).animate({ 'margin-left' })
            $($carouselItems.get(++activeItem)).show();
            activeItem = activeItem > carouselLength - 2 ? 0 : activeItem; // 轮播归0

        }, 1000);
    }

    //旋转轮播
    // var timer;
    var timmer = carousel();


    $('.navigation li').mouseenter(function() {
        // 进入小点点,就不轮播了
        clearInterval(timmer);
        var index = $('.navigation li').index($(this)); // 找到激活的小点点;
        $(this).addClass('active').animate({ width: '30px', height: '30px' }, 100);
        // 只显示激活的小点点
        $carouselItems.hide();
        $($carouselItems.get(index)).show();
    }).mouseleave(function() {
        $(this).removeClass('active').animate({ width: '10px', height: '10px' });
        // 鼠标离开,旋转木马开始启动
        timmer = carousel();

    });


});