import util from './lib/util.js';
var app = {
    init(){
        var self = this;
        self.qrcodeInit();
    },
    /** 获取图形验证码 */
    qrcodeInit: function(){
        util.ajaxFun('/app/cqrcode',{

        }).done(function(jdata){            
            if(jdata.code == 0){
                
            }
        })
    },

}

app.init();