$(document).ready(function(){
    
    $('#gnb>li').on('mouseover', function(){
        $(this).find(".sub").stop().slideDown()
    })
    $('#gnb>li').on('mouseleave', function(){
        $(this).find(".sub").stop().slideUp()
    })


    $("#notice>ul>li:nth-child(1)").on('click',function(){
        $('#popupBg').css('display','block')
    })
    $("button").on('click',function(){
        $('#popupBg').css('display','none')
    })

    setInterval(function(){
        $(".frame").animate({"top":"-100%"},1000,function(){
            $('.frame>li').eq(0).appendTo(".frame")
            $(".frame").css({top:0})
        })
        
    },3000)

})


