$(function() {
    var demos = 28;
    for (var i = 0; i < demos; i++) {
        $('.demos').append(`<li></li><a href="demos/demo${i+1}/demo${i+1}.html" >demo${i+1}</a></li>`);
    }
});