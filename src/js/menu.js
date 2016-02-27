function menu() {
    var  positionScroll = document.body.scrollTop;

    if (document.body.scrollTop !== 0) {
        console.log('ok');
        jQuery('.header-background').css('top', positionScroll);
    }
    jQuery('.header-background').toggle();
}
