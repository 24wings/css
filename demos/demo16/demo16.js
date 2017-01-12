$(function() {
    var $bigDivs = $('.waterfall .bigDiv');
    var columns = $bigDivs.toArray().length;
    var loadedImgs = 0;
    var timmer = null;

    function loadData() {
        $.ajax('data.json', {
            success: function(rtn) {
                console.log(rtn);
                rtn.forEach(img => loadImg(img));
            }
        });

    }

    function loadImg(img) {
        console.log(`加载${img}到${loadedImgs % columns}中`);
        $($bigDivs.get(loadedImgs % columns)).append(`
        <div class="box">
            <img   src="${img}">
            <span>站长素材</span>
        </div>
        `);
        loadedImgs++;
    }

    $(document).scroll(function() {
        // 文档底部高度 = 窗口高度+文档滚动高度
        var documentBottomHeight = $(window).height() + $(document.body).scrollTop();
        var documentHeight = $(document).height();


        // 距离底部200px
        if (documentBottomHeight > documentHeight - 200) {
            clearTimeout(timmer);
            timmer = setTimeout(loadData, 500);


        }


    });
    loadData();



})