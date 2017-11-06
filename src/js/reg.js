import util from './lib/util.js';
var app = {
    init(){
        var self = this;
        self.qrcodeInit();
    },
    /** 获取图形验证码 */
    qrcodeInit: function(){
        util.ajaxFun('/app/user/getPicCaptcha',{}).done(function(jdata){            
            if(jdata.code == 0){
                $('.js-checkcode').attr({
                    src: jdata.data.pic_captcha,
                    session_id: jdata.data.session_id,
                })
            }
        })
    },

}

app.init();