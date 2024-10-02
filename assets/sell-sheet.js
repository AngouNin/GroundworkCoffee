$( document ).ready(function() {

 

    $(document).on('click', '.sell-sheet__li', function() {
        var collectionHandle = $(this).attr('data-collection');
        $('.sell-sheet__li').removeClass('active');
        $(this).addClass('active');
        $('.sell-sheet__button').addClass('hide');
        $('.sell-sheet-'+collectionHandle).removeClass('hide');
        $('.product_content').addClass('hide');
        $('.product-'+collectionHandle).removeClass('hide');
    });
});