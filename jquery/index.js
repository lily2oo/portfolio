

$(function () {
    $(".pc").each(function () {
        var $slides = $(this).find("img"),
            slideCount = $slides.length,
            currentIndex = 0;

        $slides.eq(currentIndex).fadeIn();

        setInterval(showNextSlide, 3500);

        function showNextSlide() {
            var nextIndex = (currentIndex + 1) % slideCount;
            $slides.eq(currentIndex).fadeOut();
            $slides.eq(nextIndex).fadeIn();
            currentIndex = nextIndex;
        }
    });
});
$(function () {
    $(".tab").each(function () {
        var $slides = $(this).find("img"),
            slideCount = $slides.length,
            currentIndex = 0;

        $slides.eq(currentIndex).fadeIn();

        setInterval(showNextSlide, 3500);

        function showNextSlide() {
            var nextIndex = (currentIndex + 1) % slideCount;
            $slides.eq(currentIndex).fadeOut();
            $slides.eq(nextIndex).fadeIn();
            currentIndex = nextIndex;
        }
    });
});
$(function () {
    $(".sp").each(function () {
        var $slides = $(this).find("img"),
            slideCount = $slides.length,
            currentIndex = 0;

        $slides.eq(currentIndex).fadeIn();

        setInterval(showNextSlide, 3500);

        function showNextSlide() {
            var nextIndex = (currentIndex + 1) % slideCount;
            $slides.eq(currentIndex).fadeOut();
            $slides.eq(nextIndex).fadeIn();
            currentIndex = nextIndex;
        }
    });
});
$(function()
{
	$( 'acdnmenu' ).click( function()
	{
		var target = $( this ).data( 'target' ) ;

		$( '#' + target ).slideToggle() ;

		return false ;
	} ) ;
}) ;
$(function(){
    $('.js-menu__item__link').each(function(){
        $(this).on('click',function(){
            $("+.submenu",this).slideToggle();
            return false;
        });
    });
});

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
