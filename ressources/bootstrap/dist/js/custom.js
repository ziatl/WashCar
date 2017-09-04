jQuery(document).ready(function () {


    $('#carouselHacked').carousel();




    //this code is for smooth scroll and nav selector
    $(document).ready(function () {


        $(document).on("scroll", onScroll);

        //smoothscroll
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('a').each(function () {
                $(this).removeClass('active');
            });
            $(this).addClass('active');

            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top + 2
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });



    function onScroll(event) {


        var scrollPos = $(document).scrollTop();
        $('.navbar-default .navbar-nav>li>a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));

        });
    }






});
function fermerButton(){

    var menuItem = document.getElementById("btn_menu");

    $(".navbar-collapse").collapse('hide');

};




/*js logging*/



$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});
