/**
 * Created by ducen on 16/7/25.
 */


var YangYiswipe = (function(){
    var html='';
    var pageSlider = null;
    var timer = null;
    var setTime = [];

    function firstSwipe () {

        // pageSlider.moveTo(1);
        $('#video .screen1 .box').addClass('fadeInLeft');//边框动画

        var f1 = function () {
            var defer = $.Deferred();
            timer = setTimeout(function () {//老师图片背景出场
                $('#video .screen1 .box .bak-img').addClass('showpic zoomInLeft');

                // rm
                // $('#video .screen1 .box').removeClass('fadeInLeft');//边框动画

                defer.resolve();
            }, 500);
            setTime.push(timer);
            return defer.promise();
        };

        f1().then(function () {
            var defer = $.Deferred();

            timer = setTimeout(function() {//上部文字出场
                $('.screen1 .bak-top').addClass('showpic pulse');

                // rm
                // $('#video .box .bak-img').removeClass('showpic zoomInLeft');

                defer.resolve();
            },1500);
            setTime.push(timer);
            return defer.promise();
        }).then(function () {
            var defer = $.Deferred();

            timer = setTimeout(function() {//下部喜欢跳就跳出场
                $('.screen1 .bak-bottom').addClass('showpic tada');
                // rm
                // $('.bak-top').removeClass('pulse');

                defer.resolve();
            },1500);

            setTime.push(timer);
            return defer.promise();

        }).then(function () {
            var defer = $.Deferred();
            timer = setTimeout(function() {//99logo出场
                $('.screen1 .bak-bottom-logo').addClass('showpic bounceInDown');
                defer.resolve();
            },1500)

            setTime.push(timer);
            return defer.promise();

        }).then(function () {
            var defer = $.Deferred();
            timer = setTimeout(function() {//自动切换下一页
                pageSlider.next();
                secondSwipe();

                defer.resolve();
            },2500);
            setTime.push(timer);
            return defer.promise();

        });

    }
//视频第二屏动画
    function secondSwipe(){
        $('#video .screen2 .box').addClass('flipInX');//边框动画
        var f1 = function () {
            var defer = $.Deferred();
            timer = setTimeout(function () {//老师图片背景出场
                $('#video .screen2 .box .bak-img').addClass('showpic lightSpeedIn');

                defer.resolve();
            }, 2000);
            setTime.push(timer);
            return defer.promise();
        };

        f1().then(function () {
            var defer = $.Deferred();
            timer = setTimeout(function() {//上部文字出场
                $('.screen2 .bak-top').addClass('showpic rotateIn');

                defer.resolve();
            },2000);

            setTime.push(timer);
            return defer.promise();
        }).then(function () {
            var defer = $.Deferred();
            timer = setTimeout(function() {//自动切换下一页
                pageSlider.next();
                thirdlySwipe();
                defer.resolve();
            },4000);
            setTime.push(timer);
            return defer.promise();

        });
    }
//视频第三屏动画
    function thirdlySwipe(){
        $('#video .screen3 .box').addClass('fadeInDown');//边框动画
        var f1 = function () {
            var defer = $.Deferred();
            timer = setTimeout(function () {//老师图片背景出场
                $('#video .screen3 .box .bak-img').addClass('showpic zoomIn');

                defer.resolve();
            }, 2000);
            setTime.push(timer);
            return defer.promise();
        };

        f1().then(function () {
            var defer = $.Deferred();
            timer = setTimeout(function() {//上部文字出场
                $('.screen3 .bak-top').addClass('showpic bounceInDown');
                defer.resolve();
            },2000);
            setTime.push(timer);
            return defer.promise();
        }).then(function () {
            var defer = $.Deferred();
            timer = setTimeout(function() {//自动切换下一页
                pageSlider.next();
                fourthSwipe();
                defer.resolve();
            },4000);

            setTime.push(timer);
            return defer.promise();

        });
    }
// 视频第四屏动画
    function fourthSwipe(){
        $('#video .screen4 .box').addClass('fadeInRight');//边框动画
        var f1 = function () {
            var defer = $.Deferred();
            timer = setTimeout(function () {//老师图片背景出场
                $('#video .screen4 .box .bak-img').addClass('showpic slideInUp');

                defer.resolve();
            }, 2000);
            setTime.push(timer);
            return defer.promise();
        };

        f1().then(function () {
            var defer = $.Deferred();
            timer = setTimeout(function() {//上部文字出场
                $('.screen4 .bak-top').addClass('showpic fadeInLeft');
                defer.resolve();
            },2000);
            setTime.push(timer);

            return defer.promise();
        }).then(function () {
            var defer = $.Deferred();
            timer = setTimeout(function() {//自动切换下一页
                pageSlider.next();
                fifthSwipe();
                defer.resolve();
            },4000);
            setTime.push(timer);
            return defer.promise();

        });
    }

// 视频动画第五屏

    function fifthSwipe() {
        $('#video .screen5 .box').addClass('flip');//边框动画
        var f1 = function () {
            var defer = $.Deferred();
            timer = setTimeout(function () {//老师图片背景出场
                $('#video .screen5 .box .bak-img').addClass('showpic rollIn');

                defer.resolve();
            }, 2000);
            setTime.push(timer);
            return defer.promise();
        };

        f1().then(function () {
            var defer = $.Deferred();
            timer = setTimeout(function() {//说话
                $('.screen5 .bak-huihua').addClass('showpic zoomInRight');
                defer.resolve();
            },2000);
            setTime.push(timer);
            return defer.promise();
        }).then(function () {
            var defer = $.Deferred();
            timer = setTimeout(function() {//说话
                $('.screen5 .bak-phone').addClass('showpic fadeInLeft');
                $('.screen5 .bak-box-bottom').addClass('showpic fadeInRight');
                defer.resolve();
            },2000);
            setTime.push(timer);
            return defer.promise();
        }).then(function () {
            var defer = $.Deferred();
            timer = setTimeout(function() {//自动切换下一页
                $('.screen5 .uploading').addClass('showbutton bounce');

                defer.resolve();
            },2000);
            setTime.push(timer);
            return defer.promise();

        }).then(function () {
            var defer = $.Deferred();
            timer = setTimeout(function() {//自动切换下一页
                setInterval(function(){
                    $('.screen5 .uploading').removeClass('bounce');

                },1000);
                setInterval(function(){
                    $('.screen5 .uploading').addClass('bounce');
                },3000);
                defer.resolve();
            },2000);
            setTime.push(timer);

        })
    }
    //初始化
    function init(){

        removeVideo();
        html = '<section id="video" class="warp hide">';
        // 第一屏
        html += '<section class="screen screen1" data-lock-next="true" data-lock-prev="true">' +
                    '<div class="box animated">' +
                        '<img class="bak-top animated" src="../img/yangyi/page-4.png" alt="">' +
                        '<img class="bak-img animated" src="../img/yangyi/page-1.png" alt="">' +
                        '<img class="bak-bottom animated" src="../img/yangyi/page-2.png" alt="">' +
                        '<img class="bak-bottom-logo animated" src="../img/yangyi/page-3.png" alt="">' +
                    '</div>' +
                '</section>';
        // 第二屏
        html += '<section class="screen screen2" data-lock-next="true" data-lock-prev="true">' +
                    '<div class="box animated">' +
                        '<img class="bak-top animated" src="../img/yangyi/page-6.png" alt="">' +
                        '<img class="bak-img animated" src="../img/yangyi/page-5.png" alt="">' +
                    '</div>' +
                '</section>';

        //第三屏

        html +='<section class="screen screen3" data-lock-next="true" data-lock-prev="true">' +
                    '<div class="box animated">' +
                        '<img class="bak-top animated" src="../img/yangyi/page-8.png" alt="">' +
                        '<img class="bak-img animated" src="../img/yangyi/page-7.png" alt=""> ' +
                    '</div>' +
                '</section>';
        //第四屏

        html +='<section class="screen screen4" data-lock-next="true" data-lock-prev="true">' +
                    '<div class="box animated">' +
                        '<img class="bak-top animated" src="../img/yangyi/page-10.png" alt="">' +
                        '<img class="bak-img animated" src="../img/yangyi/page-9.png" alt="">' +
                    '</div>' +
                '</section>';

        //第五屏

        html +='<section class="screen screen5" data-lock-next="true" data-lock-prev="true">' +
                    '<div class="box animated">' +
                        '<img class="bak-img animated" src="../img/yangyi/page-11.png" alt="">' +
                        '<img class="bak-huihua animated" src="../img/yangyi/page-12.png" alt="">' +
                        '<img class="bak-phone animated" src="../img/yangyi/page-14.png" alt="">' +
                        '<a class="uploading animated" href="">点击下载 <i>99广场舞手机版</i></a>' +
                        '<div class="box-bottom">' +
                            '<img class="bak-box-bottom animated" src="../img/yangyi/page-13.png" alt="">' +
                        '</div>' +
                    '</div>' +
                '</section>';

        html += '</section>';



        $('#chat').after(html);

        pageSlider = new WxMoment.PageSlider({
            pages: $('.screen')
        });
       
    }
    //删除所有定时器初始化
    function removeVideo(){
        pageSlider=null;
        $('#video').remove();
        //清除所有定时器
        for (var i=0;i<setTime.length;i++){
            clearTimeout(setTime[i]);
        }
    }
    
    return {
        init:init,
        firstSwipe:firstSwipe,
        removeVideo:removeVideo
    }
    
})();
