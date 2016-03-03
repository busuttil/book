function menu() {
    var  positionScroll = document.body.scrollTop,
        $ = jQuery;

    if (document.body.scrollTop !== 0) {
        console.log('ok');
        $('.header-background').css('top', positionScroll);
    }
    $('.header-background').toggle();
}
