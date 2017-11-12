import util from './lib/util.js';
var billlogtpl = require('./tpl/billlog.tpl');
var app = {
    curpage: 1,
    pagekey: false,
    init(){
        var self = this;
        self.getList();
        $(window).scroll(function(){
        　　var scrollTop = $(this).scrollTop();
        　　var scrollHeight = $(document).height();
        　　var windowHeight = $(this).height();
            //console.log(scrollHeight,scrollTop,windowHeight);
        　　if(scrollHeight - scrollTop <= windowHeight + 10 && self.pagekey){
            self.getList();
            self.pagekey = false;
        　　}
        });
    },
    /** 获取图形验证码 */
    getList: function(){
        util.ajaxFun('/app/user/jbLogTotal',{}).done(function(jdata){            
            if(jdata.code == 0){
                $('.js-card-list').html(billlogtpl({
                    data: jdata.data.list
                }));
                if(jdata.data.list.length > 0){
                    $('.js-page-wrap').removeClass('c404');
                }
                if(self.curpage < jdata.data.page_count){
                    self.curpage = self.curpage * 1 + 1;
                    self.pagekey = true;
                }
            }
        })
    },

}

app.init();