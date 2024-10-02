$( document ).ready(function() {

    $(document).on('change', '#select-sample', function() {
        var variantID = $(this).val();
        var button = $('.quick-add-samples');
        $(button).attr('data-variant-id', variantID); 
    });

    $(document).on('click','.quick-add-samples',function(){ 
        var ID = $(this).attr("data-variant-id"); 
        $.ajax({
            type: 'POST',
            url: '/cart/add.js',
            data: {
                quantity: 1,
                id: ID
            },
            dataType: 'json', 
            success: function (data) { 
                location.reload();    
            } 
        });
    }) 

});