import util from './lib/util.js';
var billlogtpl = require('./tpl/billlog.tpl');
var listTop = require('./tpl/walletTop.tpl');
var listBottom = require('./tpl/walletBottom.tpl');
var app = {
    init(){
        var self = this;
        //util.windowToast(1111);
        self.getUserInfo();
        self.getLogList();
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
        util.ajaxFun('/app/user/jbLog',{}).done((jdata)=>{
            if(jdata.code == 0){
               $('.js-wallet-list-top').html(listTop({
                   data: jdata.data.list.tx
               }));
               $('.js-wallet-list').html(listBottom({
                    data: jdata.data.list.dd
               })); 
            }
        })
    },
    bindEven: function(){
        var self = this;
        //充值
        $('.js-cz-bt').on('click', function(){
            $('.js-chongzhi-center').removeClass('hide');
        });

        $('.js-chongzhi-num').on('click', function(){
            util.ajaxPost('/app/user/zsPay',{
                price: $('.js-jiaoyi-num').val()
            }).done((jdata)=>{
                if(jdata.code == 0){
                    window.location.href = jdata.data.pay_url;
                    
                }
            })
        })



        // 提现
        $('.js-tx-bt').on('click', function(){
            $('.js-tixian-center').removeClass('hide');
        });

        $('.js-tixian-num').on('click', function(){
            if(isNaN($('.js-jiaoyi-num2').val()) || $('.js-jiaoyi-num2').val()*1 < 1){
                util.windowToast('请输入正确数量');
                return;
            }
            util.ajaxPost('/app/user/apply_cash',{
                jb: $('.js-jiaoyi-num2').val()
            }).done((jdata)=>{
                if(jdata.code == 0){
                    util.windowToast(jdata.msg);
                    $('.js-tixian-center').addClass('hide');
                    self.getUserInfo();
                    self.getLogList();
                }
            })
        })

        // 窗口通用关闭
        $('.js-cc-close').on('click', function(){
            $(this).parents('.common-client-wrap').addClass('hide');
        });
    }

}

app.init();