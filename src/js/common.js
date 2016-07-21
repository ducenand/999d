/**
 * Created by ducen on 16/7/20.
 */
var fileBasePath = '/';
var myDate = new Date();

var obj = {
    'yangyi':{
        'name':'杨艺',
        'time':getNowFormatDate(),
        'huihua':{
            1:'你还好吗?',
            2:'最近跳广场舞了吗?',
            3:'我一直都把你当作我的朋友,因为我们都喜欢跳舞。喜欢跳舞就一定要坚持跳。我们其实有好多话想给你说,先看看下面的小视屏吧!',
            4:'<img src="../img/photo-1.jpg">'
        }
    },
    'gegewu':{
        'name':'格格巫',
        'time':getNowFormatDate(myDate.getTime()-100000),
        'huihua':{
            1:'我创作了新的舞蹈,不知道你喜欢吗?',
            2:'最近跳广场舞了吗?',
            3:'我一直都把你当作我的朋友,因为我们都喜欢跳舞。喜欢跳舞就一定要坚持跳。我们其实有好多话想给你说,先看看下面的小视屏吧!',
            4:'这里是视频'
        }
    },
    'meijiu':{
        'name':'美久',
        'time':getNowFormatDate(myDate.getTime()-200000),
        'huihua':{
            1:'东奔西走,很累,但一想到你,就很开心。发放萨芬 方式水电费萨芬 浮点数',
            2:'最近跳广场舞了吗?',
            3:'我一直都把你当作我的朋友,因为我们都喜欢跳舞。喜欢跳舞就一定要坚持跳。我们其实有好多话想给你说,先看看下面的小视屏吧!'
        }
    }
}
var fileList = [
    'img/add.png',
    'img/apply.png',
    'img/arrow-1.png',
    'img/arrow-2.png',
    'img/arrow-3.png',
    'img/arrow-5.png',
    'img/emo.png',
    'img/end.jpg',
    'img/hand.png',
    'img/head-liyifeng.jpg',
    'img/head-qqbrowser.jpg',
    'img/photo-1.jpg',
    'img/share.png',
    'img/video.jpg',
    'img/1.mp3',
    'img/2.mp3',
    'img/3.mp3',
    'img/4.mp3'
];

for (var i = 1; i <= 31; i++) {
    fileList.push( 'img/input1/' + i + '.jpg' );
};

for (var i = 1; i <= 40; i++) {
    fileList.push( 'img/input2/' + i + '.jpg' );
};
//资源加载
var loader = new WxMoment.Loader();

for (var i = 0; i < fileList.length; i++) {
    //添加资源
    loader.addImage(fileBasePath + fileList[i]);
}
//加载百分比
loader.addProgressListener(function (e) {
    $('#loading').css('display','block');
    var percent = Math.round((e.completedCount / e.totalCount) * 100);

});
//监听资源加载完成事件
loader.addCompletionListener(function () {

    setTimeout(function(){
        $('#loading').css('display','none');
        $('#im').addClass('show');
    },3000);
    
    // $('#im').addClass('show');
    // _hmt.push(['_trackEvent', '页面加载', '状态', '页面加载完成']);
});
// +++++++++所有图片资源加载完成+++++++++||

$(function() {
    //屏幕旋转提示
    new WxMoment.OrientationTip();
    //启动资源加载管理器
    loader.start();
    // _hmt.push(['_trackEvent', '页面加载', '状态', '页面加载开始']);

    autoHeight();
    //窗口变动修改一些页面的高度
    $(window).bind('resize',function(event){
        autoHeight();
    });

    var isAndroid = 0;

    var browser = {
        versions : function() {
            var u = navigator.userAgent,
                app = navigator.appVersion;
            return {
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 //android终端或uc浏览器
            };
        }()
    };
    if ( browser.versions.android ) {
        isAndroid = 1;
        $('#video-1').attr({'controls':'controls'});
    } else {
        $('body').addClass('animate');//body添加动画
    }

    //第一屏动态插入
    for(var key in obj){
        $('#im .main ul').append('<li class="'+key+'">' +
            '<div class="main-left">' +
                '<span>1</span>' +
                '<img src="../img/head-liyifeng.jpg" alt="">' +
            '</div>' +
            '<div class="main-right">' +
                '<h3>'+obj[key]['name']+'</h3>' +
                '<p>'+obj[key]['huihua'][1]+'</p>' +
                '<time>'+obj[key]['time']+'</time>' +
            '</div>' +
            '</li>');

    }
    //第一屏信息点击进入第二屏开始


    $('#im .main ul li').bind('touchend',function(event){
        event.preventDefault();

        $('#im').addClass('hide');
        $('#chat').addClass('show');
        
        var index = $(this).attr('class'),name=obj[index]['name'],html='',huihua=obj[index]['huihua'];

        $('#chat .time .name').text(name);
        //动态插入对话信息
        for(var k in huihua){
            if(k==1){
                html +='<li class="animated fadeIn" style="display:block;">\
                            <img src="../img/head-liyifeng.jpg" class="head">\
                            <div class="detail">\
                                <p>'+huihua[k]+'</p>\
                            </div>\
                        </li>';
            }else {
                html +='<li class="animated fadeIn">\
                            <img src="../img/head-liyifeng.jpg" class="head">\
                            <div class="detail">\
                                <p>'+huihua[k]+'</p>\
                            </div>\
                        </li>';
            }
        }

        $('#chat ul.list').append(html);

        $('#audio-chat')[0].play();
        //实现顺序弹出对话
        for(var i in huihua){
            showMessage(i);
        }


    });



    $('.btn-video').bind('touchend',function(event){
        event.preventDefault();
        $('#video-1')[0].currentTime = 0.5;
        $('#chat').addClass('hide');
        $('#video').addClass('show');
        if ( isAndroid == 1 ) {
            $('#video-1')[0].play();
        } else {
            setTimeout(function(){
                $('#video-1')[0].play();
            },500);
        }
        // _hmt.push(['_trackEvent', '视频', '状态', '视频开始']);
    });

    $('#end a.end-share').bind('touchend',function(event){
        event.preventDefault();
        $('#share').addClass('show');
        // _hmt.push(['_trackEvent', '按钮', '点击', '分享按钮']);
    });

    $('#share').bind('touchend',function(event){
        event.preventDefault();
        $('#share').addClass('hide');
        setTimeout(function(){
            $('#share').removeClass('show hide');
        },500);
        // _hmt.push(['_trackEvent', '按钮', '点击', '分享弹层']);
    });

})

//修改im主题高度----------------------------
function autoHeight() {
    var height = $('body').height();
    $('#im .main').height(height-193);
    $('#chat .scroll').height(height-94);
}
//格式化当前时间
function getNowFormatDate(otime) {
    console.log(otime);
    if(otime){
        var date = new Date(otime);
    }else{
        var date = new Date();
    }
    var minutes = date.getMinutes()
    if (minutes >= 0 && minutes <= 9) {
        minutes = "0" + minutes;
    }
    var currentdate =  date.getHours() + ':' + minutes;

    return currentdate;
}
//实现顺序弹出对话
function showMessage(i){
    setTimeout(function(){
        $('#audio-chat')[0].currentTime = 0;
        $('#audio-chat')[0].play();
        $('#chat .list li').eq(i).show();
        $('#chat .scroll').scrollTop( $('#chat .scroll')[0].scrollHeight );
    },2000*i);
}

// ---------------------------------

var fps = 1000 / 25;

function runIme1() {
    $('#audio-type')[0].play();
    $('#chat .ime .btn').addClass('show');
    runIme1Set = setInterval(runIme1Go,fps);
}

var runIme1Index = 1;

function runIme1Go() {
    var before = runIme1Index - 1;
    $('#chat .ime1 img.index-' + before).remove();
    runIme1Index++;
    $('#chat .ime1 img.index-' + runIme1Index).addClass('show');
    if ( runIme1Index == 31 ) {
        clearInterval(runIme1Set);
        $('#audio-type')[0].pause();
        $('#chat .ime .hand').addClass('show');
    };
}

function runIme2() {
    $('#chat .ime .btn').addClass('show');
    runIme2Set = setInterval(runIme2Go,fps);
}

var runIme2Index = 1;

function runIme2Go() {
    var before = runIme2Index - 1;
    $('#chat .ime2 img.index-' + before).remove();
    runIme2Index++;
    $('#chat .ime2 img.index-' + runIme2Index).addClass('show');
    if ( runIme2Index == 30 ) {
        $('#chat .ime .btn').removeClass('show');
    };
    if ( runIme2Index == 39 ) {
        clearInterval(runIme2Set);
        $('#audio-emo')[0].pause();
        $('#chat .ime .btn').addClass('show');
        $('#chat .ime .hand').addClass('show');
    };
}

function videoUpdate(event) {
    if ( event.currentTime >= 67.5 ) {
        $('#video').removeClass('show');
        $('#end').addClass('show');
        // _hmt.push(['_trackEvent', '视频', '状态', '视频结束']);
    }

}