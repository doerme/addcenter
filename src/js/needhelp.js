import util from './lib/util.js';
var app = {
    init(){
        var self = this;
        self.qrcodeInit();
    },
    /** 获取图形验证码 */
    qrcodeInit: function(){
        util.ajaxFun('/app/user/service',{

        }).done(function(jdata){            
            if(jdata.code == 0){
                $('.js-needhelp').attr({
                    src: jdata.data.url
                })
            }
        })
    },

}

app.init();