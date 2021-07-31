$(document).ready(() => {
    $('#downArrow').on('click', () => {
        $('html, body').animate(
            {
                scrollTop: $('#partone').offset().top,
            },
            100
        );
    });

    // portfolio
    $('.gallery ul li a').on('click', (event) => {
        const itemID = $(event.currentTarget).attr('href');
        $(event.currentTarget).parent().parent().addClass('item_open'); //ul
        $(itemID).addClass('item_open');
        return false;
    });
    $('.close').on('click', () => {
        $('.port, .gallery ul').removeClass('item_open');
        return false;
    });
});
