import util from './lib/util.js';
var jfLog = require('./tpl/jflog.tpl');
var app = {
    curpage: 1,
    pagekey: false,
    init(){
        var self = this;
        self.getUserInfo();
        self.bindEven();
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
        util.ajaxFun('/app/user/jfLog',{
            page: self.curpage
        }).done(function(jdata){
            if(jdata.code == 0){
                $('.js-card-list').html(jfLog({
                    data: jdata.data.list
                }));
                if(jdata.data.list.length > 0){
                    $('.js-img-list').removeClass('c404');
                }
                if(self.curpage < jdata.data.page_count){
                    self.curpage = self.curpage * 1 + 1;
                    self.pagekey = true;
                }
            }
        });
    },
    bindEven: function(){
        var self = this;
        $('.js-lijizhuanchu').on('click', function(){
            util.ajaxFun('/app/user/exchangeJF',{}).done((jdata)=>{
                self.getList();
            })
        })
    }

}

app.init();