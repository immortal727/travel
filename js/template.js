$(document).ready(function () {
    /* Открытие ссылки в текущей вкладке */
    
        $('.loc').click(function () {
            window.location = $(this).attr('data-ssil');
        });
    

    /*Открытие ссылки в новой вкладке: */
    
        $('.tar').click(function () {
            var ssilka = $(this).attr('data-ssil');
            window.open(ssilka, "_blank");
        });

    
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });
        $('#toTop').click(function () {
            $('body,html').animate({ scrollTop: 0 }, 800);
        });
    
    
});
