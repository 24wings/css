$(function() {
    var loadedNum = 0; //记录已经加载的图片
    var columns = $('.waterfull .bigDiv').toArray().length; // 瀑布流的列
    var timmer;

    // 加载图片
    function loadData() {
        $.ajax('data.json', {
            method: 'GET',
            success: function(rtn) {
                rtn.forEach(function(img) {
                    loadImage(img);
                });
            }
        });
    }

    // 瀑布流加载一张图片
    function loadImage(url) {
        // 判断加载到哪一个瀑布流列中
        var addToColumn = loadedNum % columns;
        $($('.waterfull .bigDiv').get(addToColumn)).append(
            `
    <div  class="box">
    <img src="${url}">
    <span>站长图片</span>
    </div>
    `
        );
        loadedNum++;
    }


    // 默认进来加载第一次数据
    loadData();

    // 滚动自动加载图片
    $(window).scroll(function() {
        // 文档的高度+屏幕的高度=文档划过的高度
        var documentBottom = $(window).height() + $(document).scrollTop();
        var documenHeight = $(document).height();

        if (documentBottom > documenHeight - 200) {
            clearTimeout(timmer);
            timmer = setTimeout(function() {
                loadData();
            }, 1000);
        }

    });

});