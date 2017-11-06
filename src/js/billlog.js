import util from './lib/util.js';
var billlogtpl = require('./tpl/billlog.tpl');
var app = {
    init(){
        var self = this;
        self.getBillList();
    },
    /** 获取图形验证码 */
    getBillList: function(){
        util.ajaxFun('/app/user/jbLog',{}).done(function(jdata){            
            if(jdata.code == 0){
                $('.js-card-list').html(billlogtpl({
                    data: jdata.data.list
                }));
                if(jdata.data.list.length > 0){
                    $('.js-page-wrap').removeClass('c404');
                }
            }
        })
    },

}

app.init();