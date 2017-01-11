$('.menu').mouseenter(function() {
    // debugger;
    $(this).find('dd').show();
}).mouseleave(function() {
    $(this).find('dd').hide();
})