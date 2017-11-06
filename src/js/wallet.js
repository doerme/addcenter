import util from './lib/util.js';
var billlogtpl = require('./tpl/billlog.tpl');
var app = {
    init(){
        var self = this;
        //util.windowToast(1111);
        self.getUserInfo();
        self.bindEven();
    },
    /** 获取图形验证码 */
    getUserInfo: function(){
        util.ajaxFun('/app/user/userInfo',{}).done(function(jdata){            
            if(jdata.code == 0){
                $('.js-page-cover').attr({
                    src: jdata.data.headimgurl
                });
                $('.js-exchangejf').html(jdata.data.exchangeJF);
                $('.js-page-price').html(jdata.data.JB);
            }
        })
    },
    getLogList: function(){

    },
    bindEven: function(){
        //充值
        $('.js-cz-bt').on('click', function(){
            $('.js-chongzhi-center').removeClass('hide');
        });

        // 提现
        $('.js-tx-bt').on('click', function(){
            $('.js-tixian-center').removeClass('hide');
        });

        // 窗口通用关闭
        $('.js-cc-close').on('click', function(){
            $(this).parents('.common-client-wrap').addClass('hide');
        });
    }

}

app.init();