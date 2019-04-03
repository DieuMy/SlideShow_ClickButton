$(document).ready(function(){
    var stt = 0;
    var start = $('.slide img:first').attr("stt");//0
    var end = $('.slide img:last').attr("stt");//2
    $('.slide img').each(function(){
        if($(this).is(':visible'))
        {
            stt = $(this).attr("stt");
        }
    });
    $('#next').click(function(){
        if(stt == end)
        {
            stt = -1;
        }
        next = ++stt;
        $('.slide img').hide();
        $('.slide img').eq(next).show();
    });
    $('#prev').click(function(){
        if(stt == start)
        {
            stt = end;
            prev = stt++;
        }
        prev = --stt;
        $('.slide img').hide();
        $('.slide img').eq(prev).show();
    })
})