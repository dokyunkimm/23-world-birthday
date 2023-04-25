$(document).ready(function() {
    var wndOtrW = $(window).outerWidth();
    var wndOtrH = $(window).outerHeight();
    var scrlTp = $(window).scrollTop();
    var mobMde = wndOtrW > 768 ? false : true;
    var ltrFlg = true;

    $(window).resize(function() {
        wndOtrW = $(window).outerWidth();
        wndOtrH = $(window).outerHeight();
        scrlTp = $(window).scrollTop();
        mobMde = wndOtrW > 768 ? false : true;
        kwqVdoIntRmv();
    });
    
    $(window).scroll(function() {
        wndOtrW = $(window).outerWidth();
        wndOtrH = $(window).outerHeight();
        scrlTp = $(window).scrollTop();
        mobMde = wndOtrW > 768 ? false : true;
        kwqVdoIntRmv();
    });

    function kwqVdoIntRmv(){
        if(mobMde){
            $('#kwqBthdyMainWrp .kwqVdoSct .kwqVdoInr .kwqVdoBg').removeClass('fadeUp active');
        } else {
            $('#kwqBthdyMainWrp .kwqVdoSct .kwqVdoInr .kwqVdoBg').addClass('fadeUp');
        }
    }

    function kwqMainFdeIn(){
        const kwqMnWrp = $('#kwqBthdyMainWrp');
        kwqMnWrp.css({
            'opacity' : '1',
            'transition' : 'opacity 1s'
        });
        setTimeout(function() {
            kwqMnWrp.removeAttr('style');
        }, 900);
    }


    // 꽃가루 효과
    function reAction() {
        $("#startButton").trigger("click");
        setTimeout(function(){
            $("#stopButton").trigger("click");
        }, 6000);
    }
    reAction();

    
    if(ltrFlg){
        ltrFlg = false;
        function ltrClk(){
            setTimeout(function() {
                $('#kwqBthdyIntrWrp .kwqEvl .jsOpnBtn').trigger('click');        
            }, 2500);
        }
        ltrClk();
    }
    $('#kwqBthdyIntrWrp .kwqIntroLtrSct .jsOpnBtn').click(function(e) {
        e.preventDefault();
        $('.kwqEvl').addClass('on');
        // $('#kwqBthdyIntrWrp .kwqIntroLtrSct .kwqLtrInr').css({'margin-top' : ($('#kwqBthdyIntrWrp .kwqEvl .kwqEvlTp > div').outerHeight() / 2) + 'px'});
        let trgtLnk = $(this).attr('href');
        setTimeout(function() {
            window.location.href = trgtLnk;
        }, 1500);
        setTimeout(function() {
            $('#kwqBthdyIntrWrp').css({
                'opacity' : '0',
                'transition' : 'opacity 0.5s'
            })
        }, 1000);
    });

    kwqMainFdeIn();
    kwqVdoIntRmv();
    
   

});

