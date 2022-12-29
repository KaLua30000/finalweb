$(document).ready(function () {
    AOS.init();
    var w = $(window).width();
    var h = $(window).height();
    
    // 循環播放
    $(".owl-carousel").owlCarousel({
        loop: true, 
        margin: 10, // 外距 10px
        nav: false, // 顯示點點
        responsive: {
            0: {
                items: 1 // 螢幕大小為 0~600 顯示 1 個項目
            },
            720: {
                items: 3
            }
        }
    });

    //遮罩
    if(w<700)
        w*=3;
    $(".mask").mousemove(function (e) {
        $(".mask").css("-webkit-mask-position-x", e.pageX - 0.25 * w)
        $(".mask").css("mask-position-x", e.pageX - 0.25 * w)
        $(".mask").css("-webkit-mask-position-y", e.pageY - 0.25 * w)
        $(".mask").css("mask-position-y", e.pageY - 0.25 * w)
    })

    var flag = new Boolean(true);
    $(".CB").click(function (event) {
        if(flag){
            $(this).html("<br>收<br>回");
            $(".phonenav").addClass("PCani");
            $(".phonenav").removeClass("unPCani");
        }    
        else{
            $(this).html("<br>選<br>單");
            $(".phonenav").removeClass("PCani");
            $(".phonenav").addClass("unPCani");
        }
        flag = !flag;
    });


    



    //AOS
    document.addEventListener('aos:in', ({ detail }) => {
        console.log('animated in', detail);
      });
      
      document.addEventListener('aos:out', ({ detail }) => {
        console.log('animated out', detail);
      });
});
