import util from './lib/util.js';
var jfLog = require('./tpl/jflog.tpl');
var app = {
    init(){
        var self = this;
        self.getUserInfo();
        self.bindEven();
        self.getList();
    },
    /** 获取图形验证码 */
    getUserInfo: function(){
        util.ajaxFun('/app/user/userInfo',{}).done(function(jdata){            
            if(jdata.code == 0){
                $('.js-jf').html(jdata.data.JF);
                $('.js-exchangejf').html(jdata.data.exchangeJF);
            }
        })
    },
    /** 积分明细 */
    getList: function(){
        util.ajaxFun('/app/user/jfLog',{}).done(function(jdata){
            if(jdata.code == 0){
                $('.js-card-list').html(jfLog({
                    data: jdata.data.list
                }));
                if(jdata.data.list.length > 0){
                    $('.js-img-list').removeClass('c404');
                }
            }
        });
    },
    bindEven: function(){
        var self = this;
        $('.js-lijizhuanchu').on('click', function(){
            util.ajaxFun('/app/user/exchangeJF',{}).done((jdata)=>{

            })
        })
    }

}

app.init();