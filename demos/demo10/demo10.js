$(function() {
    var activeItem = 0;
    var $carouselItems = $('#carousel .item');
    var carouselLength = $carouselItems.toArray().length; //轮播条幅数

    // 轮播图,默认隐藏除第一个轮播外所有轮播
    // $carouselItems.not(':first').hide();

    function carousel() {
        return setInterval(function() {
            // 拿到所有轮播
            $carouselItems.hide(); // 先隐藏所有轮播
            $($carouselItems.get(activeItem)).show().css({ 'margin-left': '0' }).animate({ 'margin-left': '600px' }, 100, function() {
                $(this).css({ 'margin-left': '0px' }).hide();
            });
            $($carouselItems.get(++activeItem)).show().css({ 'margin-left': '-600px' }).animate({ 'margin-left': '0px', 'margin-right': '0px' }, 100);
            activeItem = activeItem > carouselLength - 2 ? 0 : activeItem; // 轮播归0

        }, 2000);
    }


    //旋转轮播
    // var timer;
    var timmer = carousel();


    $('.navigation li').mouseenter(function() {
        // 进入小点点,就不轮播了
        clearInterval(timmer);
        var index = $('.navigation li').index($(this)); // 找到激活的小点点;
        $(this).addClass('active');
        // 只显示激活的小点点
        $carouselItems.hide();
        $($carouselItems.get(index)).show();
        console.log(index);
    }).mouseleave(function() {
        $(this).removeClass('active');
        // 鼠标离开,旋转木马开始启动
        timmer = carousel();
    });
});