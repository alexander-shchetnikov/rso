if ($('.answer input').length > 0) {
    $('.answer input').each(function () {
        $(this).bind('change',function () {
            $('.answer input').each(function () {
                if($(this).prop("checked")){
                    $(this).parent().addClass('answer--selected')
                }else{
                    $(this).parent().removeClass('answer--selected')
                }
            })
        })
    })
} else {
    // не существует
}