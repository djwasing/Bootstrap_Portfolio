$(document).ready(function() {
    console.log("ready");
})

$(function() {
    $('a').click(function() {
        $('html, body').animate({
            scrollTop: $(this).attr("href").offset().top
        }, 800);
    });
});
