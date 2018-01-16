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
}
if($("#fPhone")){
    $("#fPhone").mask("+7 (999) 999 99-99");
}
if($("#time")){
    var time = $("#time");
    var min = time.attr('data-min');
    var sec = time.attr('data-sec');
    var timer = setInterval(function () {
        sec--;
        var sec_pr,min_pr;
        if(sec==-1 && min != 0){min--;sec = 59;}
        if(sec < 10){sec_pr="0"+sec;
        }else{sec_pr = sec;}
        if(min < 10){min_pr="0"+min;
        }else{min_pr = min;}
        if(min == 0 && sec == 0){
            stopTimer();
        }
        time.html(min_pr+":"+sec_pr);
    },1000)

    function stopTimer() {
        clearInterval(timer)
    }
}