/*TMODJS:{"version":19,"md5":"ee634d6665a012889761f3dd17a3b106"}*/
template("E:/wamp/www/Jeremy/panya/newweb/addcenter/src/js/tpl/msglist",function(a){"use strict";var b=this,c=(b.$helpers,b.$each),d=a.data,e=(a.v,a.i,b.$escape),f="";return c(d,function(a){f+=' <li data-time="',f+=e(a.created_at),f+='" data-msg="',f+=e(a.content),f+='"> <div class="msg-title ',f+="\u4f1a\u5458\u6d88\u606f"==a.type?" member ":"\u7cfb\u7edf\u6d88\u606f"==a.type?" sys ":" pay ",f+=' ">',f+=e(a.type),f+='</div> <div class="msg-detail">',f+=e(a.content),f+='</div> <div class="msg-bottom"> <span class="mb-time">',f+=e(a.created_at),f+='</span> <span class="mb-detail">\u67e5\u770b\u8be6\u60c5</span> </div> </li> '}),new String(f)});