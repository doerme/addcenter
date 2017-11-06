import util from './lib/util.js';

var app = {
    init(){
        var self = this;
        //util.windowToast(1111);
        self.getUserInfo();
        self.bindEven();
    },
    /** refresh weichat */
    refreshWechat: function(){
        window.location.href = '/app/user/refresh';
        // util.ajaxFun('/app/user/refresh',{}).done((jdata)=>{

        // })
    },
    /** 获取图形验证码 */
    getUserInfo: function(){
        util.ajaxFun('/app/user/userInfo',{}).done(function(jdata){            
            if(jdata.code == 0){
                $('.js-avatar').attr({
                    src: jdata.data.headimgurl
                });
                $('.js-identifier').html(jdata.data.mid);
                $('.js-nickname').html(jdata.data.nickname);
                $('.js-jf-num').html(jdata.data.exchangeJF);
                $('.js-fans-num').html(jdata.data.fans);
                $('.js-jb-num').html(jdata.data.JB);
                $('.js-room-count').html(jdata.data.RC*1);
            }
        })
    },
    bindEven: function(){
        var self = this;
        // 刷新微信
        $('.js-refresh').on('click', function(){
            self.refreshWechat();
        });

        // 窗口通用关闭
        $('.js-cc-close').on('click', function(){
            $(this).parents('.common-client-wrap').addClass('hide');
        });

        // 去账单
        // $('.js-to-zhangdan').on('click', function(){
        //     window.location.href='billlog.html';
        // })

        // 去房卡
        // $('.js-to-fangka').on('click', function(){
        //     window.location.href='roomcard.html';
        // })

        // 去二维码
        // $('.js-to-qrcode').on('click', function(){
        //     window.location.href='qrcode.html';
        // })

        // 去粉丝列表
        $('.js-to-fans').on('click', function(){
            window.location.href='fans.html';
        })

        // 去钱包
        $('.js-to-wallet').on('click', function(){
            window.location.href='wallet.html';
        })

        // 去积分
        $('.js-to-jifen').on('click', function(){
            window.location.href='intergral.html';
        })
    }

}

app.init();