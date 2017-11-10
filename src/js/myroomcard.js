import util from './lib/util.js';
var jfLog = require('./tpl/jflog.tpl');
var app = {
    curpage: 1,
    pagekey: false,
    init(){
        var self = this;
        self.getUserInfo();
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
    /** 获取图形验证码 */
    getUserInfo: function(){
        var self = this;
        util.ajaxFun('/app/user/userInfo',{}).done(function(jdata){            
            if(jdata.code == 0){
                $('.js-fk').html(jdata.data.RC);
                $('.js-fk-jh').html(jdata.data.RC_JH);
            }
        })
    },
    /** 房卡明细 */
    getList: function(){
        var self = this;
        util.ajaxFun('/app/user/roomcardLog',{
            page: self.curpage
        }).done(function(jdata){
            if(jdata.code == 0){
                $('.js-card-list').append(jfLog({
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
        $('.js-lijijihuo').on('click', function(){
            $('.js-jihuo-center').removeClass('hide');
        })

        // 房卡模式
        $('.js-jihuo-center .cc-title-left').on('click', function(){
            $('.js-jihuo-center .cc-title').removeClass('right');
        });

        $('.js-jihuo-center .cc-title-right').on('click', function(){
            $('.js-jihuo-center .cc-title').addClass('right');
        });

        // 激活房卡
        $('.js-jihuo-now').on('click', function(){
            util.ajaxPost('/app/user/exchangeRC',{
                count: $('.js-jihuo-input').val(),
                type: $('.js-jihuo-center .cc-title').hasClass('right') ? '2' : '1'
            }).done((jdata)=>{
                if(jdata.code == 0){
                    util.windowToast(jdata.msg);
                    $('.js-jihuo-center').addClass('hide');
                    self.curpage = 1;
                    $('.js-card-list').html('');
                    self.getList();
                    self.getUserInfo();
                }
            })
        })

        // 窗口通用关闭
        $('.js-cc-close').on('click', function(){
            $(this).parents('.common-client-wrap').addClass('hide');
        });
    }

}

app.init();



