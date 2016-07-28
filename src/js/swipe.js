/**
 * Created by ducen on 16/7/25.
 */


var YangYiswipe = (function(){
    var html='';
    var pageSlider = null;
    var timer = null;
    var setTime = [];

    function swipe_0 () {

        _czc.push(["_trackEvent", "视屏播放", "状态",'第一屏']);

        $('#video .screen1 .box').addClass('animated');//边框动画

        var f1 = function () {
            var defer = $.Deferred();
            return setTimeAnimate([$('#video .screen1 .box .bak-img')],500,defer);
        };

        f1().then(function () {
            $('#video .screen1').siblings('.screen').find('img').removeClass('animated showpic');//边框动画

            var defer = $.Deferred();
            return setTimeAnimate([$('.screen1 .bak-top')],1500,defer);

        }).then(function () {
            var defer = $.Deferred();
            return setTimeAnimate([$('.screen1 .bak-bottom')],1500,defer);

        }).then(function () {
            var defer = $.Deferred();
            return setTimeAnimate([$('.screen1 .bak-bottom-logo')],1500,defer);

        }).then(function () {
            var defer = $.Deferred();
            return setTimeAnimate(null,3500,defer,1,true);

        });

    }
//视频第二屏动画
    function swipe_1(){
        _czc.push(["_trackEvent", "视屏播放", "状态",'第二屏']);

        $('#video .screen2 .box').addClass('animated');//边框动画
        var f1 = function () {
            var defer = $.Deferred();
            return setTimeAnimate([$('.screen2 .box .bak-img')],500,defer);

        };

        f1().then(function () {
            $('#video .screen2').siblings('.screen').find('img').removeClass('animated showpic');//边框动画

            var defer = $.Deferred();
            return setTimeAnimate([$('.screen2 .box .bak-top')],2000,defer);

        }).then(function () {
            var defer = $.Deferred();
            return setTimeAnimate(null,5000,defer,2,true);

        });
    }
//视频第三屏动画
    function swipe_2(){
        _czc.push(["_trackEvent", "视屏播放", "状态",'第三屏']);

        $('#video .screen3 .box').addClass('animated');//边框动画
        var f1 = function () {
            var defer = $.Deferred();
            return setTimeAnimate([$('.screen3 .box .bak-img')],500,defer);
        };

        f1().then(function () {
            $('#video .screen3').siblings('.screen').find('img').removeClass('animated showpic');//边框动画

            var defer = $.Deferred();
            return setTimeAnimate([$('.screen3 .box .bak-top')],2000,defer);

        }).then(function () {
            var defer = $.Deferred();
            return setTimeAnimate(null,5000,defer,3,true);

        });
    }
// 视频第四屏动画
    function swipe_3(){
        _czc.push(["_trackEvent", "视屏播放", "状态",'第四屏']);

        $('#video .screen4 .box').addClass('animated');//边框动画
        var f1 = function () {
            var defer = $.Deferred();
            return setTimeAnimate([$('.screen4 .box .bak-img')],500,defer);

        };

        f1().then(function () {
            $('#video .screen4').siblings('.screen').find('img').removeClass('animated showpic');//边框动画
            $('#video .screen5').siblings('.screen').find('a').removeClass('animated showpic');//边框动画

            var defer = $.Deferred();
            return setTimeAnimate([$('.screen4 .box .bak-top')],2000,defer);

        }).then(function () {
            var defer = $.Deferred();
            return setTimeAnimate(null,5000,defer,4,true);

        });
    }

// 视频动画第五屏

    function swipe_4() {
        _czc.push(["_trackEvent", "视屏播放", "状态",'第五屏']);

        // $('#video .screen5 .box').addClass('animated');//边框动画
        $('#video .screen5 .bak-img').height($('body').height()-208);//边框动画
        var f1 = function () {
            var defer = $.Deferred();
            return setTimeAnimate([$('.screen5 .box .bak-img'),$('.screen5 .box .bak-phone'),$('.screen5 .bak-box-bottom'),$('.screen5 .box-bottom')],500,defer);

        };

        f1().then(function () {
            $('#video .screen5').siblings('.screen').find('img').removeClass('animated showpic');//边框动画
            $('#video .screen5').siblings('.screen').find('a').removeClass('animated showpic');//边框动画

            var defer = $.Deferred();
            return setTimeAnimate([$('.screen5 .box .bak-likedance')],2000,defer);

        }).then(function () {
            var defer = $.Deferred();
            return setTimeAnimate([$('.screen5 .box .uploading')],2000,defer);


        }).then(function () {
            var defer = $.Deferred();
            return setTimeAnimate([$('.screen5 .box .bak-huihua')],2000,defer);
        }).then(function () {
            timer = setInterval(function(){
                $('.screen5 .uploading').removeClass('animated bounce');
               setTimeout(function () {
                   $('.screen5 .uploading').addClass('animated bounce');
               },3000);
            },2000);

        })
    }
    //初始化
    function init(index){

        removeVideo();
        html = '<section id="video" class="warp hide">';
        // 第一屏
        html += '<section class="screen screen1">' +
                    '<div class="box fadeInLeft">' +
                        '<img class="bak-top pulse" src="../img/'+index+'/page-4.png" alt="">' +
                        '<img class="bak-img fadeIn" src="../img/'+index+'/page-1.png" alt="">' +
                        '<img class="bak-bottom tada" src="../img/'+index+'/page-2.png" alt="">' +
                        '<img class="bak-bottom-logo fadeInRight" src="../img/'+index+'/page-3.png" alt="">' +
                    '</div>' +
                '</section>';
        // 第二屏
        html += '<section class="screen screen2">' +
                    '<div class="box flipInX">' +
                        '<img class="bak-top fadeInDown" src="../img/'+index+'/page-6.png" alt="">' +
                        '<img class="bak-img lightSpeedIn" src="../img/'+index+'/page-5.png" alt="">' +
                    '</div>' +
                '</section>';

        //第三屏

        html +='<section class="screen screen3">' +
                    '<div class="box fadeInDown">' +
                        '<img class="bak-top bounceInDown" src="../img/'+index+'/page-8.png" alt="">' +
                        '<img class="bak-img zoomIn" src="../img/'+index+'/page-7.png" alt=""> ' +
                    '</div>' +
                '</section>';
        //第四屏

        html +='<section class="screen screen4">' +
                    '<div class="box fadeInRight">' +
                        '<img class="bak-top fadeInLeft" src="../img/'+index+'/page-10.png" alt="">' +
                        '<img class="bak-img zoomIn" src="../img/'+index+'/page-9.png" alt="">' +
                    '</div>' +
                '</section>';

        //第五屏

        html +='<section class="screen screen5" >' +
                    '<div class="box flip">' +
                        '<img class="bak-img fadeInLeft" src="../img/'+index+'/page-11.png" alt="">' +
                        '<img class="bak-huihua zoomInRight" src="../img/'+index+'/page-12.png" alt="">' +
                        '<img class="bak-phone fadeInLeft" src="../img/'+index+'/page-14.png" alt="">' +
                        '<img class="bak-likedance bounce" src="../img/'+index+'/page-15.png" alt="">' +
                        '<a class="uploading bounce"  href="javascript:;">点击下载 <i>99广场舞手机版</i></a>' +
                        '<div class="box-bottom fadeInRight">' +
                            '<img class="bak-box-bottom fadeInRight" src="../img/'+index+'/page-13.png" alt="">' +
                        '</div>' +
                    '</div>' +
                '</section>';

        html += '</section>';



        $('#chat').after(html);

        pageSlider = new WxMoment.PageSlider({
            pages: $('.screen'),
            onSwipeUp: function () {
                if(this.index!==4){
                    cleartime();
                    eval("swipe_"+ (this.index+1).toString()+ "()");
                    this.next(); //下一屏
                }

            },
            onSwipeDown: function () {
                if(this.index!==0){
                    cleartime();
                    eval("swipe_"+ (this.index-1).toString()+ "()");
                    this.prev(); //上一屏
                }
            }
        });



       
    }

    //统一处理延迟动画
    function setTimeAnimate(arrEle,time,defer,index,bloon) {


        timer = setTimeout(function () {//老师图片背景出场

            if(bloon){
                pageSlider.next();
                eval("swipe_"+ index.toString()+ "()");
            }else{
                for(var i=0;i<arrEle.length;i++){
                    arrEle[i].addClass('showpic animated');
                    
                }
            }
            defer.resolve();
        }, time);

        setTime.push(timer);
        return defer.promise();
    }


    //删除所有定时器初始化
    function removeVideo(){
        pageSlider=null;
        $('#video').remove();
        //清除所有定时器
        cleartime();
    }


    //清除所有定时器
    function cleartime() {
        for (var i=0;i<setTime.length;i++){
            clearTimeout(setTime[i]);
        }
    }
    
    
    function startMuisc(){
        //第三屏音乐控制
        $('#music').css('display','block');
        $('.music_bg').css('display','block');
        $('.music_pic').css('animation','music 2s linear infinite');
        $('#music .aud')[0].play();

        //音乐控制结束
    }
    function stopMusic(){
        $('#music .aud')[0].pause();
        $('#music').css('display','none');
        $('.music_bg').css('display','none');
        $('.music_pic').css('animation','none');
    }
    
    function pauseMusic(){
        $('#music .aud')[0].pause();
        $('.music_bg').css('display','none');
        $('.music_pic').css('animation','none');
    }
    
    function beginMusic() {
        var music_sta = 1;
        startMuisc();

        $('#music').on('touchend',function(){
            if(music_sta==1){
                pauseMusic();
                music_sta=2;
            }else if(music_sta==2){
                startMuisc();
                music_sta = 1;
            }
        })

    }

    
    return {
        init:init,
        firstSwipe:swipe_0,
        removeVideo:removeVideo,
        startMuisc:startMuisc,
        pauseMusic:pauseMusic,
        beginMusic:beginMusic,
        stopMusic:stopMusic

    }
    
})();
