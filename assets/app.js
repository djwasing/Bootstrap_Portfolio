$(document).ready(function() {
    console.log("ready");
    $("a").click(function() {
        $("html, body").animate({
            scrollTop: $( $(this).attr("href") ).offset().top 
        }, 2 000);
        return false;
    });

})

