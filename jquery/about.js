$(function () {
    var duration = 300;
    var $aside = $("aside");
    var $asidButton = $aside.find("button")
        .on("click", function () {
            $aside.toggleClass("open");
            if ($aside.hasClass("open")) {
                $aside.stop(true).animate({
                    left: "-70px"
                }, duration, "easeOutBack");
                $asidButton.find("img")
                    .attr("src", "sozai/menu/btn_close.png");
            } else {
                $aside.stop(true).animate({
                    left: "-250px"
                }, duration, "easeInBack");
                $asidButton.find("img")
                    .attr("src", "sozai/menu/btn_open.png");
            };
        });
});
