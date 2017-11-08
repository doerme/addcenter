import util from './lib/util.js';
var billlogtpl = require('./tpl/billlog.tpl');
var listTop = require('./tpl/walletTop.tpl');
var listBottom = require('./tpl/walletBottom.tpl');
var app = {
    myjb: 0,
    curPayWay: 1,
    payNum: 0,
    init(){
        var self = this;
        //util.windowToast(1111);
        self.getUserInfo();
        self.bindEven();
    },
    /** 获取图形验证码 */
    getUserInfo: function(){
        var self = this;
        util.ajaxFun('/app/user/userInfo',{}).done(function(jdata){            
            if(jdata.code == 0){
                self.myjb = jdata.data.JB;
                $('.js-my-jb').html(self.myjb);
            }
        })
    },
    /** 普通支付 */
    goCommonPay: function(num, type){
        var self = this;
        util.ajaxFun('/app/user/roomcardOnly',{
            count: num,
            pay_way: type
        }).done((jdata)=>{
            if(jdata.code == 0){
                if(jdata.data.pay_url){
                    window.location.href = jdata.data.pay_url;
                }else{
                    util.windowToast(jdata.msg);
                }
            }
        })
    },
    /** 套餐支付 */
    goSetPay: function(id, type){
        var self = this;
        util.ajaxFun('/app/user/roomCardPay',{
            sp_id: id,
            pay_way: type
        }).done((jdata)=>{
            if(jdata.code == 0){
                if(jdata.data.pay_url){
                    window.location.href = jdata.data.pay_url;
                }else{
                    util.windowToast(jdata.msg);
                }
            }
        })
    },
    /** 购买房卡 */
    buyRoomCard: function(num, type){
        var self = this;
        if(self.myjb < num){
            $('.js-not-enought').removeClass('hide');
            $('.pay-way-bottom').addClass('disable');
        }else{
            $('.js-not-enought').addClass('hide');
            $('.pay-way-bottom').removeClass('disable');
        }
        $('.js-payway-selected').removeClass('hide');
        self.curPayWay = type;
        self.payNum = num;

    },
    bindEven: function(){
        var self = this;
        $('.js-buy-single').on('click', function(){
            self.buyRoomCard($('.js-buynum').val(), 1);
        });

        $('.roomcard-wrap-main li').on('click', function(){
            self.buyRoomCard($(this).data('pay'), $(this).data('id'));
        })

        // 微信支付
        $('.pay-way-top').on('click', function(){
            if(self.curPayWay == 1){
                self.goCommonPay(self.payNum, 1);
            }else{
                self.goSetPay(self.curPayWay, 1);
            }
        })

        // 积分支付
        $('.pay-way-bottom').on('click', function(){
            if(self.curPayWay == 1){
                self.goCommonPay(self.payNum, 2);
            }else{
                self.goSetPay(self.curPayWay, 2);
            }
        })

        // 窗口通用关闭
        $('.js-cc-close').on('click', function(){
            $(this).parents('.common-client-wrap').addClass('hide');
        });

        // 加数量
        $('.num-add-bt').on('click', function(){
            var tmpval = $('.js-buynum').val();
            if(isNaN(tmpval)){
                tmpval=0;
            }
            tmpval*=1;
            tmpval = tmpval * 1 + 10;
            $('.js-buynum').val(tmpval);
        })

        // 减数量
        $('.num-sub-bt').on('click', function(){
            var tmpval = $('.js-buynum').val();
            if(isNaN(tmpval)){
                tmpval=0;
            }
            if(tmpval > 0){
                tmpval-=10;
                if(tmpval < 0){
                    tmpval = 0; 
                }
                $('.js-buynum').val(tmpval);
            }
        })
    }

}

app.init();