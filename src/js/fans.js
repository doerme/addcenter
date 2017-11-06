import util from './lib/util.js';
var fanlisttpl = require('./tpl/fanlist.tpl');
var app = {
    init(){
        var self = this;
        self.getFansList();
    },
    /** 获取图形验证码 */
    getFansList: function(){
        util.ajaxFun('/app/user/fansList',{}).done(function(jdata){            
            if(jdata.code == 0){
                $('.js-fans-list').html(fanlisttpl({
                    data: jdata.data.list
                }));
                if(jdata.data.list.length > 0){
                    $('.js-page-wrap').removeClass('fans404');
                }
            }
        })
    },

}

app.init();