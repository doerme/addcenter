import util from './lib/util.js';
var msglist = require('./tpl/msglist.tpl');
var app = {
    curpage: 1,
    pagekey: false,
    init(){
        var self = this;
        self.getList();
        self.bindEven();
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
    /** 获取系统消息 */
    getList: function(){
        var self = this;
        util.ajaxFun('/app/user/message',{
            page: self.curpage
        }).done(function(jdata){
            if(jdata.code == 0){
                $('.js-msg-list').append(msglist({
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
        $('.js-msg-list').on('click', 'li', function(){
            $('.msg-detail-wrap-time').html($(this).data('time'));
            $('.msg-detail-wrap-msg').html($(this).data('msg'));
            $('.js-msg-detail').removeClass('hide');
        });
        
        $('.js-msg-detail').on('click', function(){
            $('.js-msg-detail').addClass('hide');
        });

        // 窗口通用关闭
        $('.js-cc-close').on('click', function(){
            $(this).parents('.common-client-wrap').addClass('hide');
        });
    }

}

app.init();



