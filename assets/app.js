$(document).ready(function() {
    console.log("ready");
    $("a").click(function() {
        $("html, body").animate({
            scrollTop: $( $(this).attr("href") ).offset().top - 20 
        }, 1000);
        return false;
    });

})