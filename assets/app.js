$(document).ready(function() {
    console.log("ready");
    $("#infoArea").click(function() {
        $("html, body").animate({
            scrollTop: $( $(this).attr("href") ).offset().top 
        }, 2000);
        return false;
    });

})

