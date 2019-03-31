$(document).ready(() => {

    $(".card-item-img").on("click", function() {
        $(".card-item-img").removeClass("border-primary");
        $(this).addClass("border-primary");
        $("#card-img-display").attr("src", $(this).find("img").attr("src"));
    });

});