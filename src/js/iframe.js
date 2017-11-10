import util from './lib/util.js';
var app = {
    init(){
        var self = this;
        var url = util.getURLParam('ifuri');
        $('#main-iframe').attr({
            src: decodeURIComponent(url)
        })
        self.qrcodeInit();
    },
    /** 获取图形验证码 */
    qrcodeInit: function(){
        util.ajaxFun('/app/user/pagetitle',{

        }).done(function(jdata){            
            if(jdata.code == 0){
                document.title = jdata.data.title
            }
        })
    },

}

app.init();