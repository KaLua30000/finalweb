$(document).ready(function () {
    AOS.init();
    $(".container").fadeOut(0);
    $(".container").fadeIn(500);

    var flag = new Boolean(true);
    $(".CB").click(function (event) {
        if (flag) {
            $(this).html("<br>收<br>回");
            $(".phonenav").addClass("PCani");
            $(".phonenav").removeClass("unPCani");
        }
        else {
            $(this).html("<br>選<br>單");
            $(".phonenav").removeClass("PCani");
            $(".phonenav").addClass("unPCani");
        }
        flag = !flag;
    });

    //news
    $(".sidenavchild.newsU").click(function (event) {
        $(".news").hide(); $(".newsU").show();
    });
    $(".sidenavchild.newsN").click(function (event) {
        $(".news").hide(); $(".newsN").show();
    });
    $(".sidenavchild.newsR").click(function (event) {
        $(".news").hide(); $(".newsR").show();
    });
    $(".sidenavchild.newsT").click(function (event) {
        $(".news").hide(); $(".newsT").show();
    });
    $(".sidenavchild.newsAll").click(function (event) {
        $(".news").show();
    });

    $(".news").click(function (event) {
        if ($(".news").hasClass('autohight')){
            $(".news").removeClass("autohight");
        }else{
            $(".news").removeClass("autohight");
            $(this).addClass("autohight");
        }
    });


    //others
    $(".a1").click(function (event) {
        $(".authorinfo").html("韓式蔬菜煎餅好好吃好想睡覺好想打破曉傳奇<br>最新消息不小心打太多，這裡不知道要打什麼<br>電話：3345678<br>ail：MOS7414@gmail.com ");
    });
    $(".a2").click(function (event) {
        $(".authorinfo").html("待補");
    });
});
