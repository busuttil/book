jQuery(document).ready(function() {
    var bookJson = 'json/book.json',
        $ = jQuery,
        target = '.cta-macbook .index-modal';

    $(target).click(function() {
        var $modal = $('#myModal'),
            $header = $('.modal-header', $modal),
            $body = $('.modal-body', $modal),
            index = $('.cta-macbook .index-modal').index(this);

        $.getJSON(bookJson)
            .done(function(data) {
                $('h4', $header).text(data[index].title);
                $body.children().remove();
                $body.text(data[index].content);
                $body.prepend($('<img/>').attr('src', data[index].img));
            });
    });
});
