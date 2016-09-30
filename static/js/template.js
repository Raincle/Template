$(function() {

    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    var contentState = "adverse";
    var introduceState = 0;
    var productState = 0;


    $('.btn').click(function() {
        $('.tipWrapper').css({display:'block'}).animate({opacity:1},'fast');
        //window.location.href = "https://taoquan.taobao.com/coupon/unify_apply.htm?sellerId=2986103280&activityId=27efdeb9e97b4f52854f6cf3da901d73";
    });

    $('.tipWrapper').click(function() {
        $(this).animate({opacity:0},'fast',function() {
            $(this).css({display:'none'})
        });
    });

});